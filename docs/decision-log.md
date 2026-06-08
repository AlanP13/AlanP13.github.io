# docs/decision-log.md

Architectural decisions and their rationale. Read this before proposing changes to the tech stack, build system, or structural patterns.

---

## Active Decisions

### D-001 — Astro as the framework
**Decision:** Use Astro 5 for the portfolio site.  
**Rationale:** Portfolio is primarily static content with one interactive component. Astro ships zero JavaScript by default — React only loads for the carousel. This gives fast TTFB and good Core Web Vitals without the overhead of a full SPA framework.  
**Consequence:** No server-side rendering, no serverless functions — this is a fully static site. Any feature requiring runtime computation (contact form submissions, dynamic content) needs a third-party service (e.g., Formspree for forms).

### D-002 — Scoped CSS over Tailwind
**Decision:** All styles are written in scoped `<style>` blocks inside `.astro` files, with shared design tokens in `src/styles/theme.css`.  
**Rationale:** Tailwind 4 is installed but not used. The CSS variable system (`--accent`, `--bg`, `--card`, etc.) enables the theme/accent system with far fewer classes than Tailwind would require. The planet accent system requires dynamic `rgb(var(--accent))` references that Tailwind's JIT cannot statically generate.  
**Consequence:** If Tailwind is ever adopted in markup, the design token system must remain in `theme.css` and Tailwind must be configured to use those CSS variables as its color palette. Do not replace the CSS variable system with Tailwind hardcoded colors.

### D-003 — Planet accent color system
**Decision:** 9 accent colors named after planets (Mercury–Neptune + Pluto), controlled via `data-accent` on `<html>`, persisted in `localStorage`.  
**Rationale:** Design identity choice — distinctive, memorable, and technically interesting. The planet naming is used throughout the theme picker UI.  
**Known issue:** `pluto` is the default accent (set in the initial `<html>` tag) but has no swatch button in the theme picker UI — it can be reached through localStorage or the default only. This is a known gap (P1-UX-004 in roadmap).

### D-004 — MDX Content Collections
**Decision:** All content (projects, research, timeline) is stored in MDX files with Zod-validated frontmatter in `src/content/`.  
**Rationale:** Type-safe content management with build-time validation. Adding a new project = adding one MDX file; no CMS required. Zod schemas catch errors at build time before deployment.  
**Consequence:** Changing a frontmatter field requires updating `src/content/config.ts` first or builds will fail.

### D-005 — GitHub Pages over Netlify/Vercel
**Decision:** Deploy to GitHub Pages via GitHub Actions.  
**Rationale:** Free, integrated with the repository, no third-party account dependency. The site is fully static so no server-side features are needed from Netlify/Vercel.  
**Consequence:** No edge functions, no server-side rendering, no dynamic route handling at deploy time. Everything must be statically generated.

### D-006 — React only for ImageCarousel
**Decision:** React is only used for `ImageCarousel.tsx`, loaded with `client:idle`.  
**Rationale:** The carousel requires Swiper's JS module (EffectCards, Autoplay) which is complex enough to warrant a React component. All other interactive elements (nav drawer, theme picker, work accordion) are implemented with vanilla JS inside `<script is:inline>` blocks in `.astro` files.  
**Consequence:** Do not reach for React for new interactive features unless the complexity clearly exceeds what vanilla JS can cleanly handle. Adding more React components increases the client-side bundle size.

### D-007 — Archive directory for hidden content
**Decision:** `src/content/archive/` is used to hold MDX files that should not render but should be preserved.  
**Rationale:** The `archive` directory is not registered in `src/content/config.ts` as a collection, so files there are ignored by Astro's content system. This is preferable to deleting content.  
**Currently archived:** `college-operating-system.mdx`, `work-iit.mdx`

---

## Pending Decisions

### PD-001 — What to do with Tailwind
**Status:** Undecided.  
**Options:**
1. Remove Tailwind from `package.json` and stop paying the dependency cost (preferred if no plan to use it)
2. Adopt Tailwind and migrate scoped CSS to utility classes (large effort, not recommended given the CSS variable theme system)
3. Keep as-is (current state — installed but unused)  
**Note:** Discuss with user before acting.

### PD-002 — What to do with Leaflet
**Status:** Undecided.  
**Context:** Leaflet 1.9.4 is in `dependencies` but does not appear in any source file. It was likely installed speculatively for a future feature (interactive location map on About page, perhaps).  
**Options:** Remove it (saves ~45KB in bundle analysis) or implement the feature it was installed for.  
**Note:** Removal requires user approval. See P2-PERF-001 in roadmap.

### PD-003 — Space/planet theme long-term direction
**Status:** Undecided.  
**Context:** The theme is distinctive and technically impressive but may not align with enterprise/financial industry positioning. A hiring manager at a large financial institution may read it as "playful creative project" rather than "serious enterprise engineer."  
**Options:** Keep as-is, offer a "professional mode" variant, or redesign with a more refined aesthetic.  
**Note:** See P3-VISUAL-001 in roadmap. Discuss with user before any visual direction change.

### PD-004 — Resume page approach
**Status:** Undecided.  
**Context:** Current implementation is a PDF iframe — invisible to search engines and broken on iOS Safari.  
**Options:**
1. HTML resume rendered in the browser with PDF download link (SEO-friendly, mobile-safe)
2. Keep PDF iframe but add a mobile fallback ("Open PDF →" link only on mobile)
3. Hybrid: inline HTML summary + embedded PDF below  
**Note:** See P3-UX-002 in roadmap. Discuss with user before implementing.

---

## Overturned Decisions

*None yet.*
