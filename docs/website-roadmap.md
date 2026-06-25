# Website Roadmap — Alan Palayil Portfolio

Master backlog for https://alanp13.github.io  
Last full audit: **2026-06-25** (comprehensive audit — content + UI; filter/sort; anti-pattern sweep; a11y + perf fixes)  
Repository baseline: June 2026.

This is a public repository. Keep this document limited to public-safe website
implementation work. Confidential career strategy, legal planning, compensation
evidence, employer-sensitive metrics, and private project details are maintained
outside this repository.

---

## Status key

| Symbol | Meaning |
|---|---|
| `[ ]` | Not started |
| `[>]` | Next — highest unblocked priority |
| `[~]` | Partially complete or blocked on external action |
| `[x]` | Complete |
| `DEFERRED` | Intentionally paused; trigger condition listed |

## Priority key

| Level | Definition |
|---|---|
| **P0** | Broken or actively misleading — fix immediately |
| **P1** | Quick win: high impact, low effort (< 1 hr each) |
| **P2** | Meaningful improvement, few hours each |
| **P3** | Strategic investment — longer horizon or content dependency |

**Effort:** XS < 30 min · S 30 min–2 hr · M 2–4 hr · L 4–8 hr · XL 8+ hr

---

## Open Backlog

Ordered within each priority level by impact, then readiness.

### UI and design

| ID | Status | Priority | Effort | Item | Notes |
|---|---|---|---|---|---|
| UI-001 | [x] | P1 | XS | **Galaxy hidden from first-time visitors** — `data-bgfx="off"` HTML default meant no visitor saw the galaxy until they toggled it. Changed default to `"on"`; localStorage still overrides. | `src/layouts/SiteLayout.astro:13` |
| UI-002 | [x] | P1 | S | **Comets never animated** — `@keyframes cometFly` was entirely absent; all three comets permanently at `opacity: 0`. Added keyframes to `stars.css`. | `src/styles/stars.css` |
| UI-003 | [x] | P1 | S | **Star loop break** — `drift1`/`drift2` used `transform: translate3d(-80px, 50px, 0)` / `(70px, -40px, 0)`. Neither is a multiple of tile sizes (283×217, 401×263), causing a visible jump at loop. Switched to `background-position` animation by exactly one tile cycle — wraps natively. | `src/styles/stars.css` |
| UI-004 | [x] | P1 | XS | **Galaxy blocked by body width** — `.main` was `width: 99%` with no centering, covering the full viewport and hiding the `bgfx` layer at all widths. Removed inline width; `max-width: 1180px; margin: 0 auto` via `.wrap` now centers the panel, revealing galaxy at viewports wider than 1180px. | `src/layouts/SiteLayout.astro` |
| UI-005 | [x] | P1 | XS | **Project detail black background** — `.page` inside `projects/[slug].astro` applied `background: rgb(var(--card) / 0.75)` — 75% opaque dark layered on top of the already-dark `main.wrap.main` glass panel, producing a near-black surface. Removed the inner background; the SiteLayout panel provides the glass surface. | `src/pages/projects/[slug].astro` |
| UI-006 | [x] | P1 | XS | **`.chip.featured` CSS syntax bug** — `border-color: rgba(var(--accent), 0.5)` is invalid; `rgba()` cannot consume CSS custom properties that expand to space-separated RGB integers. Border rendered transparent. Fixed to `rgb(var(--accent) / 0.5)`. | `src/pages/projects/[slug].astro` |
| UI-007 | [x] | P2 | XS | **Side-stripe on `.weCard::before`** — `border-left: 3px` accent stripe on work-experience cards, an impeccable absolute ban. Removed entirely. | `src/pages/index.astro` |
| UI-008 | [x] | P2 | XS | **Uppercase eyebrow on `.skillCat h3`** — Six instances of `text-transform: uppercase; letter-spacing: 0.08em` on skill category headings (the AI scaffold reflex). Replaced with `font-size: 13px; font-weight: 700; color: rgb(var(--accent)); letter-spacing: -0.01em`. | `src/pages/index.astro` |
| UI-009 | [x] | P2 | XS | **Flat type hierarchy in SiteLayout** — Multiple adjacent font sizes within the 12–14px band without a ≥1.25× ratio. Resolved to exactly two sizes: 12px (`.skipLink`, `.foot`) and 15px (`.popTitle`) at the 1.25× ratio. | `src/layouts/SiteLayout.astro` |
| UI-010 | [x] | P2 | XS | **Hardcoded `rgba(255,255,255,0.02)` across detail pages** — `.chip`, `.card`, `.projectNavLink`, `.scard`, `.cite-pre` all used hardcoded alpha instead of `--card-bg` token. Token now consistent; light mode surfaces render correctly. | `src/pages/projects/[slug].astro`, `src/pages/research/[slug].astro` |
| UI-011 | [x] | P2 | XS | **Uppercase sidebar labels in detail pages** — `.card h3` ("Key Info"), `.scard h3` ("Publication Details", "Find this work on"), `.projectNavLabel` ("Previous/Next project") all used `text-transform: uppercase; letter-spacing: 0.08em`. Replaced with weight + size hierarchy, tracking tightened to 0.02–0.03em. | Both detail pages |
| UI-012 | [x] | P2 | XS | **`--card-bg` token missing** — Added `--card-bg: rgba(255,255,255,0.02)` (dark) and `rgba(0,0,0,0.02)` (light) to `theme.css`; replaced 12+ hardcoded values site-wide. | `src/styles/theme.css` |
| UI-013 | [ ] | P3 | S | **Document galaxy design system** — Run `/impeccable document` to capture the space theme, token system, and animation spec into `DESIGN.md`. Ensures the visual system is reproducible in future sessions. | — |
| UI-014 | [ ] | P3 | S | **Research detail padding alignment** — Added `padding: 12px 0 48px` to `.page` for breathing room, but could benefit from matching the project detail's layout rhythm more precisely (inner max-width, section breaks). | `src/pages/research/[slug].astro` |

