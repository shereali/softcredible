<?php
// Regenerates public/og-image.jpg with the Softcredible brand:
// deep navy canvas, signal blue accent, modular S lockup.
$w = 1200;
$h = 630;
$img = imagecreatetruecolor($w, $h);

function hex2rgb(string $hex): array {
    $hex = ltrim($hex, '#');
    return [hexdec(substr($hex, 0, 2)), hexdec(substr($hex, 2, 2)), hexdec(substr($hex, 4, 2))];
}

// Deep navy canvas (brand-950 #051422)
$canvas = hex2rgb('#0A1B30');
imagefill($img, 0, 0, imagecolorallocate($img, $canvas[0], $canvas[1], $canvas[2]));

// Faint grid lines
$grid = imagecolorallocate($img, 30, 52, 80);
for ($x = 0; $x < $w; $x += 40) {
    imageline($img, $x, 0, $x, $h, $grid);
}
for ($y = 0; $y < $h; $y += 40) {
    imageline($img, 0, $y, $w, $y, $grid);
}

// Signal blue accent — bottom marking
$accent = hex2rgb('#077BD8');
imagefilledrectangle($img, 0, $h - 12, $w, $h, imagecolorallocate($img, $accent[0], $accent[1], $accent[2]));

// The three modular "S" blocks (logo geometry: foundation/bridge/crown)
$block = hex2rgb('#E8EEF6');
$blocks = [
    [60, 400, 90, 34],
    [60, 330, 90, 34],
    [60, 260, 90, 34],
];
foreach ($blocks as [$x, $y, $bw, $bh]) {
    imagefilledrectangle($img, $x, $y, $x + $bw, $y + $bh, imagecolorallocate($img, $block[0], $block[1], $block[2]));
}

imagejpeg($img, __DIR__ . '/../public/og-image.jpg', 92);
imagedestroy($img);
echo "og-image.jpg regenerated\n";
