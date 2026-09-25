import initOpenCascade from "occt-import-js";
import * as THREE from "three";
import { CadBody, CadModel } from "./types";

let occtInstance: any = null;

export async function getOcct() {
  if (!occtInstance) {
    occtInstance = await initOpenCascade();
  }
  return occtInstance;
}

export async function loadStepOrIges(
  fileBuffer: ArrayBuffer,
  fileName: string,
  isIges = false
): Promise<CadModel> {
  const occt = await getOcct();
  const bytes = new Uint8Array(fileBuffer);
  const res = isIges
    ? occt.ReadIgesFile(bytes, null)
    : occt.ReadStepFile(bytes, null);

  if (!res || !res.success || !res.meshes || res.meshes.length === 0) {
    throw new Error(`Failed to tessellate ${isIges ? "IGES" : "STEP"} B-Rep model`);
  }

  const bodies: CadBody[] = [];
  res.meshes.forEach((meshData: any, idx: number) => {
    const geom = new THREE.BufferGeometry();
    if (meshData.attributes?.position?.array) {
      geom.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(meshData.attributes.position.array, 3)
      );
    }
    if (meshData.attributes?.normal?.array) {
      geom.setAttribute(
        "normal",
        new THREE.Float32BufferAttribute(meshData.attributes.normal.array, 3)
      );
    } else {
      geom.computeVertexNormals();
    }
    if (meshData.index?.array) {
      geom.setIndex(new THREE.BufferAttribute(meshData.index.array, 1));
    }
    geom.computeBoundingBox();
    geom.computeBoundingSphere();

    const color = meshData.color && meshData.color.length >= 3
      ? `#${new THREE.Color(meshData.color[0], meshData.color[1], meshData.color[2]).getHexString()}`
      : "#94a3b8";

    let edgeGeometry: THREE.BufferGeometry | undefined;
    try {
      edgeGeometry = new THREE.EdgesGeometry(geom, 28);
      edgeGeometry.computeBoundingSphere();
    } catch {}

    const name = meshData.name || `Solid ${idx + 1}`;
    bodies.push({
      name,
      metadata: {
        id: `solid-${idx}`,
        originalId: `${idx}`,
        name,
        color,
        opacity: 1,
        visible: true,
        vertexCount: geom.getAttribute("position")?.count || 0,
        triangleCount: geom.getIndex() ? geom.getIndex()!.count / 3 : 0,
      },
      geometry: geom,
      edgeGeometry,
    });
  });

  return {
    fileName,
    fileSize: fileBuffer.byteLength,
    bodies,
  };
}
