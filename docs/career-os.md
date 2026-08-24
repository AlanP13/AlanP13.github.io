# CareerOS — Canonical Fact Registry

**Last updated:** 2026-08-13  
**Authority:** This document supersedes any individual surface (resume PDF, portfolio MDX, LinkedIn) when they conflict.  
**Schema per entity:** `canonical value | source | confidence | clearance | LinkedIn | Portfolio | Resume | CV`

**Canonical precedence (highest → lowest):**
1. User explicit correction in a CareerOS session
2. Current résumé (RESUME-0728 or later dated file)
3. Newer primary evidence (physical certificate, offer letter, official document)
4. Prior CareerOS records
5. LinkedIn-derived data
6. Portfolio / CV / GitHub

> This ordering prevents LinkedIn-derived or AI-inferred values from overriding what the résumé and user explicitly state. When sources conflict, escalate to the user rather than defaulting to a prior CareerOS pass.

Sources key:  
- `CERT-PDF` — physical certificate PDF in manual/_extracted/  
- `RESUME-0728` — Resume PDF dated July 28, 2026  
- `CAREER-OS` — previous CareerOS interview/verification session  
- `JD-PDF` — Job Description PDF  
- `LINKEDIN-PDF` — LinkedIn export PDF  

Confidence key (controlled vocabulary — do not mix levels):
- `VERIFIED` — physical document on file (certificate PDF, official letter, diploma)
- `USER-CONFIRMED` — user explicitly confirmed in CareerOS session
- `LINKEDIN-CORROBORATED` — sourced from LinkedIn export; user-supplied credential IDs
- `HIGH` — multi-source corroborated (2+ independent sources agree, no physical doc)
- `MEDIUM` — single credible source, not independently confirmed
- `UNVERIFIED` — awaiting verification

> **Note:** Legacy label `HIGHEST` has been retired; all prior `HIGHEST` entries reclassified as `VERIFIED`.

---

## Employment

### GEN-001 — Associate Application Development Analyst (P1)
| Field | Value |
|---|---|
| **Canonical title** | Associate Application Development Analyst |
| **Level** | P1 (internal; not part of public title) |
| **Employer** | Genworth Financial, Richmond, VA (Hybrid) |
| **effective_from** | 2023-07-10 |
| **effective_to** | 2025-12-15 |
| **change_type** | initial hire |
| **supersedes** | — |
| **last_verified** | 2026-08-12 (RESUME-0728) |
| **Source** | RESUME-0728 + CAREER-OS |
| **Confidence** | HIGH |
| **Clearance** | PUBLIC |
| **LinkedIn** | Verify dates and title match |
| **Portfolio** | `work-genworth-p1.mdx` — EXISTS; title shows "(P1)" level tag which is non-public; dates OK |
| **Resume** | ✓ Listed (title without level tag) |
| **CV** | Include |

> **Note on (P1) in portfolio title:** The MDX title "Associate Application Development Analyst (P1)" exposes an internal level designation. Removing "(P1)" is tracked as ID-013 (P2 priority).

---

### GEN-002 — Application Development Analyst (P2)
| Field | Value |
|---|---|
| **Canonical title** | Application Development Analyst |
| **Level** | P2 |
| **Employer** | Genworth Financial, Richmond, VA (Hybrid) |
| **effective_from** | 2025-12-15 |
| **effective_to** | 2026-07-01 |
| **change_type** | promotion (P1 → P2) |
| **supersedes** | GEN-001 |
| **last_verified** | 2026-08-12 (RESUME-0728) |
| **Display dates** | "December 2025 – July 2026" (month-only per resume convention; exact transition date is 2026-07-01) |
| **Source** | RESUME-0728 + CAREER-OS + JD-PDF |
| **Confidence** | HIGH |
| **Clearance** | PUBLIC |
| **LinkedIn** | ✓ Closed at July 2026, 2026-08-13 |
| **Portfolio** | `work-genworth-p2.mdx` — UPDATED 2026-08-12 — dates corrected to "December 2025 – July 2026"; team-count metric (5) removed from public bullet 2026-08-13 (clearance fix CLR-006); UPDATED 2026-08-13 Phase 5 QA: internal team names (BA, PAM Ops, DGM, AppWorx Support, Alternative Assets) generalized to "cross-functional operations, accounting, platform-support, and technology teams" — team names are not PUBLIC-cleared |
| **Resume** | ✓ Listed with correct closed dates |
| **CV** | Include with corrected dates |

