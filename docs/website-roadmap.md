# docs/website-roadmap.md

Portfolio improvement backlog and Phase 2 implementation plan.  
Baseline audit: June 2026. Phase 2 planning: June 2026.  
Last reconciled against the repository: June 15, 2026.

Status key:
- `[ ]` — Not started
- `[>]` — Next implementation
- `[~]` — Partially complete or waiting on an external action
- `[x]` — Complete
- `DEFERRED` — Intentionally paused

This is a public repository. Keep this document limited to public-safe website
implementation work. Confidential career strategy, legal planning, compensation
evidence, employer-sensitive metrics, and private project details are maintained
outside this repository.

---

## Audit Scores — Baseline (June 2026)

These scores are the historical baseline, not the current post-sprint state.

| Dimension | Score | Key gap |
|---|---|---|
| First Impression | 7.5 / 10 | Theme picker feels like a demo toy to cold visitors |
| Recruiter Clarity | 5.5 / 10 | Skills unscannable, no quantified metrics, no credentials visible |
| Technical Credibility | 7 / 10 | Good projects but no diagrams, no open-source highlights |
| Visual Design | 7 / 10 | Cohesive theme, but `justify` text and 6fr/1fr carousel layout are issues |
| Mobile Experience | 5.5 / 10 | Resume iframe broken on iOS Safari |
| SEO | 3.5 / 10 | Sitemap missing, OG incomplete, no JSON-LD, no canonical, no robots.txt |
| Accessibility | 6 / 10 | No skip-to-content, popover role wrong, no aria-current on nav |
| Performance | 7 / 10 | Good static generation; 19 images eager-imported; Leaflet unused |
| Content Depth | 6 / 10 | Research all "in-progress", placeholder entry live, no quantified bullets |
| Contact/Conversion | 4.5 / 10 | No CTA anywhere, footer empty, no contact form |

---

## Priority Key

- **P0** — Broken or actively misleading content; fix immediately
- **P1** — Quick win: high impact, low effort (< 1 hour each)
- **P2** — Medium improvement: meaningful impact, few hours each
- **P3** — Major upgrade: significant investment, high strategic value
- **Effort:** XS < 30 min · S 30 min–2 hr · M 2–4 hr · L 4–8 hr · XL 8+ hr

---

## Current Next Work

Ordered by impact, readiness, and dependency risk.

| Order | Status | Item | Scope / dependency |
|---|---|---|---|
| 1 | [x] | **2B-006 — Homepage contact CTA** | Shipped 2026-06-15 |
| 2 | [x] | **2B-010 — Certifications expansion** | Shipped 2026-06-15; 25 certs, 18 featured, homepage shows top 2 + deep-link to resume |
| 3 | [x] | **2B-001 — Resume credentials completion** | Certifications section now live on resume page |
| 4 | [x] | **2B-002 / 2B-007 — Quantified outcomes** | Shipped 2026-06-15 |
| 5 | [x] | **2B-009 — Privacy-friendly analytics** | Shipped 2026-06-15; Cloudflare Web Analytics beacon (no cookies, no consent banner) |
| 6 | [x] | **PERF batch** — image optimization (91% reduction), OG image, logo CLS, nav cleanup, SiteLayout cleanup, theme-color meta | Shipped 2026-06-15 |
| 7 | [x] | **Academic CV page (`/cv`)** + Leadership & Service section on About | Shipped 2026-06-15 |
| 8 | [x] | **PERF-004 / 2C-008 / 2C-010** — vanilla Astro carousel, content.config.ts migration, remove leaflet + swiper | Shipped 2026-06-15 |
| 9 | [~] | **Structured-data completion** | Blocked on publication dates and external canonical URLs |
| 10 | [~] | **2A-013 / 2B-008 — Research profile distribution** | Zenodo deposit complete for Vol. 1 (DOI: 10.5281/zenodo.20733453), MDX added 2026-06-20. Vol. 7 (*Scalable Analytics for Enterprise Decisions*, DOI: 10.5281/zenodo.20733992) MDX added 2026-06-21. Remaining blocker: ResearchGate profile + Zenodo deposits for the 3 coursework reports. |
| 11 | [~] | **Structured-data completion** | Blocked on publication dates and external canonical URLs |
| 12 | [>] | **AUD-001 — Homepage Publications section** | P0 for O1/EB1: surface all 4 Zenodo DOIs (Vol 1/4/7/8) as a dedicated "Published Work" section on the homepage. Currently invisible from the landing page. See Audit Findings 2026-06-22. |
| 13 | [>] | **AUD-002 — CV Publications split** | Separate `cv.astro` "Research & Technical Reports" into two sections: "Publications" (DOI papers, `publication_status: published`) above "Technical Reports" (`publication_status: completed`). Critical for O1/EB1 presentation. |
| 14 | [ ] | **AUD-003 — Hero + About copy polish** | Remove emoji from hero `<h1>`; fix IEEE-HKN date on about page; retitle gallery section; add IEEE member role to Leadership & Service. |
| 15 | [ ] | **AUD-004 — Research index type filter cleanup** | All coursework is now in archive; only `technical-report` type remains in research collection. Type filter row is redundant — remove or convert to publication-status filter. |

Recommended next: AUD-001 (homepage Publications) and AUD-002 (CV split) are the highest-value unblocked items for O1/EB1 presentation. AUD-003 is a quick copy pass.

---

## Phase 1 — Baseline Fixes

### P0 — Fix Immediately

| # | Status | Item | Files |
|---|---|---|---|
| P0-001 | [x] | Move `example.mdx` placeholder to archive — was rendering live on `/research` with no content | `src/content/research/example.mdx` → `src/content/archive/` |
| P0-002 | [x] | Resume page PDF iframe is broken on mobile Safari — superseded by 2B-001 (HTML resume rebuild) | `src/pages/resume.astro` |

### P1 — Quick Wins

