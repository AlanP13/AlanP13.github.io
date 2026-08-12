# CareerOS — Canonical Fact Registry

**Last updated:** 2026-08-12  
**Authority:** This document supersedes any individual surface (resume PDF, portfolio MDX, LinkedIn) when they conflict.  
**Schema per entity:** `canonical value | source | confidence | clearance | LinkedIn | Portfolio | Resume | CV`

Sources key:  
- `CERT-PDF` — physical certificate PDF in manual/_extracted/  
- `RESUME-0728` — Resume PDF dated July 28, 2026  
- `CAREER-OS` — previous CareerOS interview/verification session  
- `JD-PDF` — Job Description PDF  
- `LINKEDIN-PDF` — LinkedIn export PDF  

Confidence key: `HIGHEST` (physical doc) · `HIGH` (multi-source corroborated) · `MEDIUM` (single credible source) · `PENDING` (awaiting verification)

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
| **LinkedIn** | NEEDS UPDATE — close this role at July 1, 2026 |
| **Portfolio** | `work-genworth-p2.mdx` — UPDATED 2026-08-12 — dates corrected to "December 2025 – July 2026" |
| **Resume** | ✓ Listed with correct closed dates |
| **CV** | Include with corrected dates |

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
| **LinkedIn** | NEEDS UPDATE — add new role "Data Engineer" starting July 2026; or update current role title |
| **Portfolio** | `work-genworth-de.mdx` — CREATED 2026-08-12; hero/about/resume/JSON-LD updated same date |
| **Resume** | ✓ Listed as current role |
| **CV** | Include |

> **Architecture rule (do not override):** GEN-003 is a title rename within P2 — it is NOT a new level/promotion. File is `work-genworth-de.mdx`, not `work-genworth-p3.mdx`. Public UI omits the P2 level designation.

---

### ITHENA-001 — Full Stack Developer Intern
| Field | Value |
|---|---|
| **Canonical title** | Full Stack Developer Intern |
| **Employer** | ITHENA, Richmond, VA |
| **Work mode** | UNVERIFIED — safe public form: "Richmond, VA" only (do not say "In-Person") |
| **Dates** | June 2020 – August 2020 |
| **Source** | CAREER-OS (canonical; supersedes RESUME-0728 which lists "Software Engineer Intern") |
| **Confidence** | HIGH (CAREER-OS resolved) |
| **Clearance** | PUBLIC |
| **LinkedIn** | Verify — should read "Full Stack Developer Intern" |
| **Portfolio** | `work-ithena-fs.mdx` — title CORRECT; work mode "In-Person" needs removal |
| **Resume** | STALE — reads "Software Engineer Intern" (resume PDF needs separate correction) |
| **CV** | Include as "Full Stack Developer Intern" |

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
| **Portfolio** | MISSING — no timeline file; include with low visual priority (do not compete with GEN/ITHENA) |
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
| **Portfolio** | `edu-phd.mdx` — dates updated ✓; GPA not shown (optional) |
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
| **Portfolio** | `edu-bs.mdx` — STALE: shows only "August 2023"; missing start date and GPA |
| **Resume** | ✓ Correct |
| **CV** | Include with GPA |

---

### EDU-003 — M.S., Cybersecurity Engineering
| Field | Value |
|---|---|
| **Canonical title** | M.S., Cybersecurity Engineering |
| **Institution** | Illinois Institute of Technology, Chicago, IL |
| **Start date** | DISPUTED — RESUME-0728 text says "M.S. begun May 2022"; older CareerOS record had August 2022. Not yet verified against official transcript. |
| **End date** | August 2023 (both degrees conferred August 2023) |
| **GPA** | 3.6 |
| **Source** | RESUME-0728 (start date pending verification) |
| **Confidence** | MEDIUM — start date unresolved; verify against official IIT transcript or enrollment record before updating portfolio |
| **last_verified** | 2026-08-12 (resume only; transcript not reviewed) |
| **Clearance** | PUBLIC |
| **Portfolio** | `edu-ms.mdx` — STALE: shows only "August 2023"; defer start date update until transcript verified |
| **Resume** | Shows May 2022 (in footnote text) — may be correct |
| **CV** | Include; use verified start date once confirmed |

> **Verification needed (ID-007):** May 2022 vs August 2022 conflict must be resolved via official IIT transcript or enrollment record. Do not update portfolio with May 2022 until then.
>
> **Display note:** BS started Aug 2019; MS co-terminal overlap; both conferred Aug 2023. Portfolio may display as a combined IIT entry.

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
| **Confidence** | HIGHEST |
| **Clearance** | PUBLIC |
| **LinkedIn** | Verify; add credential number |
| **Portfolio** | `foundations-in-investments.mdx` — STALE: wrong title ("Foundations of Investment"), status "in-progress", no credential data |

