# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server at http://localhost:4321
npm run build     # production build to dist/
npm run preview   # preview production build locally
```

No test runner or linter is configured. TypeScript checking is done at build time via `astro build`.

## Architecture

Single-page landing site for a barbershop brand. One route (`src/pages/index.astro`) composes 11 section components in order.

### Component split: static vs. React islands

Static sections that ship zero JS (`.astro`):
- `Navbar`, `Experience`, `Pricing`, `Locations`, `Footer`

React islands (`.tsx`) with explicit hydration directives:
- `Hero` → `client:load` (above the fold, animates immediately)
- `Services`, `Lookbook`, `Barbers`, `Membership` → `client:visible` (lazy hydrate on scroll)
- `BookOnline` → `client:idle` (deferred until browser is idle)
- `ExperiencePerks` → `client:visible` (mounted inside `Experience.astro` for Phosphor icons)

### Styling approach

**Tailwind utility classes are not used.** Tailwind v4 is wired via `@tailwindcss/vite` purely to provide the `@theme` block and base reset. All visual styling is done through:
- CSS custom properties defined in `src/styles/global.css` under `@theme`
- Inline `style` props on every element

Global CSS is injected via `<style is:global>` in `src/layouts/Layout.astro`.

### Design tokens (`src/styles/global.css`)

Nike-inspired dark variant. Key tokens:

| Token | Value | Role |
|---|---|---|
| `--color-bg` | `#0d0d0d` | Page background |
| `--color-surface` | `#161616` | Card / section backgrounds |
| `--color-surface-2` | `#1e1e1e` | Nested surfaces |
| `--color-canvas` | `#ffffff` | Primary text, CTA fills |
| `--color-ink` | `#111111` | Dark fills (inverted cards) |
| `--color-stone` | `#9e9ea0` | Secondary / muted text |
| `--color-hairline` | `#2a2a2a` | Borders, dividers |
| `--font-display` | Bebas Neue | Headlines, prices, section titles |
| `--font-body` | Inter | All body copy, labels, buttons |

Design rules inherited from Nike system:
- No drop shadows, no card elevation — only 1px `--color-hairline` borders
- All CTAs use **pill shape** (30px `border-radius`)
- Section vertical rhythm: `clamp(64px, 8vw, 96px)` top/bottom padding
- Max-width container: `1440px` centered with `40px` horizontal padding

### Animations (Framer Motion)

All React islands use Framer Motion. Common patterns:
- Scroll-triggered reveals: `useInView(ref, { once: true, margin: '-80px' })` → drive `animate` prop
- Stagger grids: `variants` with `staggerChildren` on the container, `cardVariants` on children
- Tab/filter transitions: `AnimatePresence mode="wait"` with `x` slide direction
- `layoutId` spring: used in Lookbook filter chips for the active pill
- Parallax in `Experience.astro`: vanilla scroll listener (not Framer Motion — it's a static `.astro` file)

### Icons

**Phosphor Icons** (`@phosphor-icons/react` v2) — only for React components. All icons use `weight="light"` for the premium dark aesthetic. Do not use Lucide or HeroIcons.

Static `.astro` files cannot import Phosphor directly. If icons are needed in a static section, either create a small React island wrapper (see `ExperiencePerks.tsx`) or use inline SVG.

## Key constraints

- `*.md` files are gitignored — internal docs (PRD, notes) stay local only
- TypeScript is set to `strict` mode via `astro/tsconfigs/strict`
- Node ≥ 22.12.0 required (see `engines` in `package.json`)