### Anti-patterns — cv / resume / about (not yet addressed)

| ID | Status | Priority | Effort | Item | Notes |
|---|---|---|---|---|---|
| AUD2-001 | [x] | P2 | S | **Uppercase + wide tracking on `resume.astro`** — `.rHead` section titles: `12px 0.12em uppercase` → `13px -0.01em` weight-only; `.skillLabel`: `11px 0.08em uppercase` → `12px weight-600` no tracking. | `src/pages/resume.astro` |
| AUD2-002 | [x] | P2 | S | **Uppercase + wide tracking on `cv.astro`** — `.cvSectionTitle`: `12px 0.1em uppercase` → `13px -0.01em`; `.cvBadge`: `0.04em uppercase` → `weight-700 letter-spacing:0`. | `src/pages/cv.astro` |
| AUD2-003 | [x] | P2 | XS | **Uppercase on `about.astro`** — `.galleryTitle` ("Travel"): uppercase removed, `font-weight: 700` added; `.serviceTitle` ("Leadership & Service"): `13px 0.08em uppercase` → `16px -0.01em`. | `src/pages/about.astro` |
| AUD2-004 | [x] | P2 | XS | **Remaining hardcoded `rgba(255,255,255,0.02)` — about / resume / index** — All 6 instances replaced with `var(--card-bg)`. Light mode now renders correctly on these surfaces. | Multiple files |
| AUD2-005 | [x] | P2 | S | **`resume.astro` missing mid-breakpoint (640–860px)** — Added `@media (max-width: 760px)`: h1 `44px → 36px`, `.skillRow` label column `160px → 120px`. Smoother transition before the 640px collapse. | `src/pages/resume.astro` |
| AUD2-006 | [x] | P3 | XS | **`index.astro` two remaining uppercase instances** — `.credLabel` ("Academic Identity" etc.): `12px 0.05em uppercase` → `13px -0.01em`; `.certCat` category pill: `10px 0.07em uppercase` → `11px weight-600 letter-spacing:0`. | `src/pages/index.astro` |
| AUD2-007 | [x] | P3 | S | **`.comet::after filter: blur(7px)` — lighter glow** — Replaced filter with wider radial-gradient ellipse (`inset: -14px -60px`, two-stop fade). Same visual softness, no filter pass — composites cleanly on integrated GPUs. | `src/styles/global.css` |

