---
logo:
  name: Softcredible Symbol
  version: 1.0.0
  description: Abstract modular mark forming an "S". Three connected architecture modules — a foundation (bottom-left), a bridge (center), and a crown (top-right). Encodes software architecture, modular systems, transformation, reliability, and scalable engineering.
  geometry:
    module_1: x=6   y=15  w=14 h=5   (foundation — bottom-left)
    module_2: x=10  y=10  w=14 h=5   (bridge — center, overlapping)
    module_3: x=20  y=5   w=14 h=5   (crown — top-right)
    overlap:  unified by a continuous corner radius r=2, all modules share the same height (h=5) and same radius (r=2), producing a stepped, additive "S"
  construction:
    - Start from the bottom-left, ascend through the middle, and crown at the top-right
    - Modules stack with a 1-unit vertical rise and 4-unit horizontal advance per step
    - Negative space between modules forms a subtle counter-line that echoes a wave / signal
  usage:
    - Minimum clear space: 8 units on all sides (the height of one module)
    - Minimum size (horizontal lockup): 160px width
    - Minimum size (icon mark): 24px
  variants:
    - default (navy gradient on transparent)
    - mono (single currentColor for print / monochrome)
    - light (for dark surfaces)
    - dark (for light surfaces)
    - favicon (16px + 32px + 180px rasterized)
    - white lockup (footer on dark)
---

# Softcredible — Brand Logo System

The Softcredible symbol is an abstract mark built from three modular architecture
blocks. It reads as a lowercase "s", and as a stack that ascends from the
foundation (bottom-left) to the crown (top-right) — a visual translation of
software that moves businesses forward.

## Geometry

All dimensions are relative to a 40x40 artboard, expressed in grid units.

- Foundation module: `x=6, y=15, w=14, h=5` (bottom-left)
- Bridge module: `x=10, y=10, w=14, h=5` (center, overlapping)
- Crown module: `x=20, y=5, w=14, h=5` (top-right)

Every module uses the same height (`h=5`) and the same corner radius (`r=2`).
The overlap of the bridge over the foundation and crown creates the continuous
"S" counter-line. The composition is additive — each module reinforces the next —
which is exactly how we describe software architecture to our clients.

## Usage Rules

- **Clear space:** keep at least 8 units (one module height) free on every side.
- **Minimum width (lockup):** 160px. Below that, use the icon mark.
- **Minimum size (icon mark):** 24px.
- **Do not:** rotate, add gradients beyond the approved variants, add shadows,
  outline, or place on busy imagery without a scrim.
- **Monochrome:** always available via `currentColor`.

## Variants

| Variant | Purpose | File |
| --- | --- | --- |
| Default | Primary lockup on light backgrounds | `LogoMark.vue` (default) |
| Mono | Print / monochrome, inherits text color | `LogoMark.vue` (`mono`) |
| Light | Dark surfaces (footer, hero overlays) | `LogoMark.vue` (`variant="light"`) |
| Dark | Light surfaces (alternate section) | `LogoMark.vue` (`variant="dark"`) |
| Favicon | Browsers, 16/32/180px | `public/favicon.svg` |
