# docs/graphify-memory-map.md

File dependency graph for this repository. Use this instead of running `Glob **/*`.  
Each section answers: "If my task touches X, which files do I need to read?"

---

## Layer Architecture

```
[Config]
astro.config.mjs          ← Astro site URL, integrations (mdx, react)
package.json              ← dependencies, scripts

[Deployment]
.github/workflows/deploy.yml  ← build + GH Pages deploy on push to main

[Layout — wraps every page]
src/layouts/SiteLayout.astro
  ├── imports → src/styles/global.css
  │                 ├── src/styles/theme.css    (CSS vars, accent palette)
  │                 ├── src/styles/stars.css    (nebula, starfield, comets)
  │                 └── src/styles/prose.css    (markdown typography)
  ├── provides → <slot> (all page body content)
  ├── provides → fixed header: nav, logo, desktop links, mobile drawer, theme popover
  ├── provides → footer: copyright line
  ├── provides → bgfx layer: nebula + starfield + comets (togglable)
  ├── provides → inline <script>: theme persistence (localStorage → data-* attributes)
  ├── provides → inline <script>: nav drawer toggle, theme popover, accent swatches
  └── accepts props: title, description, hideNavOnMobile

[Pages]
src/pages/index.astro
  ├── uses → SiteLayout (title, description)
  ├── uses → getCollection("projects") filtered to featured, sorted by order
  ├── uses → getCollection("timeline") split into work/education, sorted by order
  ├── uses → import.meta.glob("../assets/organizations/*.png") → org logos map
  └── contains → hero, work/edu tabs, featured projects grid, skills section

src/pages/about.astro
  ├── uses → SiteLayout
  ├── uses → ImageCarousel (client:idle) ← src/components/ImageCarousel.tsx
  ├── uses → import.meta.glob("../assets/about/*.{jpg,...}") → carousel images
  └── uses → import.meta.glob("../assets/places/*.{jpg,...}") → rotating gallery

src/pages/resume.astro
  ├── uses → SiteLayout
  └── uses → public/Alan_Palayil_Resume.pdf (iframe src)

src/pages/projects/index.astro
  ├── uses → SiteLayout
  └── uses → getCollection("projects") → split into featured + rest, sorted by order

src/pages/projects/[slug].astro
  ├── uses → SiteLayout
  ├── uses → getCollection("projects") → generates one static route per project
  └── renders → highlights, links, impact (from frontmatter) + MDX body + prev/next nav

src/pages/research/index.astro
  ├── uses → SiteLayout
  └── uses → getCollection("research") → sorted by status rank then order

[Components]
src/components/ImageCarousel.tsx
  ├── React + Swiper (EffectCards + Autoplay modules)
  └── used only by → src/pages/about.astro

[Content Collections]
src/content/config.ts
  ├── defines Zod schema for: projects, research, timeline
  └── must be read when: adding new frontmatter fields, debugging schema errors

src/content/projects/ (7 files)
  ├── [featured] work-derivatives-legacy-prj.mdx    order:2
  ├── [featured] work-cml-json-prj.mdx              order:3
  ├── [featured] work-custody-bank-files-prj.mdx    order:1
  ├── college-ai-edge-computing.mdx                 order:4, featured:false
  ├── college-application-development.mdx           featured:false
  ├── college-convo-care.mdx                        featured:false
  ├── personal-py8085-simulator.mdx                 featured:false
  └── personal-smart-home-hub.mdx                   featured:false

src/content/research/ (4 files)
  ├── enterprise-risk-management-strategy.mdx  status:in-progress [should be published]
  ├── fuel-price-forecasting-holidays.mdx      status:in-progress [should be published]
  ├── hybrid-disaster-recovery-plan.mdx        status:in-progress [should be published]
  └── example.mdx                              PLACEHOLDER — remove or complete

src/content/timeline/ (7 files)
  ├── [work]  work-genworth-p2.mdx   order:40  current role
  ├── [work]  work-genworth-p1.mdx   order:30
  ├── [work]  work-ithena-fs.mdx     order:10  internship
  ├── [edu]   edu-phd.mdx            order:40  UC, in progress
  ├── [edu]   edu-ms.mdx             order:30  IIT
  ├── [edu]   edu-bs.mdx             order:20  IIT
  └── [edu]   edu-hs.mdx             order:?   (unread — likely high school)

src/content/archive/ (NOT a registered collection — files here do not render)
  ├── college-operating-system.mdx
  └── work-iit.mdx

[Static Assets]
public/
  ├── Alan_Palayil_Resume.pdf
  ├── favicon.svg / favicon-light.png / favicon-dark.png
  ├── logo.svg
  └── papers/
      ├── ITS-834-Hybrid-DR-Plan.pdf
      ├── ITS-835-ERM-Strategic-Enabler.pdf
      └── ITS-836-Fuel-Price-Forecasting.pdf

src/assets/
  ├── about/   alan-1.jpg … alan-4.jpg           (ImageCarousel source)
  ├── organizations/  Agnels.png Genworth.png IIT.png ithena.png UC.png
  └── places/  19 travel photos (rotating gallery on /about)
```

---

## Task → Files Lookup

### "I need to edit the nav / header / footer"
Read only: `src/layouts/SiteLayout.astro`

### "I need to edit SEO meta tags / OG / Twitter card"
Read only: `src/layouts/SiteLayout.astro` (the `<head>` section)  
If adding sitemap integration: also `astro.config.mjs`

### "I need to edit the homepage hero / skills / featured projects"
Read only: `src/pages/index.astro`

### "I need to edit the about page"
Read only: `src/pages/about.astro`  
If carousel images change: `src/assets/about/` directory listing

### "I need to edit the resume page"
Read only: `src/pages/resume.astro`

### "I need to edit a specific project's content"
Read only: `src/content/projects/[filename].mdx`  
If schema field is new: also `src/content/config.ts`

### "I need to edit all projects listing page"
Read only: `src/pages/projects/index.astro`

### "I need to edit a project detail page template"
Read only: `src/pages/projects/[slug].astro`

### "I need to edit research content"
Read only: `src/content/research/[filename].mdx`  
If adding detail pages: also `src/pages/research/index.astro` + `src/content/config.ts`

### "I need to edit a timeline entry (work/education)"
Read only: `src/content/timeline/[filename].mdx`

### "I need to edit global colors / accent system"
Read only: `src/styles/theme.css`

### "I need to edit global layout / spacing / link styles"
Read only: `src/styles/global.css`

### "I need to edit the background animation (stars/nebula/comets)"
Read only: `src/styles/stars.css`

### "I need to edit prose / markdown typography"
Read only: `src/styles/prose.css`

### "I need to add a new page"
Read: `src/layouts/SiteLayout.astro` (props), one existing page as reference (e.g., `src/pages/about.astro`)

### "I need to add a new content collection"
Read: `src/content/config.ts`

### "I need to debug JS behavior (nav, theme, expand/collapse)"
Read: `src/layouts/SiteLayout.astro` (inline `<script>` at bottom)  
For homepage accordion: `src/pages/index.astro` (inline `<script>` in work/edu section)

### "I need to understand Astro config / integrations"
Read only: `astro.config.mjs`

### "I need to understand the deployment pipeline"
Read only: `.github/workflows/deploy.yml`
