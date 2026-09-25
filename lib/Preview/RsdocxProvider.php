<?php

declare(strict_types=1);

namespace OCA\Files3dMvNext\Preview;

use OCP\Files\File;
use OCP\IImage;
use OCP\Image;
use OCP\Preview\IProviderV2;
use ZipArchive;

class RsdocxProvider implements IProviderV2 {
    public function getMimeType(): string {
        return '/application\/vnd\.spaceclaim\.rsdocx|application\/zip|application\/octet-stream/';
    }

    public function isAvailable(File $file): bool {
        $ext = strtolower(pathinfo($file->getName(), PATHINFO_EXTENSION));
        return $ext === 'rsdocx' || $ext === 'rsdoc';
    }

    public function getThumbnail(File $file, int $maxX, int $maxY): ?IImage {
        $ext = strtolower(pathinfo($file->getName(), PATHINFO_EXTENSION));
        if ($ext !== 'rsdocx' && $ext !== 'rsdoc') {
            return null;
        }

        try {
            $zip = new ZipArchive();
            $tempPath = $file->getLocalFile();
            if (!$tempPath || !file_exists($tempPath)) {
                return null;
            }

            if ($zip->open($tempPath, ZipArchive::RDONLY) !== true) {
                return null;
            }

            // Extract SpaceClaim embedded thumbnail image
            $thumbData = $zip->getFromName('docProps/thumbnail.png');
            if ($thumbData === false) {
                $thumbData = $zip->getFromName('docProps/thumbnail.jpeg');
            }
            $zip->close();

            if ($thumbData === false || $thumbData === '') {
                return null;
            }

            $image = new Image();
            $image->loadFromBase64(base64_encode($thumbData));
            if ($image->valid()) {
                return $image;
            }
        } catch (\Throwable $e) {
            // Gracefully ignore corrupt archives
        }

        return null;
    }
}