### Code quality

| ID | Status | Priority | Effort | Item | Notes |
|---|---|---|---|---|---|
| CQ-001 | [x] | P1 | XS | **Dead JS in research index** — `let activeType`, `typeOk` check, and `wireChips("type-chips", ...)` still present after type-filter removal. `wireChips` silently no-ops but the variable and filter logic are misleading. Remove all three. | `src/pages/research/index.astro` script block |
| CQ-002 | [x] | P1 | XS | **Remove dead `data-type` attribute from research cards** — Cards still emit `data-type={pubType}` even though the type filter no longer exists. Goes with CQ-001. | `src/pages/research/index.astro:97` |
| CQ-003 | [x] | P2 | XS | **Remove unused `.sub` CSS rule in index.astro** — The `.sub` selector is defined in the style block but no element in the JSX uses the `sub` class. Dead CSS. | `src/pages/index.astro` |
| CQ-004 | [x] | P2 | XS | **Fix `byOrderDescThenTitle` forward type reference** — The sort function types its arguments as `(typeof projects)[0]` but `projects` is assigned two lines later. Works at runtime; cleaner to type as `CollectionEntry<"projects">` with an import. | `src/pages/index.astro:24` |
| CQ-005 | [x] | P2 | XS | **Remove undefined `.prose` class from About** — `<div class="left prose">` in about.astro references `.prose` but no such rule exists in the scoped style block. Harmless but should be removed. | `src/pages/about.astro` |

### Content and copy

| ID | Status | Priority | Effort | Item | Notes |
|---|---|---|---|---|---|
| CP-001 | [x] | P1 | XS | **Fix memberships order — most-recent-first on CV and About** — IEEE Member (May 2024–Present) was appended after the older HKN entries on both pages. It should appear first. Correct order: IEEE Member (May 2024–Present) → HKN Internal Secretary (Jan 2022–May 2023) → HKN Member (2021–2023). | `src/pages/cv.astro:117–132`, `src/pages/about.astro:161–177` |
| CP-002 | [x] | P1 | XS | **Research index subtitle — surface published papers** — Currently reads "Applied research work related to AI and Data Science in enterprise systems." Now that 4 papers are Zenodo-published and OpenAIRE-indexed, the subtitle should say so (e.g. "4 papers published via Engineering-to-Research Monograph Series, indexed on Zenodo and OpenAIRE."). | `src/pages/research/index.astro:54–56` |
| CP-003 | [x] | P2 | XS | **CV page meta description — mention publications** — Currently: "PhD candidate in Information Technology…researcher in AI governance." After the CV split, the description should surface "4 Zenodo-published papers" as the lead credential. | `src/pages/cv.astro:25` |
| CP-004 | [x] | P2 | XS | **Research detail page meta description** — `[slug].astro` uses `d.abstract ?? d.summary` as the description. For published papers, the abstract is rich and long. Consider truncating to 155 chars or using a dedicated `short_description` field for meta. | `src/pages/research/[slug].astro:74` |
| CP-005 | [ ] | P2 | S | **Quantified work bullets (2B-002)** — Work experience bullets at Genworth still lack specific numbers (pipeline scale, records/day, error reduction %). Requires user to supply metrics. High recruiter impact. | `src/content/timeline/work-genworth-p1.mdx`, `work-genworth-p2.mdx` |
| CP-006 | [ ] | P2 | S | **Business outcome reframing on work projects (2B-007)** — Project summaries in the projects collection describe what was built, not what changed. Shift to impact framing: cost savings, error reduction, migration scope. Requires user approval of public metrics. | `src/content/projects/work-*.mdx` |

### Structured data and SEO

