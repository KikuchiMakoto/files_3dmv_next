<?php

declare(strict_types=1);

namespace OCA\Files3dMvNext\Preview;

use OCP\Files\File;
use OCP\Files\FileInfo;
use OCP\IImage;
use OCP\Image;
use OCP\Preview\IProviderV2;
use ZipArchive;

class RsdocxProvider implements IProviderV2 {
    public function getMimeType(): string {
        return '/application\/vnd\.spaceclaim\.rsdocx|application\/vnd\.spaceclaim\.rsdoc|application\/zip|application\/octet-stream/';
    }

    public function isAvailable(FileInfo $file): bool {
        $name = $file->getName();
        $ext = strtolower(pathinfo($name, PATHINFO_EXTENSION));
        return $ext === 'rsdocx' || $ext === 'rsdoc';
    }

    public function getThumbnail(File $file, int $maxX, int $maxY): ?IImage {
        $name = $file->getName();
        $ext = strtolower(pathinfo($name, PATHINFO_EXTENSION));
        if ($ext !== 'rsdocx' && $ext !== 'rsdoc') {
            return null;
        }

        $tempPath = tempnam(sys_get_temp_dir(), 'rsd_thumb_');
        if ($tempPath === false) {
            return null;
        }

        try {
            $stream = $file->fopen('rb');
            if (!is_resource($stream)) {
                return null;
            }

            $target = fopen($tempPath, 'wb');
            if (!is_resource($target)) {
                fclose($stream);
                return null;
            }

            stream_copy_to_stream($stream, $target);
            fclose($stream);
            fclose($target);

            $zip = new ZipArchive();
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

            // Normalize background: legacy .rsdoc has solid white background, modern .rsdocx has transparent background
            // Unify them by making pure white background transparent
            $gd = @imagecreatefromstring($thumbData);
            if ($gd !== false) {
                $colorAt0 = imagecolorat($gd, 0, 0);
                $rgba0 = imagecolorsforindex($gd, $colorAt0);
                if ($rgba0['red'] > 240 && $rgba0['green'] > 240 && $rgba0['blue'] > 240 && $rgba0['alpha'] === 0) {
                    imagecolortransparent($gd, $colorAt0);
                }

                ob_start();
                imagesavealpha($gd, true);
                imagepng($gd);
                $thumbData = ob_get_clean();
                imagedestroy($gd);
            }

            $image = new Image();
            $image->loadFromBase64(base64_encode($thumbData));
            if ($image->valid()) {
                return $image;
            }
        } catch (\Throwable $e) {
            // Gracefully ignore corrupt archives
        } finally {
            if (file_exists($tempPath)) {
                @unlink($tempPath);
            }
        }

        return null;
    }
}
