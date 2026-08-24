import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    featured: z.boolean().default(false),
    date: z.string().optional(),
    summary: z.string(),
    highlights: z.array(z.string()).default([]),
    impact: z.array(z.string()).default([]),
    tech: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    role: z.string().optional(),
    links: z.array(
      z.object({
        label: z.string(),
        url: z.string(),
      })
    ).default([]),
    order: z.number().default(0),       // for manual ordering if needed
  }),
});

const research = defineCollection({
  type: "content",
  schema: z.object({
    // ── Core (legacy — kept for backward compat, display uses publication_status when present) ──
    title: z.string(),
    date: z.string().optional(),
    status: z.enum(["published", "submitted", "in-progress", "completed"]).default("in-progress"),
    featured: z.boolean().default(false),
    area: z.array(z.string()).default([]),
    summary: z.string(),
    relevance: z.string().optional(),
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
    order: z.number().default(0),

    // ── Publication classification ─────────────────────────────────────────────
    publication_type: z.enum([
      "journal-article", "conference-paper", "preprint",
      "technical-report", "thesis", "working-paper",
    ]).optional(),
    publication_status: z.enum([
      "published", "accepted", "under-review", "submitted",
      "preprint", "completed", "in-progress",
    ]).optional(),
    lifecycle_stage: z.enum([
      "idea", "drafting", "internal-review", "submitted",
      "under-review", "accepted", "published", "completed",
      "rejected", "withdrawn",
    ]).optional(),

    // ── Publication context ────────────────────────────────────────────────────
    venue: z.string().optional(),
    university: z.string().optional(),
    course: z.string().optional(),
    semester: z.string().optional(),
    submission_date: z.string().optional(),
    publication_date: z.string().optional(),

    // ── Academic identifiers ───────────────────────────────────────────────────
    doi: z.string().optional(),
    orcid: z.string().optional(),
    version: z.string().optional(),
    citation: z.string().optional(),

    // ── Rich metadata ──────────────────────────────────────────────────────────
    abstract: z.string().optional(),
    keywords: z.array(z.string()).default([]),
    coauthors: z.array(z.object({
      name: z.string(),
      url: z.string().optional(),
    })).default([]),

    // ── Distribution URLs ──────────────────────────────────────────────────────
    researchgate_url: z.string().optional(),
    google_scholar_url: z.string().optional(),
    ssrn_url: z.string().optional(),
    zenodo_url: z.string().optional(),
    github_url: z.string().optional(),
    dataset_url: z.string().optional(),
    supplementary_url: z.string().optional(),
  }),
});

const archive = defineCollection({
  type: "content",
  schema: z.object({
    // ── Core (legacy — mirrors research schema) ────────────────────────────────
    title: z.string(),
    date: z.string().optional(),
    status: z.enum(["published", "submitted", "in-progress", "completed"]).default("in-progress"),
    area: z.array(z.string()).default([]),
    summary: z.string(),
    relevance: z.string().optional(),
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
    order: z.number().default(0),

    // ── Publication classification ─────────────────────────────────────────────
    publication_type: z.enum([
      "journal-article", "conference-paper", "preprint",
      "technical-report", "thesis", "working-paper",
    ]).optional(),
    publication_status: z.enum([
      "published", "accepted", "under-review", "submitted",
      "preprint", "completed", "in-progress",
    ]).optional(),
    lifecycle_stage: z.enum([
      "idea", "drafting", "internal-review", "submitted",
      "under-review", "accepted", "published", "completed",
      "rejected", "withdrawn",
    ]).optional(),

    // ── Publication context ────────────────────────────────────────────────────
    venue: z.string().optional(),
    university: z.string().optional(),
    course: z.string().optional(),
    semester: z.string().optional(),
    submission_date: z.string().optional(),
    publication_date: z.string().optional(),

    // ── Academic identifiers ───────────────────────────────────────────────────
    doi: z.string().optional(),
    orcid: z.string().optional(),
    version: z.string().optional(),
    citation: z.string().optional(),

    // ── Rich metadata ──────────────────────────────────────────────────────────
    abstract: z.string().optional(),
    keywords: z.array(z.string()).default([]),
    coauthors: z.array(z.object({
      name: z.string(),
      url: z.string().optional(),
    })).default([]),

    // ── Distribution URLs ──────────────────────────────────────────────────────
    researchgate_url: z.string().optional(),
    google_scholar_url: z.string().optional(),
    ssrn_url: z.string().optional(),
    zenodo_url: z.string().optional(),
    github_url: z.string().optional(),
    dataset_url: z.string().optional(),
    supplementary_url: z.string().optional(),
  }),
});


/** NEW: Work & Education entries */
const timeline = defineCollection({
  type: "content",
  schema: z.object({
    kind: z.enum(["work", "education"]),
    title: z.string(),              // role or degree
    org: z.string(),                // company or university
    orgUrl: z.string().url().optional(),
    location: z.string().optional(),
    dates: z.string(),              // "Dec 2025 – Present"
    subtitle: z.string().optional(),// e.g. "Focus: AI & Data Science"
    bullets: z.array(z.string()).default([]),
    iconText: z.string().default("•"), // fallback "G" "IIT" "PhD"
    order: z.number().default(0),       // for manual ordering if needed
  }),
});

const certifications = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    issuerUrl: z.string().url().optional(),
    credentialId: z.string().optional(),
    credentialUrl: z.string().optional(),
    dateObtained: z.string().optional(),
    dateExpiry: z.string().optional(),
    status: z.enum(["earned", "in-progress", "planned", "expired"]).default("earned"),
    category: z.enum(["finance", "cloud", "security", "data", "ai", "development", "other"]).default("other"),
    skills: z.array(z.string()).default([]),
    order: z.number().default(0),
    featured: z.boolean().default(false),
    summary: z.string().optional(),
  }),
});

const training = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    issuerUrl: z.string().url().optional(),
    credentialId: z.string().optional(),
    credentialUrl: z.string().optional(),
    dateObtained: z.string().optional(),
    dateExpiry: z.string().optional(),
    status: z.enum(["earned", "in-progress", "planned", "expired"]).default("earned"),
    category: z.enum(["finance", "cloud", "security", "data", "ai", "development", "other"]).default("other"),
    skills: z.array(z.string()).default([]),
    order: z.number().default(0),
    featured: z.boolean().default(false),
    summary: z.string().optional(),
  }),
});

export const collections = { projects, research, timeline, archive, certifications, training };