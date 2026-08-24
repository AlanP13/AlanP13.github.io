# Design System — Alan Palayil Portfolio

This document describes the **actual current implementation** of the site's visual system ("the galaxy theme"), verified directly against source as of 2026-08-24. It is a record of what exists, not a spec for a redesign — including the known inconsistencies, which are called out explicitly rather than glossed over.

Source files this document is derived from: `src/styles/theme.css`, `src/styles/stars.css`, `src/styles/global.css`, `src/layouts/SiteLayout.astro`, and representative page style blocks (`src/pages/index.astro`, `src/pages/projects/[slug].astro`).

---

## 1. Token system (`src/styles/theme.css`)

### Base tokens

Colors are stored as **space-separated RGB triplets with no `rgb()` wrapper** — e.g. `--accent: 168 85 247;`, not `--accent: rgb(168, 85, 247);`. This is intentional: it lets every consumer choose `rgb(var(--x))` for a solid color or blend in alpha at the point of use.

```css
:root {
  --bg: 3 11 20;
  --text: 236 239 244;
  --muted: 180 188 200;
  --card: 14 16 22;
  --border: 36 42 54;
  --accent: 168 85 247;      /* pluto, the default accent */
  --starTint: 168 85 247;
  --r: 18px;                 /* the site's one shared border-radius token */
  --card-bg: rgba(255, 255, 255, 0.02);
}
```

`--card-bg` is the **one exception** to the triplet convention — it's a literal `rgba()` string, not a component triplet, because it's a pre-composed low-opacity surface tint rather than a color meant to be re-blended.

### Dark / light mode

Controlled by an attribute on `<html>`, not a media query: `:root[data-theme="dark"]` / `:root[data-theme="light"]` (`theme.css:18-37`). Light mode redefines `--bg`, `--text`, `--muted`, `--card`, `--border`, and `--card-bg` (`rgba(0,0,0,0.02)` instead of the dark default `rgba(255,255,255,0.02)`).

`--accent` and `--starTint` are **not** redefined per light/dark — they're set by the accent (planet) system independently of theme brightness.

### Accent system — 8 "planets"

`data-accent="<planet>"` on `<html>` selects one of 8 accent colors (`theme.css:39-98`), each setting both `--accent` and `--starTint`:

| Planet | RGB triplet |
|---|---|
| mercury | `156 163 175` |
| venus | `244 114 182` |
| earth | `34 197 94` |
| mars | `239 68 68` |
| jupiter | `249 115 22` |
| saturn | `234 179 8` |
| uranus | `6 182 212` |
| neptune | `59 130 246` |
| pluto | `168 85 247` (default) |

Two legacy back-compat attribute values (`teal`, `purple`) also exist in CSS but aren't wired into any UI control — dead code, not part of the live design language.

### Color consumption convention (and its actual inconsistency)

- **Solid color:** `rgb(var(--accent))` — the dominant pattern, used pervasively.
- **Alpha-blended color:** two different idioms coexist in the codebase:
  1. `color-mix(in srgb, rgb(var(--accent)) N%, transparent)` — the more common idiom (global.css, SiteLayout.astro, index.astro).
  2. `rgb(var(--accent) / 0.NN)` — space-separated-var-with-slash form, used directly in several places instead (e.g. the comet glow, `.chip.featured`).

**This is a real, unresolved inconsistency** — the codebase does not pick one alpha idiom and stick to it. Either form works correctly; a future cleanup pass could standardize on one, but as of this writing both are live and functioning.

**Do not use** `rgba(var(--accent), N)` — this was a real historical bug (UI-006): `rgba()` cannot consume a CSS custom property that expands to a space-separated triplet. Always use one of the two forms above.

### `--card-bg` — mostly centralized, not fully

`--card-bg` is meant to be owned solely by `theme.css` and consumed everywhere else via `var(--card-bg)`. It's used this way 29+ times across 8 files. However, hardcoded `rgba(255,255,255,0.0N)` / `rgba(0,0,0,0.0N)` literals still exist in a handful of places that should arguably use the token instead (`global.css` card-hover wash, `SiteLayout.astro` drawer/popover insets, a page-local `.weTab` token set in `index.astro`, `ImageCarousel.astro`). Not a bug, but a known incomplete migration — see `CQ-006` in the roadmap for the one instance (a no-op self-reference) that was cleaned up during the 2026-08-24 audit.

---

## 2. Galaxy background layers

Three independent layers, composited inside a single fixed `.bgfx` container (`global.css:152-240`), explicit z-index stack:

```
.nebula     z-index: 0   (ambient glow, slowest)
.starfield  z-index: 1   (two star fields)
.comets     z-index: 2   (three streaking comets, foreground)
```