| # | Status | Item | Files |
|---|---|---|---|
| P1-SEO-001 | [x] | Add `og:title`, `og:description`, `og:type`, `og:url` to head | `src/layouts/SiteLayout.astro` |
| P1-SEO-002 | [x] | Add Twitter Card meta tags | `src/layouts/SiteLayout.astro` |
| P1-SEO-003 | [x] | Add `robots.txt` to `public/` | `public/robots.txt` |
| P1-SEO-004 | [x] | Add canonical URL tag per page | `src/layouts/SiteLayout.astro` |
| P1-CON-001 | [x] | ~~Update research papers to `status: published`~~ — **superseded by 2A-002**: papers are correctly classified as technical reports with `publication_status: completed` | `src/content/research/*.mdx` |
| P1-UX-001 | [x] | Remove `p { text-align: justify; }` from homepage and about | `src/pages/index.astro`, `src/pages/about.astro` |
| P1-UX-002 | [x] | Add `aria-current="page"` + active styling to current nav link | `src/layouts/SiteLayout.astro` |
| P1-UX-003 | [x] | Fix work entry expand — remove `mouseleave` auto-collapse | `src/pages/index.astro` |
| P1-UX-004 | [x] | Add `pluto` swatch to theme picker | `src/layouts/SiteLayout.astro` |
| P1-UX-005 | [x] | Add social links + "get in touch" CTA to footer | `src/layouts/SiteLayout.astro` |

---

## Phase 2 — Implementation Plan

> **Critical classification note:** The 3 existing papers (ITS-834/835/836) are graduate coursework technical reports, identifiable by their course-code filenames. They must NOT be labeled `published`. Correct classification: `publication_type: "technical-report"`, `publication_status: "completed"`. The schema and UI must support this distinction cleanly, and must be future-proof for actual peer-reviewed publications when they exist.

---

### Phase 2A — High ROI

*Maximum ROI per hour. Foundation + academic visibility + recruiter conversion. All items < 4 hr individually.*

#### 2A-001 — Research Schema Expansion
**Files:** `src/content/config.ts`  
**Effort:** S · **Risk:** Low

Expand the `research` collection schema. All new fields are optional with defaults for backward compatibility.

New fields:
```
publication_type:   "journal-article" | "conference-paper" | "preprint"
                    | "technical-report" | "thesis" | "working-paper"
publication_status: "published" | "accepted" | "under-review" | "submitted"
                    | "preprint" | "completed" | "in-progress"
lifecycle_stage:    "idea" | "drafting" | "internal-review" | "submitted"
                    | "under-review" | "accepted" | "published"
                    | "completed" | "rejected" | "withdrawn"
venue:              string   (journal / conference / institution)
university:         string
course:             string
semester:           string
submission_date:    string
publication_date:   string
doi:                string
orcid:              string   (author ORCID for this paper)
keywords:           string[]
version:            string
abstract:           string   (long-form, separate from summary)
coauthors:          { name: string, url?: string }[]
citation:           string   (formatted citation text)
```

Distribution / repository fields (see also 2A-011):
```
researchgate_url:    string
google_scholar_url:  string
ssrn_url:            string
zenodo_url:          string
github_url:          string
dataset_url:         string
supplementary_url:   string
```

The legacy `status` field is kept for backward compatibility but display logic uses `publication_status`.  
`lifecycle_stage` is separate from `publication_status` so editorial workflow state is not conflated with public classification.

**SEO impact:** High — enables ScholarlyArticle JSON-LD, keyword fields  
**Dependency:** All other 2A research items depend on this

| Status | [x] |
|---|---|

---

#### 2A-002 — Fix Research Paper Metadata
**Files:** `src/content/research/enterprise-risk-management-strategy.mdx`, `fuel-price-forecasting-holidays.mdx`, `hybrid-disaster-recovery-plan.mdx`  
**Effort:** S · **Risk:** None

Set correct metadata for all 3 papers:
- `publication_type: "technical-report"`
- `publication_status: "completed"`
- `lifecycle_stage: "completed"` (document is finalized)
- Add `university`, `course`, `semester`, `keywords`, `abstract`, `citation`
- Expand MDX body into formal abstract field

All three reports now include verified institution, course, semester, citation,
abstract, keyword, classification, and ORCID metadata. `version` remains optional
until an actual revision/versioning workflow is introduced.

**Dependency:** 2A-001 must be merged first

| Status | [x] |
|---|---|

---

#### 2A-003 — Research Detail Pages `/research/[slug]`
**Files:** `src/pages/research/[slug].astro` (new), `src/pages/research/index.astro` (add `href` to cards)  
**Effort:** M · **Risk:** Low

Each detail page renders:
- Title, abstract, keywords chips, publication type + status badges
- Metadata sidebar: university, course, venue, date, version, coauthors
- PDF download button (existing PDFs in `public/papers/`)
- Citation block (copyable)
- DOI display — conditional, only when `doi` field is populated
- Related links section
- `← Back to Research` nav
- ScholarlyArticle JSON-LD in `<head>` (see 2A-004, bundled)
- Academic identity profile links — conditional (see 2A-012, bundled)

Pattern mirrors `projects/[slug].astro` exactly.  
Research index cards get `href={/research/${item.slug}}` added.

**SEO impact:** High — 3 new indexable pages with structured data  
**Dependency:** 2A-001, 2A-002

| Status | [x] |
|---|---|

---

#### 2A-004 — ScholarlyArticle JSON-LD on Research Detail Pages
**Files:** `src/pages/research/[slug].astro` (bundled with 2A-003)  
**Effort:** XS · **Risk:** Low

Schema.org `ScholarlyArticle` per paper:
- `name`, `author` (links to Person schema), `datePublished`, `about`, `keywords`, `url`
- `inLanguage: "en"`, `publisher` (university as `Organization`)
- `sameAs: [doi_url]` — conditional on `doi` field
- Zenodo URL added to `sameAs` when `zenodo_url` is populated

Zero additional effort when bundled with 2A-003.

