# docs/task-routing.md

Decision table for every task category. Follow this to limit reads to 2–4 files maximum.  
Format: **Read → Edit → Verify**

---

## SEO

### Add/fix meta tags (title, description, OG, Twitter card, canonical)
- **Read:** `src/layouts/SiteLayout.astro` (lines 1–50, the `<head>` section)
- **Edit:** `src/layouts/SiteLayout.astro`
- **Verify:** `npm run build` — inspect `./dist/index.html` for rendered meta

### Add sitemap
- **Read:** `astro.config.mjs`
- **Action:** Install `@astrojs/sitemap`, add to integrations array — requires user approval for package install
- **Edit:** `astro.config.mjs`
- **Verify:** `npm run build` — check `./dist/sitemap-index.xml` exists

### Add robots.txt
- **No reads needed**
- **Edit:** Create `public/robots.txt` (static files in `public/` are copied as-is)
- **Verify:** `npm run build` — check `./dist/robots.txt` exists

### Add JSON-LD structured data
- **Read:** `src/layouts/SiteLayout.astro` (head section), `src/pages/index.astro` (for Person schema context)
- **Edit:** `src/layouts/SiteLayout.astro` (global schema) and/or individual page files (page-specific schema)
- **Verify:** `npm run build` — validate output with Google Rich Results Test

### Fix/improve page descriptions for SEO
- **Read:** the specific page file (e.g., `src/pages/projects/index.astro` — check the `<SiteLayout description=...>` prop)
- **Edit:** the specific page file's `description` prop passed to `<SiteLayout>`
- **Verify:** `npm run build`

---

## Content

### Edit an existing project
- **Read:** `src/content/projects/[filename].mdx` only
- **Edit:** that file
- **Verify:** `npm run build` (schema validation)

### Add a new project
- **Read:** `src/content/config.ts` (projects schema — for field reference), one existing project MDX as template
- **Edit:** Create `src/content/projects/[new-slug].mdx`
- **Verify:** `npm run build` — new route `/projects/[slug]` should appear in build output

### Edit an existing research item
- **Read:** `src/content/research/[filename].mdx` only
- **Edit:** that file
- **Verify:** `npm run build`

### Add a new research item
- **Read:** `src/content/config.ts` (research schema), one existing research MDX as template
- **Edit:** Create `src/content/research/[new-slug].mdx`
- **Verify:** `npm run build`

### Edit an existing timeline entry (work/education)
- **Read:** `src/content/timeline/[filename].mdx` only
- **Edit:** that file
- **Verify:** `npm run build`

### Add a new timeline entry
- **Read:** `src/content/config.ts` (timeline schema), one existing timeline MDX as template
- **Edit:** Create `src/content/timeline/[new-slug].mdx`, add org logo to `src/assets/organizations/` if needed
- **Verify:** `npm run build`

### Archive a content item (hide without deleting)
- **No reads needed**
- **Edit:** Move the MDX file from its collection folder into `src/content/archive/`
- **Verify:** `npm run build` — item should no longer appear

### Update research paper status (in-progress → published)
- **Read:** `src/content/research/[filename].mdx` (confirm current status)
- **Edit:** change `status:` field in frontmatter
- **Verify:** `npm run build`

---

## Styling

### Change a global color, spacing, or radius
- **Read:** `src/styles/theme.css` (CSS variable definitions)
- **Edit:** `src/styles/theme.css`
- **Verify:** `npm run dev` — visual check

### Change the dark/light mode palettes
- **Read:** `src/styles/theme.css` (`[data-theme="dark"]` and `[data-theme="light"]` blocks)
- **Edit:** `src/styles/theme.css`
- **Verify:** `npm run dev` — toggle both modes

### Change planet accent colors
- **Read:** `src/styles/theme.css` (`:root` block with `--color-*` variables)
- **Edit:** `src/styles/theme.css`
- **Verify:** `npm run dev` — cycle through accents

### Change background animation (stars/nebula/comets)
- **Read:** `src/styles/global.css` (`.bgfx`, `.nebula`, `.starfield`, `.comets`, `.comet` classes), `src/styles/stars.css`
- **Edit:** `src/styles/global.css` or `src/styles/stars.css`
- **Verify:** `npm run dev` — toggle bgfx on/off

