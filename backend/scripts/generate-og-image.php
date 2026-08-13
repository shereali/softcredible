<?php

// Generate the branded OpenGraph image (1200x630) used by useSeo().
// Run: php scripts/generate-og-image.php  (outputs to public/og-image.jpg)

$width = 1200;
$height = 630;

$img = imagecreatetruecolor($width, $height);

// Brand navy background (#0B1A2C)
$navy = imagecolorallocate($img, 11, 26, 44);
imagefilledrectangle($img, 0, 0, $width, $height, $navy);

// Subtle gradient band toward brand blue
$brand = imagecolorallocate($img, 37, 97, 155);
for ($i = 0; $i < $height; $i++) {
    $t = $i / $height;
    $r = (int) (11 + (37 - 11) * $t);
    $g = (int) (26 + (97 - 26) * $t);
    $b = (int) (44 + (155 - 44) * $t);
    imagefilledrectangle($img, 0, $i, $width, $i, imagecolorallocate($img, $r, $g, $b));
}

// Accent accent bar
$accent = imagecolorallocate($img, 7, 123, 216);
imagefilledrectangle($img, 0, 0, $width, 8, $accent);

// Heading text (bundled Inter Variable not raster-safe; use GD built-in font scaled)
$white = imagecolorallocate($img, 255, 255, 255);
$soft = imagecolorallocate($img, 178, 211, 238);

// Use a large built-in font for the heading lines (GD font 5 is tiny; draw scaled via imagestring at multiple lines is poor).
// Instead render simple geometric logo mark + wordmark using shapes.

// Logo mark: three modules (foundation, bridge, crown) matching LogoMark geometry
$module = imagecolorallocate($img, 7, 123, 216);
$module2 = imagecolorallocate($img, 120, 174, 220);

// Foundation
imagefilledrectangle($img, 220, 430, 220 + 140, 430 + 50, $module);
// Bridge
imagefilledrectangle($img, 260, 380, 260 + 140, 380 + 50, $module);
// Crown
imagefilledrectangle($img, 300, 330, 300 + 140, 330 + 50, $module2);

// Wordmark: draw text with GD's built-in font scaled by factor using imagecopyresized
function drawTextScaled($img, $text, $x, $y, $size, $color)
{
    // Render at font 5 (max 9px tall) then scale up.
    $base = 5;
    $scale = max(1, (int) round($size / 9));
    $tmp = imagecreatetruecolor(strlen($text) * 10, 16);
    $tmpColor = imagecolorallocate($tmp, 255, 255, 255);
    imagefill($tmp, 0, 0, imagecolorallocate($tmp, 0, 0, 0));
    imagestring($tmp, $base, 2, 2, $text, $tmpColor);
    $tw = imagesx($tmp) * $scale;
    $th = imagesy($tmp) * $scale;
    imagecopyresized($img, $tmp, $x, $y, 0, 0, $tw, $th, imagesx($tmp), imagesy($tmp));
    imagedestroy($tmp);
}

// Brand color for wordmark
$wordColor = imagecolorallocate($img, 240, 248, 255);
drawTextScaled($img, 'SOFTCREDIBLE', 460, 340, 44, $wordColor);

// Tagline
drawTextScaled($img, 'We Build Software That Moves Businesses Forward', 460, 420, 20, $soft);

// URL
drawTextScaled($img, 'softcredible.com', 460, 500, 16, $white);

// Save as JPEG quality 90
imagejpeg($img, __DIR__.'/../public/og-image.jpg', 90);
imagedestroy($img);

echo "og-image.jpg generated\n";
