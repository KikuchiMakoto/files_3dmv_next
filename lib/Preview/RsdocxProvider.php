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

            // Truly extract and render from 3D geometry (facets.bin) directly:
            // Eliminates embedded SpaceClaim XYZ triads/arrows, guarantees 100% clean transparent background
            $bin = $zip->getFromName('SpaceClaim/Graphics/facets.bin');
            $zip->close();

            if ($bin === false || strlen($bin) < 48) {
                return null;
            }

            if (substr($bin, 0, 8) !== 'facets  ') {
                return null;
            }

            $len = strlen($bin);
            $bodyCount = unpack('V', substr($bin, 12, 4))[1];
            $pos = 16;
            $allVerts = [];
            $allTris = [];

            for ($b = 0; $b < $bodyCount && $pos < $len - 32; $b++) {
                $hdr = unpack('V12', substr($bin, $pos, 48));
                $u2 = $hdr[6];
                $faceCount = $hdr[7];
                $vCount0 = $hdr[12];
                $isSolid = ($u2 === 5 || $u2 === 4) && $faceCount > 0 && $faceCount < 20000 && $vCount0 > 0 && $vCount0 < 200000;

                if ($isSolid) {
                    $pos += 48;
                    $vCount = $vCount0;
                    for ($f = 0; $f < $faceCount && $pos < $len; $f++) {
                        if ($f > 0) {
                            $fFlag = unpack('V', substr($bin, $pos, 4))[1];
                            $hdrLen = 24 + $fFlag * 12;
                            $vCount = unpack('V', substr($bin, $pos + $hdrLen - 4, 4))[1];
                            $pos += $hdrLen;
                        }
                        $vBytes = $vCount * 32;
                        if ($pos + $vBytes > $len) break;
                        $vStart = count($allVerts);
                        for ($i = 0; $i < $vCount; $i++) {
                            $vData = unpack('f3pos/f3norm', substr($bin, $pos + $i * 32, 24));
                            // Coordinate transform: CAD Z-up to Three.js view (X=x, Y=z, Z=-y)
                            $allVerts[] = [
                                $vData['pos1'],
                                $vData['pos3'],
                                -$vData['pos2'],
                                $vData['norm1'],
                                $vData['norm3'],
                                -$vData['norm2'],
                            ];
                        }
                        $pos += $vBytes;
                        $idxCount = unpack('V', substr($bin, $pos, 4))[1];
                        $pos += 4;
                        $indices = unpack('v*', substr($bin, $pos, $idxCount * 2));
                        for ($i = 1; $i <= $idxCount; $i += 3) {
                            if ($i + 2 <= $idxCount) {
                                $allTris[] = [$vStart + $indices[$i], $vStart + $indices[$i + 1], $vStart + $indices[$i + 2]];
                            }
                        }
                        $pos += $idxCount * 2;
                        if ($pos % 4 !== 0) $pos += 4 - ($pos % 4);
                        if ($pos + 4 <= $len) {
                            $stripCount = unpack('V', substr($bin, $pos, 4))[1];
                            $pos += 4 + $stripCount * 2;
                            if ($pos % 4 !== 0) $pos += 4 - ($pos % 4);
                        }
                    }
                } else {
                    break;
                }
            }

            if (empty($allVerts) || empty($allTris)) {
                return null;
            }

            // Bounding box
            $minX = 1e9; $maxXCoord = -1e9;
            $minY = 1e9; $maxYCoord = -1e9;
            $minZ = 1e9; $maxZCoord = -1e9;
            foreach ($allVerts as $v) {
                $minX = min($minX, $v[0]); $maxXCoord = max($maxXCoord, $v[0]);
                $minY = min($minY, $v[1]); $maxYCoord = max($maxYCoord, $v[1]);
                $minZ = min($minZ, $v[2]); $maxZCoord = max($maxZCoord, $v[2]);
            }

            $triList = [];
            foreach ($allTris as $t) {
                $v1 = $allVerts[$t[0]]; $v2 = $allVerts[$t[1]]; $v3 = $allVerts[$t[2]];
                $nx = ($v1[3] + $v2[3] + $v3[3]) / 3;
                $ny = ($v1[4] + $v2[4] + $v3[4]) / 3;
                $nz = ($v1[5] + $v2[5] + $v3[5]) / 3;
                $dot = max(0.25, min(1.0, 0.45 + ($nx * 0.4 + $ny * 0.4 + $nz * 0.65)));
                $depth = ($v1[0] + $v2[0] + $v3[0]) + ($v1[1] + $v2[1] + $v3[1]) - ($v1[2] + $v2[2] + $v3[2]) * 1.5;
                $triList[] = [$v1, $v2, $v3, $dot, $depth];
            }
            usort($triList, fn($a, $b) => $a[4] <=> $b[4]);

            $size = 256;
            $im = imagecreatetruecolor($size, $size);
            imagealphablending($im, false);
            imagesavealpha($im, true);
            $transparent = imagecolorallocatealpha($im, 0, 0, 0, 127);
            imagefilledrectangle($im, 0, 0, $size, $size, $transparent);
            imagealphablending($im, true);

            $dim = max($maxXCoord - $minX, $maxYCoord - $minY, $maxZCoord - $minZ, 0.0001);
            $scale = ($size * 0.70) / $dim;
            $cx = ($minX + $maxXCoord) / 2;
            $cy = ($minY + $maxYCoord) / 2;
            $cz = ($minZ + $maxZCoord) / 2;
            $cos30 = 0.866025;
            $sin30 = 0.5;

            foreach ($triList as $tri) {
                $t1 = $tri[0]; $t2 = $tri[1]; $t3 = $tri[2];
                $tx1 = $t1[0] - $cx; $ty1 = $t1[1] - $cy; $tz1 = $t1[2] - $cz;
                $tx2 = $t2[0] - $cx; $ty2 = $t2[1] - $cy; $tz2 = $t2[2] - $cz;
                $tx3 = $t3[0] - $cx; $ty3 = $t3[1] - $cy; $tz3 = $t3[2] - $cz;

                $px1 = (int)(($size / 2) + ($tx1 - $ty1) * $cos30 * $scale);
                $py1 = (int)(($size / 2) - (($tx1 + $ty1) * $sin30 + $tz1) * $scale);
                $px2 = (int)(($size / 2) + ($tx2 - $ty2) * $cos30 * $scale);
                $py2 = (int)(($size / 2) - (($tx2 + $ty2) * $sin30 + $tz2) * $scale);
                $px3 = (int)(($size / 2) + ($tx3 - $ty3) * $cos30 * $scale);
                $py3 = (int)(($size / 2) - (($tx3 + $ty3) * $sin30 + $tz3) * $scale);

                $dot = $tri[3];
                // True SpaceClaim Sage diffuse shading (#8faf8f)
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
            // Gracefully ignore corrupt archives
        } finally {
            if (file_exists($tempPath)) {
                @unlink($tempPath);
            }
        }

        return null;
    }
}