| ID | Status | Priority | Effort | Item | Notes |
|---|---|---|---|---|---|
| SD-001 | [x] | P1 | XS | **Add `datePublished` to ScholarlyArticle JSON-LD** — The `[slug].astro` schema builder never sets `datePublished` even though `publication_date` is populated in all 4 published MDX files. One line: `if (d.publication_date) schemaObj.datePublished = d.publication_date;` | `src/pages/research/[slug].astro:60–68` |
| SD-002 | [x] | P2 | S | **Link Person schema to ScholarlyArticle records** — The homepage `personSchema` has `sameAs` (LinkedIn, GitHub, ORCID) but no explicit `publication` or `author` links to the 4 ScholarlyArticle pages. Adding these strengthens the Google Knowledge Graph entity. Requires constructing absolute URLs per paper. | `src/pages/index.astro:82–93` |
| SD-003 | [ ] | P3 | M | **Dynamic OG images per research page** — Research detail pages currently share the same static OG image. A per-page card with paper title and DOI would improve social sharing. Trigger: after basic structured data is solid. | `src/pages/research/[slug].astro` |

### Information architecture and navigation

| ID | Status | Priority | Effort | Item | Notes |
|---|---|---|---|---|---|
| IA-001 | [x] | P2 | XS | **Footer ORCID link** — Footer currently: LinkedIn · GitHub · Resume · Email. ORCID should be added; it is the primary academic identity signal and is already in the homepage credCard and research detail pages. | `src/layouts/SiteLayout.astro:339–345` |
| IA-002 | [x] | P2 | XS | **OpenAIRE/indexed language on CV research section** — The CV "Publications" section shows DOIs but doesn't indicate that the papers are OpenAIRE-indexed. A one-line note "Engineering-to-Research Monograph Series — Zenodo community, OpenAIRE-indexed" would strengthen the O1/EB1 signal for anyone reading the CV page directly. | `src/pages/cv.astro` |
| IA-003 | [ ] | P3 | M | **Research distribution links — ResearchGate** — Sidebar on detail pages has a "Find this work on" section that renders conditionally. ResearchGate profile + paper pages still need to be created, then `researchgate_url` populated in each MDX. External action first. | `src/content/research/*.mdx`, `src/pages/research/[slug].astro` |
| IA-004 | [ ] | P3 | L | **Blog / writing section** | Trigger: 2–3 technical posts ready to publish. |
| IA-005 | [ ] | P3 | L | **Case study depth on work projects** — Architecture diagrams, before/after metrics. | Trigger: architecture details approved for public disclosure. |
| IA-006 | [ ] | P3 | M | **Research timeline progression view** | Trigger: after Google Scholar profile active. |
| IA-007 | [ ] | P3 | M | **Speaking / judging / leadership timeline** | Trigger: verified events accumulate. |
| IA-008 | [ ] | P3 | L | **Dedicated AI / Data Platform positioning page** | Trigger: architecture story is ready to tell. |

### Analytics and monitoring

| ID | Status | Priority | Effort | Item | Notes |
|---|---|---|---|---|---|
| AN-001 | [ ] | P3 | S | **Google Search Console + Bing Webmaster Tools submission** — Sitemap is live at `/sitemap-index.xml`. Submit both consoles and monitor indexing of the 4 research detail pages. External action. | — |
| AN-002 | [ ] | P3 | S | **Google Scholar citation monitoring** — Scholar auto-profiles once papers are indexed. Check for auto-generated profile after research pages are indexed; add `google_scholar_url` to MDX and Person schema when available. | — |

---

## External Blockers

Items that are code-ready but waiting on a non-code action.

| ID | Status | Item | Blocking action |
|---|---|---|---|
| EXT-001 | [~] | **ResearchGate profile + paper uploads** — Schema fields and display layer exist on detail pages. Fields empty until profile is created. | User: create ResearchGate profile, upload 4 papers, add `researchgate_url` to each MDX. |
| EXT-002 | [~] | **Google Scholar auto-profile** — Will auto-generate once research detail pages are indexed by Google. | Monitor after Search Console submission. No code change needed. |
| EXT-003 | [~] | **Zenodo coursework reports** — 3 coursework reports in `/archive` are not yet deposited to Zenodo. | User: decide whether to deposit; not required for O1/EB1 since the 4 published monographs already satisfy the scholarly articles criterion. |
| EXT-004 | [~] | **ScholarlyArticle JSON-LD — external canonical URLs** — `sameAs` links to Zenodo and OpenAIRE record pages can be added once the exact canonical record URLs are confirmed. Currently `zenodo_url` is populated; could be added to schema. | Confirm exact Zenodo record canonical URL format; add `sameAs: [d.zenodo_url]` to schema builder. Small code change, unblocked now. |

