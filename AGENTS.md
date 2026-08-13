# AGENTS.md

Early-stage Nuxt 4 marketing site for Softcredible (B2B software dev). Scaffold only: no `pages/`, `layouts/`, `composables/`, `app.vue`, or `server/` yet — just the brand components.

## Commands
- `npm run dev` / `npm run build` / `npm run generate` (static export) / `npm run preview` / `npm run typecheck` (`nuxt typecheck`, vue-tsc).
- No lint or test tooling is configured. Verify changes with `npm run typecheck` and a dev/build run.
- Note: `node_modules` is currently not installed — run `npm install` first if needed.

## Layout
- Nuxt 4 with the **legacy flat layout** (no `app/` dir): Nuxt auto-detects it and resolves `components/`, `assets/`, `public/` from the project root. Add new pages at root `pages/`, layouts at root `layouts/`.
- Components under `components/brand/` are auto-imported globally — use `<Logo>` and `<LogoMark>` with no manual import.

## Design tokens (read before touching any styling)
- Single source of truth is the CSS variables in `assets/css/main.css` (`:root` + `.dark`). Tailwind maps them via `rgb(var(--token) / <alpha-value>)` in `tailwind.config.ts`. Hex values exist only in `main.css`.
- Use semantic tokens (`background`, `surface`, `ink`, `border`, `primary`, `accent`, `success/warning/error`, `brand-*`, `steel-*`) in components — never hardcode colors.
- Dark mode is class-based: adding `.dark` to `<html>` flips the semantic variables. No theme toggle exists yet.
- The type scale (`display`, `h1`…`caption`) is defined in **three** places that must stay in sync: `tailwind.config.ts` `fontSize`, the `--text-*` vars, and the `.text-*` utility classes (last two in `assets/css/main.css`).

## Brand / logo
- Logo geometry is duplicated in three places — keep in sync: `components/brand/LogoMark.vue`, the `--logo-*` vars in `main.css`, and `brand/logo/README.md`.
- Usage rules live in `brand/logo/README.md`: min lockup 160px, min mark 24px, 8-unit clear space. Choose a `variant` (`default`/`mono`/`light`/`dark`) instead of custom fills; the gradient is approved for `default` only.
- `public/favicon.svg` is referenced from `nuxt.config.ts`.

## Toolchain
- Nuxt 4.5.2, Vue 3, TypeScript, Tailwind v3 via `@nuxtjs/tailwindcss` v6.14 (CSS path is `~/assets/css/main.css`, contains the `@tailwind` directives). Inter Variable font loaded via `@fontsource-variable/inter`, imported before `main.css` in `nuxt.config.ts`.
