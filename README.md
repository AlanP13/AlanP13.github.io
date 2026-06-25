# Alan Palayil — Personal Portfolio

**Live site:** [https://alanp13.github.io](https://alanp13.github.io)

Personal portfolio built with Astro 5 — fast, static, and SEO-friendly. Covers professional experience, engineering projects, research, and credentials.

---

## Stack

| Layer | Detail |
|---|---|
| Framework | Astro 5.16.6 |
| UI | React 19 (single interactive component) |
| Language | TypeScript (strict) |
| Styling | Scoped CSS per component |
| Content | MDX + Astro Content Collections |
| Deployment | GitHub Pages via GitHub Actions |

---

## Routes

| URL | Source |
|---|---|
| `/` | `src/pages/index.astro` |
| `/about` | `src/pages/about.astro` |
| `/resume` | `src/pages/resume.astro` |
| `/projects` | `src/pages/projects/index.astro` |
| `/projects/[slug]` | `src/pages/projects/[slug].astro` |
| `/research` | `src/pages/research/index.astro` |

---

## Content Collections

Managed under `src/content/`:

- `projects` — engineering project entries (MDX)
- `research` — research write-ups (MDX)
- `timeline` — career / experience timeline
- `certifications` — credential entries
- `archive` — archived content

---

## Development

**Prerequisites:** Node.js LTS, npm

```bash
npm install       # Install dependencies
npm run dev       # Dev server → http://localhost:4321
npm run build     # Production build → ./dist/
npm run preview   # Serve ./dist/ locally
```

---

## Project Structure

```
├── public/                  # Static assets
├── src/
│   ├── components/          # Astro + React components
│   ├── content/             # MDX content collections
│   ├── layouts/             # Page layout wrappers
│   └── pages/               # File-based routes
├── docs/                    # Project docs & decision log
├── astro.config.mjs
└── package.json
```

---

## License

Personal portfolio — all rights reserved.
