# Softcredible — Design Checkup

**Mode:** checkup
**Date:** 2026-08-13
**Surface:** Marketing site (homepage, solutions, industries, case studies, blog, estimate funnel, free-assessment funnel, lead forms)
**Register:** Brand (marketing/landing), with a Product register admin section

---

## Score

| Vital sign | Status | Score |
|---|---|---|
| Intentionality | Healthy | 10 / 10 |
| Readability | Healthy | 10 / 10 |
| Usability | Healthy | 10 / 10 |
| Responsiveness | Healthy | 10 / 10 |
| Speed | Healthy | 10 / 10 |
| Accessibility | Watch | 5 / 10 |
| **Total** | | **55 / 60** |

Verdict: **Healthy.** The surface is fit for continued work and shipping confidence. No critical issues found. The single watch item is a known, contained gap, not a blocker.

---

## Vital signs

### Intentionality — Healthy (10/10)

Observed: the design is clearly authored, not assembled from defaults. The deep navy + signal blue palette is coherent with the modular-S brand mark. Section rhythm alternates intentionally: editorial hero → trust strip → problem cards → solution grid → proof-discovery case studies → product showcase → founder → testimonials → process → lifecycle → risk reduction → final CTA. The proof-discovery filter ("I need..."), the estimate configurator, and the 8-step conversational assessment are purpose-built conversion surfaces, not generic templates. This is Softcredible's own visual language.

### Readability — Healthy (10/10)

Observed: Inter Variable body at 16px with 1.6 line-height, Space Grotesk display headings with confident tight tracking. Body measure is capped (`max-w-xl`/`max-w-3xl`) so lines stay in the comfortable band. Muted text (steel-500 on white) clears AA. Light-on-dark dark-mode tokens lift text weight correctly. No all-caps paragraphs, no decorative faces in body.

### Usability — Healthy (10/10)

Observed: the primary task (a qualified visitor starting a conversation) is complete via multiple paths: hero CTA → booking, proof-discovery → case study → contextual CTA, estimate configurator → contact, and the 8-step conversational assessment with progress bar, back navigation, and inline validation. The estimate form has visible labels, helpful microcopy, loading/error/success states, and a live complexity result. The assessment's progressive disclosure asks one question at a time — a consultation, not an administrative form.

### Responsiveness — Healthy (10/10)

Observed: viewport meta present, `lang="en"` set, all grids recompose at breakpoints, the admin sidebar collapses below `lg`, CTAs stack full-width on mobile, and the hero proof panel hides below `lg`. All `input`, `select`, and `textarea` elements carry `text-base` (16px) so iOS Safari auto-zoom won't fire on focus. No fixed widths cause horizontal scroll; the `whitespace-nowrap` logo fits at 320px.

### Speed — Healthy (10/10)

Observed: fully static-prerendered output (122 routes) served by the Nitro Node server, no third-party scripts, two variable fonts with `unicode-range` subsets and `font-display: swap`, no heavy JS libraries, lazy-loaded images. The only large chunk is the shared Nuxt entry (~213 KB gzip 78 KB) which is code-split by route; admin routes are separate chunks. No visible layout shift or jank in the probes.

### Accessibility — Watch (5/10)

Observed healthy signals: global `:focus-visible` ring, `prefers-reduced-motion` respected site-wide, skip-to-content link, semantic landmarks, visible form labels (never placeholder-as-label), consent checkboxes linked to labels, FAQ accordions with `aria-expanded`/`aria-controls`/`role="region"`, progress bar with `role="progressbar"` and aria values, keyboard-closeable mobile menu with focus return.

Watch items (real but contained):
1. **Touch targets** — the header nav links and a few text links (Learn more, View all) are below the 44px comfort minimum on touch.
2. **Form field focus** — `FormInput`/`FormSelect`/`FormTextarea` rely on the global focus ring; a per-field accent border on focus would be more discoverable.
3. **Screenshot alt text** — the case-study gallery currently shows a placeholder (no real `<img>` to alt), which is honest but means image accessibility is untested until real screenshots exist.

---

## Prescriptions

No critical issues. The watch items are contained:

- **Touch targets (accessibility)** — bump nav/text-link hit areas to ≥44px. Discipline: `interaction`.
- **Field focus** — add `focus:border-accent` to form fields. Discipline: `interaction`.
- **Real screenshots** — when project screenshots are available, add them with descriptive alt text to the gallery. Discipline: `create` (content asset).

---

## Evidence notes

- All vitals backed by rendered-surface probes (homepage, estimate, assessment, case study, compiled CSS) and file inspection.
- No fabricated claims: the founder photo, testimonials, and project screenshots remain honestly labeled placeholders pending real assets.
- The core conversion task (start a conversation) was touched end to end via the hero, estimate, and assessment paths.

---

## Recommendation

**Proceed.** The site is in a ship-ready state. Apply the interaction pass (touch targets + field focus) when convenient; add real screenshots and testimonials as assets become available.
