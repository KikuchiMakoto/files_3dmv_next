import { CadModel } from "./types";
import { parseRsdocx } from "./rsdocxParser";
import { loadStepOrIges } from "./stepLoader";
import { loadMeshFile } from "./meshLoaders";

export async function parseModelUnified(
  buffer: ArrayBuffer,
  fileName: string,
  onProgress?: (message: string, percent?: number) => void
): Promise<CadModel> {
  const cleanName = fileName.split("?")[0];
  const ext = cleanName.split(".").pop()?.toLowerCase();

  switch (ext) {
    case "rsdocx":
    case "rsdoc":
      return await parseRsdocx(buffer, fileName, onProgress);

    case "step":
    case "stp":
      onProgress?.("STEP B-Rep 解析中...", 50);
      return await loadStepOrIges(buffer, fileName, false);

    case "iges":
    case "igs":
      onProgress?.("IGES B-Rep 解析中...", 50);
      return await loadStepOrIges(buffer, fileName, true);

    case "stl":
    case "ply":
    case "obj":
    case "3mf":
    case "gltf":
    case "glb":
      onProgress?.("3Dメッシュ構築中...", 50);
      return await loadMeshFile(buffer, fileName);

    default:
      throw new Error(`Unsupported 3D format: .${ext}`);
  }
}
