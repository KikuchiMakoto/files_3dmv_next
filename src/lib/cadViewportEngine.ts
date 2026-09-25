import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CadBody } from './types';

export interface CadViewportInstance {
  dispose: () => void;
  updateBodies: (bodies: CadBody[]) => void;
  fitToScreen: () => void;
}

function detectNextcloudDarkMode(): boolean {
  if (typeof document === 'undefined') return true;
  return (
    document.documentElement.getAttribute('data-theme') === 'dark' ||
    document.body.classList.contains('theme--dark') ||
    document.body.classList.contains('theme-dark') ||
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
}

export function createCadViewport(container: HTMLElement): CadViewportInstance {
  const width = container.clientWidth || 800;
  const height = container.clientHeight || 600;
  const aspect = width / height;

  const scene = new THREE.Scene();

  // Fixed Orthographic Camera for pure CAD orthographic view
  const orthoCamera = new THREE.OrthographicCamera(-aspect, aspect, 1, -1, -500, 1000);
  orthoCamera.position.set(0.2, 0.2, 0.25);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
    logarithmicDepthBuffer: true,
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.appendChild(renderer.domElement);

  // Flat studio lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
  scene.add(ambientLight);

  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x64748b, 0.9);
  hemiLight.position.set(0, 20, 0);
  scene.add(hemiLight);

  const keyLight = new THREE.DirectionalLight(0xffffff, 1.1);
  keyLight.position.set(10, 10, 10);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xe0e7ff, 0.55);
  fillLight.position.set(6, 10, 8);
  scene.add(fillLight);

  const backLight = new THREE.DirectionalLight(0xf1f5f9, 0.45);
  backLight.position.set(-8, -4, -8);
  scene.add(backLight);

  // Subtle grid
  const grid = new THREE.GridHelper(1, 20, 0x334155, 0x1e293b);
  grid.position.y = -0.001;
  scene.add(grid);

  // OrbitControls
  const controls = new OrbitControls(orthoCamera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.screenSpacePanning = true;
  controls.zoomToCursor = true;

  let needsRender = true;
  let reqId: number | null = null;
  const meshesMap = new Map<string, THREE.Mesh>();

  controls.addEventListener('change', () => {
    needsRender = true;
  });

  controls.addEventListener('start', () => {
    renderer.setPixelRatio(1.0);
  });
  controls.addEventListener('end', () => {
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    needsRender = true;
  });

  function updateTheme() {
    const isDark = detectNextcloudDarkMode();
    scene.background = new THREE.Color(isDark ? '#0f172a' : '#f1f5f9');
    (grid.material as THREE.Material).dispose();
    grid.material = new THREE.LineBasicMaterial({
      color: isDark ? 0x334155 : 0x94a3b8,
      transparent: true,
      opacity: isDark ? 0.6 : 0.4,
    });
    hemiLight.groundColor.setHex(isDark ? 0x64748b : 0xe2e8f0);
    needsRender = true;
  }

  updateTheme();
  const themeObserver = new MutationObserver(updateTheme);
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'class'] });
  themeObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });

  const animate = () => {
    reqId = requestAnimationFrame(animate);
    const controlsMoved = controls.update();
    if (controlsMoved || needsRender) {
      needsRender = false;
      renderer.render(scene, orthoCamera);
    }
  };
  animate();

  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const { width: w, height: h } = entry.contentRect;
      if (w > 0 && h > 0) {
        const asp = w / h;
        const hDist = orthoCamera.top - orthoCamera.bottom;
        const halfW = (hDist * asp) / 2;
        orthoCamera.left = -halfW;
        orthoCamera.right = halfW;
        orthoCamera.updateProjectionMatrix();
        renderer.setSize(w, h);
        needsRender = true;
      }
    }
  });
  resizeObserver.observe(container);

  let currentSceneBox = new THREE.Box3();

  function fitCameraToBox(box: THREE.Box3) {
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    if (maxDim === 0) return;

    const asp = (container.clientWidth || 800) / (container.clientHeight || 600);
    const distance = maxDim * 1.8;

    const halfH = distance / 2;
    const halfW = halfH * asp;

    orthoCamera.left = -halfW;
    orthoCamera.right = halfW;
    orthoCamera.top = halfH;
    orthoCamera.bottom = -halfH;
    orthoCamera.near = -distance * 10;
    orthoCamera.far = distance * 20;
    orthoCamera.zoom = 1;
    orthoCamera.updateProjectionMatrix();

    const dir = new THREE.Vector3(1, 1, 1).normalize();
    orthoCamera.position.copy(center).addScaledVector(dir, distance);
    controls.target.copy(center);
    controls.minDistance = Math.max(distance / 250, 0.0002);
    controls.maxDistance = distance * 20;
    controls.update();

    grid.position.y = box.min.y - 0.0001;
    const gridScale = Math.max(Math.max(size.x, size.z) * 3, 0.01);
    grid.scale.set(gridScale, gridScale, gridScale);

    needsRender = true;
  }

  function updateBodies(bodies: CadBody[]) {
    meshesMap.forEach((mesh) => {
      scene.remove(mesh);
      if (Array.isArray(mesh.material)) {
        mesh.material.forEach((m) => m.dispose());
      } else {
        mesh.material.dispose();
      }
    });
    meshesMap.clear();

    currentSceneBox = new THREE.Box3();

    bodies.forEach((body) => {
      const colorHex = parseInt(body.metadata.color.replace('#', ''), 16) || 0x8faf8f;
      const baseOpacity = body.metadata.opacity ?? 1;
      const isSemiTransparent = baseOpacity < 0.99;

      const material = new THREE.MeshStandardMaterial({
        color: colorHex,
        roughness: 0.38,
        metalness: 0.0,
        transparent: isSemiTransparent,
        opacity: baseOpacity,
        depthWrite: baseOpacity >= 0.95,
        side: isSemiTransparent ? THREE.DoubleSide : THREE.FrontSide,
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
      meshesMap.set(body.metadata.id, mesh);

      mesh.geometry.computeBoundingBox();
      if (mesh.geometry.boundingBox) {
        const b = mesh.geometry.boundingBox.clone();
        b.applyMatrix4(mesh.matrix);
        currentSceneBox.union(b);
      }
    });

    if (!currentSceneBox.isEmpty()) {
      fitCameraToBox(currentSceneBox);
    }
    needsRender = true;
  }

  function dispose() {
    themeObserver.disconnect();
    resizeObserver.disconnect();
    if (reqId) cancelAnimationFrame(reqId);
    controls.dispose();
    renderer.dispose();
    grid.geometry.dispose();
    (grid.material as THREE.Material).dispose();
    if (container.contains(renderer.domElement)) {
      container.removeChild(renderer.domElement);
    }
  }

  return {
    dispose,
    updateBodies,
    fitToScreen: () => {
      if (!currentSceneBox.isEmpty()) fitCameraToBox(currentSceneBox);
    },
  };
}