> **Fix needed:** Correct title to "Investment Foundations® Certificate", set `status: "earned"`, `dateObtained: "2026-07"`, `credentialId: "189900608"`. Credential URL: verify at cfainstitute.org.

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
| **Confidence** | HIGHEST |
| **Clearance** | PUBLIC |
| **LinkedIn** | Verify/add with expiry date |
| **Portfolio** | MISSING — no MDX file |

---

### CERT-003 — Neo4j Certified Professional
| Field | Value |
|---|---|
| **Canonical title** | Neo4j Certified Professional |
| **Issuer** | Neo4j |
| **Date Earned** | August 2026 |
| **Credential ID** | 599d588d-8706-44bf-9707-59c5bb61a5b9 |
| **Expiry** | Unknown |
| **Source** | LINKEDIN-PDF (no physical cert PDF in manual yet) |
| **Confidence** | HIGH (LinkedIn-sourced) |
| **Clearance** | PUBLIC |
| **LinkedIn** | ✓ Listed (source) |
| **Portfolio** | MISSING — no MDX file |

---

### CERT-004 — Neo4j Graph Data Science Certification
| Field | Value |
|---|---|
| **Canonical title** | Neo4j Graph Data Science Certification |
| **Issuer** | Neo4j |
| **Date Earned** | August 2026 |
| **Credential ID** | 0285db3f-4f77-4501-92c8-c48ebe19d30d |
| **Expiry** | Unknown |
| **Source** | LINKEDIN-PDF (no physical cert PDF in manual yet) |
| **Confidence** | HIGH (LinkedIn-sourced) |
| **Clearance** | PUBLIC |
| **LinkedIn** | ✓ Listed (source) |
| **Portfolio** | MISSING — no MDX file |

---

### CERT-005 — Amazon Web Services (AWS) Certified – 4 Certifications! Training
| Field | Value |
|---|---|
| **Canonical title** | Amazon Web Services (AWS) Certified 2021 – 4 Certifications! |
| **Issuer** | Udemy / BackSpace Academy & Paul Coady |
| **Date Earned** | June 10, 2021 |
| **Credential ID** | UC-6604265b-6b90-4bfc-9193-f2f5df5f13d3 |
| **Source** | CERT-PDF (physical certificate) |
| **Confidence** | HIGHEST |
| **Clearance** | PUBLIC |
| **Portfolio** | `aws-certified-5-certifications.mdx` — STALE: title says "5 Certifications" — physical cert says 4 |

> **Fix needed:** Correct title to "Amazon Web Services (AWS) Certified 2021 – 4 Certifications!" and rename file to `aws-certified-4-certifications.mdx`.

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
| Portfolio hero / homepage | "10 Technical Monographs & Reports" |
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
| `work-cml-json-prj.mdx` | PAM CML Migration & JSON Message Generation Platform | ✓ EXISTS, featured |
| `work-derivatives-legacy-prj.mdx` | PAM Derivatives Legacy Message Platform (Azure Synapse) | ✓ EXISTS, featured |
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
| IEEE-HKN IIT Delta Chapter | Internal Secretary | April 2022 – May 2023 | RESUME-0728 | In edu-ms.mdx bullets (no date) |
| IEEE | Member | 2024 – Present | RESUME-0728 | Not on portfolio |
| Dean's List | 5 semesters, 2020–2023 | 2020–2023 | RESUME-0728 | In edu bullets |

---

## Known Inconsistencies (to track until resolved)

| ID | Issue | Current state | Required action |
|---|---|---|---|
| INCON-001 | ITHENA title: resume says "Software Engineer Intern", CareerOS canonical is "Full Stack Developer Intern" | Portfolio is correct; resume PDF is stale | Correct resume PDF separately; do not change portfolio |
| INCON-002 | AWS cert: MDX title says "5 Certifications", physical cert says "4 Certifications" | MDX is wrong | Fix MDX title; optionally rename file |
| INCON-003 | CFA cert: MDX title is "Foundations of Investment"; canonical is "Investment Foundations® Certificate" | MDX is wrong | Fix MDX title |
| INCON-004 | work-genworth-p1.mdx exposes "(P1)" internal level in public title | Cosmetic | Remove level tag from display title |
| INCON-005 | work-genworth-p2.mdx end date reads "Present" instead of "July 2026" | STALE | Fix dates |
| INCON-006 | Genworth role missing from portfolio: Data Engineer (GEN-003) | MISSING | Create work-genworth-de.mdx |
| INCON-007 | ITHENA work mode: "In-Person" is unverified | Portfolio shows unverified data | Remove "(In-Person)" from location |
| INCON-008 | IIT degree dates: only "August 2023" shown, no start dates | STALE | Add start dates |
| INCON-009 | Publication terminology: any hardcoded "published papers" count | Multiple surfaces | Audit and replace with "Technical Monographs & Reports" |
| INCON-010 | CERT-001 CFA: portfolio status "in-progress", credential data missing | STALE | Update to "earned" with cert data |
| INCON-011 | `doi:` fields in research MDX files: may be empty | Unverified | Audit each vol*.mdx |