Implemented fields: name, author/ORCID, abstract, keywords, URL, language,
publisher, and conditional DOI identifier. Exact publication dates, `about`,
and external `sameAs` URLs remain pending source metadata.

**SEO impact:** High — feeds Google's research knowledge graph

| Status | [~] |
|---|---|

---

#### 2A-005 — Install `@astrojs/sitemap` + Update `robots.txt`
**Files:** `astro.config.mjs`, `package.json`, `public/robots.txt`  
**Effort:** XS · **Risk:** Low (requires npm install approval)

1. `npm install @astrojs/sitemap`
2. Add to `integrations` in `astro.config.mjs`
3. Build — confirm `dist/sitemap-index.xml` exists
4. Add `Sitemap: https://alanp13.github.io/sitemap-index.xml` to `public/robots.txt`

The `Sitemap:` line was removed from `robots.txt` in Phase 1 pending this confirmation step.

**SEO impact:** High — enables Search Console submission, page discovery  
**Unblocks:** Google Search Console and Bing Webmaster Tools submission

| Status | [x] |
|---|---|

---

#### 2A-006 — JSON-LD Person Schema on Homepage
**Files:** `src/pages/index.astro`  
**Effort:** S · **Risk:** Low

Schema.org `Person`:
- `name`, `jobTitle`, `worksFor` (Genworth as `Organization`)
- `alumniOf` (IIT, UC as `EducationalOrganization`)
- `url: "https://alanp13.github.io"`
- `sameAs: [linkedin_url, github_url]`
- ORCID added to `sameAs` once registered
- Links to ScholarlyArticle records via `author` relationship

Seeds Google's Knowledge Graph. Core identity fields and ORCID are live.
Explicit links from the Person record to individual ScholarlyArticle records
remain a future structured-data enhancement.

**SEO impact:** High — named entity establishment

| Status | [~] |
|---|---|

---

#### 2A-007 — Skills Section Rebuild as Badge Grid
**Files:** `src/pages/index.astro`  
**Effort:** M · **Risk:** Low

Replace 4 prose-bullet `<ul>` cards with a category-organized tech chip grid. Each chip is a `<span>` — no links needed.

**Approved taxonomy (Sprint 1 planning, confirmed for Sprint 3):**

- **Languages:** Python · SQL · C++ · Java
- **Data Engineering:** Azure Synapse · ETL Pipelines · AppWorx · Markit EDM · Data Warehousing · Data Reconciliation
- **Cloud:** Microsoft Azure · ADLS · Serverless SQL · Azure Monitoring · Logic Apps · Key Vault
- **Enterprise Platforms:** PAM Investment Accounting · Financial Systems Modernization · Platform Migration · Production Support
- **AI / Data Science:** Machine Learning · Time Series Forecasting · AI Governance · Data Mining · Predictive Analytics
- **Risk & Governance:** Enterprise Risk Management · Model Risk Management · NIST · COSO ERM · Regulatory Compliance

**Recruiter impact:** High — passes 5-second tech-stack scan  
**SEO impact:** Medium — tech names as visible text

| Status | [x] |
|---|---|

---

#### 2A-008 — Certifications + Credentials Section
**Files:** `src/pages/index.astro` or `src/pages/about.astro`  
**Effort:** S–M · **Risk:** None

Renders: IEEE-HKN membership, Azure certifications, Dean's List / academic honors, future credentials slot. All conditional — item only renders when field is populated. No fabricated content.

**Recruiter impact:** High — Azure certs are ATS filter terms

---

**Sprint 3 Credential Inventory (confirmed, ready to implement)**

**Academic Honors — Dean's List**
- Institution: Illinois Institute of Technology, Armour College of Engineering
- Semesters: Fall 2020 · Spring 2021 · Fall 2021 · Spring 2022 · Spring 2023

**Professional Memberships**

| Organization | Role | Dates |
|---|---|---|
| IEEE | Member | May 2024 – Present |
| IEEE Eta Kappa Nu (HKN) | Alumni Member | May 2023 – Present |
| IEEE Eta Kappa Nu (HKN) | Internal Secretary | Jan 2022 – May 2023 |
| SHPE | Member | Aug 2022 – May 2023 |

**In-Progress Credentials (do not display as completed)**

| Credential | Issuer | Status | Notes |
|---|---|---|---|
| Foundations in Investment | CFA Institute | In progress — expected completion next week | Add to credentials section once completed; do not display until then |

**Note on Azure:** Azure Synapse, ADLS, Logic Apps, Key Vault, and Azure Monitoring are listed in the skills section as professional platform experience (used at Genworth). These are not certifications and should not be presented as such.

---

| Status | [x] |
|---|---|

---

#### 2A-009 — Hero Copy + Page Meta Description Optimization
**Files:** `src/pages/index.astro`, all page `.astro` files  
**Effort:** S · **Risk:** None

Hero updates:
- Add "AI Governance" to the positioning language alongside existing enterprise/financial framing
- Reinforce PhD research context in the lead paragraph
- Kicker already reads well: `"Enterprise Data Engineer • Financial Systems • Cloud Platforms"`

All page `description` props: rewrite to be keyword-targeted (appear verbatim in Google results).

**Recruiter impact:** High — first 10-second clarity  
**SEO impact:** High — descriptions appear in search result snippets

| Status | [x] |
|---|---|

---

#### 2A-010 — Private Project Showcase
**Files:** Public project content only after release approval
**Effort:** M–L · **Risk:** Low  
**Status: DEFERRED**

Detailed planning is maintained outside this public repository. Do not add a
project page, architecture details, repository link, or navigation reference
until a public-safe scope has been explicitly approved.

Public release conditions:
- [ ] Public description and scope approved
- [ ] Public artifact or non-confidential architecture overview available
- [ ] Security and confidentiality review complete

| Status | DEFERRED |
|---|---|

---

