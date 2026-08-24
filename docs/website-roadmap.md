# Website Roadmap — Alan Palayil Portfolio

Master backlog for https://alanp13.github.io  
Last full audit: **2026-08-24** (Phase 6 — full regression sweep of all `[x]` items post CV/Resume update; zero regressions found, one gap reopened)  
Prior audit: 2026-08-13 (Phase 4 — structured data, ARIA, accessibility, SEO, reduced-motion, rel consistency)  
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

### Identity & data accuracy (Aug 2026 audit)

Sourced from CareerOS canonical registry (`docs/career-os.md`). All facts verified against physical certificates or multi-source corroboration before this section was written.

| ID | Status | Priority | Effort | Item | Notes |
|---|---|---|---|---|---|
| ID-001 | [x] | P0 | XS | **Current job title wrong site-wide — update "Application Development Analyst" → "Data Engineer"** — Updated: JSON-LD `jobTitle`, hero lead, meta description in `index.astro`; role text + meta in `about.astro`; contactRole + meta in `resume.astro`. | Shipped 2026-08-12. |
| ID-002 | [x] | P0 | XS | **Close GEN-002 (P2) end date — "Present" → "July 2026"** — `work-genworth-p2.mdx` and `resume.astro` P2 entry both updated. | Shipped 2026-08-12. |
| ID-003 | [x] | P0 | S | **Add Data Engineer (GEN-003) timeline entry** — Created `src/content/timeline/work-genworth-de.mdx` (order: 50) and `resume.astro` Data Engineer section. Build clean. | Shipped 2026-08-12. |
| ID-004 | [x] | P1 | XS | **Fix ITHENA work mode — remove "In-Person"** — `work-ithena-fs.mdx` and `resume.astro` updated. | Shipped 2026-08-12. |
| ID-005 | [x] | P1 | XS | **Add Student Assistant timeline entry** — Created `work-iit-student-assistant.mdx` (order: 20, brief 2-bullet framing for low visual priority). | Shipped 2026-08-12. |
| ID-006 | [x] | P1 | XS | **IIT BS degree — add start date** — `edu-bs.mdx` and `resume.astro` updated to "August 2019 – August 2023". | Shipped 2026-08-12. |
| ID-007 | [x] | P1 | XS | **IIT MS degree — add start date** — `edu-ms.mdx` and `resume.astro` updated to "May 2022 – August 2023". USER-CONFIRMED; supersedes older Aug 2022 CareerOS record. | Shipped 2026-08-12. |
| ID-008 | [x] | P1 | XS | **Fix CFA cert MDX — wrong title and status** — `foundations-in-investments.mdx` updated: title → "Investment Foundations® Certificate", `status: "earned"`, `dateObtained: "2026-07"`, `credentialId: "189900608"`. | Shipped 2026-08-12. Physical cert verified. |
| ID-009 | [x] | P1 | S | **Reclassify AWS Udemy training — remove from certification display** — CareerOS confirmed no official AWS certifications held. The item is a Udemy exam-prep course. `aws-certified-5-certifications.mdx`: `featured→false`, category→`other` (schema enum does not support "training"; "other" is the valid closest value), title/summary rewritten. Do not describe Alan as AWS Certified. | Shipped 2026-08-12. Architecture debt resolved 2026-08-24 — see AWS-MIGRATE-001 (migrated to `training` collection). |
| ID-010 | [x] | P1 | XS | **Update research count terminology — "4 papers" → "10 Technical Monographs & Reports"** — Updated: `index.astro` count line now reads "{N} open-access Technical Monographs & Reports published"; research card CTA "Read paper →" → "Read report →"; `research/index.astro` uses "Technical Monographs & Reports published via Engineering-to-Research Monograph Series"; `cv.astro` meta description uses dynamic count from collection. | Shipped 2026-08-12/13. |
| ID-011 | [x] | P1 | S | **Add three new certification MDX files** — Created: `qualys-vmdr.mdx` (VERIFIED/physical cert, Jul 2026), `neo4j-certified-professional.mdx`, `neo4j-graph-data-science.mdx`. | Shipped 2026-08-12. Both Neo4j certs upgraded to VERIFIED 2026-08-24 — user supplied GraphAcademy certificate URLs (`credentialUrl` added to both MDX files, `career-os.md` CERT-003/CERT-004 confidence updated). |
| ID-012 | [x] | P1 | S | **Audit `doi:` field in all 10 research MDX files** — Verified: all 10 published research MDX files have `doi:` field set. Built-output JSON-LD confirmed: `doi:` populates `identifier` (as `https://doi.org/{doi}`), not `datePublished`. No changes needed. | Verified 2026-08-12. |
| ID-013 | [x] | P2 | XS | **Remove internal level tags from Genworth timeline titles** — Removed "(P1)" from `work-genworth-p1.mdx` and "(P2)" from `work-genworth-p2.mdx`; also removed from both hardcoded `resume.astro` spans. | Shipped 2026-08-12. |
| ID-014 | [x] | P2 | XS | **Add HKN dates to edu-ms.mdx bullets** — Updated bullet to "Member, Eta Kappa Nu (IEEE-HKN), April 2022 – May 2023; served as Internal Secretary." Also corrected stale hardcoded "Jan 2022" in `cv.astro` and `about.astro` to "Apr 2022" (canonical: RESUME-0728). resume.astro HKN bullet also updated with dates. | Shipped 2026-08-12/13. |

### CV page update (Aug 2026) ✓ Complete 2026-08-23

Sourced from a user-supplied LinkedIn export of Memberships & Leadership, cross-checked against `docs/career-os.md` canonical precedence (résumé > canonical registry > LinkedIn). Scope: `src/pages/cv.astro` only — `about.astro`'s equivalent section intentionally not touched this pass.

