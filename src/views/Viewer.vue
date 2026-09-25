<template>
  <div class="viewer-wrapper">
    <!-- 3D Canvas -->
    <CadViewport v-if="bodies.length > 0" :bodies="bodies" />

    <!-- Loading Overlay -->
    <div v-if="isLoading" class="viewer-loading-overlay">
      <div class="viewer-loading-box">
        <div class="viewer-spinner"></div>
        <div class="viewer-loading-text">{{ loadingMessage }}</div>
        <div v-if="progress > 0" class="viewer-progress-bar">
          <div class="viewer-progress-fill" :style="{ width: `${progress}%` }"></div>
        </div>
      </div>
    </div>

    <!-- Error Overlay -->
    <div v-if="errorMessage" class="viewer-error-overlay">
      <div class="viewer-error-box">
        <div class="viewer-error-title">3D モデルの読み込みに失敗しました</div>
        <div class="viewer-error-detail">{{ errorMessage }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import CadViewport from '../components/CadViewport.vue';
import { parseModelUnified } from '../lib/loaderDispatcher';
import { CadBody } from '../lib/types';

const props = defineProps<{
  file?: {
    name?: string;
    path?: string;
    url?: string;
    source?: string;
    mime?: string;
  };
  path?: string;
  mime?: string;
}>();

const bodies = ref<CadBody[]>([]);
const isLoading = ref<boolean>(true);
const loadingMessage = ref<string>('3Dモデルを取得中...');
const progress = ref<number>(10);
const errorMessage = ref<string | null>(null);

async function loadModel() {
  isLoading.value = true;
  errorMessage.value = null;
  progress.value = 10;
  loadingMessage.value = '3Dモデルを取得中...';

  try {
    const fileName = props.file?.name || (props.path ? props.path.split('/').pop() || 'model.stl' : 'model.stl');
    let downloadUrl = props.file?.url || props.file?.source;

    if (!downloadUrl && props.path) {
      // Nextcloud WebDAV URL resolution
      const webDavBase = (window as any).OC?.linkToRemoteBase?.('webdav') || '/remote.php/webdav';
      downloadUrl = `${webDavBase}${props.path.startsWith('/') ? '' : '/'}${encodeURI(props.path)}`;
    }

    if (!downloadUrl) {
      throw new Error('ファイルの取得 URL を解決できませんでした。');
    }

    loadingMessage.value = `ダウンロード中: ${fileName}`;
    const response = await fetch(downloadUrl);
    if (!response.ok) {
      throw new Error(`ダウンロードに失敗しました (Status: ${response.status})`);
    }

    progress.value = 40;
    loadingMessage.value = '幾何解析中...';
    const buffer = await response.arrayBuffer();

    const model = await parseModelUnified(buffer, fileName, (msg, pct) => {
      loadingMessage.value = msg;
      if (pct !== undefined) {
        progress.value = pct;
      }
    });

    bodies.value = model.bodies;
    isLoading.value = false;
  } catch (err: any) {
    console.error('[files_3dmv_next] Load error:', err);
    errorMessage.value = err?.message || String(err);
    isLoading.value = false;
  }
}

onMounted(() => {
  loadModel();
});
</script>

<style scoped>
.viewer-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: transparent;
  display: flex;
  overflow: hidden;
}

.viewer-loading-overlay,
.viewer-error-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(8px);
  z-index: 100;
  user-select: none;
}

.viewer-loading-box,
.viewer-error-box {
  background-color: rgba(30, 41, 59, 0.95);
  border: 1px solid rgba(71, 85, 105, 0.6);
  border-radius: 1rem;
  padding: 1.5rem 2rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  max-width: 320px;
  width: 100%;
  text-align: center;
}

.viewer-spinner {
  width: 2.25rem;
  height: 2.25rem;
  border: 3px solid rgba(56, 189, 248, 0.2);
  border-top-color: #38bdf8;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.viewer-loading-text {
  font-size: 0.8125rem;
  font-family: ui-monospace, monospace;
  color: #cbd5e1;
}

.viewer-progress-bar {
  width: 100%;
  height: 4px;
  background-color: #334155;
  border-radius: 9999px;
  overflow: hidden;
}

.viewer-progress-fill {
  height: 100%;
  background: linear-gradient(to right, #38bdf8, #3b82f6);
  transition: width 0.2s ease-out;
}

.viewer-error-box {
  border-color: rgba(239, 68, 68, 0.5);
}

.viewer-error-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: #f87171;
}

.viewer-error-detail {
  font-size: 0.75rem;
  font-family: ui-monospace, monospace;
  color: #94a3b8;
  word-break: break-all;
}
</style>