#### 2A-011 — Research Distribution Infrastructure
**Files:** `src/content/config.ts` (schema fields already in 2A-001), `src/pages/research/[slug].astro` (display layer)  
**Effort:** S · **Risk:** None

Schema fields added in 2A-001:
```
researchgate_url, google_scholar_url, ssrn_url, zenodo_url,
github_url, dataset_url, supplementary_url
```

Display layer (in 2A-003 detail page): a "Find this work on" section in the sidebar. Each platform link renders conditionally — only when the corresponding URL field is populated. No placeholder fake links.

**Approved publication workflow (confirmed):**
```
Website landing page (/research/[slug])
  → ResearchGate (upload PDF, add metadata)
  → Zenodo (deposit for DOI assignment)
```

SSRN and GitHub not approved yet for paper distribution. Schema fields exist but will remain empty until approved.

Target distribution path for each paper:
1. Website landing page (`/research/[slug]`) — built in 2A-003
2. PDF download — already exists in `public/papers/`
3. ResearchGate — populate `researchgate_url` once uploaded
4. Zenodo — populate `zenodo_url` + `doi` once deposited
5. SSRN — field exists, deferred (not yet approved)
6. GitHub — field exists, deferred (not yet approved)

**Research credibility:** High — shows serious scholarly infrastructure intent

| Status | [x] |
|---|---|

---

#### 2A-013 — Academic Identity Expansion
**Files:** `src/content/research/*.mdx`, `src/pages/research/[slug].astro`, `src/pages/about.astro`  
**Effort:** XS–S · **Risk:** None  
**Trigger condition:** User uploads papers to ResearchGate or deposits to Zenodo

Populate academic profile URLs across the site once external profiles are created. All schema fields already exist (Sprint 1) and the sidebar display layer is already built (Sprint 2). This is the content population pass.

Platforms to populate when ready:
- `researchgate_url` per paper — once ResearchGate profile + paper pages exist
- `zenodo_url` + `doi` per paper — once Zenodo deposit is complete
- `google_scholar_url` — auto-generated after indexing; monitor after Sprint 2 is live
- `ssrn_url` — field exists, deferred (not yet approved)

Site placements to wire up once URLs exist:
- Research detail page sidebar "Find this work on" links (infrastructure ready, fields empty)
- About page — ORCID link + Scholar link near bio (ORCID already surfaced in Sprint 3 credentials section)

**Dependency:** None (build work done; this is data entry + minor display wiring)

| Status | [~] |
|---|---|

---

#### 2A-012 — Academic Identity Infrastructure
**Files:** `src/pages/research/[slug].astro`, `src/pages/about.astro`, `src/pages/research/index.astro`, `src/layouts/SiteLayout.astro` (footer, optional)  
**Effort:** S · **Risk:** Low

Conditional rendering for academic profile links across the site. No fake links — each renders only when the corresponding profile URL or ID exists.

Platforms to support:
- **ORCID** — most important; register at orcid.org (free, 5 minutes) before 2A deploys
- **Google Scholar** — auto-populated once papers are indexed; add profile URL
- **ResearchGate** — add profile URL once created
- **SSRN** — add author page URL if applicable
- **Zenodo** — add community/author page URL if applicable
- **Semantic Scholar** — auto-generated; add profile URL once identified

Placement locations:
- Research detail page sidebar (per paper)
- Research index page header ("Find me on")
- About page credentials section
- Footer (ORCID logo + ID only — minimal)

ORCID is live on the homepage and research detail pages. Other profile links and
the remaining index/about/footer placements depend on external profiles.

**Research credibility:** High — signals active scholarly presence

| Status | [~] |
|---|---|

---

### Phase 2B — Medium ROI

*Structural depth, content requiring user input, or larger build effort.*

#### 2B-001 — HTML Resume Rebuild (fix P0-002)
**Files:** `src/pages/resume.astro`  
**Effort:** L · **Risk:** Low

Replace broken PDF iframe with:
1. Semantic HTML resume sections (crawlable, mobile-friendly)
2. PDF download button — keep `public/Alan_Palayil_Resume.pdf`
3. Structured sections: Experience, Education, Skills, Certifications

Semantic Experience, Education, and Skills sections plus PDF download are live.
A dedicated certifications/credentials section remains to complete the original
scope.
**Supersedes:** P0-002, P3-UX-002

**Recruiter impact:** High — fixes broken mobile; enables in-browser scanning  
**SEO impact:** High — all resume content becomes indexable

| Status | [x] Shipped — semantic HTML resume live; certifications section wired from collection |
|---|---|

---

#### 2B-002 — Quantified Work Bullets
**Files:** `src/content/timeline/work-genworth-p1.mdx`, `work-genworth-p2.mdx`  
**Effort:** S (once numbers are supplied) · **Risk:** None

Requires metrics from user:
- Pipeline scale: records/day, files/day, transaction volume
- Automation savings: hours/week eliminated, manual steps removed
- Business scope and organizational context approved for public disclosure
- Migration scope: systems migrated, timeline, risk managed

**Recruiter impact:** High — enterprise roles are decided on metrics

| Status | [ ] |
|---|---|

---

#### 2B-003 — Professional Recognition Section
**Files:** New section in `src/pages/about.astro` or new `src/pages/recognition.astro`  
**Effort:** XL (content audit) + M (build) · **Risk:** Medium (content must be verifiable)

Content audit required before building. Needed from user:
- Peer review work (academic or industry)
- Hackathon judging, technical interviews, hiring panel involvement
- Conference talks, webinar appearances, invited presentations
- Press mentions, industry blog references, citations of your work
- Open-source projects with external adoption metrics
- Awards or competition placements

Section is built to display what exists, with a future-proof structure. No fabrication.

**Professional credibility:** High — consolidates independently verifiable recognition

| Status | [x] Shipped 2026-06-15 — audit complete; IEEE-HKN + Dean's List folded into About page Leadership & Service block; dedicated recognition page deferred until awards/speaking accumulate |
|---|---|

---

