<template>
  <div ref="containerRef" class="cad-viewport-container" />
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CadBody } from '../lib/types';

const props = defineProps<{
  bodies: CadBody[];
}>();

const containerRef = ref<HTMLDivElement | null>(null);
const sceneRef = ref<THREE.Scene | null>(null);
const cameraRef = ref<THREE.OrthographicCamera | null>(null);
const rendererRef = ref<THREE.WebGLRenderer | null>(null);
const controlsRef = ref<OrbitControls | null>(null);
const gridRef = ref<THREE.GridHelper | null>(null);
const hemiLightRef = useRef<THREE.HemisphereLight | null>(null);
const meshesMapRef = ref<Map<string, THREE.Mesh>>(new Map());
const needsRenderRef = ref<boolean>(true);
const reqIdRef = ref<number | null>(null);

function useRef<T>(initialValue: T) {
  return ref<T>(initialValue);
}

function detectNextcloudDarkMode(): boolean {
  return (
    document.documentElement.getAttribute('data-theme') === 'dark' ||
    document.body.classList.contains('theme--dark') ||
    document.body.classList.contains('theme-dark') ||
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
}

function updateThemeColors(isDark: boolean) {
  if (sceneRef.value) {
    sceneRef.value.background = new THREE.Color(isDark ? '#0f172a' : '#f1f5f9');
  }
  if (gridRef.value) {
    (gridRef.value.material as THREE.Material).dispose();
    gridRef.value.material = new THREE.LineBasicMaterial({
      color: isDark ? 0x334155 : 0x94a3b8,
      transparent: true,
      opacity: isDark ? 0.6 : 0.4,
    });
  }
  if (hemiLightRef.value) {
    hemiLightRef.value.groundColor.setHex(isDark ? 0x64748b : 0xe2e8f0);
  }
  needsRenderRef.value = true;
}

let themeObserver: MutationObserver | null = null;

onMounted(() => {
  const container = containerRef.value;
  if (!container) return;

  const width = container.clientWidth || 800;
  const height = container.clientHeight || 600;
  const aspect = width / height;

  const scene = new THREE.Scene();
  sceneRef.value = scene;

  // Fixed Orthographic Camera for pure CAD orthographic view
  const orthoCamera = new THREE.OrthographicCamera(-aspect, aspect, 1, -1, -500, 1000);
  orthoCamera.position.set(0.2, 0.2, 0.25);
  cameraRef.value = orthoCamera;

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
    logarithmicDepthBuffer: true,
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  rendererRef.value = renderer;
  container.appendChild(renderer.domElement);

  // Flat studio lighting without harsh cast shadows
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);

  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x64748b, 0.9);
  hemiLight.position.set(0, 20, 0);
  scene.add(hemiLight);
  hemiLightRef.value = hemiLight;

  const keyLight = new THREE.DirectionalLight(0xffffff, 1.1);
  keyLight.position.set(10, 10, 10);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xe0e7ff, 0.5);
  fillLight.position.set(6, 10, 8);
  scene.add(fillLight);

  const backLight = new THREE.DirectionalLight(0xf1f5f9, 0.4);
  backLight.position.set(-8, -4, -8);
  scene.add(backLight);

  // Subtle grid
  const grid = new THREE.GridHelper(1, 20, 0x334155, 0x1e293b);
  grid.position.y = -0.001;
  scene.add(grid);
  gridRef.value = grid;

  // OrbitControls with cursor-centered zoom & smooth damping
  const controls = new OrbitControls(orthoCamera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.screenSpacePanning = true;
  controls.zoomToCursor = true;
  controlsRef.value = controls;

  controls.addEventListener('change', () => {
    needsRenderRef.value = true;
  });

  // Dynamic resolution scaling during drag
  controls.addEventListener('start', () => {
    renderer.setPixelRatio(1.0);
  });
  controls.addEventListener('end', () => {
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    needsRenderRef.value = true;
  });

  // Initialize theme synchronization
  updateThemeColors(detectNextcloudDarkMode());
  themeObserver = new MutationObserver(() => {
    updateThemeColors(detectNextcloudDarkMode());
  });
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'class'] });
  themeObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });

  // Render on-demand loop
  const animate = () => {
    reqIdRef.value = requestAnimationFrame(animate);
    const controlsMoved = controls.update();
    if (controlsMoved || needsRenderRef.value) {
      needsRenderRef.value = false;
      renderer.render(scene, orthoCamera);
    }
  };
  animate();

  // ResizeObserver
  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const { width: w, height: h } = entry.contentRect;
      if (w > 0 && h > 0 && rendererRef.value && cameraRef.value) {
        const asp = w / h;
        const cam = cameraRef.value;
        const hDist = cam.top - cam.bottom;
        const halfW = (hDist * asp) / 2;
        cam.left = -halfW;
        cam.right = halfW;
        cam.updateProjectionMatrix();
        rendererRef.value.setSize(w, h);
        needsRenderRef.value = true;
      }
    }
  });
  resizeObserver.observe(container);

  updateBodies();
});

