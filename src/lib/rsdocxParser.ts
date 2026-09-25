import * as fflate from "fflate";
import * as THREE from "three";
import { CadBody, CadModel, CadTreeNode } from "./types";
import { parseFacetsBin, ParsedRawBody } from "./facetsParser";

// Default CAD body palette matching SpaceClaim / DesignSpark Mechanical default appearance
const DEFAULT_COLORS = [
  "#8faf8f", // SpaceClaim Sage (Standard default)
  "#94a3b8", // Steel / Slate
  "#38bdf8", // Sky blue
  "#10b981", // Emerald
  "#f59e0b", // Amber
  "#ef4444", // Coral
  "#a855f7", // Purple
  "#e2e8f0", // Silver / Aluminum
];

function parseColorInt(colorStr: string | null | undefined, defaultIndex: number): { hex: string; opacity: number } {
  if (!colorStr) {
    return { hex: DEFAULT_COLORS[defaultIndex % DEFAULT_COLORS.length], opacity: 1 };
  }
  const num = parseInt(colorStr, 10);
  if (isNaN(num)) {
    return { hex: DEFAULT_COLORS[defaultIndex % DEFAULT_COLORS.length], opacity: 1 };
  }
  const u = num >>> 0;
  const a = ((u >> 24) & 0xff) / 255;
  const r = (u >> 16) & 0xff;
  const g = (u >> 8) & 0xff;
  const b = u & 0xff;
  const hex = "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("");
  return { hex, opacity: a > 0 ? a : 1 };
}

function parseMatrix4(transStr: string | null | undefined): THREE.Matrix4 | null {
  if (!transStr || !transStr.trim()) return null;
  const parts = transStr.split(/[,\s]+/).map(p => parseFloat(p.trim())).filter(p => !isNaN(p));
  if (parts.length < 16) return null;

  const mat = new THREE.Matrix4();
  mat.set(
    parts[0], parts[1], parts[2], parts[3],
    parts[4], parts[5], parts[6], parts[7],
    parts[8], parts[9], parts[10], parts[11],
    parts[12], parts[13], parts[14], parts[15]
  );
  return mat;
}

