# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

**Alan Palayil's portfolio** — Astro 5 static site at https://alanp13.github.io

## Commands

```bash
npm run dev      # Dev server → http://localhost:4321
npm run build    # Production build → ./dist/
npm run preview  # Serve ./dist/ locally
```

## Stack

Astro 5.16.6 · React 19 (one component only) · TypeScript strict · Scoped CSS (Tailwind installed but not used in markup) · MDX Content Collections · GitHub Pages via GH Actions

## Routes

| Route | Source file |
|---|---|
| `/` | `src/pages/index.astro` |
| `/about` | `src/pages/about.astro` |
| `/resume` | `src/pages/resume.astro` |
| `/projects` | `src/pages/projects/index.astro` |
| `/projects/[slug]` | `src/pages/projects/[slug].astro` |
| `/research` | `src/pages/research/index.astro` |

## Task Router — check before opening any source file

| Task | Read first |
|---|---|
| SEO / meta / OG / sitemap / JSON-LD | `docs/task-routing.md` → SEO section |
| Content update (project / research / timeline) | `docs/task-routing.md` → Content section |
| Styling / layout / UI / theme | `docs/task-routing.md` → Styling section |
| New page or route | `docs/task-routing.md` → New Page section |
| Bug fix | `docs/task-routing.md` → Bug Fix section |
| What needs doing / priorities / backlog | `docs/website-roadmap.md` |
| Why something was built a certain way | `docs/decision-log.md` |
| Design system rules / CSS conventions | `docs/guidelines.md` |
| Working rules / constraints | `docs/instructions.md` |
| File dependency graph | `docs/graphify-memory-map.md` |

## Hard Constraints

- Do **not** modify `src/`, `public/`, `package.json`, `astro.config.mjs`, or `.github/workflows/` without explicit user instruction.
- Check `docs/website-roadmap.md` for item status before starting any roadmap task.
- Check `docs/instructions.md` before making structural changes.
- Full repo scans (`Glob **/*`) are unnecessary — use `docs/graphify-memory-map.md` instead.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
