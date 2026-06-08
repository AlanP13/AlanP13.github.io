# docs/session-template.md

Copy the template below at the start of a new Claude Code session to provide full context without a repo scan.

---

## Template (copy → fill in → paste as first message)

```
## Session Brief — AlanP13.github.io

**Task:** [Describe the specific task in one sentence]

**Roadmap item(s):** [e.g., P1-SEO-001, P1-SEO-002 — from docs/website-roadmap.md]

**Task category:** [SEO | Content | Styling | New Page | Bug Fix | Infrastructure | Other]

**Files I expect to touch:** [List before starting — use docs/graphify-memory-map.md to identify these]

**Context from last session:** [Brief note, or "none"]

**Definition of done:** [How will we know this task is complete?]

**Constraints:** Do not modify src/, public/, package.json, astro.config.mjs, or .github/workflows/ beyond the scope of this task.
```

---

## Example: SEO Quick Wins Session

```
## Session Brief — AlanP13.github.io

**Task:** Add full OpenGraph and Twitter Card meta tags to the site layout

**Roadmap item(s):** P1-SEO-001, P1-SEO-002

**Task category:** SEO

**Files I expect to touch:** src/layouts/SiteLayout.astro

**Context from last session:** None — first implementation session after audit

**Definition of done:** `<head>` renders og:title, og:description, og:type, og:url, twitter:card, twitter:title, twitter:description, twitter:image for every page. Verified via npm run build + inspecting ./dist/index.html

**Constraints:** Do not modify src/, public/, package.json, astro.config.mjs, or .github/workflows/ beyond the scope of this task.
```

---

## Example: Content Update Session

```
## Session Brief — AlanP13.github.io

**Task:** Update the 3 research paper statuses from in-progress to published and remove the example.mdx placeholder

**Roadmap item(s):** P0-001, P1-CON-001

**Task category:** Content

**Files I expect to touch:**
- src/content/research/enterprise-risk-management-strategy.mdx
- src/content/research/fuel-price-forecasting-holidays.mdx
- src/content/research/hybrid-disaster-recovery-plan.mdx
- src/content/research/example.mdx (archive or delete)

**Context from last session:** None

**Definition of done:** Research page shows 3 items with status "published", placeholder is gone

**Constraints:** Standard constraints apply.
```

---

## Quick Reference (include in any session if needed)

```
Site: https://alanp13.github.io
Stack: Astro 5 · React 19 (ImageCarousel only) · TypeScript · Scoped CSS · MDX Collections · GitHub Pages
Build: npm run build → ./dist/ → push to main auto-deploys

Routing docs: docs/task-routing.md
File graph:   docs/graphify-memory-map.md
Backlog:      docs/website-roadmap.md
Decisions:    docs/decision-log.md
Design rules: docs/guidelines.md
```

---

## Session Completion Checklist

Before ending a session:
- [ ] `npm run build` passes with no errors
- [ ] Mark completed roadmap items as `[x]` in `docs/website-roadmap.md`
- [ ] Note any new decisions made in `docs/decision-log.md`
- [ ] Suggest a commit message for the changes made
