import * as THREE from "three";

export interface ParsedRawBody {
  partId: string;
  bodyId: string;
  bodyNum: number;
  partNum: number;
  faceCount: number;
  totalVertices: number;
  totalTriangles: number;
  geometry: THREE.BufferGeometry;
}

/**
 * High-speed Zero-Copy Binary parser for SpaceClaim Graphics/facets.bin
 * Reverse engineered from SpaceClaim facets format v13-v15.
 */
export function parseFacetsBin(buffer: ArrayBuffer): ParsedRawBody[] {
  const data = new DataView(buffer);
  const bodies: ParsedRawBody[] = [];

  if (buffer.byteLength < 16) {
    throw new Error("Invalid facets.bin: file too small");
  }

  const magic = new Uint8Array(buffer, 0, 8);
  const magicStr = String.fromCharCode(...magic);
  if (magicStr !== "facets  ") {
    throw new Error(`Invalid facets.bin magic header: "${magicStr}"`);
  }

  const bodyCount = data.getUint32(12, true);
  let pos = 16;

  for (let b = 0; b < bodyCount && pos < buffer.byteLength - 32; b++) {
    const part_a = data.getUint32(pos, true);
    const part_b = data.getUint32(pos + 4, true);
    const body_a = data.getUint32(pos + 8, true);
    const u2 = data.getUint32(pos + 20, true);
    const faceCount = data.getUint32(pos + 24, true);
    const vCount0 = data.getUint32(pos + 44, true);

    const isSolid = (u2 === 5 || u2 === 4) && faceCount > 0 && faceCount < 20000 && vCount0 > 0 && vCount0 < 200000;

    if (isSolid) {
      pos += 48;
      let vCount = vCount0;

      // Pre-pass: quickly scan face headers to calculate exact total vertices and indices
      let scanPos = pos;
      let bodyVerts = vCount0;
      let bodyIdxs = 0;
      let curVCount = vCount0;

      for (let f = 0; f < faceCount && scanPos < buffer.byteLength; f++) {
        if (f > 0) {
          if (scanPos + 4 > buffer.byteLength) break;
          const fFlag = data.getUint32(scanPos, true);
          const hdrLen = 24 + fFlag * 12;
          if (scanPos + hdrLen > buffer.byteLength) break;
          curVCount = data.getUint32(scanPos + hdrLen - 4, true);
          scanPos += hdrLen;
          bodyVerts += curVCount;
        }
        scanPos += curVCount * 32;
        if (scanPos + 4 > buffer.byteLength) break;
        const iCount = data.getUint32(scanPos, true);
        bodyIdxs += iCount;
        scanPos += 4 + iCount * 2;
        if (scanPos % 4 !== 0) scanPos += 4 - (scanPos % 4);
        if (scanPos + 4 <= buffer.byteLength) {
          const sCount = data.getUint32(scanPos, true);
          scanPos += 4 + sCount * 2;
          if (scanPos % 4 !== 0) scanPos += 4 - (scanPos % 4);
        }
      }

      // Pre-allocate contiguous TypedArrays with zero GC
      const positions = new Float32Array(bodyVerts * 3);
      const normals = new Float32Array(bodyVerts * 3);
      const uvs = new Float32Array(bodyVerts * 2);
      const indices = bodyVerts > 65535 ? new Uint32Array(bodyIdxs) : new Uint16Array(bodyIdxs);

      let vOffsetDst = 0;
      let uvOffsetDst = 0;
      let idxOffsetDst = 0;
      let vertexBase = 0;

      for (let f = 0; f < faceCount && pos < buffer.byteLength; f++) {
        if (f > 0) {
          if (pos + 4 > buffer.byteLength) break;
          const fFlag = data.getUint32(pos, true);
          const hdrLen = 24 + fFlag * 12;
          if (pos + hdrLen > buffer.byteLength) break;
          vCount = data.getUint32(pos + hdrLen - 4, true);
          pos += hdrLen;
        }

        const vBytes = vCount * 32;
        if (pos + vBytes > buffer.byteLength) break;

        for (let i = 0; i < vCount; i++) {
          const vOffset = pos + (i << 5);
          const pIdx = (vOffsetDst + i) * 3;
          positions[pIdx] = data.getFloat32(vOffset, true);
          positions[pIdx + 1] = data.getFloat32(vOffset + 4, true);
          positions[pIdx + 2] = data.getFloat32(vOffset + 8, true);

          normals[pIdx] = data.getFloat32(vOffset + 12, true);
          normals[pIdx + 1] = data.getFloat32(vOffset + 16, true);
          normals[pIdx + 2] = data.getFloat32(vOffset + 20, true);

          const uvIdx = (uvOffsetDst + i) << 1;
          uvs[uvIdx] = data.getFloat32(vOffset + 24, true);
          uvs[uvIdx + 1] = data.getFloat32(vOffset + 28, true);
        }
        vOffsetDst += vCount;
        uvOffsetDst += vCount;
        pos += vBytes;

        // Read triangle indices
        if (pos + 4 > buffer.byteLength) break;
        const idxCount = data.getUint32(pos, true);
        pos += 4;

        if (pos + idxCount * 2 > buffer.byteLength) break;
        for (let i = 0; i < idxCount; i++) {
          indices[idxOffsetDst++] = vertexBase + data.getUint16(pos + (i << 1), true);
        }
        pos += idxCount * 2;
        if (pos % 4 !== 0) pos += 4 - (pos % 4);

        // Skip strip indices
        if (pos + 4 <= buffer.byteLength) {
          const stripCount = data.getUint32(pos, true);
          pos += 4;
          if (pos + stripCount * 2 <= buffer.byteLength) {
            pos += stripCount * 2;
            if (pos % 4 !== 0) pos += 4 - (pos % 4);
          }
        }

        vertexBase += vCount;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positions.subarray(0, vOffsetDst * 3), 3));
      if (vOffsetDst > 0) {
        geometry.setAttribute("normal", new THREE.BufferAttribute(normals.subarray(0, vOffsetDst * 3), 3));
      } else {
        geometry.computeVertexNormals();
      }
      if (uvOffsetDst > 0) {
        geometry.setAttribute("uv", new THREE.BufferAttribute(uvs.subarray(0, uvOffsetDst * 2), 2));
      }
      if (idxOffsetDst > 0) {
        geometry.setIndex(new THREE.BufferAttribute(indices.subarray(0, idxOffsetDst), 1));
      }
      geometry.computeBoundingBox();
      geometry.computeBoundingSphere();

      bodies.push({
        partId: `${part_b}:${part_a}`,
        bodyId: `${part_b}:${body_a}`,
        bodyNum: body_a,
        partNum: part_b,
        faceCount,
        totalVertices: vOffsetDst,
        totalTriangles: idxOffsetDst / 3,
        geometry
      });

      // Advance past trailer to next body
      if (b < bodyCount - 1) {
        let found = false;
        if (pos + 32 <= buffer.byteLength && data.getUint32(pos, true) === 2) {
          const k = data.getUint32(pos + 28, true);
          const candPos = pos + 32 + k * 12;
          if (candPos + 48 <= buffer.byteLength) {
            const candU0 = data.getUint32(candPos, true);
            const candU2 = data.getUint32(candPos + 20, true);
            const candFaces = data.getUint32(candPos + 24, true);
            if (candU0 === 1 && (candU2 === 5 || candU2 === 4) && candFaces > 0 && candFaces < 20000) {
              pos = candPos;
              found = true;
            }
          }
        }

        if (!found) {
          const maxScan = Math.min(pos + 500000, buffer.byteLength - 48);
          for (let p = pos + 32; p <= maxScan; p += 4) {
            const candU0 = data.getUint32(p, true);
            const candU2 = data.getUint32(p + 20, true);
            const candFaces = data.getUint32(p + 24, true);
            if (candU0 === 1 && (candU2 === 5 || candU2 === 4) && candFaces > 0 && candFaces < 20000) {
              pos = p;
              found = true;
              break;
            }
            if (p + 32 <= buffer.byteLength) {
              const m1 = data.getUint32(p + 16, true);
              if (m1 === 0xffffffff) {
                pos = p;
                found = true;
                break;
              }
            }
          }
        }

        if (!found) break;
      }
    } else {
      // MeshDef body
      const meshPartNum = data.getUint32(pos, true);
      const meshBodyNum = data.getUint32(pos + 4, true);
      const meshPartId = `${meshPartNum}:${meshBodyNum}`;
      const meshBodyId = `${meshPartNum}:${meshBodyNum}`;

      const vCount = data.getUint32(pos + 72, true);
      let nextPos = buffer.byteLength;

      for (let p = pos + 80; p <= buffer.byteLength - 48; p += 4) {
        if (data.getUint32(p + 16, true) === 0xffffffff) {
          nextPos = p;
          break;
        }
        const candU0 = data.getUint32(p, true);
        const candU2 = data.getUint32(p + 20, true);
        const candFaces = data.getUint32(p + 24, true);
        if (candU0 === 1 && (candU2 === 5 || candU2 === 4) && candFaces > 0 && candFaces < 20000) {
          nextPos = p;
          break;
        }
      }

      let positions = new Float32Array(0);
      let indices = new Uint32Array(0);
      let actualIdxCount = 0;

      if (vCount > 0 && vCount < 500000 && pos + 76 + vCount * 12 <= nextPos) {
        const vStart = pos + 76;
        positions = new Float32Array(vCount * 3);
        for (let i = 0; i < vCount; i++) {
          const o = vStart + i * 12;
          const pIdx = i * 3;
          positions[pIdx] = data.getFloat32(o, true);
          positions[pIdx + 1] = data.getFloat32(o + 4, true);
          positions[pIdx + 2] = data.getFloat32(o + 8, true);
        }

        let triEnd = nextPos;
        for (let tail = 0; tail <= 16; tail += 4) {
          const testP = nextPos - tail - 36;
          if (testP >= vStart + vCount * 12) {
            const a = data.getUint32(testP + 12, true);
            const b = data.getUint32(testP + 16, true);
            const c = data.getUint32(testP + 20, true);
            if (a < vCount && b < vCount && c < vCount && a !== b && b !== c && a !== c) {
              triEnd = nextPos - tail;
              break;
            }
          }
        }

        const maxTriangles = Math.max(0, Math.floor((triEnd - (vStart + vCount * 12)) / 36));
        indices = new Uint32Array(maxTriangles * 3);

        while (triEnd - 36 >= vStart + vCount * 12) {
          const o = triEnd - 36;
          const a = data.getUint32(o + 12, true);
          const b = data.getUint32(o + 16, true);
          const c = data.getUint32(o + 20, true);
          if (a < vCount && b < vCount && c < vCount && a !== b && b !== c && a !== c) {
            indices[actualIdxCount++] = a;
            indices[actualIdxCount++] = b;
            indices[actualIdxCount++] = c;
            triEnd -= 36;
          } else {
            break;
          }
        }
        indices.subarray(0, actualIdxCount).reverse();
      }

      const geometry = new THREE.BufferGeometry();
      if (positions.length > 0) {
        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      }
      if (actualIdxCount > 0) {
        geometry.setIndex(new THREE.BufferAttribute(indices.subarray(0, actualIdxCount), 1));
      }
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();
      geometry.computeBoundingSphere();

      bodies.push({
        partId: meshPartId,
        bodyId: meshBodyId,
        bodyNum: meshBodyNum,
        partNum: meshPartNum,
        faceCount: 1,
        totalVertices: positions.length / 3,
        totalTriangles: actualIdxCount / 3,
        geometry
      });

      pos = nextPos;
    }
  }

  return bodies;
}
