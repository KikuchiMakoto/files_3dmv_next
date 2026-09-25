# 3D Model Viewer Next (`files_3dmv_next`) for Nextcloud

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Nextcloud: 28-35](https://img.shields.io/badge/Nextcloud-28--35-blue.svg)](https://nextcloud.com/)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-brightgreen.svg)](https://vuejs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-r186-black.svg)](https://threejs.org/)

Nextcloud 上で 3D CAD およびポリゴンメッシュファイルを直接ブラウザ内で高速プレビュー表示する、公式 `@nextcloud/viewer` 統合型の超軽量 3D ビューアアプリです。

外部 CAD ソフトウェア（Autodesk Inventor、SpaceClaim等）やサーバー側 GPU / X11 は一切不要。すべての 3D テッセレーションとレンダリングは、ブラウザ内の Pure TypeScript + WebAssembly（OpenCASCADE WASM）エンジンによりクライアント完結型で爆速実行されます。

---

## 🌟 主な特徴

- **Nextcloud 34.x / Vue 3 完全対応**:
  - `@nextcloud/viewer` にシームレスに統合され、ファイル一覧で CAD / 3D ファイルをクリックするだけで全画面モーダルで起動。
  - Nextcloud の Dark / Light テーマ設定に完全自動同期。
- **CAD ネイティブ形式 & 汎用 3D メッシュの包括的サポート**:
  - **CAD**: STEP (`.step`, `.stp`), IGES (`.iges`, `.igs`), SpaceClaim / DesignSpark Mechanical (`.rsdocx`, `.rsdoc`), Siemens Parasolid (`.x_b`, `.x_t`)
  - **3D Mesh**: STL (`.stl`), PLY (`.ply`), OBJ (`.obj`), 3MF (`.3mf`), glTF / GLB (`.gltf`, `.glb`)
- **超高速・ネイティブ サムネイルプレビュー（PHP Provider）**:
  - `.rsdocx` ファイルに同梱されている高精細画像（`docProps/thumbnail.png`）をサーバー側 PHP で超高速抽出（約 2ms）。ファイル一覧のグリッド表示で美しいサムネイルを即座に表示。
- **純粋な CAD ミニマリズム表示**:
  - **並行投影（Orthographic View）固定**: パース歪みのない正確な寸法感。
  - **フラット均等スタジオ照明（Light OFF 固定）**: 影の計算を排し、あらゆる角度からパーツ本来の発色・形状を明瞭に表示。
  - **`metalness: 0.0` 拡散色忠実再現**: DesignSpark Mechanical のオリジナルカラーを忠実再現。
  - 余計なボタン、ツールバー、ギズモを排除したノイズレスなキャンバス。
  - **Render-on-Demand**: 静止時は GPU / CPU 負荷 0% を維持。

---

## 🛠️ インストール方法 (Nextcloud)

### 1. 手動インストール (開発 / Localhost)
Nextcloud の `apps/` ディレクトリに本アプリを配置します。

```bash
cd <nextcloud-root>/apps/
git clone https://github.com/kikuchimakoto/files_3dmv_next.git files_3dmv_next
cd files_3dmv_next
bun install
bun run build
```

Nextcloud 上でアプリを有効化します：
```bash
php occ app:enable files_3dmv_next
php occ maintenance:mimetype:update-js
php occ maintenance:mimetype:update-db --repair-filecache
```

---

## 📜 ライセンス

MIT License - Copyright (c) 2026 KikuchiMakoto
