# docs/guidelines.md

Design system, CSS conventions, content schema reference, and code patterns for this repository.

---

## CSS Conventions

### Rule: Scoped styles, not Tailwind
All styles are written in scoped `<style>` blocks inside `.astro` files, or in the four global CSS files.  
Tailwind CSS 4 is installed as a dependency but **zero utility classes appear in any markup**. Do not introduce Tailwind classes — continue using scoped CSS.

### Global CSS files (read for global changes, not page-specific)
| File | Scope |
|---|---|
| `src/styles/theme.css` | CSS variables: `--bg`, `--text`, `--muted`, `--card`, `--border`, `--accent`, `--r`, planet color palette |
| `src/styles/global.css` | Base reset, body/html, global link/button/card hover system, bgfx layer z-index |
| `src/styles/stars.css` | Nebula, starfield, comet animations |
| `src/styles/prose.css` | Typography / markdown prose styles |

### CSS variable reference
```css
rgb(var(--bg))        /* page background */
rgb(var(--text))      /* primary text */
rgb(var(--muted))     /* secondary/subdued text */
rgb(var(--card))      /* card/surface background */
rgb(var(--border))    /* border color */
rgb(var(--accent))    /* current planet accent color */
var(--r)              /* border-radius: 18px */
```

All colors are declared as space-separated RGB triplets so they can be used with `rgb()` and `rgba()` / `color-mix()`:
```css
background: rgb(var(--card) / 0.72);          /* alpha transparency */
color: color-mix(in srgb, rgb(var(--accent)) 65%, rgb(var(--muted)));
```

### Theme system
- Dark mode: `<html data-theme="dark">` — default
- Light mode: `<html data-theme="light">`
- Accent: `<html data-accent="[planet]">` — values: `mercury venus earth mars jupiter saturn uranus neptune pluto`
- Background effect: `<html data-bgfx="on|off">`
- Theme persists via `localStorage` — restoration script runs inline in `SiteLayout.astro` before paint

### Responsive breakpoints (in use across the codebase)
- `max-width: 720px` — mobile nav (hide desktop links, show hamburger)
- `max-width: 620px` — typography adjustments, stack flex rows
- `min-width: 860px` — 3-column grid (projects, skills)
- `min-width: 980px` — 2-column layout (project detail aside, about heroGrid)

### Do not use `text-align: justify`
Justified text creates word-spacing rivers on the web — this is flagged as a UX issue. Use `text-align: left` (browser default) or remove the rule.

---

## Content Schema Reference

### projects collection (`src/content/projects/*.mdx`)
```yaml
title: string           # required
summary: string         # required — one sentence shown on cards
tech: string[]          # required — shown on cards and detail pages
featured: boolean       # default false — controls homepage and section grouping
order: number           # default 0 — higher = shown first (within featured/non-featured groups)
highlights: string[]    # default [] — bullet list shown before prose body
impact: string[]        # default [] — bullet list shown after highlights
role: string            # optional — shown as chip on detail page
tags: string[]          # default [] — shown as chip on detail page
links: [{label, url}]   # default [] — shown as links on detail page
date: string            # optional
slug: string            # optional — overrides file-derived slug
```

### research collection (`src/content/research/*.mdx`)
```yaml
title: string                              # required
summary: string                            # required
status: published|submitted|in-progress    # default in-progress
area: string[]                             # default [] — e.g. ["AI","Data Science"]
relevance: string                          # optional — why it matters professionally
links: [{label, url}]                      # default [] — use for PDF links
order: number                              # default 0
date: string                               # optional
```

### timeline collection (`src/content/timeline/*.mdx`)
```yaml
kind: work|education    # required
title: string           # required — role or degree
org: string             # required — company or university
orgUrl: string          # optional — linked on org name
location: string        # optional — "City, ST (Remote/Hybrid/In-Person)"
dates: string           # required — "Month YYYY – Month YYYY" or "In progress"
subtitle: string        # optional — one-line summary always visible
bullets: string[]       # default [] — expandable detail bullets
iconText: string        # default "•" — must match a filename in src/assets/organizations/ (without .png)
order: number           # default 0 — higher = shown first
```

---

## Component Conventions

### When to use Astro components (`.astro`) vs React (`.tsx`)
- **Astro:** everything that is static or server-rendered. Zero client-side JS by default.
- **React:** only for interactive components that need state or event-driven behavior. Currently only `ImageCarousel.tsx`.
- When mounting a React component, use Astro's `client:idle` (loads after page is interactive) unless immediate load is required.

### ImageCarousel props
```typescript
images: string[]       // array of image src URLs
altPrefix?: string     // default "Alan photo" — prefixed to slide index for alt text
```

### Organization logo loading pattern (index.astro, homepage)
```javascript
const orgLogoModules = import.meta.glob("../assets/organizations/*.png", { eager: true });
// Produces map: { "Genworth": "/path/Genworth.hash.png", "IIT": "...", ... }
// iconText in timeline frontmatter must match the filename without .png extension
```

### Place image loading pattern (about.astro)
```javascript
const modules = import.meta.glob("../assets/places/*.{jpg,jpeg,png,webp,avif}", { eager: true });
// File name (without extension, dashes/underscores → spaces) becomes the image label
```

---

## Layout Props

`SiteLayout.astro` accepts:
```typescript
title: string              // <title> tag content
description?: string       // <meta name="description"> — provide on every page
hideNavOnMobile?: boolean  // default false
```

---

## Naming Conventions

### Content files
- `work-[company]-[descriptor].mdx` — work projects
- `college-[descriptor].mdx` — college projects
- `personal-[descriptor].mdx` — personal projects
- `edu-[level].mdx` — education timeline entries (`bs`, `ms`, `phd`, `hs`)
- `work-[company]-[role-abbrev].mdx` — work timeline entries

### Organization logos
Filename must match `iconText` in timeline frontmatter exactly (case-sensitive, no extension):
- `Genworth.png` → `iconText: "Genworth"`
- `IIT.png` → `iconText: "IIT"`
- `UC.png` → `iconText: "UC"`
- `ithena.png` → `iconText: "ithena"`