#### 2B-004 — Academic CV Page `/cv`
**Files:** `src/pages/cv.astro` (new), `src/layouts/SiteLayout.astro` (nav link, optional)  
**Effort:** L · **Risk:** Low

Separate from `/resume` (industry-focused). The CV is academically focused and structured for:
- Publications (peer-reviewed, when they exist)
- Research Projects (technical reports, coursework research)
- Teaching / mentorship
- Peer reviews / editorial work
- Speaking and panels
- Awards and honors
- Professional memberships (IEEE-HKN, etc.)
- Service and leadership

ORCID link displayed prominently. Designed to serve academic collaborators and PhD committee review.

Not a duplicate of the resume — different audience, different purpose, different structure.

**Dependency:** 2A-008 (credentials), 2A-012 (identity), 2B-003 (recognition) should be done first

| Status | [x] Shipped 2026-06-15 — `/cv` page live with Education, Research, Academic Honors, Memberships & Leadership, abbreviated Professional Experience, and top Certifications; CV link added to About page social row |
|---|---|

---

#### 2B-005 — UX Polish Bundle
**Files:** `src/pages/projects/[slug].astro`, `src/layouts/SiteLayout.astro`, `src/styles/global.css`  
**Effort:** S total · **Risk:** Low

Completed cleanup items:
- P2-UX-003: Render `prev` link on project detail pages (computed, never displayed) ✓
- P2-TECH-001: Fix double `box-sizing: border-box` in `global.css` ✓
- P2-TECH-003: Remove `/* Jason-style */` design-reference comments in SiteLayout ✓
- P2-UX-004: Add skip-to-content link for keyboard accessibility ✓ *(see blocker below)*
- P2-UX-005: Replace non-modal theme popover `role="dialog"` semantics ✓

| Status | [x] |
|---|---|

---

#### 2B-006 — Contact CTA Section
**Files:** `src/pages/index.astro`  
**Effort:** S · **Risk:** None

"Let's connect" section at the bottom of the homepage. LinkedIn (primary) and "Prefer Email?" (secondary, mailto:alan.palayil+portfolio@gmail.com) buttons. Copy frames domain interest — enterprise data, financial systems, AI governance — not availability.

| Status | [x] |
|---|---|

---

#### 2B-007 — Business Outcome Reframing on Work Projects
**Files:** `src/content/projects/work-derivatives-legacy-prj.mdx`, `work-cml-json-prj.mdx`, `work-custody-bank-files-prj.mdx`  
**Effort:** M · **Risk:** None

Shift project summaries from "what it does" to "what it changed." Add `impact` bullets with cost savings, error reduction, processing speed, migration scale. Enterprise hiring managers buy outcomes, not features.

Requires metrics from user (similar to 2B-002).

| Status | [ ] |
|---|---|

---

#### 2B-008 — Research Platform Profile Links (ORCID first)
**Files:** (bundled with 2A-012 display layer, but listed separately for tracking)  
**Effort:** XS — just populating fields once profiles exist · **Risk:** None

ORCID registration: free, takes 5 minutes at orcid.org. Should be done before 2A deploys so the link goes live immediately.

Google Scholar profile: auto-generated once papers are indexed. Monitor after 2A-003 is live.

Action items (user, not code):
1. ~~Register ORCID~~ — completed (`0009-0004-8302-5090`)
2. Upload papers to ResearchGate
3. Submit to SSRN if applicable
4. ~~Deposit to Zenodo for DOI assignment~~ — completed for *Securing Connected Systems* Vol. 1 (DOI: 10.5281/zenodo.20733453, 2026-06-17); coursework reports not yet deposited
5. ~~Add ORCID to research MDX files~~ — completed

| Status | [~] |
|---|---|

---

#### 2B-009 — Analytics
**Files:** `src/layouts/SiteLayout.astro`  
**Effort:** S · **Risk:** Low

Single script tag. Privacy-friendly, no cookie banner required. Shows which pages recruiters and researchers visit and where they drop off. Essential for measuring Phase 2A conversion impact.

Shipped with Cloudflare Web Analytics (no cookies, no consent banner required).

| Status | [x] Shipped 2026-06-15 |
|---|---|

---

#### 2B-010 — Certifications Expansion
**Files:** `src/content/config.ts`, `src/content/certifications/*.mdx`, `src/pages/index.astro`, `src/pages/resume.astro`  
**Effort:** S · **Risk:** None

Schema and sample file created 2026-06-15. `certifications` collection defined in `src/content/config.ts` with fields: `title`, `issuer`, `issuerUrl`, `credentialId`, `credentialUrl`, `dateObtained`, `dateExpiry`, `status` (earned/in-progress/planned/expired), `category` (finance/cloud/security/data/ai/other), `order`, `featured`, `summary`. Sample file: `src/content/certifications/foundations-in-investments.mdx`.

**Requires from user before wiring to UI:**
- Full list of certifications — duplicate the sample MDX for each; user to supply name, issuer, date, credential ID/URL
- Indicate which are public-safe to display (will prune after list is complete)

**What gets built next (UI wiring):**
1. Expand the "Current Study" credCard on the homepage to render from the collection, grouped by status
2. Add a "Certifications" section to the resume page between Skills and any future credentials block
3. Each cert entry: name, issuer, date, status badge, credential link (if available)

**Recruiter impact:** High — certifications are a fast-scan signal for technical and financial roles  
**Dependency:** Blocked on user supplying full cert list via MDX files

| Status | [x] Shipped — 25 certs, 18 featured; homepage shows top 2 in-progress first with auto-count deep-link; resume shows all featured with skill chips and verify links |
|---|---|

---

### Phase 2C — Future Enhancements

*High strategic value, longer horizon, or dependent on content that does not exist yet.*

