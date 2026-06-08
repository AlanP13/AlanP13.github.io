# docs/instructions.md

Operational rules for working on this repository. Read this before making structural changes.

---

## Working Rules

### What you may freely edit
- `docs/` — all documentation files in this directory
- `src/content/**/*.mdx` — content files (projects, research, timeline)
- `src/pages/**/*.astro` — page files
- `src/layouts/SiteLayout.astro` — master layout
- `src/components/**` — components
- `src/styles/**/*.css` — style files
- `CLAUDE.md` — router file

### What requires explicit user instruction before editing
- `src/assets/` — image assets (adding new images is usually fine; removing requires confirmation)
- `public/` — static files (PDFs, favicons, logo)
- `package.json` — dependencies
- `astro.config.mjs` — Astro configuration (needed for sitemap integration, etc.)
- `.github/workflows/deploy.yml` — deployment pipeline

### What you must not edit without being told to
- Any file not listed above that exists in the repository
- Git history, branch structure, remote configuration

---

## Development Workflow

### Local testing
```bash
npm run dev      # Start dev server, auto-rebuilds on file save
npm run build    # Validate full production build (catches schema errors, type errors)
npm run preview  # Serve ./dist/ locally to test built output
```

Always run `npm run build` after content schema changes to confirm no validation errors.

### Deployment
Push to `main` → GitHub Actions builds Astro → deploys to GitHub Pages in ~2–3 min.  
No manual deploy steps. Deployment config is in `.github/workflows/deploy.yml`.

---

## Content Update Workflow

### Adding a project
1. Create `src/content/projects/[slug].mdx`
2. Required frontmatter: `title`, `summary`, `tech[]` — see `docs/guidelines.md` for full schema
3. Set `featured: true` + `order: N` to control homepage visibility and position
4. Run `npm run build` to confirm schema validation passes

### Adding a research item
1. Create `src/content/research/[slug].mdx`
2. Set `status` to `published`, `submitted`, or `in-progress`
3. If a PDF exists, place it in `public/papers/` and link via the `links` frontmatter array
4. Run `npm run build` to confirm

### Adding a timeline entry
1. Create `src/content/timeline/[slug].mdx`
2. Set `kind` to `work` or `education`
3. Set `order` (higher = appears first): current convention is work-p2=40, edu-phd=40, work-p1=30, edu-ms=30, edu-bs=20, ithena=10
4. Add an org logo PNG to `src/assets/organizations/[OrgName].png` and set `iconText: "OrgName"` to match

### Removing archived content
The `src/content/archive/` directory is NOT a registered collection — files there do not render.  
To archive a project or research item, move its MDX file to `src/content/archive/`.

---

## Things to Avoid

- Do not run `Glob **/*` to explore the repo — use `docs/graphify-memory-map.md` instead
- Do not duplicate CSS into `global.css` if it belongs scoped to one page
- Do not add npm packages without confirming with the user (Leaflet is already an unused dependency — do not add more dead weight)
- Do not hardcode image URLs — use `import.meta.glob()` patterns already established
- Do not add `// comments` to explain what code does — only add a comment when the WHY is non-obvious