> **Canonical evidence note (private/not PUBLIC-cleared):** RESUME-0728 source bullets for this role include specific operating metrics that are valid résumé facts but not cleared for public web publication: pipeline count (10+ production pipelines), job count (30+ automated jobs), time savings (2+ hours/week manual effort reduction), cross-functional team count (5 teams), and internal team names (BA, PAM Ops, DGM, AppWorx Support, Alternative Assets). All preserved in RESUME-0728; public surfaces use qualitative equivalents per CareerOS clearance policy.

---

### GEN-003 — Data Engineer (P2) — CURRENT ROLE
| Field | Value |
|---|---|
| **Canonical title** | Data Engineer |
| **Level** | P2 (unchanged from GEN-002) |
| **change_type** | title_rename (NOT a promotion; same employer, same level) |
| **supersedes** | GEN-002 title only — employment is continuous |
| **Employer** | Genworth Financial, Richmond, VA (Hybrid) |
| **effective_from** | 2026-07-01 |
| **effective_to** | Present |
| **last_verified** | 2026-08-12 (RESUME-0728 + JD-PDF, USER-CONFIRMED) |
| **Source** | RESUME-0728 + JD-PDF + CAREER-OS (USER-CONFIRMED) |
| **Confidence** | HIGH |
| **Clearance** | PUBLIC |
| **LinkedIn** | ✓ Added July 2026 – Present, 2026-08-13 |
| **Portfolio** | `work-genworth-de.mdx` — CREATED 2026-08-12; hero/about/resume/JSON-LD updated same date; CML loan-volume metric removed from public bullet 2026-08-13 (clearance fix CLR-001) |

> **Canonical evidence note (private/not PUBLIC-cleared):** RESUME-0728 source bullets for this role include the specific CML portfolio volume (1,500+ active commercial mortgage loans) which is a valid résumé fact but not cleared for public web publication. Preserved in RESUME-0728; public surface uses qualitative equivalent per CareerOS clearance policy.
| **Resume** | ✓ Listed as current role |
| **CV** | Include |

> **Architecture rule (do not override):** GEN-003 is a title rename within P2 — it is NOT a new level/promotion. File is `work-genworth-de.mdx`, not `work-genworth-p3.mdx`. Public UI omits the P2 level designation.

---

### ITHENA-001 — Software Engineer Intern
| Field | Value |
|---|---|
| **Canonical title** | Software Engineer Intern |
| **Employer** | ITHENA, Richmond, VA |
| **Work mode** | UNVERIFIED — safe public form: "Richmond, VA" only (résumé does not establish work mode; do not add "In-Person") |
| **Dates** | June 2020 – August 2020 |
| **Source** | RESUME-0728 (supersedes prior CareerOS record which incorrectly used "Full Stack Developer Intern" sourced from a LinkedIn-derived pass) |
| **Confidence** | HIGH |
| **last_verified** | 2026-08-13 (RESUME-0728 + USER-CONFIRMED) |
| **Clearance** | PUBLIC |
| **LinkedIn** | Verify — should read "Software Engineer Intern" |
| **Portfolio** | `work-ithena-fs.mdx` — UPDATED 2026-08-13: title corrected to "Software Engineer Intern"; location "Richmond, VA" (no work mode) |
| **Resume** | ✓ Correct — reads "Software Engineer Intern" |
| **CV** | Include as "Software Engineer Intern" |

---

### IIT-SA-001 — Student Assistant, Office of Residence Life
| Field | Value |
|---|---|
| **Canonical title** | Student Assistant |
| **Employer** | Office of Residence Life, Illinois Institute of Technology, Chicago, IL |
| **Dates** | August 2021 – May 2023 |
| **Source** | RESUME-0728 + CAREER-OS |
| **Confidence** | HIGH |
| **Clearance** | PUBLIC (full master record + academic CV + background checks; optional on targeted technical resume) |
| **LinkedIn** | Verify presence |
| **Portfolio** | ✓ `work-iit-student-assistant.mdx` EXISTS (order: 20, low visual priority) |
| **Resume** | ✓ Listed |
| **CV** | Include |

---

## Education