| # | Status | Effort | Item | Trigger condition |
|---|---|---|---|---|
| 2C-001 | [ ] | L | Blog / writing section ("Notes" or "Articles") | When 2–3 technical posts are ready to publish |
| 2C-002 | [ ] | L/project | Case study depth on work projects — architecture diagrams, before/after metrics | When architecture details can be shared |
| 2C-003 | [ ] | M | Research timeline progression view | After ORCID + Scholar profiles exist |
| 2C-004 | [ ] | L | Dynamic OG images per page | After site traffic justifies build complexity |
| 2C-005 | [ ] | S | Google Scholar citation counts / h-index display (conditional) | After papers indexed and Scholar profile active |
| 2C-006 | [ ] | M | Speaking / judging / leadership timeline | As verified material accumulates from 2B-003 content audit |
| 2C-007 | [ ] | — | Theme positioning review — space/planet vs. enterprise aesthetic | Design decision; warrants a separate conversation |
| 2C-008 | [x] | S | `src/content.config.ts` migration (Astro 5 preferred path over `src/content/config.ts`) | Shipped 2026-06-15 |
| 2C-009 | [ ] | L | Dedicated AI / Data Platform positioning page | When architecture story is ready |
| 2C-010 | [x] | S | Remove unused `leaflet` + `swiper` dependencies | Shipped 2026-06-15 |
| 2C-011 | [x] | M | Carousel ratio fixed (4fr/2fr) and hidden on mobile/tablet; carousel visible only at 980px+ | Done 2026-06-15 |
| 2C-012 | [ ] | M | Semantic Scholar auto-profile integration | After papers indexed |

---

### Audit Findings — 2026-06-15 (UI + Performance)

*Identified via manual code audit. Ordered by impact.*

| # | Status | Effort | Item | Notes |
|---|---|---|---|---|
| PERF-001 | [x] | M | **Image optimization** — places gallery + carousel + org logos; raw JPEG/PNG up to 4.7 MB each | Shipped 2026-06-15: `getImage()` on all `import.meta.glob` pipelines; 28.4 MB → 2.4 MB WebP (91% reduction) |
| PERF-002 | [x] | S | **OG / social preview image** — `og:image` pointed to favicon; Twitter card was `summary` | Shipped 2026-06-15: 1200×630 dark card generated via sharp (name, role, tag chips, planet decoration); `summary_large_image`; `og:image:width/height` added |
| PERF-003 | [x] | XS | **Logo SVG missing explicit width/height** — causing CLS on every page | Shipped 2026-06-15: `width="117" height="55"` added (from 2230×1052 viewBox at 55px height) |
| PERF-004 | [x] | L | **Replace React + Swiper carousel with vanilla JS** — 187 KB React client bundle loads on `/about` for one animated carousel | Shipped 2026-06-15: `ImageCarousel.astro` (vanilla JS card stack, `data-pos` CSS transitions, pause on hover, click to advance); `client:idle` removed → React client bundle no longer loaded on any page |
| UX-FIX-001 | [x] | XS | **Mobile nav order ≠ desktop nav order** | Shipped 2026-06-15: drawer reordered to About→Resume→Projects→Research→CV |
| UX-FIX-002 | [x] | XS | **`/cv` not in main nav** | Shipped 2026-06-15: CV added to desktop nav and mobile drawer (after Research) |
| CODE-FIX-001 | [x] | XS | **SiteLayout CSS cleanup** | Shipped 2026-06-15: removed nested `@media`, deduplicated `.logo-img` selectors, removed dead `main.wrap.main` padding and `section scroll-margin-top` from global.css |
| UX-FIX-003 | [x] | XS | **Missing `<meta name="theme-color">`** | Shipped 2026-06-15: dark `#030b14` + light `#e1e8f0` via `media` attribute |

---

### Audit Findings — 2026-06-22 (Full Stack + O1/EB1 Audit)

*Full audit run: graphify update (159 nodes, 22 communities), taste-skill pre-flight, O1/EB1 credential mapping, code and security review.*

#### O1/EB1 Credential Gaps (highest priority)

| # | Status | Effort | Item | Evidence mapped |
|---|---|---|---|---|
| AUD-001 | [>] | S | **Homepage "Published Work" section** — Add a dedicated section listing all 4 Zenodo DOIs (Vol 1/4/7/8) with DOI links, venues, and publication dates. Currently zero DOIs are visible from the homepage landing page. An adjudicator sees no publications on first load. | USCIS criterion: scholarly articles |
| AUD-002 | [>] | S | **CV Publications split** — Split `cv.astro` "Research & Technical Reports" into: (1) "Publications" for `publication_status: published` papers with DOIs rendered prominently; (2) "Technical Reports" for `publication_status: completed`. Filter by field, not by manually ordering MDX. | USCIS criterion: scholarly articles; authorship |
| AUD-014 | [ ] | M | **Original Contributions callout** — Surface the named original contributions from the monographs somewhere above the fold: "one anomaly, three meanings" (Vol 8), layered defense taxonomy (Vol 1), edge-AI reference architecture (Vol 4), hybrid forecasting framework (Vol 7). Currently buried in detail page body text only. | USCIS criterion: original contributions of major significance |
| AUD-015 | [ ] | S | **CV: add IEEE member role** — The IEEE member role (May 2024 – present) is on the homepage credCard but missing from the CV Memberships section. CV is the document O1/EB1 attorneys pull first. | USCIS criterion: professional association membership |

#### Design + Copy (taste-skill pre-flight failures)