### Change page-specific styling (one page only)
- **Read:** the target page file — the scoped `<style>` block is at the bottom
- **Edit:** the scoped `<style>` block in that page file
- **Verify:** `npm run dev`

### Change nav / header / footer styling
- **Read:** `src/layouts/SiteLayout.astro` (scoped `<style>` block at bottom, ~lines 408–877)
- **Edit:** `src/layouts/SiteLayout.astro`
- **Verify:** `npm run dev`

### Change theme popover styling or behavior
- **Read:** `src/layouts/SiteLayout.astro` (popover HTML ~lines 107–183, JS ~lines 252–390, CSS ~lines 611–836)
- **Edit:** `src/layouts/SiteLayout.astro`
- **Verify:** `npm run dev` — open theme popover, test all interactions

### Change prose / markdown content typography
- **Read:** `src/styles/prose.css`
- **Edit:** `src/styles/prose.css`
- **Verify:** `npm run dev` — visit a project detail page

---

## New Page / Route

### Add a static page (no content collection)
- **Read:** `src/layouts/SiteLayout.astro` (props: title, description, hideNavOnMobile), `src/pages/about.astro` (use as structural reference)
- **Edit:** Create `src/pages/[new-route].astro`
- **Verify:** `npm run build` — new route should appear in build output

### Add a dynamic route page (content-collection-backed)
- **Read:** `src/pages/projects/[slug].astro` (pattern reference), `src/content/config.ts` (schema)
- **Edit:** Create `src/pages/[collection]/[slug].astro` with `getStaticPaths()`
- **Verify:** `npm run build` — all expected routes in output

### Add research detail pages (`/research/[slug]`)
- **Read:** `src/pages/projects/[slug].astro` (copy pattern), `src/content/config.ts` (research schema), `src/pages/research/index.astro` (update card links)
- **Edit:** Create `src/pages/research/[slug].astro`, update `src/pages/research/index.astro` to add `href` to cards
- **Verify:** `npm run build` + `npm run preview`

---

## Bug Fix

### Nav / mobile drawer not working
- **Read:** `src/layouts/SiteLayout.astro` — inline `<script>` section, specifically the `menuBtn` / `drawer` block (~lines 212–249)
- **Edit:** `src/layouts/SiteLayout.astro`

### Theme popover not working
- **Read:** `src/layouts/SiteLayout.astro` — inline `<script>`, `openPop` / `closePop` / `togglePop` block (~lines 250–290)
- **Edit:** `src/layouts/SiteLayout.astro`

### Work/Education expand not working
- **Read:** `src/pages/index.astro` — inline `<script>` in the work/edu section (~lines 386–442)
- **Edit:** `src/pages/index.astro`

### Org logo not showing for a timeline entry
- **Read:** `src/content/timeline/[filename].mdx` (check `iconText` value)
- **Check:** `src/assets/organizations/` — confirm a `.png` file exists with the exact same name as `iconText`
- **Fix:** Either correct `iconText` or add the missing PNG

### Content not appearing on a page
- **Read:** `src/content/config.ts` (check schema for required vs optional fields), then the specific MDX file
- **Run:** `npm run build` — schema validation errors will pinpoint the problem

### Project detail page shows wrong prev/next
- **Read:** `src/pages/projects/[slug].astro` (~lines 24–35, the ordering + index logic)
- **Edit:** `src/pages/projects/[slug].astro`

### Style not applying as expected
1. Check scoped `<style>` block in the page file first
2. Check `src/styles/global.css` for overrides
3. Confirm CSS variable names match `src/styles/theme.css`

---

## Performance / Infrastructure

### Reduce unused dependencies
- **Read:** `package.json`
- **Known issue:** `leaflet` is installed but used nowhere — removal requires user approval

### Add analytics
- **Read:** `src/layouts/SiteLayout.astro` (head section — where the script tag goes)
- **Edit:** `src/layouts/SiteLayout.astro`

### Review/update deployment pipeline
- **Read:** `.github/workflows/deploy.yml`