function fitCameraToBox(box: THREE.Box3) {
  const cam = cameraRef.value;
  const controls = controlsRef.value;
  const container = containerRef.value;
  if (!cam || !controls || !container) return;

  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());
  const maxDim = Math.max(size.x, size.y, size.z);
  if (maxDim === 0) return;

  const aspect = container.clientWidth / container.clientHeight;
  const distance = maxDim * 1.8;

  const halfH = distance / 2;
  const halfW = halfH * aspect;

  cam.left = -halfW;
  cam.right = halfW;
  cam.top = halfH;
  cam.bottom = -halfH;
  cam.near = -distance * 10;
  cam.far = distance * 20;
  cam.zoom = 1;
  cam.updateProjectionMatrix();

  const dir = new THREE.Vector3(1, 1, 1).normalize();
  cam.position.copy(center).addScaledVector(dir, distance);
  controls.target.copy(center);
  controls.minDistance = Math.max(distance / 250, 0.0002);
  controls.maxDistance = distance * 20;
  controls.update();

  if (gridRef.value) {
    gridRef.value.position.y = box.min.y - 0.0001;
    const gridScale = Math.max(Math.max(size.x, size.z) * 3, 0.01);
    gridRef.value.scale.set(gridScale, gridScale, gridScale);
  }
}

function updateBodies() {
  const scene = sceneRef.value;
  if (!scene) return;

  // Clear previous meshes
  meshesMapRef.value.forEach((mesh) => {
    scene.remove(mesh);
    if (Array.isArray(mesh.material)) {
      mesh.material.forEach((m) => m.dispose());
    } else {
      mesh.material.dispose();
    }
  });
  meshesMapRef.value.clear();

  if (!props.bodies || props.bodies.length === 0) {
    needsRenderRef.value = true;
    return;
  }

  const sceneBox = new THREE.Box3();

  props.bodies.forEach((body) => {
    const colorHex = parseInt(body.metadata.color.replace('#', ''), 16) || 0x8faf8f;
    const baseOpacity = body.metadata.opacity ?? 1;
    const isSemiTransparent = baseOpacity < 0.99;

    // Authentic CAD material with metalness: 0.0 for faithful original color reproduction
    const material = new THREE.MeshStandardMaterial({
      color: colorHex,
      roughness: 0.38,
      metalness: 0.0,
      transparent: isSemiTransparent,
      opacity: baseOpacity,
      depthWrite: baseOpacity >= 0.95,
      side: THREE.DoubleSide, // Always DoubleSide so STL/PLY meshes with inverted normals are never culled
      polygonOffset: true,
      polygonOffsetFactor: 1,
      polygonOffsetUnits: 1,
    });

    const mesh = new THREE.Mesh(body.geometry, material);
    mesh.name = body.metadata.id;

    if (body.metadata.transform && body.metadata.transform.length === 16) {
      const mat = new THREE.Matrix4().fromArray(body.metadata.transform);
      mesh.applyMatrix4(mat);
    }

    // Add wireframe edge lines
    if (body.edgeGeometry) {
      const edgeMat = new THREE.LineBasicMaterial({
        color: 0x0f172a,
        linewidth: 1,
        transparent: false,
        depthTest: true,
      });
      const edges = new THREE.LineSegments(body.edgeGeometry, edgeMat);
      mesh.add(edges);
    }

    scene.add(mesh);
    meshesMapRef.value.set(body.metadata.id, mesh);

    mesh.geometry.computeBoundingBox();
    if (mesh.geometry.boundingBox) {
      const b = mesh.geometry.boundingBox.clone();
      b.applyMatrix4(mesh.matrix);
      sceneBox.union(b);
    }
  });

  if (!sceneBox.isEmpty()) {
    fitCameraToBox(sceneBox);
  }

  needsRenderRef.value = true;
}

watch(() => props.bodies, () => {
  updateBodies();
}, { deep: true });

onBeforeUnmount(() => {
  if (themeObserver) {
    themeObserver.disconnect();
  }
  if (reqIdRef.value) {
    cancelAnimationFrame(reqIdRef.value);
  }
  controlsRef.value?.dispose();
  rendererRef.value?.dispose();
  gridRef.value?.geometry.dispose();
  (gridRef.value?.material as THREE.Material)?.dispose();
});
</script>

<style scoped>
.cad-viewport-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  user-select: none;
}
</style>