`.bgfx` itself: `position: fixed; inset: 0; z-index: 0; pointer-events: none; will-change: transform; contain: paint;` — sits behind the header/main/footer, which are explicitly promoted to `position: relative; z-index: 1`.

### Nebula

4 stacked `radial-gradient`s — two accent-tinted glows via `color-mix`, one white wash, and one **fixed, non-accent-driven purple wash** (`rgba(90,40,140,0.07)`) that stays constant regardless of the chosen accent planet. Slow drift via `@keyframes nebulaDrift` (70s, `translate3d` + `scale`). A film-grain texture overlay (`.nebula::after`, two `repeating-radial-gradient`s at very low opacity, `mix-blend-mode: overlay`) is layered on top.

### Starfield — seamless tiled drift, not moving elements

Two pseudo-element star layers, each a stack of `radial-gradient()` dots at fixed positions inside one CSS `background-size` tile:

- `.starfield::before` — 283×217px tile (~1,250 dots on a 1080p screen), `animation: drift1 22s linear infinite`.
- `.starfield::after` — 401×263px tile (~400 dots + 2 brighter "feature stars"), `animation: drift2 34s linear infinite`.

**Why two different, oddly-specific tile sizes:** they're deliberately non-matching ("prime-ish") so the two grids never visually align into a repeating pattern. The drift animations move `background-position` by exactly **one full tile period** (`0 0` → `-283px 217px`, and `0 0` → `401px -263px`), which is what makes the loop seamless — frame 100% is pixel-identical to frame 0%. This is a `background-position` animation, not `transform: translate3d`, specifically because a tiled background can loop natively that way; moving a positioned element can't loop without a visible jump (this was the exact bug UI-003 fixed).

### Comets

