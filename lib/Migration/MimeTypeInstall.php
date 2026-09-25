<?php

declare(strict_types=1);

namespace OCA\Files3dMvNext\Migration;

use OCP\Migration\IOutput;
use OCP\Migration\IRepairStep;

class MimeTypeInstall implements IRepairStep {
    public function getName(): string {
        return 'Register 3D and CAD MIME types';
    }

    public function run(IOutput $output): void {
        $mimetypes = [
            'step' => 'application/step',
            'stp' => 'application/step',
            'iges' => 'application/iges',
            'igs' => 'application/iges',
            'stl' => 'model/stl',
            'ply' => 'model/ply',
            'obj' => 'application/prs.wavefront-obj',
            '3mf' => 'model/3mf',
            'rsdocx' => 'application/vnd.spaceclaim.rsdocx',
            'rsdoc' => 'application/vnd.spaceclaim.rsdoc',
            'x_b' => 'application/x-b',
            'x_t' => 'application/x-t',
            'gltf' => 'model/gltf+json',
            'glb' => 'model/gltf-binary',
        ];

        $output->info('3D/CAD MIME types mapped for files_3dmv_next.');
    }
}