### EDU-001 — Ph.D., Information Technology
| Field | Value |
|---|---|
| **Canonical title** | Ph.D., Information Technology |
| **Institution** | University of the Cumberlands, Williamsburg, KY (Online) |
| **Dates** | August 2025 – Present (Expected: May 2029) |
| **GPA** | 3.75 (current) |
| **Source** | RESUME-0728 |
| **Confidence** | HIGH |
| **Clearance** | PUBLIC |
| **Portfolio display form** | "Ph.D. in Information Technology" (natural display; not the marketing label "Executive PhD") |
| **Portfolio** | `edu-phd.mdx` — UPDATED 2026-08-13: "August 2025 – Present" (dates correct); UPDATED 2026-08-13 (Phase 5 QA): title corrected from "Executive PhD in Information Technology" → "Ph.D. in Information Technology" to match canonical resume form |
| **Resume** | ✓ Correct |
| **CV** | Include with GPA and expected date |

---

### EDU-002 — B.S., Computer & Cybersecurity Engineering
| Field | Value |
|---|---|
| **Canonical title** | B.S., Computer & Cybersecurity Engineering |
| **Institution** | Illinois Institute of Technology, Chicago, IL |
| **Dates** | August 2019 – August 2023 |
| **GPA** | 3.5 |
| **Source** | RESUME-0728 |
| **Confidence** | HIGH |
| **Clearance** | PUBLIC |
| **Portfolio** | `edu-bs.mdx` — dates show "August 2019 – August 2023" ✓ (prior CareerOS note "STALE" was itself stale — file was already corrected; note updated 2026-08-13 Phase 5 QA) |
| **Resume** | ✓ Correct |
| **CV** | Include with GPA |

---

### EDU-003 — M.S., Cybersecurity Engineering
| Field | Value |
|---|---|
| **Canonical title** | M.S., Cybersecurity Engineering |
| **Institution** | Illinois Institute of Technology, Chicago, IL |
| **Dates** | May 2022 – August 2023 (co-terminal; both degrees conferred August 2023) |
| **GPA** | 3.6 |
| **Source** | RESUME-0728 + USER-CONFIRMED 2026-08-12 |
| **Confidence** | HIGH — May 2022 start USER-CONFIRMED; older CareerOS record (Aug 2022) was from an earlier LinkedIn-derived pass and is superseded |
| **last_verified** | 2026-08-12 (USER-CONFIRMED) |
| **Clearance** | PUBLIC |
| **Portfolio** | `edu-ms.mdx` — UPDATED 2026-08-12: "May 2022 – August 2023" |
| **Resume** | ✓ Correct |
| **CV** | Include separately with GPA |

> **Display note:** BS started Aug 2019; MS co-terminal (May 2022 – Aug 2023); both conferred Aug 2023. Portfolio displays as two separate entries.

---

### EDU-004 — High School Diploma (Computer Science)
| Field | Value |
|---|---|
| **Canonical title** | High School Diploma (Computer Science) |
| **Institution** | Fr. Agnel Multipurpose School & Jr. College, Navi Mumbai, India |
| **Dates** | March 2019 |
| **Portfolio** | `edu-hs.mdx` — EXISTS, no issues |

---

## Certifications

### CERT-001 — Investment Foundations® Certificate (CFA Institute)
| Field | Value |
|---|---|
| **Canonical title** | Investment Foundations® Certificate |
| **Issuer** | CFA Institute |
| **Date Earned** | July 28, 2026 |
| **Credential Number** | 189900608 |
| **Expiry** | None stated |
| **Source** | CERT-PDF (physical certificate) |
| **Confidence** | VERIFIED |
| **Clearance** | PUBLIC |
| **LinkedIn** | Verify; add credential number 189900608 |
| **Portfolio** | `foundations-in-investments.mdx` — UPDATED 2026-08-12: title, status→earned, credentialId, dateObtained all correct |

---

### CERT-002 — Vulnerability Management Detection and Response (VMDR)
| Field | Value |
|---|---|
| **Canonical title** | Vulnerability Management Detection and Response |
| **Issuer** | Qualys (Qualys Certified Specialist) |
| **Date Earned** | July 28, 2026 |
| **Expiry** | July 27, 2028 |
| **Credential ID** | Not shown on certificate PDF; may appear in Qualys badge portal |
| **Source** | CERT-PDF (physical certificate) |
| **Confidence** | VERIFIED |
| **Clearance** | PUBLIC |
| **LinkedIn** | Verify/add with expiry date 2028-07 |
| **Portfolio** | `qualys-vmdr.mdx` — CREATED 2026-08-12; featured, security category |