| # | Status | Effort | Item | File |
|---|---|---|---|---|
| AUD-003 | [ ] | XS | **Remove `👋` emoji from hero `<h1>`** — Wrong register for recruiter and O1/EB1 audiences. Replace with a period or remove entirely. | `src/pages/index.astro:108` |
| AUD-004 | [ ] | XS | **Fix IEEE-HKN Internal Secretary date on About page** — Shows `"2022"` but the credential inventory specifies Jan 2022 – May 2023. | `src/pages/about.astro:167` |
| AUD-005 | [ ] | XS | **Retitle About page gallery section** — `"Some of the places I've visited!"` reads as personal blog. Replace with a neutral title like `"Places"` or remove the title entirely and let the images speak. | `src/pages/about.astro:163` |
| AUD-006 | [ ] | XS | **Add IEEE member role to Leadership & Service on About** — Currently only Internal Secretary + Dean's List. IEEE member (May 2024 – present) is missing from the about page service block. | `src/pages/about.astro` |
| AUD-007 | [ ] | XS | **Reduce lead paragraph `max-width` from 88ch to 72ch** — 88ch is too wide for comfortable reading at large viewports; standard readable max is 65–72ch. | `src/pages/index.astro:733` |
| AUD-008 | [ ] | XS | **Increase hero `padding-top` from 20px to at least 40px** — 20px runs the hero content nearly into the nav bar on tall viewports. | `src/pages/index.astro:705` |

#### Research Index + Filtering

| # | Status | Effort | Item | File |
|---|---|---|---|---|
| AUD-009 | [ ] | XS | **Remove or convert Type filter on research index** — All coursework reports are now in the archive collection. Only `technical-report` type remains in research. The type filter is gated behind `allTypes.length > 1` so it is already hidden — confirm this is intentional and document it, or remove the dead filter code. | `src/pages/research/index.astro:82` |
| AUD-010 | [ ] | XS | **Show DOI badge on research index cards for published papers** — Published Zenodo papers have a DOI but the research index card shows no visual differentiation from completed-but-not-published items. Add a small DOI chip or "Published" badge to cards where `doi` is populated. | `src/pages/research/index.astro` |

#### Code Quality

| # | Status | Effort | Item | File |
|---|---|---|---|---|
| AUD-011 | [ ] | XS | **Fix `completedResearch` label** — Counts `publication_status === "completed" OR "published"` but the homepage label says "completed technical reports." Published DOI papers are not technical reports. Change label to "published and completed papers" or split the count. | `src/pages/index.astro:64–66,478` |
| AUD-012 | [ ] | XS | **Remove unused `featured` intermediate const** — `const featured = await getCollection("projects")` at line 34 is immediately shadowed by `const projects = featured.filter(...)` at line 35. Rename the collection call directly into `projects`. | `src/pages/index.astro:34` |
| AUD-013 | [ ] | XS | **Research Focus section: surface published count separately** — The homepage now has 4 published DOI papers and several completed-only reports. The single count line should distinguish "4 published (Zenodo DOI)" from "X completed" to be credibility-accurate. | `src/pages/index.astro:478` |

#### Security

No critical findings. All external links use `rel="noreferrer"`. No user input surfaces. `define:vars` in `about.astro` injects build-time static data only — safe. GitHub Pages platform limitation: no CSP headers possible without a CDN layer.

---

## Original P2/P3 Backlog (cross-reference)

Items from the original audit backlog are incorporated into Phase 2 above. Cross-reference:

| Original # | Superseded by / status |
|---|---|
| P2-SEO-001 | → 2A-005 |
| P2-SEO-002 | → 2A-006 |
| P2-SEO-003 | → 2A-009 |
| P2-CON-001 | → 2A-003 |
| P2-CON-002 | → 2B-002 |
| P2-CON-003 | Open — add PhD start date to `src/content/timeline/edu-phd.mdx` |
| P2-UX-001 | → 2A-007 |
| P2-UX-002 | → 2B-006 |
| P2-UX-003 | → 2B-005 |
| P2-UX-004 | → 2B-005 |
| P2-UX-005 | → 2B-005 |
| P2-PERF-001 | → 2C-010 |
| P2-PERF-002 | Done 2026-06-15 — intrinsic dimensions added to gallery, logo, and carousel images |
| P2-TECH-001 | → 2B-005 |
| P2-TECH-002 | Done 2026-06-15 — dead `.galleryImg` rule and duplicate `.social` color removed |
| P2-TECH-003 | → 2B-005 |
| P2-CRED-001 | → 2A-008 |
| P3-SEO-001 | → 2A-004 + 2A-005 + 2A-006 + 2C-004 |
| P3-CONTENT-001 | → 2C-001 |
| P3-CONTENT-002 | → 2B-007 + 2C-002 |
| P3-CONTENT-003 | → 2C-009 |
| P3-UX-001 | → 2C-011 |
| P3-UX-002 | → 2B-001 |
| P3-PERF-001 | → 2B-009 |
| P3-VISUAL-001 | → 2C-007 |

---

## Shipped Milestones

