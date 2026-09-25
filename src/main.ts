import Viewer from './views/Viewer.vue';

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

function registerViewerHandler() {
  const handler = {
    id: 'files_3dmv_next',
    group: '3d',
    mimes: supportedMimes,
    component: Viewer,
    match: (fileInfo: any) => {
      if (!fileInfo) return false;
      const name = (fileInfo.name || fileInfo.basename || fileInfo.path || '').toLowerCase();
      const ext = name.split('.').pop();
      return ext ? supportedExtensions.includes(ext) : false;
    },
  };

  if (typeof (window as any).OCA !== 'undefined' && (window as any).OCA.Viewer) {
    (window as any).OCA.Viewer.registerHandler(handler);
  } else {
    window.addEventListener('DOMContentLoaded', () => {
      if ((window as any).OCA?.Viewer) {
        (window as any).OCA.Viewer.registerHandler(handler);
      }
    });
  }
}

registerViewerHandler();