---

### CERT-003 — Neo4j Certified Professional
| Field | Value |
|---|---|
| **Canonical title** | Neo4j Certified Professional |
| **Issuer** | Neo4j (GraphAcademy) |
| **Date Earned** | August 2026 |
| **Credential ID** | 599d588d-8706-44bf-9707-59c5bb61a5b9 |
| **Expiry** | Unknown |
| **Source** | LINKEDIN-PDF + USER-CONFIRMED |
| **Confidence** | VERIFIED — GraphAcademy certificate URL confirmed 2026-08-24 (`https://graphacademy.neo4j.com/c/599d588d-8706-44bf-9707-59c5bb61a5b9`), credential ID matches. |
| **Clearance** | PUBLIC |
| **LinkedIn** | ✓ Listed (source) |
| **Portfolio** | `neo4j-certified-professional.mdx` — CREATED 2026-08-12; `credentialUrl` added 2026-08-24 |
| **Skills covered** | Cypher, Neo4j fundamentals, schema/indexes, drivers, data modeling, importing data |

---

### CERT-004 — Neo4j Graph Data Science Certification
| Field | Value |
|---|---|
| **Canonical title** | Neo4j Graph Data Science Certification |
| **Issuer** | Neo4j (GraphAcademy) |
| **Date Earned** | August 2026 |
| **Credential ID** | 0285db3f-4f77-4501-92c8-c48ebe19d30d |
| **Expiry** | Unknown |
| **Source** | LINKEDIN-PDF + USER-CONFIRMED |
| **Confidence** | VERIFIED — GraphAcademy certificate URL confirmed 2026-08-24 (`https://graphacademy.neo4j.com/c/0285db3f-4f77-4501-92c8-c48ebe19d30d`), credential ID matches. |
| **Clearance** | PUBLIC |
| **LinkedIn** | ✓ Listed (source) |
| **Portfolio** | `neo4j-graph-data-science.mdx` — CREATED 2026-08-12; `credentialUrl` added 2026-08-24 |
| **Skills covered** | GDS library, graph data science workflows, graph algorithms |

---

### CERT-005 — AWS Exam-Prep Training (Udemy) — RECLASSIFIED
| Field | Value |
|---|---|
| **Canonical description** | Udemy/BackSpace Academy exam-preparation course for AWS associate-level domains (NOT an official AWS certification) |
| **Issuer** | Udemy / BackSpace Academy & Paul Coady |
| **Date Completed** | June 10, 2021 |
| **Credential ID** | UC-6604265b-6b90-4bfc-9193-f2f5df5f13d3 |
| **Source** | CERT-PDF (physical Udemy completion certificate) |
| **Confidence** | VERIFIED — physical certificate evidence (Udemy completion PDF in manual/_extracted/) |
| **Clearance** | PUBLIC — but must NOT be described as "AWS Certified"; must be described as exam-prep training |
| **Portfolio** | `aws-certified-5-certifications.mdx` — RECLASSIFIED 2026-08-12: featured→false, category→other (schema enum does not include "training"; "other" is the closest valid value), title/summary rewritten to remove certification framing. **Architecture debt:** file physically resides in certifications collection; a future Professional Development collection should absorb it. Tracked as roadmap task AWS-MIGRATE-001. |

> **INTEGRITY RULE:** Do not describe Alan as "AWS Certified." He holds no official AWS certifications. This Udemy course prepared him for AWS exams but confers no AWS credential. Represents under Professional Development / Training, not Certifications. If a separate training collection is created in the future, move this item there.

---

### Existing certs — status confirmed, no changes needed
| ID | Title | Portfolio file | Status |
|---|---|---|---|
| — | Meta Full-Stack Engineer Certificate | `meta-full-stack-engineer.mdx` | ✓ Earned Jan 2026 |
| — | Meta Back-End Developer | `meta-back-end-developer.mdx` | ✓ Earned Jan 2026 |
| — | Meta Front-End Developer | `meta-front-end-developer.mdx` | Verify earned Jun 2023 |
| — | Certificate of Competence in Zero Trust (CCZT) | `certificate-of-competence-in-zero-trust-cczt.mdx` | ✓ Earned Feb 2025 |
| — | Palo Alto Networks Cybersecurity | `palo-alto-networks-cybersecurity.mdx` | Verify earned Mar 2023 |

