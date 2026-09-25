<?php

declare(strict_types=1);

namespace OCA\Files3dMvNext\Migration;

use OCP\Migration\IOutput;
use OCP\Migration\IRepairStep;

class MimeTypeUninstall implements IRepairStep {
    public function getName(): string {
        return 'Unregister 3D and CAD MIME types';
    }

    public function run(IOutput $output): void {
        $output->info('3D/CAD MIME types cleanup.');
    }
}