Three instances (`.c1`/`.c2`/`.c3`), each a thin gradient streak (`240px × 2px`) plus a `radial-gradient` glow on `::after` (not a CSS `filter: blur()` — filters are more GPU-expensive and don't composite as cleanly on integrated graphics; this was AUD2-007). Each comet has a distinct rotation, starting position, duration (14s/20s/26s), and animation delay so they don't move in lockstep. Driven by `@keyframes cometFly` in `stars.css`, defined separately from the comet element styles in `global.css`.

### Light-mode behavior

The whole galaxy system is **not** simply hidden in light mode — it's re-tuned: nebula switches to `mix-blend-mode: multiply` at lower opacity (0.32 vs 0.65 dark), starfield switches to `multiply` blend so accent-tinted dots read against a light background, and **comets are hidden entirely** (`opacity: 0`) since thin bright streaks don't read well on a light background.

### Reduced motion

Two layers of protection:
1. `stars.css:151-164` — a scoped rule specifically for the galaxy: stars stop animating (remain static, still visually present) and comets are `display: none` entirely.
2. `global.css:322-338` — a **global, universal** rule collapsing every animation/transition on the page to near-instant (`0.01ms`) under `prefers-reduced-motion: reduce`. This also covers UI micro-interactions outside the galaxy (hover states, focus rings still change, just instantly).

One piece of reduced-motion handling lives outside CSS entirely: the About page's travel-gallery auto-rotation checks the media query in its own JS and skips `setInterval` accordingly (this is why a visible Pause/Play button also exists — WCAG 2.2 SC 2.2.2, fixed under UI/AUD phase 4).

---

## 3. Page shell (`SiteLayout.astro`)

`<html data-theme="dark" data-accent="pluto" data-bgfx="on">` — these three data attributes drive the entire visual system and are set two ways: an inline pre-paint script reads `localStorage` and applies them before first paint (avoids a flash of the wrong theme), and a body-end script wires up the actual toggle controls (theme popover, accent swatches, mobile drawer) and persists changes back to `localStorage`.

**Container system:** `.wrap { max-width: 1180px; margin: 0 auto; padding: 28px 44px; }` — this is the outer shell (header/main/footer all get `.wrap`). Individual pages additionally use a `var(--content, 1100px)` fallback for their own inner content width — note `--content` is **never actually declared** anywhere as a real custom property; every page just relies on the `1100px` fallback. It functions as a phantom token today; if it's ever meant to vary per-page, it would need an actual declaration.

**Glass/panel treatment — deliberately not stacked:**
- `.nav`, `header.wrap`, `.popover` use `backdrop-filter: blur(10px)` — true glass.
- `main.wrap.main` (the big content panel most pages render inside) uses a **solid, tinted background with no `backdrop-filter`** (`rgb(var(--bg) / 0.88)` dark, `rgb(var(--card) / 0.94)` light). This is intentional — stacking blur inside a fixed background element re-composites every scroll frame and was the root cause of a prior scroll-jank regression (fixed 2026-06-25). No component should add its own `backdrop-filter` inside `.main` — see UI-005 (a project detail page previously stacked an opaque dark layer on top of this panel and produced a near-black surface).

**Accessibility baked into the shell:** a real skip-link (`#main-content`, keyboard-focusable, visually hidden until focused), `aria-expanded`/`aria-pressed`/`aria-label`/`aria-controls`/`role="group"` on every interactive chrome control (theme popover, accent swatches, mobile menu), and explicit accent-colored `:focus-visible` outlines throughout — never relying on the browser default outline alone.

**The layout's own breakpoint:** exactly one value, `720px`, used twice (popover full-width, nav → mobile drawer). This is the only breakpoint the shell itself defines; individual pages define their own separately (see §5).

---

## 4. Typography hierarchy

There is no single global type-scale token list (no `--fs-*` custom properties) — sizes are set per-component, but a consistent rhythm emerges:

| Context | Size |
|---|---|
| Hero `h1` (homepage) | `clamp(52px, 5vw, 68px)` |
| Project detail `h1` | `44px`, `font-weight: 800`, accent-colored |
| Research detail `h1` | `clamp(26px, 4vw, 38px)` — smaller and fluid, default text color (a deliberate contrast with project's bold accent treatment — see §6) |
| Section header (`.rHead`, `.cvSectionTitle`, `.serviceTitle`, block `h2`) | 13–18px range, `font-weight: 700`, tight/negative letter-spacing (`-0.01em` to `-0.03em`) |
| Body/prose text | 13–15.5px |
| Small labels/chips/badges | 11–13px |

**Global rule:** `h1, h2, h3 { letter-spacing: -0.02em; text-wrap: balance; }` applies sitewide (`global.css:37-42`) — headings never wrap awkwardly on the last word. Not applied to `h4`–`h6` or `p`.

---

## 5. Breakpoints

There is **no shared breakpoint token or variable** — every page hardcodes its own pixel values. The actual distinct values in use, site-wide: `480, 600, 620, 640, 720, 760, 860, 980`. They cluster loosely (small-mobile fixes around 620–640px, tablet/2-column splits around 760–980px) but are not standardized — e.g. the homepage uses 620/860 where the About and project-detail pages use 760/980. This is a known area of drift, not a deliberate two-tier or three-tier system. New pages should prefer the closest existing value rather than introducing a new one.

---

## 6. Anti-patterns this site deliberately avoids

These were real regressions found and fixed in past audits (Phase 4, AUD2 sweep, UI sweep). Do not reintroduce them:

- **Uppercase + wide-tracking "eyebrow" headers.** Confirmed zero instances of `text-transform: uppercase` anywhere in `src/` as of this audit. Section headers use weight + color + tight (negative) letter-spacing instead.
- **Side-stripe accent borders on cards** (`::before { border-left: 3px }`) — removed site-wide (was on `.weCard`).
- **`rgba(var(--x), N)`** — invalid CSS; custom properties expanding to space-separated triplets cannot be consumed by the `rgba()` function. Use `rgb(var(--x))` or `rgb(var(--x) / N)` or `color-mix(...)`.
- **`backdrop-filter` stacked on top of another `backdrop-filter` panel** — causes visible near-black/over-dark surfaces and scroll-jank. The shell's main panel is deliberately solid, not glass, for exactly this reason.
- **Hardcoded `rgba(255,255,255,0.02)`-style surface tints instead of `var(--card-bg)`** — mostly migrated (29+ call sites), a few holdouts remain (see §1). Prefer the token for any new surface.
- **CSS `filter: blur()` for soft glows on frequently-animated elements** — replaced with `radial-gradient` glows (comet trails), which composite more cheaply.

## 7. Known, un-fixed inconsistencies (honest inventory, not a to-do list)

Documented here so future work doesn't "rediscover" these as new bugs:

1. Two coexisting alpha-blend idioms (`color-mix(...)` vs `rgb(var(--x) / N)`) — both valid, not unified.
2. `--content` custom property is referenced everywhere via `var(--content, 1100px)` but never actually declared — the fallback is the only value that ever applies.
3. Breakpoint values are not standardized across pages (§5).
4. A handful of hardcoded `rgba()` surface tints remain outside `--card-bg` (§1).
5. `.nebula`'s purple wash layer is hardcoded and does not follow the selected accent planet, unlike the rest of the nebula gradients.

---

*Last verified against source: 2026-08-24 (roadmap UI-013).*