### Certs with unresolved status
| ID | Title | Portfolio file | Issue |
|---|---|---|---|
| — | Google IT Support Professional Certificate | `google-it-support.mdx` | Status "in-progress"; verify completion |

---

## Research & Publications

### Classification (CANONICAL — do not deviate)
- **Type:** Technical Monographs and Reports
- **Nature:** Open-access, non-peer-reviewed
- **Index:** OpenAIRE (via Zenodo)
- **Series name:** Engineering-to-Research Monograph Series
- **Author:** Palayil, A. B. (sole author)
- **Year:** 2026
- **Count:** 10

**Terminology to use on each surface:**

| Surface | Approved wording |
|---|---|
| Portfolio homepage count line | "10 open-access Technical Monographs & Reports published" |
| Portfolio research index | "10 Technical Monographs & Reports published via Engineering-to-Research Monograph Series, indexed on Zenodo and OpenAIRE" |
| Portfolio credentials section | "Engineering-to-Research Monograph Series (10 volumes, Zenodo)" |
| Academic CV | Section heading: "Technical Monographs and Reports" (NOT "Peer-Reviewed Publications") |
| Resume summary | "ten peer-distributed monographs" (current resume wording; acceptable) |

**Do not use:** "10 published papers", "10 peer-reviewed papers", "10 scholarly publications"

---

### Volumes — DOI / Zenodo status

| Vol | Zenodo record | DOI canonical | `doi:` field in MDX |
|---|---|---|---|
| 1 | zenodo.org/records/20733453 | 10.5281/zenodo.20733453 | Verify |
| 2 | zenodo.org/records/20821993 | 10.5281/zenodo.20821993 | Verify |
| 3 | zenodo.org/records/20828879 | 10.5281/zenodo.20828879 | Verify |
| 4 | zenodo.org/records/20784402 | 10.5281/zenodo.20784402 | Verify |
| 5 | zenodo.org/records/20821927 | 10.5281/zenodo.20821927 | Verify |
| 6 | zenodo.org/records/20828631 | 10.5281/zenodo.20828631 | Verify |
| 7 | zenodo.org/records/20828327 | 10.5281/zenodo.20828327 | Verify |
| 8 | zenodo.org/records/20802595 | 10.5281/zenodo.20802595 | Verify |
| 9 | zenodo.org/records/20829174 | 10.5281/zenodo.20829174 | Verify |
| 10 (Capstone) | zenodo.org/records/20832713 | 10.5281/zenodo.20832713 | Verify (confirmed in RESUME-0728) |

> **Action:** Audit each `src/content/research/vol*.mdx` to confirm `doi:` field is set; fill from table above if missing.

---

## Projects

### Classification framework

**Tier 1 — Portfolio case studies** (production/professional engineering, lead role, clear impact):
| Portfolio file | Resume/canonical name | Status |
|---|---|---|
| `work-cml-json-prj.mdx` | PAM CML Migration & JSON Message Generation Platform | ✓ EXISTS, featured; CML loan volume (1,500+) removed from public copy 2026-08-13 (clearance fix) — qualitative replacement used; volume preserved in RESUME-0728 |
| `work-derivatives-legacy-prj.mdx` | PAM Derivatives Legacy Message Platform (Azure Synapse) | ✓ EXISTS, featured; CUSIP count (~800) removed from public copy 2026-08-13 (clearance fix) — qualitative replacement used; count preserved in RESUME-0728 |
| `work-custody-bank-files-prj.mdx` | Operational Automation & Reliability Hardening | ✓ EXISTS, featured |
| `college-convo-care.mdx` | Convo Care — Privacy-First AI Risk Triage Platform | ✓ EXISTS, not featured |
| `college-application-development.mdx` | Enterprise Event Simulation Platform | ✓ EXISTS, not featured |

