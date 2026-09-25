import * as THREE from "three";

export interface CadBodyMetadata {
  id: string;
  originalId: string;
  name: string;
  color: string;
  opacity?: number;
  visible: boolean;
  vertexCount: number;
  triangleCount: number;
  transform?: number[];
}

export interface CadBody {
  name?: string;
  metadata: CadBodyMetadata;
  geometry: THREE.BufferGeometry;
  edgeGeometry?: THREE.BufferGeometry;
  mesh?: THREE.Mesh;
}

export interface CadTreeNode {
  id: string;
  name: string;
  type: "assembly" | "component" | "part" | "body";
  children?: CadTreeNode[];
  bodyId?: string;
  visible: boolean;
  color?: string;
}

export interface CadModel {
  fileName: string;
  fileSize: number;
  application?: string;
  lengthUnits?: string;
  bodies: CadBody[];
  rootTree?: CadTreeNode;
}