| # | Date | Item |
|---|---|---|
| P0-001 | 2026-06-08 | Moved `example.mdx` placeholder from research to archive |
| P1-SEO-003 | 2026-06-08 | Added `public/robots.txt` |
| P1-UX-001 | 2026-06-08 | Removed `text-align: justify` from homepage and about page |
| P1-SEO-001/002/004 | 2026-06-15 | Verified OpenGraph, Twitter Card, and canonical metadata already implemented |
| P1-UX-002/003/004/005 | 2026-06-15 | Added active navigation state and Pluto swatch, fixed work-row expansion, and verified footer contact links |
| archive collection | 2026-06-08 | Defined `archive` collection in `src/content/config.ts` |
| 2A-001 | 2026-06-08 | Expanded research schema with classification, lifecycle, academic metadata, identifiers, and distribution fields |
| 2A-002 | 2026-06-08 | Correctly classified and populated all three technical reports with institution, course, semester, abstract, keywords, citation, and ORCID |
| 2A-003 | 2026-06-08 | Research detail pages `/research/[slug]` — abstract, keywords, sidebar, citation block, PDF link |
| 2A-004 | 2026-06-08 | ScholarlyArticle JSON-LD per detail page — author ORCID, abstract, keywords, EducationalOrganization publisher |
| 2A-005 | 2026-06-08 | `@astrojs/sitemap` installed; `dist/sitemap-index.xml` generated; `robots.txt` Sitemap directive added |
| 2A-006 | 2026-06-08 | Person JSON-LD on homepage — name, jobTitle, worksFor, alumniOf (IIT/UC), sameAs (LinkedIn/GitHub/ORCID) |
| 2A-007 | 2026-06-14 | Rebuilt homepage skills as a six-category badge grid |
| 2A-008 | 2026-06-14 | Added credentials, academic honors, ORCID, and professional memberships |
| 2A-009 | 2026-06-14 | Updated hero positioning and page descriptions for enterprise data, financial systems, AI governance, and doctoral research |
| 2A-011 | 2026-06-08 | Research distribution display layer — conditional "Find this work on" sidebar on detail pages |
| 2A-012 | 2026-06-08 | Academic identity display — ORCID link in detail page sidebar; partial (full profile links pending ResearchGate/Zenodo URLs) |
| 2B-001 | 2026-06-14 | Replaced the PDF iframe with a semantic, mobile-friendly HTML resume and retained PDF download |
| 2B-005 | 2026-06-15 | Added centered focus-only skip navigation, corrected theme-control semantics, added previous/next project navigation, and removed duplicate CSS and design-reference comments |
| P2-PERF-002 | 2026-06-15 | Added intrinsic width/height to gallery, logo, and carousel images; removed dead .galleryImg CSS and duplicate .social color |
| UI re-audit | 2026-06-15 | Installed @phosphor-icons/react; replaced all hand-rolled SVGs on home, about, resume; trimmed hero to 4 elements; fixed featured projects to asymmetric hero+2 grid; fixed about carousel column ratio; split resume contact strip; replaced en-dashes with hyphens throughout |
| UI uplift | 2026-06-15 | Brightened --muted token (dark 150→180, light 92→72); accent-tinted skill and credential section labels; promoted chip and credential description text to --text; hid about carousel on mobile/tablet |
| 2B-006 | 2026-06-15 | Homepage contact CTA — "Let's connect" section with LinkedIn (primary) and Prefer Email? (secondary) buttons; domain-framed copy, no availability signal |
| 2B-010 | 2026-06-15 | Certifications collection fully wired — 25 MDX files, ordered by professional relevance, 7 hidden (featured: false), homepage shows top 2 with auto-count deep-link to /resume#certifications, resume shows all featured with skill chips and verify links |
| 2B-009 | 2026-06-15 | Cloudflare Web Analytics beacon added to SiteLayout.astro — no cookies, no consent banner, privacy-compliant |
| 2B-007 | 2026-06-15 | Project impact statements rewritten with real metrics — 1,500+ CML loans, ~800 CUSIPs across 3 derivative types, operational automation scope and goals |
| 2B-002 | 2026-06-15 | Work experience bullets quantified — 10+ pipelines, 30+ jobs, 2+ hrs/week saved, Derivatives migrated to Azure Synapse, FI+CML on track for EOY 2026, 5 cross-functional teams; P1 bullets frame foundation-building role |
| PERF-001 | 2026-06-15 | Image optimization — `getImage()` + WebP conversion on all `import.meta.glob` pipelines (places gallery, carousel, org logos); 28.4 MB → 2.4 MB (91% reduction); zero raw JPEG/PNG in dist |
| SiteLayout pass | 2026-06-15 | PERF-003 (logo CLS), UX-FIX-001 (drawer order), UX-FIX-002 (/cv in nav), UX-FIX-003 (theme-color meta), CODE-FIX-001 (nested @media, duplicate selectors, dead global.css rules) — all shipped in one pass |
| PERF-002 | 2026-06-15 | OG image: 1200×630 dark card (sharp-generated) with name, role, tag chips, planet decoration; og:image + og:image:width/height + twitter:card summary_large_image wired into SiteLayout |

| 2B-003 | 2026-06-15 | Recognition audit complete — IEEE-HKN Internal Secretary + Dean's List added to About page as Leadership & Service section; standalone recognition page deferred |
| 2B-004 | 2026-06-15 | Academic CV `/cv` live — Education, Research, Academic Honors, Memberships & Leadership, abbreviated work history, top certs; CV link in About page social row |
| 2A-013 (partial) | 2026-06-20 | *Securing Connected Systems* (Engineering-to-Research Monograph Series Vol. 1) added to research collection — DOI 10.5281/zenodo.20733453; `zenodo_url`, `doi`, `github_url`, `publication_date` all populated; `publication_status: published`; renders on `/research` and `/research/securing-connected-systems-wsn-iot-cps` |
| 2A-013 (partial) | 2026-06-21 | *Scalable Analytics for Enterprise Decisions* (Engineering-to-Research Monograph Series Vol. 7) added to research collection — DOI 10.5281/zenodo.20733992; `zenodo_url`, `doi`, `github_url`, `publication_date` all populated; `publication_status: published`; renders on `/research` and `/research/scalable-analytics-enterprise-decisions` |
| 2A-013 (partial) | 2026-06-22 | *Embedded-to-Edge-AI Reference Architecture* (Vol. 4, DOI 10.5281/zenodo.20784402) and *Data Mining for Financial Systems* (Vol. 8, DOI 10.5281/zenodo.20802595) added to research collection; both `publication_status: published`; render on `/research` and their respective detail slugs |

**Sprint 2 live deploy verified — 2026-06-08**

| URL | Result |
|---|---|
| `https://alanp13.github.io/` | 200 ✓ |
| `https://alanp13.github.io/research` | 200 ✓ |
| `https://alanp13.github.io/research/hybrid-disaster-recovery-plan` | 200 ✓ |
| `https://alanp13.github.io/sitemap-index.xml` | 200 ✓ |
| `https://alanp13.github.io/sitemap-0.xml` | 200 ✓ |
| `https://alanp13.github.io/robots.txt` | 200 ✓ |

Sitemap contains 16 URLs: `/`, `/about/`, `/resume/`, `/projects/` + 8 project slugs, `/research/` + 3 research slugs.
Rollback tag after the June 15 history rewrite: `website-v1.3-sprint2` @ `796deef`.