---

## Deferred

| ID | Item | Trigger to reopen |
|---|---|---|
| DEF-001 | **Private project showcase** — Confidential Genworth project details. Public scope not yet approved. Do not add until a non-sensitive description and artifact are available. | Public description and security review approved. |
| DEF-002 | **SSRN submission** — Schema field exists (`ssrn_url`); SSRN not yet approved as a distribution channel. | User approves SSRN as distribution platform. |
| DEF-003 | **Theme positioning review** — Planet/space vs. enterprise aesthetic. Warrants a design decision conversation before any change. | Design conversation completed. |
| DEF-004 | **Semantic Scholar integration** — Auto-generates after indexing. No code needed until a profile URL exists. | Profile URL confirmed after indexing. |
| DEF-005 | **Dynamic OG images per page** — Currently static. Build complexity only justified after traffic growth. | Site traffic warrants it. |

---

## Shipped Log

Chronological. Most recent first.

| Date | ID | Item |
|---|---|---|
| 2026-06-25 | AUD2-001–007 | **Anti-pattern + quality sweep** — Uppercase + wide tracking removed from all remaining pages: `resume.astro` (`.rHead` 0.12em → -0.01em, `.skillLabel` 0.08em → none), `cv.astro` (`.cvSectionTitle` 0.1em, `.cvBadge` uppercase), `about.astro` (`.galleryTitle`, `.serviceTitle`), `index.astro` (`.credLabel`, `.certCat`). All 6 remaining hardcoded `rgba(255,255,255,0.02)` replaced with `var(--card-bg)`. Resume mid-breakpoint added at 760px. Comet `filter: blur(7px)` replaced with blur-free radial-gradient glow. |
| 2026-06-25 | (audit fixes) | **Comprehensive audit pass** — Research index `relevance` field restored (was removed in rewrite, critical for O1/EB1); `text-wrap: balance` added to all h1/h2/h3 globally (zero instances before); `will-change: transform` added to `.nebula` (70s animated element now GPU-promoted); `max-width: 92ch` → 72ch on skills section (impeccable cap); `.kw` keyword chip background `rgba(255,255,255,0.04)` → `var(--card-bg)` on research detail page. Roadmap updated with AUD2-001–007 backlog. |
| 2026-06-25 | UI, research | **Filter/sort on Projects + Research** — 5 semantic filter chips on projects (Enterprise, AI/ML, Systems, Data & Pipelines, Automation) with build-time tag bucketing; cycling sort (A–Z → Z–A → Newest → Oldest) on both pages; research index redesigned to match (5 curated topic chips, Status + cycling sort, relevance field on cards, area capped at 4); visual language identical across both pages (`.fchip`, `.sbtn`, `.controls`) |
| 2026-06-24 | UI-001–012 | **Galaxy + UI consistency sprint** — Galaxy default ON; comets animated (was missing `@keyframes cometFly`); seamless star drift via `background-position` keyed to exact tile sizes; galaxy revealed at wide viewports; project detail black background removed; `.chip.featured` CSS syntax bug fixed (`rgba()` → `rgb(/ 0.5)`); side-stripe `.weCard::before` removed; skill category uppercase eyebrow replaced with weight/color hierarchy; SiteLayout type hierarchy resolved (12px/15px); `--card-bg` token applied across detail pages; sidebar h3 uppercase labels removed across both detail pages; project nav label uppercase + wide tracking removed |
| 2026-06-23 | CQ-003/004/005, CP-003/004, SD-002, IA-001/002 | **Backlog sprint** — removed unused `.sub` CSS (+ media override), fixed `byOrderDescThenTitle` to use `CollectionEntry<"projects">`, stripped undefined `.prose` class from About, updated CV meta description to lead with 4 Zenodo papers, truncated research detail meta description to 155 chars, added `workExample` array to Person JSON-LD linking all 4 ScholarlyArticle records by URL + DOI, added ORCID link to site footer, added "Engineering-to-Research Monograph Series · Zenodo · OpenAIRE-indexed" note to CV Publications |
| 2026-06-22 | AUD-001–015 (partial) | **O1/EB1 + full-stack audit sprint** — Homepage Published Work section (4 Zenodo DOIs + named contributions), hero padding + lead width, CV Publications split, CV + About memberships corrected (IEEE HKN date, IEEE member added), gallery retitled "Travel", research index dead type-filter removed, Zenodo DOI badge on cards, research count label fixed, unused `featured` const removed |
| 2026-06-22 | AUD-001 | Homepage Published Work section — 4 published papers with DOI links, venue, year, and named-contribution line per paper |
| 2026-06-22 | AUD-002 | CV "Publications" section split from "Technical Reports"; DOI shown prominently per paper |
| 2026-06-22 | AUD-004/006 | IEEE-HKN Internal Secretary date corrected (Jan 2022–May 2023) on CV and About; IEEE Member (May 2024–Present) added to both |
| 2026-06-22 | AUD-005 | Gallery retitled from "Some of the places I've visited!" to "Travel" |
| 2026-06-22 | AUD-007/008 | Lead max-width 88ch → 72ch; hero padding-top 20px → 44px |
| 2026-06-22 | AUD-009/010 | Dead type-filter code removed from research index; Zenodo DOI badge added to published cards |
| 2026-06-22 | AUD-011/012/013 | Research count label fixed; `featured` intermediate const removed; research Focus section updated |
| 2026-06-22 | AUD-014 | Named original contributions surfaced per paper in Published Work section |
| 2026-06-22 | AUD-015 | IEEE Member added to CV memberships |
| 2026-06-22 | (audit) | Graphify graph updated — 159 nodes, 188 edges, 22 communities; no import cycles |
| 2026-06-22 | 2A-013 | *Embedded-to-Edge-AI Reference Architecture* (Vol. 4, DOI 10.5281/zenodo.20784402) and *Data Mining for Financial Systems* (Vol. 8, DOI 10.5281/zenodo.20802595) added to research collection |
| 2026-06-21 | 2A-013 | *Scalable Analytics for Enterprise Decisions* (Vol. 7, DOI 10.5281/zenodo.20733992) MDX confirmed already in collection |
| 2026-06-20 | 2A-013 | *Securing Connected Systems* (Vol. 1, DOI 10.5281/zenodo.20733453) added to research collection |
| 2026-06-15 | 2B-010 | Certifications — 25 MDX files, 18 featured; homepage shows top 2 + auto-count deep-link; resume shows all featured with verify links |
| 2026-06-15 | 2B-009 | Cloudflare Web Analytics beacon — no cookies, no consent banner |
| 2026-06-15 | 2B-007 | Work project impact statements rewritten with real metrics |
| 2026-06-15 | 2B-006 | Homepage contact CTA — "Let's connect" with LinkedIn + email |
| 2026-06-15 | 2B-005 | Skip-to-content link, corrected theme-control semantics, prev/next project nav, CSS deduplication |
| 2026-06-15 | 2B-004 | Academic CV `/cv` — Education, Publications, Honors, Memberships, Experience, Certifications |
| 2026-06-15 | 2B-003 | Leadership & Service block on About (IEEE-HKN, Dean's List) |
| 2026-06-15 | 2B-002 | Genworth work bullets quantified — 10+ pipelines, 30+ jobs, 2+ hrs/week saved, Derivatives migrated to Azure Synapse |
| 2026-06-15 | 2B-001 | HTML resume rebuild — semantic, mobile-friendly; PDF download retained |
| 2026-06-15 | PERF-001 | Image optimization — `getImage()` + WebP on all glob pipelines; 28.4 MB → 2.4 MB (91%) |
| 2026-06-15 | PERF-002 | OG image 1200×630 dark card (sharp-generated); `summary_large_image` |
| 2026-06-15 | PERF-003/004 | Logo CLS fixed; React + Swiper replaced with vanilla Astro carousel |
| 2026-06-15 | 2A-013 | ORCID registered (0009-0004-8302-5090) and wired throughout |
| 2026-06-15 | 2A-009 | Hero positioning and page descriptions updated for enterprise/AI governance/doctoral framing |
| 2026-06-15 | 2A-008 | Homepage credentials section — ORCID, PhD candidacy, Dean's List, IEEE memberships, certifications |
| 2026-06-15 | 2A-007 | Skills section rebuilt as six-category badge grid |
| 2026-06-15 | UX-FIX-001/002/003 | Nav drawer reordered; `/cv` added to nav; `theme-color` meta added |
| 2026-06-08 | 2A-006 | Person JSON-LD on homepage — name, jobTitle, worksFor, alumniOf, sameAs (LinkedIn/GitHub/ORCID) |
| 2026-06-08 | 2A-005 | `@astrojs/sitemap` installed; sitemap-index.xml live; robots.txt Sitemap directive added |
| 2026-06-08 | 2A-004 | ScholarlyArticle JSON-LD per research detail page — author/ORCID, abstract, keywords, DOI identifier |
| 2026-06-08 | 2A-003 | Research detail pages `/research/[slug]` — abstract, keywords, sidebar, citation block |
| 2026-06-08 | 2A-002 | Research paper metadata corrected — publication_type, publication_status, lifecycle, abstract, keywords, citation, ORCID |
| 2026-06-08 | 2A-001 | Research collection schema expanded — all classification, lifecycle, academic, identifier, and distribution fields |
| 2026-06-08 | 2A-011/012 | Research distribution display layer — conditional "Find this work on" sidebar |
| 2026-06-08 | archive | `archive` collection defined; coursework reports moved out of research index |
| 2026-06-08 | P0-001 | Moved `example.mdx` placeholder from research to archive |
| 2026-06-08 | P1-SEO | OG, Twitter Card, canonical, robots.txt verified and completed |
| 2026-06-08 | P1-UX | `text-align: justify` removed; active nav state; footer contact links |

---

## Audit Score History

| Dimension | Baseline (Jun 8) | Post-Sprint 2 (Jun 15) | Post-Audit (Jun 22) | Galaxy Sprint (Jun 24) |
|---|---|---|---|---|
| O1/EB1 Evidence Visibility | 2 / 10 | 5 / 10 | 8 / 10 | **8 / 10** |
| First Impression | 7.5 / 10 | 8 / 10 | 8.5 / 10 | **9 / 10** |
| Recruiter Clarity | 5.5 / 10 | 8 / 10 | 8 / 10 | **8 / 10** |
| Technical Credibility | 7 / 10 | 8 / 10 | 8.5 / 10 | **8.5 / 10** |
| Visual Design | 7 / 10 | 8 / 10 | 8.5 / 10 | **9 / 10** |
| SEO / Structured Data | 3.5 / 10 | 7.5 / 10 | 7.5 / 10 | **7.5 / 10** |
| Accessibility | 6 / 10 | 8 / 10 | 8 / 10 | **8 / 10** |
| Performance | 7 / 10 | 9 / 10 | 9 / 10 | **9 / 10** |
| Content Depth | 6 / 10 | 8 / 10 | 8.5 / 10 | **8.5 / 10** |
| Mobile Experience | 5.5 / 10 | 8.5 / 10 | 8.5 / 10 | **8.5 / 10** |

**Jun 24 movers:** First Impression 8.5 → 9 (galaxy visible by default, seamless, comets live); Visual Design 8.5 → 9 (detail page consistency, token system, no more uppercase scaffold tells).

**Remaining ceiling blockers:** EXT-001 (ResearchGate profile + paper uploads), IA-003 (ResearchGate distribution links — depends on EXT-001), CP-005/006 (quantified work metrics + outcome reframing — pending user-supplied numbers), UI-013 (DESIGN.md documentation).