export async function parseRsdocx(
  fileData: ArrayBuffer | Uint8Array,
  fileName: string,
  onProgress?: (message: string, percent?: number) => void
): Promise<CadModel> {
  onProgress?.("ZIP展開中...", 15);

  const uint8 = fileData instanceof Uint8Array ? fileData : new Uint8Array(fileData);

  const unzipped = await new Promise<fflate.Unzipped>((resolve, reject) => {
    fflate.unzip(uint8, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
  const fileSize = uint8.byteLength;

  onProgress?.("構造解析中...", 40);

  let appName = "SpaceClaim";
  let lengthUnits = "MM";

  const appXmlBytes = unzipped["docProps/app.xml"];
  if (appXmlBytes) {
    const appXml = fflate.strFromU8(appXmlBytes);
    const m = appXml.match(/<Application>([^<]+)<\/Application>/i);
    if (m) appName = m[1];
    const u = appXml.match(/<LengthType>([^<]+)<\/LengthType>/i);
    if (u) lengthUnits = u[1];
  }

  const captions = new Map<string, string>();
  const orderedBodyDefIds: string[] = [];
  const bodyDefIdToIndex = new Map<string, number>();
  let rootName = fileName.replace(/\.[^/.]+$/, "");

  const docBytes = unzipped["SpaceClaim/document.xml"];
  if (docBytes) {
    const docXmlText = fflate.strFromU8(docBytes);
    const rcMatch = docXmlText.match(/<RootCaptionDef[^>]*>[\s\S]*?<name>([^<]+)<\/name>/);
    if (rcMatch && rcMatch[1].trim()) {
      rootName = rcMatch[1].trim();
    }

    const capRegex = /<CaptionDef[^>]*>[\s\S]*?<subjectId>([^<]+)<\/subjectId>[\s\S]*?<name>([^<]+)<\/name>/g;
    let m: RegExpExecArray | null;
    while ((m = capRegex.exec(docXmlText)) !== null) {
      captions.set(m[1].trim(), m[2].trim());
    }

    const entityRegex = /<(?:ComponentDef|PartDef|NominalBodyDef)[^>]*Id="([^"]+)"[^>]*>[\s\S]*?<name>([^<]+)<\/name>/g;
    while ((m = entityRegex.exec(docXmlText)) !== null) {
      const id = m[1].trim();
      if (!captions.has(id)) {
        captions.set(id, m[2].trim());
      }
    }

    const bodyDefRegex = /<(?:NominalBodyDef|MeshDef)\s+Id="([^"]+)"/g;
    let bIdx = 0;
    while ((m = bodyDefRegex.exec(docXmlText)) !== null) {
      const bId = m[1].trim();
      orderedBodyDefIds.push(bId);
      if (!bodyDefIdToIndex.has(bId)) {
        bodyDefIdToIndex.set(bId, bIdx++);
      }
    }
  }

  onProgress?.("3D ファセット幾何抽出中...", 70);

  const facetsBytes = unzipped["SpaceClaim/Graphics/facets.bin"];
  if (!facetsBytes) {
    throw new Error("facets.bin missing in RSDOCX container");
  }
  const facetsBuffer = facetsBytes.buffer.slice(facetsBytes.byteOffset, facetsBytes.byteOffset + facetsBytes.byteLength);
  const rawBodies = parseFacetsBin(facetsBuffer);

  const cadBodies: CadBody[] = [];
  const cadToThreeMatrix = new THREE.Matrix4().makeRotationX(-Math.PI / 2);

  const renderBytes = unzipped["SpaceClaim/Graphics/renderlist.xml"];
  let renderXmlText: string | undefined;
  if (renderBytes) {
    renderXmlText = fflate.strFromU8(renderBytes);
  }

  let instCounter = 0;

  if (renderXmlText) {
    const itemRegex = /<Item\s+([^>]+?)>(.*?)<\/Item>/gs;
    let itemMatch: RegExpExecArray | null;

    while ((itemMatch = itemRegex.exec(renderXmlText)) !== null) {
      const itemAttrsStr = itemMatch[1];
      const itemInner = itemMatch[2];
      const itemTransStr = (itemAttrsStr.match(/Transform="([^"]+)"/) || [])[1];
      const itemMatrix = parseMatrix4(itemTransStr);

      const bodyRegex = /<Body\s+([^>]+?)(?:\/>|>.*?<\/Body>)/gs;
      let bodyMatch: RegExpExecArray | null;

      while ((bodyMatch = bodyRegex.exec(itemInner)) !== null) {
        const bodyAttrsStr = bodyMatch[1];
        const bId = (bodyAttrsStr.match(/Id="([^"]+)"/) || [])[1] || `0:${instCounter}`;
        const bVisStr = (bodyAttrsStr.match(/Visible="([^"]+)"/) || [])[1];
        const isVisible = bVisStr !== "0";
        const bColorStr = (bodyAttrsStr.match(/Color="([^"]+)"/) || [])[1];
        const { hex: colorHex, opacity } = parseColorInt(bColorStr, instCounter);
        const bTransStr = (bodyAttrsStr.match(/Transform="([^"]+)"/) || [])[1];
        const bMatrix = parseMatrix4(bTransStr);

        let finalMatrix = itemMatrix;
        if (bMatrix) {
          if (finalMatrix) {
            finalMatrix = finalMatrix.clone().multiply(bMatrix);
          } else {
            finalMatrix = bMatrix;
          }
        }

        let rawBody: ParsedRawBody | undefined;
        const orderedIdx = bodyDefIdToIndex.get(bId);
        if (orderedIdx !== undefined && orderedIdx < rawBodies.length) {
          rawBody = rawBodies[orderedIdx];
        }

        if (!rawBody && rawBodies.length > 0) {
          rawBody = rawBodies[instCounter % rawBodies.length];
        }

        if (rawBody && rawBody.geometry) {
          let geom = rawBody.geometry.clone();
          if (finalMatrix) {
            geom.applyMatrix4(finalMatrix);
          }
          geom.applyMatrix4(cadToThreeMatrix);
          geom.computeVertexNormals();
          geom.computeBoundingBox();
          geom.computeBoundingSphere();

          const instId = `inst-${bId}-${instCounter}`;
          const bodyName = captions.get(bId) || `Body ${bId}`;
          instCounter++;

          // Precompute EdgesGeometry for wireframe lines
          let edgeGeometry: THREE.BufferGeometry | undefined;
          try {
            edgeGeometry = new THREE.EdgesGeometry(geom, 28);
            edgeGeometry.computeBoundingSphere();
          } catch {}

          cadBodies.push({
            name: bodyName,
            metadata: {
              id: instId,
              originalId: bId,
              name: bodyName,
              color: colorHex,
              opacity,
              visible: isVisible,
              vertexCount: geom.getAttribute("position")?.count || 0,
              triangleCount: geom.getIndex() ? geom.getIndex()!.count / 3 : 0,
            },
            geometry: geom,
            edgeGeometry,
          });
        }
      }
    }
  }

  // Fallback if renderlist.xml is missing or empty
  if (cadBodies.length === 0 && rawBodies.length > 0) {
    rawBodies.forEach((raw, idx) => {
      const rawName = captions.get(raw.bodyId) || `Body ${raw.bodyId}`;
      const color = DEFAULT_COLORS[idx % DEFAULT_COLORS.length];
      const bodyId = `body-${raw.bodyId}`;

      let geom = raw.geometry.clone();
      geom.applyMatrix4(cadToThreeMatrix);
      geom.computeVertexNormals();
      geom.computeBoundingBox();
      geom.computeBoundingSphere();

      let edgeGeometry: THREE.BufferGeometry | undefined;
      try {
        edgeGeometry = new THREE.EdgesGeometry(geom, 28);
        edgeGeometry.computeBoundingSphere();
      } catch {}

      cadBodies.push({
        name: rawName,
        metadata: {
          id: bodyId,
          originalId: raw.bodyId,
          name: rawName,
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
  }

  onProgress?.("表示完了", 100);

  return {
    fileName,
    fileSize,
    application: appName,
    lengthUnits,
    bodies: cadBodies,
  };
}