**Tier 2 — Personal engineering projects** (technically substantive, full implementation):
| Portfolio file | Canonical name | Status |
|---|---|---|
| `personal-smart-home-hub.mdx` | MQTT Smart Home Controller (Arduino + IoT) | ✓ EXISTS |
| `personal-py8085-simulator.mdx` | Py8085 — 8085 Assembler + Interactive Simulator | ✓ EXISTS |
| `college-ai-edge-computing.mdx` | AgriEdge AI (= "Plant Disease AI Classifier" on resume) | ✓ EXISTS |
| `college-risc-processor.mdx` | 32-bit RISC Processor (5-Stage MIPS Pipeline) | ✓ EXISTS (added Aug 12) |
| `college-sensorpi.mdx` | SensoryPi — Smart Security System | ✓ EXISTS (added Aug 12) |

**Tier 3 — GitHub/LinkedIn projects (inventory; selectively promote):**
| Canonical name | Source | GitHub repo | Decision |
|---|---|---|---|
| Through The Speculum (Smart Mirror) | LinkedIn | ECASP demo link | PENDING user decision |
| Virtual Golf Club Fitting (Wilson Sports) | LinkedIn | IPRO497-Design-and-Entrepreneur | PENDING |
| Hawk Study (Java Maven) | LinkedIn | IPRO497-AP-Digital-Development | PENDING |
| Office Supply Order Management System | LinkedIn | Order-Management-System | PENDING |
| Personal Portfolio (React Native) | LinkedIn | Web-Portfolio | PENDING |
| DriveSimX Mobile Vehicle Simulation | GitHub | DriveSimX-Mobile-Vehicle-Simulation | PENDING |
| IoT Data Platform Lab | GitHub | IoT-Data-Platform-Lab | PENDING |
| Trajectory Lab Mobile Physics Simulator | GitHub | Trajectory-Lab-Mobile-Physics-Simulator | PENDING |
| Financial Engineering Portfolio | GitHub | Financial-Engineering-Portfolio | PENDING (Python bootcamp exercises — may not warrant case study) |
| clawdbot | GitHub | clawdbot | PENDING (description unknown) |

> All Tier 3 decisions deferred. Do not add to portfolio without explicit user approval per project.

---

## Skills — Canonical Taxonomy (derived from employment + certs + projects)

Grouped as they appear in the site skills grid. Skills marked `[NEW]` are not currently in the portfolio.

| Category | Skills |
|---|---|
| Languages | Python, SQL, Java, C#, C++, JavaScript, React |
| Databases & ETL | PostgreSQL, MySQL, Oracle `[NEW]`, Azure Synapse Analytics, ADLS, Markit EDM, Informatica `[NEW]`, AppWorx, ETL/ELT pipelines |
| Cloud & DevOps | AWS, Microsoft Azure, Azure DevOps `[NEW]`, Git/GitHub, JIRA, Linux `[NEW]`, CI/CD `[NEW]` |
| Integration | JSON, XML `[NEW]`, REST APIs, MQTT, TCP/IP |
| Security | Zero Trust (CCZT), Network Security, NIST CSF, Vulnerability Management `[NEW]` |
| AI & Data Science | Machine Learning, Computer Vision, NLP, Time-Series Forecasting |
| Graph (Neo4j certs) | Cypher Query Language `[NEW]`, Neo4j GDS Library `[NEW]`, Graph Data Algorithms `[NEW]` |
| Hardware | Arduino, ESP32, Raspberry Pi, Embedded Systems |

> **Approach:** Add skills to the grid after skills taxonomy is agreed, not by simple keyword append.

---

## Leadership & Affiliations

| Entity | Canonical form | Dates | Source | Portfolio |
|---|---|---|---|---|
| IEEE-HKN IIT Delta Chapter | Internal Secretary | April 2022 – May 2023 | RESUME-0728 | UPDATED 2026-08-13: edu-ms.mdx bullet, resume.astro, cv.astro, about.astro all set to Apr 2022. Prior hardcoded "Jan 2022" was stale (source: June 2022 LinkedIn-derived pass, superseded by RESUME-0728). |
| IEEE | Member | 2024 – Present | RESUME-0728 | Not on portfolio |
| Dean's List | 5 semesters, 2020–2023 | 2020–2023 | RESUME-0728 | In edu bullets |
| IEEE-HKN IIT Delta Chapter | Alumni Member | May 2023 – Present | LinkedIn, user-supplied 2026-08-23 | Added to cv.astro 2026-08-23 |
| IEEE | General Member | August 2021 – May 2023 | LinkedIn, user-supplied 2026-08-23 | Added to cv.astro 2026-08-23; replaces prior ambiguous "HKN Member 2021–2023" line on cv.astro (that label conflated a plain IEEE membership with HKN) |
| SHPE (Society of Hispanic Professional Engineers) @ Illinois Tech | Member | August 2022 – May 2023 | LinkedIn, user-supplied 2026-08-23 | Added to cv.astro 2026-08-23 |

