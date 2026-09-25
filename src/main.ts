import { createCadViewport, CadViewportInstance } from './lib/cadViewportEngine';
import { parseModelUnified } from './lib/loaderDispatcher';

const supportedMimes = [
  'model/stl',
  'model/ply',
  'model/3mf',
  'model/gltf+json',
  'model/gltf-binary',
  'application/sla',
  'application/step',
  'application/iges',
  'application/prs.wavefront-obj',
  'application/vnd.spaceclaim.rsdocx',
  'application/vnd.spaceclaim.rsdoc',
  'application/x-b',
  'application/x-t',
];

const supportedExtensions = [
  'step',
  'stp',
  'iges',
  'igs',
  'rsdocx',
  'rsdoc',
  'stl',
  'ply',
  'obj',
  '3mf',
  'gltf',
  'glb',
  'x_b',
  'x_t',
];

const ViewerComponent: any = {
  name: 'CadViewerNext',
  props: ['src', 'source', 'davPath', 'mime', 'filename', 'basename', 'active'],
  data() {
    return {
      isLoading: true,
      loadingMessage: '3D CAD モデルを取得中...',
      error: null as string | null,
    };
  },
  watch: {
    active(this: any, val: boolean) {
      if (val) {
        this.start();
      } else {
        this.stop();
      }
    },
  },
  mounted(this: any) {
    if (typeof this.doneLoading === 'function') {
      this.doneLoading();
    }
    if (typeof this.updateHeightWidth === 'function') {
      this.updateHeightWidth();
    }
    this.start();
  },
  beforeDestroy(this: any) {
    this.stop();
  },
  methods: {
    async start(this: any) {
      if (this.viewport) return;
      const mountPoint = this.$refs.mountPoint as HTMLElement;
      if (!mountPoint) return;

      this.viewport = createCadViewport(mountPoint);
      this.isLoading = true;
      this.error = null;
      this.loadingMessage = '3D CAD モデルを取得中...';

      try {
        let url = this.source || this.davPath || this.src;
        const fileName = this.basename || this.filename || 'model.stl';

        if (!url && this.path) {
          const webDavBase = (window as any).OC?.linkToRemoteBase?.('webdav') || '/remote.php/webdav';
          const p = this.path;
          url = `${webDavBase}${p.startsWith('/') ? '' : '/'}${encodeURI(p)}`;
        }

        if (!url) {
          throw new Error('ファイルの取得URLを解決できませんでした。');
        }

        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`ダウンロードに失敗しました (Status: ${res.status})`);
        }

        this.loadingMessage = '幾何解析中...';
        const buffer = await res.arrayBuffer();
        const model = await parseModelUnified(buffer, fileName, (msg) => {
          this.loadingMessage = msg;
        });

        if (this.viewport) {
          this.viewport.updateBodies(model.bodies);
        }
        this.isLoading = false;
      } catch (err: any) {
        console.error('[files_3dmv_next]', err);
        this.error = err?.message || String(err);
        this.isLoading = false;
      }
    },
    stop(this: any) {
      if (this.viewport) {
        (this.viewport as CadViewportInstance).dispose();
        this.viewport = null;
      }
    },
  },
  render(h: any) {
    const children: any[] = [
      h('div', {
        ref: 'mountPoint',
        style: { width: '100%', height: '100%', position: 'relative' },
      }),
    ];

    if (this.isLoading) {
      children.push(
        h(
          'div',
          {
            style: {
              position: 'absolute',
              inset: '0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(15, 23, 42, 0.75)',
              backdropFilter: 'blur(8px)',
              color: '#38bdf8',
              fontFamily: 'monospace',
              fontSize: '13px',
              gap: '12px',
              zIndex: '50',
            },
          },
          [
            h('div', {
              style: {
                width: '36px',
                height: '36px',
                border: '3px solid rgba(56, 189, 248, 0.2)',
                borderTopColor: '#38bdf8',
                borderRadius: '50%',
                animation: 'spin 0.8s linear infinite',
              },
            }),
            h('div', this.loadingMessage),
          ]
        )
      );
    }

    if (this.error) {
      children.push(
        h(
          'div',
          {
            style: {
              position: 'absolute',
              inset: '0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(15, 23, 42, 0.85)',
              color: '#f87171',
              fontFamily: 'monospace',
              fontSize: '13px',
              padding: '24px',
              textAlign: 'center',
              zIndex: '50',
            },
          },
          [
            h('div', { style: { fontWeight: 'bold', marginBottom: '8px' } }, '3D モデルの表示に失敗しました'),
            h('div', { style: { color: '#94a3b8', fontSize: '11px' } }, this.error),
          ]
        )
      );
    }

    return h(
      'div',
      {
        class: 'files_3dmv_next-root',
        style: {
          width: '100%',
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#0f172a',
        },
      },
      children
    );
  },
};

function registerViewerHandler() {
  const handler = {
    id: 'files_3dmv_next',
    group: '3d',
    canCompare: false,
    mimes: supportedMimes,
    component: ViewerComponent,
  };

  const oca = (window as any).OCA;
  if (oca?.Viewer) {
    try {
      if (!oca.Viewer.availableHandlers?.some((h: any) => h.id === handler.id)) {
        oca.Viewer.registerHandler(handler);
      }
    } catch (e: any) {
      if (!e?.message?.includes('already registered')) {
        console.warn('[files_3dmv_next] registerHandler failed:', e);
      }
    }
  } else {
    (window as any)._oca_viewer_handlers = (window as any)._oca_viewer_handlers || [];
    if (!(window as any)._oca_viewer_handlers.some((h: any) => h.id === handler.id)) {
      (window as any)._oca_viewer_handlers.push(handler);
    }
  }
}

function registerFileActions() {
  const oca = (window as any).OCA;
  if (!oca?.Files?.fileActions) return;

  supportedMimes.forEach((mime) => {
    try {
      oca.Files.fileActions.registerAction({
        name: 'Open3D',
        displayName: '3D表示',
        mime,
        permissions: 1, // OCP\Constants::PERMISSION_READ
        iconClass: 'icon-category-multimedia',
        actionHandler: (filename: string, context: any) => {
          const fileInfo = context?.fileInfo || {
            filename: (context?.dir ? (context.dir.endsWith('/') ? context.dir : context.dir + '/') : '') + filename,
            basename: filename,
            mime,
          };
          if (oca.Viewer?.open) {
            oca.Viewer.open({
              fileInfo,
              list: [fileInfo],
            });
          }
        },
      });
      oca.Files.fileActions.setDefault(mime, 'Open3D');
    } catch (e) {
      // ignore
    }
  });
}

function initApp() {
  registerViewerHandler();
  registerFileActions();
}

initApp();

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', initApp);
  window.addEventListener('load', initApp);
}
