<?php

declare(strict_types=1);

namespace OCA\Files3dMvNext\Preview;

use OCP\Files\File;
use OCP\Files\FileInfo;
use OCP\IImage;
use OCP\Image;
use OCP\Preview\IProviderV2;

class StlProvider implements IProviderV2 {
    public function getMimeType(): string {
        return '/model\/stl|application\/sla|application\/octet-stream/';
    }

    public function isAvailable(FileInfo $file): bool {
        $name = $file->getName();
        $ext = strtolower(pathinfo($name, PATHINFO_EXTENSION));
        return $ext === 'stl';
    }

    public function getThumbnail(File $file, int $maxX, int $maxY): ?IImage {
        $name = $file->getName();
        $ext = strtolower(pathinfo($name, PATHINFO_EXTENSION));
        if ($ext !== 'stl') {
            return null;
        }

        try {
            $stream = $file->fopen('rb');
            if (!is_resource($stream)) {
                return null;
            }

            $hdr = fread($stream, 80);
            $countBytes = fread($stream, 4);
            if (strlen($countBytes) < 4) {
                fclose($stream);
                return null;
            }
            $numTri = unpack('V', $countBytes)[1];
            if ($numTri <= 0 || $numTri > 5000000) {
                fclose($stream);
                return null;
            }

            // Read triangles
            // Cap at 12000 triangles to render solid surface in ~25ms
            $step = $numTri > 12000 ? (int)ceil($numTri / 12000) : 1;
            $triangles = [];
            $minX = 1e9; $maxXCoord = -1e9;
            $minY = 1e9; $maxYCoord = -1e9;
            $minZ = 1e9; $maxZCoord = -1e9;

            for ($i = 0; $i < $numTri; $i++) {
                $data = fread($stream, 50);
                if (strlen($data) < 50) break;
                if ($step > 1 && ($i % $step !== 0)) continue;

                $u = unpack('f3normal/f3v1/f3v2/f3v3', $data);
                $x1 = $u['v11']; $y1 = $u['v12']; $z1 = $u['v13'];
                $x2 = $u['v21']; $y2 = $u['v22']; $z2 = $u['v23'];
                $x3 = $u['v31']; $y3 = $u['v32']; $z3 = $u['v33'];

                $minX = min($minX, $x1, $x2, $x3); $maxXCoord = max($maxXCoord, $x1, $x2, $x3);
                $minY = min($minY, $y1, $y2, $y3); $maxYCoord = max($maxYCoord, $y1, $y2, $y3);
                $minZ = min($minZ, $z1, $z2, $z3); $maxZCoord = max($maxZCoord, $z1, $z2, $z3);

                $nx = $u['normal1']; $ny = $u['normal2']; $nz = $u['normal3'];
                // Clean directional light (from upper front right)
                $dot = max(0.25, min(1.0, 0.45 + ($nx * 0.4 + $ny * 0.4 + $nz * 0.65)));
                $depth = ($x1 + $x2 + $x3) + ($y1 + $y2 + $y3) - ($z1 + $z2 + $z3) * 1.5;
                $triangles[] = [$x1, $y1, $z1, $x2, $y2, $z2, $x3, $y3, $z3, $dot, $depth];
            }
            fclose($stream);

            if (empty($triangles)) {
                return null;
            }

            // Painter's algorithm: sort back to front by depth
            usort($triangles, fn($a, $b) => $a[10] <=> $b[10]);

            $size = 256;
            $im = imagecreatetruecolor($size, $size);
            imagealphablending($im, false);
            imagesavealpha($im, true);
            $transparent = imagecolorallocatealpha($im, 0, 0, 0, 127);
            imagefilledrectangle($im, 0, 0, $size, $size, $transparent);
            imagealphablending($im, true);

            $dim = max($maxXCoord - $minX, $maxYCoord - $minY, $maxZCoord - $minZ, 0.001);
            $scale = ($size * 0.70) / $dim;
            $cx = ($minX + $maxXCoord) / 2;
            $cy = ($minY + $maxYCoord) / 2;
            $cz = ($minZ + $maxZCoord) / 2;

            $cos30 = 0.866025;
            $sin30 = 0.5;

            // Palette matching SpaceClaim Sage / Light Steel CAD surface
            foreach ($triangles as $tri) {
                $tx1 = $tri[0] - $cx; $ty1 = $tri[1] - $cy; $tz1 = $tri[2] - $cz;
                $tx2 = $tri[3] - $cx; $ty2 = $tri[4] - $cy; $tz2 = $tri[5] - $cz;
                $tx3 = $tri[6] - $cx; $ty3 = $tri[7] - $cy; $tz3 = $tri[8] - $cz;

                $px1 = (int)(($size / 2) + ($tx1 - $ty1) * $cos30 * $scale);
                $py1 = (int)(($size / 2) - (($tx1 + $ty1) * $sin30 + $tz1) * $scale);
                $px2 = (int)(($size / 2) + ($tx2 - $ty2) * $cos30 * $scale);
                $py2 = (int)(($size / 2) - (($tx2 + $ty2) * $sin30 + $tz2) * $scale);
                $px3 = (int)(($size / 2) + ($tx3 - $ty3) * $cos30 * $scale);
                $py3 = (int)(($size / 2) - (($tx3 + $ty3) * $sin30 + $tz3) * $scale);

                $dot = $tri[9];
                // Vibrant SpaceClaim Sage / Steel solid surface
                $r = (int)(143 * $dot);
                $g = (int)(175 * $dot);
                $b = (int)(143 * $dot);
                $col = imagecolorallocate($im, $r, $g, $b);
                imagefilledpolygon($im, [$px1, $py1, $px2, $py2, $px3, $py3], $col);
            }

            ob_start();
            imagesavealpha($im, true);
            imagepng($im);
            $pngData = ob_get_clean();
            imagedestroy($im);

            $image = new Image();
            $image->loadFromBase64(base64_encode($pngData));
            if ($image->valid()) {
                return $image;
            }
        } catch (\Throwable $e) {
            // Gracefully ignore corrupt files
        }

        return null;
    }
}