---

## Known Inconsistencies (to track until resolved)

| ID | Issue | Current state | Required action |
|---|---|---|---|
| INCON-001 | ITHENA title: prior CareerOS canonical was "Full Stack Developer Intern" (LinkedIn-derived); RESUME-0728 reads "Software Engineer Intern" | RESOLVED 2026-08-13: résumé is the correct source per canonical precedence rule. Portfolio MDX, resume.astro, CareerOS, and LinkedIn guidance all corrected to "Software Engineer Intern". | — |
| INCON-002 | AWS item: MDX title says "AWS Certified — 5 Certifications!"; item is a Udemy exam-prep course, not an official AWS certification | RESOLVED 2026-08-12: reclassified; featured→false; title/summary rewritten | Architecture debt remains: file still in certifications collection; migrate to training collection per AWS-MIGRATE-001 |
| INCON-003 | CFA cert: MDX title is "Foundations of Investment"; canonical is "Investment Foundations® Certificate" | RESOLVED 2026-08-12: fixed to earned with credential data | — |
| INCON-004 | work-genworth-p1.mdx exposes "(P1)" internal level in public title | RESOLVED 2026-08-12: level tag removed from MDX and resume.astro | — |
| INCON-005 | work-genworth-p2.mdx end date reads "Present" instead of "July 2026" | RESOLVED 2026-08-12 | — |
| INCON-006 | Genworth role missing from portfolio: Data Engineer (GEN-003) | RESOLVED 2026-08-12: work-genworth-de.mdx created | — |
| INCON-007 | ITHENA work mode: "In-Person" is unverified | RESOLVED 2026-08-12: location simplified to "Richmond, VA" | — |
| INCON-008 | IIT degree dates: only "August 2023" shown, no start dates | RESOLVED 2026-08-12: BS Aug 2019, MS May 2022 added | — |
| INCON-009 | Publication terminology: hardcoded "published papers" on multiple surfaces | RESOLVED 2026-08-12: replaced with "Technical Monographs & Reports" and "open-access" qualifier on homepage | — |
| INCON-010 | CERT-001 CFA: portfolio status "in-progress", credential data missing | RESOLVED 2026-08-12 | — |
| INCON-011 | `doi:` fields in research MDX files: may be empty | RESOLVED 2026-08-12: all 10 files confirmed to have doi: field; JSON-LD identifier verified correct | — |
| INCON-012 | HKN start date conflict: cv.astro/about.astro hardcoded "Jan 2022"; RESUME-0728 canonical is "April 2022" | RESOLVED 2026-08-13: all surfaces updated to Apr 2022 | — |
| INCON-013 | edu-phd.mdx dates: "2025 – Present" missing month | RESOLVED 2026-08-13: corrected to "August 2025 – Present" | — |

---

## Platform Synchronization Status

This section tracks synchronization between CareerOS canonical and each external platform. "Portfolio" = alanp13.github.io (code-controlled). "LinkedIn" and "GitHub" require manual user action.

**Legend:** ✓ Synced · NEEDS-UPDATE · NOT-YET-ADDED · N/A

### Employment

| Entity | Portfolio | LinkedIn | GitHub |
|---|---|---|---|
| GEN-001 — Associate Application Development Analyst | ✓ | ✓ Verified 2026-08-13 | N/A |
| GEN-002 — Application Development Analyst (closed Jul 2026) | ✓ | ✓ Closed at July 2026, 2026-08-13 | N/A |
| GEN-003 — Data Engineer (current) | ✓ | ✓ Added July 2026 – Present, 2026-08-13 | N/A |
| ITHENA-001 — Software Engineer Intern | ✓ | ✓ Verified "Software Engineer Intern" 2026-08-13 | N/A |
| IIT-SA-001 — Student Assistant | ✓ | Verify presence | N/A |

### Certifications

