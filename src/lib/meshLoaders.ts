import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { ThreeMFLoader } from "three/examples/jsm/loaders/3MFLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { CadBody, CadModel } from "./types";

function buildCadBodyFromGeometry(
  geom: THREE.BufferGeometry,
  name: string,
  color = "#94a3b8"
): CadBody {
  if (!geom.getAttribute("normal")) {
    geom.computeVertexNormals();
  }
  geom.computeBoundingBox();
  geom.computeBoundingSphere();

  let edgeGeometry: THREE.BufferGeometry | undefined;
  try {
    edgeGeometry = new THREE.EdgesGeometry(geom, 28);
    edgeGeometry.computeBoundingSphere();
  } catch {}

  const vCount = geom.getAttribute("position")?.count || 0;
  const tCount = geom.getIndex() ? geom.getIndex()!.count / 3 : vCount / 3;

  return {
    name,
    metadata: {
      id: `mesh-${Math.random().toString(36).substring(2, 9)}`,
      originalId: name,
      name,
      color,
      opacity: 1,
      visible: true,
      vertexCount: vCount,
      triangleCount: Math.floor(tCount),
    },
    geometry: geom,
    edgeGeometry,
  };
}

function extractGeometriesFromObject(
  obj: THREE.Object3D,
  baseName: string
): CadBody[] {
  const bodies: CadBody[] = [];
  let counter = 1;

  obj.traverse((child) => {
    if (child instanceof THREE.Mesh && child.geometry) {
      const geom = child.geometry.clone();
      child.updateMatrixWorld();
      geom.applyMatrix4(child.matrixWorld);

      let color = "#94a3b8";
      if (child.material) {
        const mat = Array.isArray(child.material) ? child.material[0] : child.material;
        if (mat && "color" in mat && mat.color instanceof THREE.Color) {
          color = `#${mat.color.getHexString()}`;
        }
      }

      const name = child.name || `${baseName} Part ${counter++}`;
      bodies.push(buildCadBodyFromGeometry(geom, name, color));
    }
  });

  return bodies;
}

export async function loadMeshFile(
  buffer: ArrayBuffer,
  fileName: string
): Promise<CadModel> {
  const ext = fileName.split(".").pop()?.toLowerCase();
  const baseName = fileName.replace(/\.[^/.]+$/, "");
  let bodies: CadBody[] = [];

  switch (ext) {
    case "stl": {
      const loader = new STLLoader();
      const geom = loader.parse(buffer);
      bodies = [buildCadBodyFromGeometry(geom, baseName, "#38bdf8")];
      break;
    }

    case "ply": {
      const loader = new PLYLoader();
      const geom = loader.parse(buffer);
      bodies = [buildCadBodyFromGeometry(geom, baseName, "#10b981")];
      break;
    }

    case "obj": {
      const text = new TextDecoder().decode(buffer);
      const loader = new OBJLoader();
      const obj = loader.parse(text);
      bodies = extractGeometriesFromObject(obj, baseName);
      break;
    }

    case "3mf": {
      const loader = new ThreeMFLoader();
      const group = loader.parse(buffer);
      bodies = extractGeometriesFromObject(group, baseName);
      break;
    }

    case "gltf":
    case "glb": {
      const loader = new GLTFLoader();
      const gltf = await new Promise<any>((resolve, reject) => {
        loader.parse(buffer, "", resolve, reject);
      });
      if (gltf.scene) {
        bodies = extractGeometriesFromObject(gltf.scene, baseName);
      }
      break;
    }

    default:
      throw new Error(`Unsupported mesh format .${ext}`);
  }

  if (bodies.length === 0) {
    throw new Error(`No 3D meshes found in ${fileName}`);
  }

  return {
    fileName,
    fileSize: buffer.byteLength,
    bodies,
  };
}