| ID | Status | Priority | Effort | Item | Notes |
|---|---|---|---|---|---|
| CV-001 | [x] | P2 | S | **Expand CV Memberships & Leadership to 5 entries** — Added HKN Alumni Member (May 2023–Present), SHPE Member (Aug 2022–May 2023), IEEE General Member (Aug 2021–May 2023). Removed the old ambiguous "Member — Eta Kappa Nu (IEEE-HKN) — 2021–2023" line, which conflated a plain IEEE membership with HKN. HKN Internal Secretary date verified against a conflicting LinkedIn "Jan 2022" figure and kept at the canonical Apr 2022 (RESUME-0728, INCON-012 — Jan 2022 already established as stale). | Shipped 2026-08-23. New facts logged in `career-os.md` Leadership & Affiliations table. |
| CV-002 | [x] | P2 | XS | **CV Certifications section sort fixed to true date order** — Was `featured`-only (20 of 28), capped at 5, sorted by editorial `order` field. Now shows all 20 featured certs (matches `resume.astro`'s curated set), true `dateObtained` descending sort instead of `order`, no cap. "Selected. All certifications →" note kept, still links to `/resume#certifications`. | Shipped 2026-08-23. `resume.astro`/`index.astro` certification logic unchanged (still `order`-sorted) — out of scope for this pass. |
| CV-003 | [x] | P2 | XS | **CV Publications note reworded + ORCID link added** — "Engineering-to-Research Monograph Series · Zenodo community · OpenAIRE-indexed" → "Open-access research indexed on Zenodo and OpenAIRE · ORCID: [linked]", reusing the page's existing `.cvLink` pattern. | Shipped 2026-08-23. |

### Resume page update (Aug 2026) ✓ Complete 2026-08-24

Sourced from a local, previously-uncommitted `public/Alan_Palayil_Resume.pdf` found to be materially more current than the version committed to git (which predated the Data Engineer promotion, Ph.D. enrollment, and current certifications) — see RES-006.

| ID | Status | Priority | Effort | Item | Notes |
|---|---|---|---|---|---|
| RES-001 | [x] | P2 | XS | **Accent-color "Present" dates** — Current-role date ("July 2026 – Present") now uses the existing `.rInProgress` accent class, matching the PhD education entry which already had it. | Shipped 2026-08-23. |
| RES-002 | [x] | P2 | S | **Technical Skills rebuilt to match current resume PDF** — Replaced the 6-category/30-tag Genworth-specific list with the 8-category/46-tag list from the local resume PDF (Languages & Frameworks, Databases & ETL, Cloud & DevOps, Integration & Formats, Security & Governance, AI & Data Science, Automation & Hardware, Methodologies). AWS listed as "AWS (Solutions Architect, SysOps, Developer)" per explicit user instruction, despite no official AWS certification on file (Udemy exam-prep only, AWS-MIGRATE-001) — kept as-is at user's direction. | Shipped 2026-08-23. |
| RES-003 | [x] | P2 | XS | **Certifications order rule matched to CV** — Replaced status-priority + `order`-field sort with featured-filter + true `dateObtained` descending sort (same logic as CV-002). | Shipped 2026-08-23. |
| RES-004 | [x] | P2 | S | **PDF-backed certificate links added** — CFA Investment Foundations and Qualys VMDR certs had no working `credentialUrl` (both commented out, no external verify page). Copied their PDFs from `manual/_extracted/Certifications/` into `public/certs/`, relaxed the `credentialUrl` schema from `.url()` to plain `z.string()` to allow root-relative paths, and set `credentialUrl` on both MDX files. Link label now reads "View Certificate →" for local PDFs vs "Verify →" for external verification URLs, to avoid implying third-party verification for a self-hosted scan. | Shipped 2026-08-23. 15 of 28 certs still have no PDF or verify link on file — not addressed this pass. |
| RES-005 | [x] | P2 | XS | **3-line professional summary added** — New `.rSummary` paragraph between the contact block and Experience, adapted from the local resume PDF's Professional Summary (trimmed to 3 sentences; dropped "peer-distributed" wording in favor of established site terminology). | Shipped 2026-08-23. |
| RES-006 | [x] | P2 | XS | **Section header size increased** — `.rHead` font-size 13px → 18px (was smaller than `.rTitle`'s 15.5px entry-title text); `::before` accent bar height 14px → 18px to match. | Shipped 2026-08-23. |
| RES-007 | [x] | P0 | XS | **Downloadable resume PDF is stale on the live site** — `public/Alan_Palayil_Resume.pdf` had local, uncommitted changes (current version: Data Engineer title, Ph.D., current certs, updated skills/summary) that were not yet committed. The version live on GitHub Pages showed "Associate Application Development Analyst... Present" with no Ph.D. or Data Engineer role. | Resolved 2026-08-23. User confirmed; committed and pushed (`dfe68a3`) alongside the CV/Resume page work. Live PDF now matches site content. |

### Phase 1 — LinkedIn synchronization

Manual user actions. Priority: Employment → Education → Certifications → Headline/About → Publications.

**Integrity rules (apply to all LinkedIn edits):**
- Never expose (P1)/(P2) internal level designations
- ITHENA = "Software Engineer Intern" (not "Full Stack Developer Intern")
- HKN start = April 2022 (not January 2022)
- AWS Udemy = exam-prep training only; do not use "AWS Certified" as a personal credential
- Research = "Technical Monographs & Reports" — never "peer-reviewed papers"

#### A. Employment

| ID | Status | Item |
|---|---|---|
| LI-001 | [x] | **Close Application Development Analyst** — Employer: Genworth Financial. Dates: December 2025 – July 2026. Do not show as current. Do not expose P2 level. | Completed 2026-08-13. |
| LI-002 | [x] | **Add/update Data Engineer (current role)** — Employer: Genworth Financial. Dates: July 2026 – Present. Title: Data Engineer. Location: Richmond, VA. | Completed 2026-08-13. |
| LI-003e | [x] | **Verify Associate Application Development Analyst** — Dates: July 2023 – December 2025. No P1 level. | Completed 2026-08-13. |
| LI-007 | [x] | **Verify ITHENA title reads "Software Engineer Intern"** — Dates: June 2020 – August 2020. Location: Richmond, VA. No "In-Person." | Completed 2026-08-13. |
| LI-008 | [x] | **Verify IIT Student Assistant** — Title: Student Assistant, Office of Residence Life, Illinois Institute of Technology. Dates: August 2021 – May 2023. Lower visual prominence than engineering roles. | User-verified 2026-08-24: title reads "Student Assistant" at IIT. `career-os.md` IIT-SA-001 updated. |

#### B. Education

| ID | Status | Item |
|---|---|---|
| LI-009 | [x] | **B.S. Computer & Cybersecurity Engineering** — IIT, August 2019 – August 2023 | Completed 2026-08-13. |
| LI-010 | [x] | **M.S. Cybersecurity Engineering** — IIT, May 2022 – August 2023 | Completed 2026-08-13. |
| LI-011 | [x] | **Ph.D. Information Technology** — University of the Cumberlands, August 2025 – Present. | Completed 2026-08-13. |
| LI-012 | [x] | **HKN affiliation** — Eta Kappa Nu, Internal Secretary, April 2022 – May 2023. | Completed 2026-08-13. |

#### C. Certifications

| ID | Status | Item |
|---|---|---|
| LI-003 | [x] | **Add Investment Foundations® Certificate** — CFA Institute, July 2026, Credential #189900608. | Completed 2026-08-13. |
| LI-004 | [x] | **Add Qualys VMDR** — Vulnerability Management Detection and Response, July 2026, expires July 2028. | Completed 2026-08-13. |
| LI-005 | [x] | **Verify Neo4j certs** — Neo4j Certified Professional and Neo4j Graph Data Science, both August 2026. | Completed 2026-08-13. |
| LI-006 | [x] | **AWS Udemy** — Removed or reclassified out of Certifications. | Completed 2026-08-13. |

#### D. Headline & About

| ID | Status | Item |
|---|---|---|
| LI-013 | [x] | **Update LinkedIn headline** — "Data Engineer \| Financial Systems & Cloud Platforms \| AI & Data Science Research \| Ph.D. Student" | Completed 2026-08-13. |
| LI-014 | [x] | **Update LinkedIn About** — Data Engineer framing, Ph.D. student, no Fortune 500 label, no restricted metrics. | Completed 2026-08-13. |

#### E. Publications

| ID | Status | Item |
|---|---|---|
| LI-015 | [x] | **All 10 Zenodo volumes entered** — Publisher: Zenodo, series in description field, newest to oldest, DOI URLs. | Completed 2026-08-13. |

**Public-metric safety:** Do not publish private/internal operating metrics (CML/derivatives volumes, internal system identifiers) unless explicitly PUBLIC-cleared in CareerOS.

---

### Phase 2 — GitHub synchronization

Mix of code-assistable (READMEs, topics) and manual (bio, pins, metadata).

#### A. Profile

| ID | Status | Item |
|---|---|---|
| GH-001 | [x] | **Update bio to reflect Data Engineer** — Profile README updated (commit `2747be3f`, AlanP13/AlanP13, 2026-08-13). GitHub profile bio updated manually 2026-08-13: "Data Engineer building reliable data systems across financial platforms, cloud infrastructure, AI, and applied research." |

#### B. Pinned repositories

| ID | Status | Item |
|---|---|---|
| GH-003 | [x] | **Audit and update pinned repos** — Set manually 2026-08-13: AlanP13.github.io, Enterprise-Event-Simulation-Platform, IoT-Data-Platform-Lab, Data-Mining-for-Financial-Systems-Vol8, Py8085-Simulator; slot 6 open. Financial-Engineering-Portfolio removed. Sixth-pin candidates reviewed; none strong enough — revisit after Phase 4 audit. |

#### C. IPRO497 repositories

| ID | Status | Item |
|---|---|---|
| GH-002 | [x] | **IPRO497-Design-and-Entrepreneur** — Both repos already had minimal READMEs. Repo-level description and topics added 2026-08-13. Description: "IPRO capstone — virtual golf club fitting solution with sensor-equipped demo kits and web interface. Interdisciplinary project with Wilson Sports." Topics: capstone, entrepreneurship, interdisciplinary, iot, sensors, web-development. README prose unchanged (functional). |
| GH-004 | [x] | **IPRO497-AP-Digital-Development** — Same as GH-002. Description: "HawkStudy — Java Spring Boot campus study room reservation system with PostgreSQL backend and ThingSpeak IoT integration." Topics: capstone, iot, java, postgresql, spring-boot, web-application. |

#### D. Repository metadata

| ID | Status | Item |
|---|---|---|
| GH-005 | [x] | **Repo descriptions, topics, metadata** — Applied 2026-08-13. Topics added to: AlanP13.github.io, Enterprise-Event-Simulation-Platform, Py8085-Simulator, IoT-Data-Platform-Lab, Order-Management-System, DataFrame-and-CSV-Utility, Applied-Operating-Systems, Getting-the-Foundations-Right-Vol3, Data-Mining-for-Financial-Systems-Vol8, Whether--Why--and-For-Whom-Vol9, DriveSimX-Mobile-Vehicle-Simulation, Trajectory-Lab-Mobile-Physics-Simulator. Descriptions fixed: Financial-Engineering-Portfolio (removed "Python bootcamp" framing), Web-Portfolio (marked as legacy React portfolio), ECE218/CS331/ECE407 (coursework one-liners added). |

#### E. Classification schema

Apply CareerOS project tiers to all public repos:
- **Portfolio Case Study** — strongest, professionally presented
- **GitHub Engineering Project** — technically useful, no full case study needed
- **Historical / College Project** — evidence of earlier development, lower prominence

---

### Phase 3 — Cross-platform reconciliation ✓ Complete 2026-08-13

17 material issues resolved across employment/identity, education, certifications, research, and projects. Full clearance check run; restricted metrics removed from all public surfaces. Zero unresolved material contradictions at gate.

Key fixes: GEN-002 end date closed, GEN-003 added, PhD label normalized, CML/derivatives volumes removed from public copy (preserved in CareerOS canonical evidence), CUSIP count removed from derivatives page, "ScholarlyArticle" classification noted for future correction (fixed Phase 4).

---

### Phase 4 — Full portfolio audit ✓ Complete 2026-08-13

Commits: `bbcb133` (Batch 1) · `d6eb7d2` (Batch 2) · `0a42c03` (Batch 3)

**Finding registry — all P0 and P1 resolved:**

| ID | Sev | Finding | Status |
|---|---|---|---|
| P0-001 | P0 | `alumniOf` included UoC (active enrollment) | ✓ Fixed — moved to `affiliation` |
| P0-002 | P0 | `ScholarlyArticle` type on technical monographs | ✓ Fixed — `CreativeWork` + `genre: "Technical monograph"` |
| P0-003 | P0 | Project Newest/Oldest sort used render index, not dates | ✓ Fixed — simplified to Featured/A–Z/Z–A |
| P1-001 | P1 | Filter chips missing `aria-pressed` (projects + research) | ✓ Fixed — stable chips/buttons get aria-pressed; cycle button correctly omitted |
| P1-002 | P1 | Project external links missing `rel="noopener noreferrer"` | ✓ Fixed |
| P1-003 | P1 | "PhD Candidate" label on CV + credentials block | ✓ Fixed — "Ph.D. Student" |
| P1-004 | P1 | Travel gallery auto-rotation: no keyboard pause (WCAG 2.2 SC 2.2.2) | ✓ Fixed — visible Pause/Play button; focusin/focusout pause; prefers-reduced-motion gates setInterval |
| P2-001 | P2 | No JSON-LD on project detail pages | ✓ Added — SoftwareSourceCode / CreativeWork per project |
| P2-002 | P2 | No JSON-LD on CV page | ✓ Added — ProfilePage + Person mainEntity |
| P2-003 | P2 | Research meta desc: stale "AI Governance" framing, "PhD" (no dots) | ✓ Fixed — broader AI/Data Science framing, "Ph.D. student" |
| P3-001 | P3 | No `prefers-reduced-motion` global CSS | ✓ Fixed — universal collapse rule added |
| P3-002 | P3 | `rel="noreferrer"` without `noopener` across site | ✓ Fixed — normalized to `noopener noreferrer` site-wide |

**Schema reclassification — RESOLVED 2026-08-13:** Three Genworth enterprise case study pages reclassified from `SoftwareSourceCode` → `CreativeWork` (`work-cml-json-prj`, `work-custody-bank-files-prj`, `work-derivatives-legacy-prj`). `college-convo-care` remains `SoftwareSourceCode` — actual software system/code artifact. Classification logic refactored into `CASE_STUDY_SLUGS` + `NON_CODE_PROJECT_SLUGS` named sets. All 10 project schemas verified against built HTML.

**Phase 4 gate — all checks passed (0 open P0/P1, 0 open schema-classification questions):**
Build clean · JSON-LD parses on all 22 schema pages · No PhD Candidate variants · No restricted metrics · No Newest/Oldest project sort · UoC in affiliation not alumniOf · Monographs as CreativeWork · ARIA filter states correct · Gallery Pause/Play keyboard operable · Reduced-motion prevents gallery rotation · Global reduced-motion CSS present · All target="_blank" links have `noopener noreferrer` · Enterprise case studies as CreativeWork · SoftwareSourceCode only for genuine code artifacts

---

### Phase 5 — Graphify refresh ✓ Complete 2026-08-13

Re-run against fully corrected post-Phase-4 state. Phase 5 QA gate passed.

**Graph stats:** 187 nodes · 196 edges · 31 communities (8 meaningful, rest singletons)

**Key communities:** Research Concepts & Governance Frameworks (34, cohesion 0.08 — known over-clustered; audience persona nodes mixed with research concepts) · Astro Build Config (23) · Site Layout & Navigation (19) · Page Templates & Content Routes (17) · Portfolio Strategy & Audience (15) · Project Infrastructure & CI/CD (8) · Academic Trajectory & Research Methods (8) · Genworth Enterprise Projects (4) · Edge AI & IoT Projects (4)

**God nodes:** SiteLayout.astro (26 edges, legitimate structural hub) · Vol 10 Capstone (16 edges, legitimate citation structure) · Computer Architecture Vol 2 (8 edges, ~2 inflated by artifact INFERRED edges)

**Known graph artifacts (INFERRED edges — not canonical CareerOS relationships):**
- O1/EB1 Immigration Reviewers → Computer Architecture Vol. 2: proximity artifact from PRODUCT.md chunk; audience persona does not specifically reference this paper
- Research Collaborators → Computer Architecture Vol. 2: same artifact; connects to all research output, not Vol. 2 specifically
- Embedded-to-Edge-AI Vol. 4 → ITHENA Intern: anachronistic; 2020 internship cannot have informed a 2026 paper

**Useful inferred associations (correctly labeled INFERRED):** Incorta cert → Scalable Analytics Vol 7 · Palo Alto cert → WSN/IoT Vol 1 · RISC Processor → Computer Architecture Vol 2

**Phase 5 QA fixes applied 2026-08-13:**
- edu-phd.mdx: "Executive PhD in Information Technology" → "Ph.D. in Information Technology" (marketing label removed)
- work-genworth-p2.mdx + resume.astro: internal team names (BA, PAM Ops, DGM, AppWorx Support, Alternative Assets) generalized to public-safe phrase
- work-genworth-p1.mdx: date separator normalized to en dash
- career-os.md: C-002 stale edu-bs note corrected; EDU-001 display form documented; GEN-002 clearance policy updated to explicitly exclude team names

**Completion definition:** Canonical registry ✓ → LinkedIn ✓ → GitHub ✓ → Portfolio audit ✓ → Graphify rebuild ✓ → canonical contradiction scan = 0 unresolved material contradictions ✓ → supersession validated ✓ → PUBLIC/PRIVATE clearance validated ✓ → inferred edges documented and separated from canonical ✓ → no misleading high-impact inferred edges untreated ✓

---

### Phase 6 — CV/Resume update & full regression audit ✓ Complete 2026-08-24

CV page update (CV-001–003) and Resume page update (RES-001–007) shipped 2026-08-23/24 (commits `dfe68a3`, `d7f81d4`). This phase's audit re-verified every `[x]` item in the roadmap against live source — not just the newly-shipped ones — using three independent verification passes covering: Identity & data accuracy (ID-001–014), UI/anti-patterns (UI-001–014, AUD2-001–007), code quality (CQ-001–005), SEO (SD-001–003), IA (IA-001–002), and the About/CV membership cross-check.

**Result: zero regressions.** Every previously-shipped `[x]` item checked out exactly as documented — CSS values, JSON-LD fields, timeline dates, cert facts, all confirmed against current source, not assumed from prior notes.

**One reopened gap found:** CV-001 (2026-08-23) restructured CV's membership list to 5 entries but intentionally left `about.astro` untouched, per that session's stated scope. This silently reopened CP-001 (originally closed 2026-06-22, which had synced both pages) — About and CV now disagree on membership content. Logged as **CP-009**.

**Two minor findings, not regressions, added as new low-priority backlog items:**
- **CQ-006** — `index.astro` locally redeclares `--card-bg` with a no-op self-reference instead of relying on `theme.css`.
- **EXT-004** — confirmed still not implemented (roadmap already correctly listed this open; audit just verified the "unblocked now" framing is accurate — it needs a small code change, not further external action).

**Gate:** 0 regressions in 40+ audited `[x]` items · 1 reopened item logged (CP-009) · 2 new minor findings logged (CQ-006) · RES-007 resolved and closed · roadmap audit-score table refreshed below.

---

### Phase 7 — XS/S backlog sprint ✓ Complete 2026-08-24

Closed every open roadmap item with explicit XS or S effort, per explicit instruction to audit current source before editing rather than trust roadmap status.

**Batch A — content reconciliation:**
- **CP-005, CP-006** — audited against `career-os.md` GEN-002/GEN-003 clearance notes and git history before touching anything. Both verified already satisfied: the June 2026 Shipped Log entries describing hard numbers predate the 2026-08-13 clearance decision (CLR-001, CLR-006) that deliberately stripped those exact figures from public copy. Current qualitative bullets are the correct, intended state, not an oversight. Closed as verified, zero files changed.
- **CP-009** — About page's membership list expanded 3→5 entries to match CV exactly (canonical source: `career-os.md`), Dean's List split into its own Academic Honors sub-heading. `src/pages/about.astro`.

**Batch B — design/code cleanup:**
- **CQ-006** — removed the no-op `--card-bg` self-reference in `index.astro`; token now resolves solely from `theme.css`. Verified in built CSS.
- **UI-014** — audited `research/[slug].astro` against `projects/[slug].astro` property-by-property. Fixed genuine oversights (page padding, sidebar breakpoint/width mismatch, non-responsive gap, missing sticky sidebar); left content-driven differences (h1 treatment, prose rhythm) untouched.
- **UI-013** — `DESIGN.md` written from a full source audit of the token system, galaxy background layers, page shell, typography, and breakpoints — including an honest inventory of 5 unresolved inconsistencies rather than an idealized rewrite.

**Batch C — indexing readiness:**
- **AN-001** — confirmed all repo-side SEO prerequisites already correct (sitemap, robots.txt, canonical tags, no noindex). No code fix needed. Reclassified as **EXT-005**: the only remaining step is your manual Search Console + Bing Webmaster submission — handoff steps provided.
- **AN-002** — confirmed all 10 research items have complete DOI/Zenodo/ORCID metadata. Added Highwire Press `citation_*` meta tags to `research/[slug].astro` (new `SiteLayout` `head` slot) since Scholar's crawler parses these directly, not JSON-LD. No Scholar profile exists to link — none claimed. Remaining blocker (EXT-002) is purely Google's indexing timeline.

**Validation:** clean build after every batch · JSON-LD parse-checked on 4 schema-bearing page types · all 29 `target="_blank"` links confirmed to carry `noopener` · zero restricted phrases found (no "AWS Certified", no "PhD Candidate", no P1/P2 tags, no stale Jan-2022 HKN date) · `--card-bg` confirmed resolving from `theme.css` only · pre-existing `ScholarlyArticle` JSON-LD type on `research/[slug].astro` noted as a pre-existing (not newly introduced) discrepancy with the Phase 4 CreativeWork reclassification — flagged for a future dedicated pass, deliberately not touched this sprint since schema-classification changes were explicitly out of scope.

**Gate:** all 7 targeted items resolved (5 closed `[x]`, 2 narrowed to their true external remainder `[~]`) · 0 regressions · 0 restricted-metric or terminology violations · 5 files changed + 1 new file (`DESIGN.md`).

---

### Architecture debt

| ID | Status | Priority | Effort | Item |
|---|---|---|---|---|
| AWS-MIGRATE-001 | [x] | P3 | M | **Migrate AWS Udemy training out of certifications collection** — Created a new `training` content collection in `content.config.ts` (identical schema to `certifications` — zero frontmatter changes needed) and `git mv`'d `aws-certified-5-certifications.mdx` from `src/content/certifications/` to `src/content/training/`. A full certifications collection query can no longer surface it even accidentally. No page queries the `training` collection yet — this is data hygiene, not a new UI section; build verified clean, item confirmed absent from all rendered output (it was already `featured: false` everywhere, so no visual change). | Shipped 2026-08-24. `src/content.config.ts`, `src/content/training/aws-certified-5-certifications.mdx` |

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
| UI-013 | [x] | P3 | S | **Document galaxy design system** — `/impeccable document` was not available in this session; `DESIGN.md` written directly from a full source audit of theme.css, stars.css, global.css, SiteLayout.astro, and representative page style blocks. Documents the actual current implementation, including 5 honestly-inventoried inconsistencies (mixed alpha idioms, undeclared `--content` token, non-standardized breakpoints, incomplete `--card-bg` migration, non-accent-driven nebula purple wash) rather than presenting an idealized spec. | `DESIGN.md` (new) |
| UI-014 | [x] | P3 | S | **Research detail padding alignment** — Audited against `projects/[slug].astro` line-by-line. Fixed genuine oversights: `.page` padding `12px 0 48px` → `26px 16px 48px` (matches project exactly); sidebar breakpoint `860px` → `980px` and width `260px` → `280px` (was arbitrarily different for no content reason); `.body` gap now responsive `18px → 24px` (was a fixed `32px` even on mobile-stacked layout); added `.rhead { margin-top: 10px }` and sidebar `position: sticky` to match project's pattern. Left h1 styling, badges/abstract vs. lead/chips, and prose h2/divider spacing untouched — genuinely content-driven differences (research is longer-form academic prose; project is a shorter case study), not oversights. | `src/pages/research/[slug].astro` |

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
| CQ-006 | [x] | P3 | XS | **`--card-bg` redeclared locally in index.astro** — Removed the no-op `--card-bg: var(--card-bg);` self-reference and the duplicate `[data-theme="light"] { --card-bg: rgba(0,0,0,0.02) }` override; `--card-bg` now resolves solely from `theme.css` in both modes, as intended. Verified in built output: token still resolves correctly (21 references to `--card-bg` remain in bundled CSS, all sourced from theme.css). | `src/pages/index.astro:990-1002` |

### Content and copy

| ID | Status | Priority | Effort | Item | Notes |
|---|---|---|---|---|---|
| CP-001 | [x] | P1 | XS | **Fix memberships order — most-recent-first on CV and About** — IEEE Member (May 2024–Present) was appended after the older HKN entries on both pages. It should appear first. Original fix (2026-06-22): IEEE Member (May 2024–Present) → HKN Internal Secretary (Apr 2022–May 2023) → HKN Member (2021–2023) on both pages. **Superseded 2026-08-23 by CV-001** — CV now has 5 entries (HKN Alumni Member, SHPE, IEEE General Member added); About was intentionally left untouched that pass and still has only the original 3. See CP-009 (reopened gap). | `src/pages/cv.astro`, `src/pages/about.astro` |
| CP-002 | [x] | P1 | XS | **Research index subtitle — surface published papers** — Currently reads "Applied research work related to AI and Data Science in enterprise systems." Now that 4 papers are Zenodo-published and OpenAIRE-indexed, the subtitle should say so (e.g. "4 papers published via Engineering-to-Research Monograph Series, indexed on Zenodo and OpenAIRE."). | `src/pages/research/index.astro:54–56` |
| CP-003 | [x] | P2 | XS | **CV page meta description — mention publications** — Currently: "PhD candidate in Information Technology…researcher in AI governance." After the CV split, the description should surface "4 Zenodo-published papers" as the lead credential. | `src/pages/cv.astro:25` |
| CP-004 | [x] | P2 | XS | **Research detail page meta description** — `[slug].astro` uses `d.abstract ?? d.summary` as the description. For published papers, the abstract is rich and long. Consider truncating to 155 chars or using a dedicated `short_description` field for meta. | `src/pages/research/[slug].astro:74` |
| CP-005 | [x] | P2 | S | **Quantified work bullets (2B-002) — verified already satisfied.** Audited before editing. The 2026-06-15 Shipped Log entry ("10+ pipelines, 30+ jobs, 2+ hrs/week saved") describes a **pre-clearance** state. `career-os.md` GEN-002/GEN-003 explicitly record that these exact figures — pipeline count, job count, time savings, team count (5), CML loan volume (1,500+) — were deliberately removed from public copy on 2026-08-13 (clearance fixes CLR-001, CLR-006) because they are valid résumé facts but not PUBLIC-cleared. Current bullets in `resume.astro` and all three timeline MDX files are already qualitative, outcome-oriented, and contain zero numeric figures — exactly the "strong outcome-oriented statement instead of fabricating a number" the task specification calls for. No lawful public-safe metric exists to add; further quantification would violate the Aug 13 clearance decision. Closing as verified-satisfied, not code-changed. | `src/content/timeline/work-genworth-p1.mdx`, `work-genworth-p2.mdx`, `work-genworth-de.mdx`, `src/pages/resume.astro` |
| CP-006 | [x] | P2 | S | **Business outcome reframing on work projects (2B-007) — verified already satisfied.** Audited before editing. All three `work-*.mdx` project pages already use a `Context → What I Built → Reliability/Outcomes → Why This Matters` structure with a dedicated `impact:` frontmatter array framed around business/operational outcomes (vendor elimination, cost/risk reduction, auditability, extensibility), not just feature lists. Restricted metrics (CUSIP counts, CML loan volumes) were already removed 2026-08-13 per `career-os.md` clearance notes, with qualitative replacements in place — matches Phase 3/4 public-metric-safety rules exactly. No regression, no further reframing needed. Closing as verified-satisfied, not code-changed. | `src/content/projects/work-cml-json-prj.mdx`, `work-custody-bank-files-prj.mdx`, `work-derivatives-legacy-prj.mdx` |
| CP-007 | [x] | P1 | XS | **PhD dates — add start year** — `edu-phd.mdx` showed "In progress" without a year. Updated to "August 2025 – Present" (CareerOS EDU-001 canonical; initial commit used bare "2025 – Present" without month — corrected 2026-08-13 before push). | `src/content/timeline/edu-phd.mdx` |
| CP-008 | [x] | P2 | S | **Add missing LinkedIn projects — 32-bit RISC Processor & SensoryPi** — Two college projects visible on LinkedIn were absent from the projects collection. Added `college-risc-processor.mdx` (5-stage MIPS pipeline, Aug–Dec 2022) and `college-sensorpi.mdx` (Raspberry Pi facial recognition + motion detection, May–Jul 2022). | `src/content/projects/college-risc-processor.mdx`, `src/content/projects/college-sensorpi.mdx` |
| CP-009 | [x] | P2 | S | **About page memberships reconciled with CV.** About's "Leadership & Service" expanded from 3 to 5 entries (added HKN Alumni Member May 2023–Present, SHPE Member Aug 2022–May 2023, IEEE General Member Aug 2021–May 2023 — all per `career-os.md` Leadership & Affiliations table, matching CV's set exactly). Dean's List split out of the membership list into its own "Academic Honors" sub-heading within the same section, mirroring CV's separation, without adding a full new `<section>` (keeps About's lighter-weight presentation). Reused existing `.serviceList`/`.serviceItem` CSS classes — no new styles. About and CV now state identical membership facts; About remains intentionally terser (no descriptive prose per entry, matching its existing visitor-friendly tone). | `src/pages/about.astro:159-201` |

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
| IA-002 | [x] | P2 | XS | **OpenAIRE/indexed language on CV research section** — Original fix (2026-06-23): "Engineering-to-Research Monograph Series · Zenodo community, OpenAIRE-indexed" note added. **Reworded 2026-08-23 by CV-003** — current live text: "Open-access research indexed on Zenodo and OpenAIRE · ORCID: [linked]" — broader phrasing, ORCID now hyperlinked inline. | `src/pages/cv.astro:112` |
| IA-003 | [ ] | P3 | M | **Research distribution links — ResearchGate** — Sidebar on detail pages has a "Find this work on" section that renders conditionally. ResearchGate profile + paper pages still need to be created, then `researchgate_url` populated in each MDX. External action first. | `src/content/research/*.mdx`, `src/pages/research/[slug].astro` |
| IA-004 | [ ] | P3 | L | **Blog / writing section** | Trigger: 2–3 technical posts ready to publish. |
| IA-005 | [ ] | P3 | L | **Case study depth on work projects** — Architecture diagrams, before/after metrics. | Trigger: architecture details approved for public disclosure. |
| IA-006 | [ ] | P3 | M | **Research timeline progression view** | Trigger: after Google Scholar profile active. |
| IA-007 | [ ] | P3 | M | **Speaking / judging / leadership timeline** | Trigger: verified events accumulate. |
| IA-008 | [ ] | P3 | L | **Dedicated AI / Data Platform positioning page** | Trigger: architecture story is ready to tell. |

### Analytics and monitoring

| ID | Status | Priority | Effort | Item | Notes |
|---|---|---|---|---|---|
| AN-001 | [~] | P3 | S | **Google Search Console + Bing Webmaster Tools submission — repo-side readiness CONFIRMED, submission itself requires your authenticated account.** Verified 2026-08-24: `astro.config.mjs` site URL correct, `@astrojs/sitemap` wired, `robots.txt` has a correct `Sitemap:` directive and no `Disallow`, `SiteLayout.astro` emits a dynamic per-page `<link rel="canonical">`, zero `noindex` anywhere, `dist/sitemap-index.xml`/`sitemap-0.xml` generate correctly with all 10 research pages included. No repository-side fixes were needed — everything was already correct. **The only remaining blocker is the manual submission step**, which needs your Google/Microsoft account access; see handoff steps below. | — |
| AN-002 | [~] | P3 | S | **Google Scholar citation monitoring — repo-side discoverability improved, external profile status unverifiable from code.** Verified 2026-08-24: all 10 research MDX files already have complete `doi:`/`zenodo_url:`/`orcid:`/`citation:` metadata (the primary path to Scholar indexing, via Crossref/DataCite and Zenodo's own citation tags). Gap found and fixed: `research/[slug].astro` had no Highwire Press-style `citation_*` `<meta>` tags, which Scholar's crawler specifically parses (it does not reliably index Schema.org JSON-LD for this purpose) — added `citation_title`, `citation_author`, `citation_publication_date`, `citation_doi`, `citation_pdf_url`, `citation_abstract_html_url`, `citation_language` via a new `SiteLayout` `head` slot. `google_scholar_url` schema field already existed but is unpopulated in all 10 files — no existing profile found to add (cannot verify or claim a Scholar profile exists; none is asserted). **Remaining blocker is purely external:** a Scholar profile only auto-generates after Google indexes the (now better-tagged) research pages — no further code action possible until that happens. | `src/layouts/SiteLayout.astro`, `src/pages/research/[slug].astro` |

---

## External Blockers

Items that are code-ready but waiting on a non-code action.

| ID | Status | Item | Blocking action |
|---|---|---|---|
| EXT-001 | [~] | **ResearchGate profile + paper uploads** — Schema fields and display layer exist on detail pages. Fields empty until profile is created. | User: create ResearchGate profile, upload 4 papers, add `researchgate_url` to each MDX. |
| EXT-002 | [~] | **Google Scholar auto-profile** — Will auto-generate once research detail pages are indexed by Google. | Monitor after Search Console submission (EXT-005). Repo-side discoverability improved 2026-08-24 (AN-002: Highwire `citation_*` meta tags added to `research/[slug].astro`) — no further code action possible until Google indexes the pages. |
| EXT-003 | [~] | **Zenodo coursework reports** — 3 coursework reports in `/archive` are not yet deposited to Zenodo. | User: decide whether to deposit; not required for O1/EB1 since the 4 published monographs already satisfy the scholarly articles criterion. |
| EXT-004 | [~] | **ScholarlyArticle JSON-LD — external canonical URLs** — `sameAs` links to Zenodo and OpenAIRE record pages can be added once the exact canonical record URLs are confirmed. Currently `zenodo_url` is populated; could be added to schema. | Confirm exact Zenodo record canonical URL format; add `sameAs: [d.zenodo_url]` to schema builder. Small code change, unblocked now. |
| EXT-005 | [~] | **Search Console + Bing Webmaster submission (AN-001)** — All repo-side prerequisites confirmed 2026-08-24: sitemap live and correct, robots.txt correct, canonical tags dynamic and correct, no noindex, all 10 research pages included in the generated sitemap. Nothing left to fix in code. | User, in your own authenticated browser: **(1)** Google Search Console → [search.google.com/search-console](https://search.google.com/search-console) → Add property → `https://alanp13.github.io` (URL-prefix) → verify via the HTML-tag method (paste the `<meta name="google-site-verification">` tag it gives you back to this session and it can be added to `SiteLayout.astro`'s `<head>` in one line) → Sitemaps → submit `https://alanp13.github.io/sitemap-index.xml`. **(2)** Bing Webmaster Tools → [bing.com/webmasters](https://www.bing.com/webmasters) → Add site → same URL → Bing offers an "import from Google Search Console" option once (1) is done, which is the fastest path → otherwise verify via meta tag the same way → submit the same sitemap URL. **(3)** Return here with the verification tag(s) if you want them added to the repo permanently instead of left as a one-time Search Console check. |

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
| 2026-08-24 | Phase 7 | **XS/S backlog sprint** — Closed all 7 open XS/S-effort roadmap items. CP-005/CP-006 verified already satisfied (qualitative bullets are the intended post-clearance state, not an oversight — audited against `career-os.md` before touching anything). CP-009: About page memberships synced to CV's 5-entry list, Dean's List split into its own Academic Honors heading. CQ-006: removed no-op `--card-bg` self-reference in `index.astro`. UI-014: research detail page padding/sidebar breakpoint/gap aligned to project detail's rhythm where genuinely misaligned (860px→980px, 260px→280px, fixed 32px gap→responsive 18-24px). UI-013: `DESIGN.md` written from full source audit. AN-001: repo-side SEO prerequisites confirmed all correct, reclassified as EXT-005 (pure external action remains). AN-002: Highwire `citation_*` meta tags added to research pages via new `SiteLayout` head slot; no Scholar profile claimed. |
| 2026-08-24 | Phase 6 | **Full regression audit** — Re-verified all 40+ previously-shipped `[x]` roadmap items against live source (not prior notes). Zero regressions. Closed RES-007 (resume PDF committed/pushed). Reopened CP-001 as **CP-009** (About/CV membership sync broken by CV-001). Logged CQ-006 (minor `--card-bg` duplication). Refreshed Audit Score History with a new Aug 24 column. |
| 2026-08-24 | ID-011 | Neo4j Certified Professional and Graph Data Science certs upgraded USER-SUPPLIED → VERIFIED; user supplied GraphAcademy certificate URLs matching credential IDs on file. |
| 2026-08-23/24 | CV-001–003, RES-001–007 | **CV and Resume page updates** — CV: memberships expanded 3→5 entries, certifications sort fixed to true date order, Publications note reworded with ORCID link. Resume: "Present" dates accent-colored, Skills rebuilt from current resume PDF, certifications matched to CV's sort logic, CFA/Qualys VMDR certs gained PDF-backed links, 3-line professional summary added, section headers enlarged. Previously-uncommitted, more current `Alan_Palayil_Resume.pdf` committed and pushed (was serving a stale pre-promotion résumé). |
| 2026-08-12 | CP-007/008 | **LinkedIn sync** — PhD dates updated to "2025 – Present" (timeline MDX + hardcoded resume). Added two missing college projects: 32-bit RISC Processor (5-stage MIPS pipeline) and SensoryPi Smart Security System (Raspberry Pi facial recognition + motion detection). |
| 2026-06-25 | (perf) | **Scroll performance + light mode galaxy fix** — Removed `backdrop-filter: blur(12px/10px)` from `main.wrap.main` (was re-compositing all animated layers on every scroll frame; root cause of scroll jank). Replaced with `rgb(var(--bg) / 0.88)` dark / `rgb(var(--card) / 0.94)` light. Added `will-change: transform` + `contain: paint` to `.bgfx` container to promote entire background as a single GPU texture. Removed `filter: blur(0.2px)` from `.nebula`. Light mode nebula now visible via `mix-blend-mode: multiply` at `opacity: 0.32`; stars switched from `screen` to `multiply` blend at `opacity: 0.38` so accent-tinted star dots show on light bg. Header/nav/popover keep their `backdrop-filter` (fixed elements, no scroll cost). |
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

| Dimension | Baseline (Jun 8) | Post-Sprint 2 (Jun 15) | Post-Audit (Jun 22) | Galaxy Sprint (Jun 24) | Post-Phase 6 (Aug 24) |
|---|---|---|---|---|---|
| O1/EB1 Evidence Visibility | 2 / 10 | 5 / 10 | 8 / 10 | 8 / 10 | **9 / 10** |
| First Impression | 7.5 / 10 | 8 / 10 | 8.5 / 10 | 9 / 10 | **9 / 10** |
| Recruiter Clarity | 5.5 / 10 | 8 / 10 | 8 / 10 | 8 / 10 | **8.5 / 10** |
| Technical Credibility | 7 / 10 | 8 / 10 | 8.5 / 10 | 8.5 / 10 | **9 / 10** |
| Visual Design | 7 / 10 | 8 / 10 | 8.5 / 10 | 9 / 10 | **9 / 10** |
| SEO / Structured Data | 3.5 / 10 | 7.5 / 10 | 7.5 / 10 | 7.5 / 10 | **8 / 10** |
| Accessibility | 6 / 10 | 8 / 10 | 8 / 10 | 8 / 10 | **8.5 / 10** |
| Performance | 7 / 10 | 9 / 10 | 9 / 10 | 9 / 10 | **9 / 10** |
| Content Depth | 6 / 10 | 8 / 10 | 8.5 / 10 | 8.5 / 10 | **9 / 10** |
| Mobile Experience | 5.5 / 10 | 8.5 / 10 | 8.5 / 10 | 8.5 / 10 | **8.5 / 10** |

**Jun 24 movers:** First Impression 8.5 → 9 (galaxy visible by default, seamless, comets live); Visual Design 8.5 → 9 (detail page consistency, token system, no more uppercase scaffold tells).

**Aug 24 movers (Phase 3–6, i.e. everything since Jun 24 — schema/audit work plus this session's CV/Resume pass):** O1/EB1 Evidence Visibility 8 → 9 (Phase 4 JSON-LD: `CreativeWork`/`ScholarlyArticle` reclassification, `datePublished`, Person `workExample` linking all published research; Neo4j certs upgraded to VERIFIED with live GraphAcademy links; CFA/Qualys certs gained PDF-backed evidence where none existed before). Technical Credibility 8.5 → 9 (same evidence chain, plus Resume's skills section rebuilt to match the current, accurate resume PDF). Content Depth 8.5 → 9 (CV memberships expanded 3→5 entries, Resume gained a professional summary and full accurate skills taxonomy). Recruiter Clarity 8 → 8.5 (Resume summary + bigger section headers improve scannability). SEO/Structured Data 7.5 → 8, Accessibility 8 → 8.5 (Phase 4 ARIA states, reduced-motion, `datePublished`/`workExample` additions). First Impression and Visual Design held at ceiling — no homepage-hero-level changes this period.

**Remaining ceiling blockers (as of 2026-08-24 XS/S sprint):** EXT-001 (ResearchGate profile + paper uploads), EXT-005/AN-001 (Search Console + Bing submission — repo-ready, needs your authenticated account), EXT-002/AN-002 (Scholar auto-profile — repo-ready, needs Google to index first), IA-003 (ResearchGate distribution links — depends on EXT-001), SD-003/EXT-004 (dynamic OG images, Zenodo `sameAs` in JSON-LD — both M-effort, deferred this pass). CP-005/006/009, UI-013/014, CQ-006 all closed this sprint — see Phase 7 below.