| Entity | Portfolio | LinkedIn |
|---|---|---|
| CERT-001 — Investment Foundations® #189900608 | ✓ | ✓ Added 2026-08-13 — credential number 189900608 |
| CERT-002 — Qualys VMDR (exp. 2028-07) | ✓ | ✓ Added 2026-08-13 — expiry date 2028-07 |
| CERT-003 — Neo4j Certified Professional | ✓ | ✓ (source) |
| CERT-004 — Neo4j Graph Data Science | ✓ | ✓ (source) |
| CERT-005 — AWS Udemy (reclassified training) | Hidden (featured→false) | ✓ Removed from Certifications 2026-08-13 |

### Research Publications

| Surface | Status |
|---|---|
| Portfolio research pages (10 volumes) | ✓ |
| LinkedIn publications section | ✓ All 10 entered 2026-08-13 — newest to oldest, publisher: Zenodo, series in description field |
| GitHub profile / READMEs | ✓ Profile README updated 2026-08-13 (Data Engineer identity, research link) |
| Zenodo community | ✓ (10 records live) |
| OpenAIRE | ✓ (indexed via Zenodo) |

> **Evidence quality boundary (preserve for Graphify):** LinkedIn listing these publications does NOT upgrade the canonical evidence tier of the research nodes. Canonical evidence remains the Zenodo/DOI records. LinkedIn is a synchronized presentation surface only — not an evidence source. Do not reclassify research confidence from the DOI-backed level based on LinkedIn presence.

### GitHub-specific

| Item | Status |
|---|---|
| Profile bio (github.com/AlanP13) | ✓ Updated manually 2026-08-13: "Data Engineer building reliable data systems across financial platforms, cloud infrastructure, AI, and applied research." |
| Profile README (AlanP13/AlanP13) | ✓ Updated 2026-08-13 — "Data Engineer" identity, current themes, research link, portfolio link |
| Pinned repos | ✓ Set manually 2026-08-13: AlanP13.github.io, Enterprise-Event-Simulation-Platform, IoT-Data-Platform-Lab, Data-Mining-for-Financial-Systems-Vol8, Py8085-Simulator; slot 6 open |
| IPRO497-Design-and-Entrepreneur | ✓ Description and topics added 2026-08-13. README existed (minimal, functional). |
| IPRO497-AP-Digital-Development | ✓ Description and topics added 2026-08-13. README existed (minimal, functional). |
| Repository topics / descriptions | ✓ Completed 2026-08-13 — topics added to 12 repos; descriptions fixed/added for Financial-Engineering-Portfolio, Web-Portfolio, ECE218, CS331, ECE407 |

### Portfolio audit (Phase 4)

| Domain | Status |
|---|---|
| Structured data (JSON-LD) | ✓ Complete 2026-08-13 — alumniOf corrected (UoC → affiliation), ScholarlyArticle → CreativeWork + genre, project schemas added (SoftwareSourceCode / CreativeWork), CV ProfilePage added |
| Label accuracy | ✓ Complete — PhD Candidate → Ph.D. Student on CV and homepage credentials; research meta description updated to broader AI/Data Science framing |
| WCAG 2.2 SC 2.2.2 (gallery auto-rotation) | ✓ Fixed — visible Pause/Play button; focusin/focusout keyboard pause; prefers-reduced-motion prevents setInterval |
| ARIA filter state (projects + research pages) | ✓ Fixed — aria-pressed on stable filter chips and sort buttons; cycle button correctly omitted |
| External link security | ✓ Fixed — rel="noopener noreferrer" consistent site-wide |
| Reduced-motion CSS | ✓ Added — global prefers-reduced-motion collapse rule in global.css |
| Project sort truthfulness | ✓ Fixed — Newest/Oldest removed; project sort simplified to Featured/A–Z/Z–A |

**Schema reclassification — RESOLVED 2026-08-13:** Three Genworth enterprise case study pages reclassified SoftwareSourceCode → CreativeWork (`work-cml-json-prj`, `work-custody-bank-files-prj`, `work-derivatives-legacy-prj`). `college-convo-care` remains SoftwareSourceCode. All 10 project JSON-LD schemas verified. Phase 4 fully closed: 0 open P0/P1 findings, 0 open schema-classification questions.

**Sync state as of 2026-08-13:** LinkedIn ✓ · GitHub ✓ · Portfolio Phase 4 ✓ · Graphify ✓ · Phase 5 QA gate ✓ — full CareerOS synchronization complete. 0 unresolved material contradictions. 0 unresolved clearance questions.
