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
    title: z.string(),
    date: z.string().optional(),
    status: z.enum(["published", "submitted", "in-progress"]).default("in-progress"),
    area: z.array(z.string()).default([]), // e.g. ["AI","Data Science","Security"]
    summary: z.string(),
    relevance: z.string().optional(),
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
    order: z.number().default(0),       // for manual ordering if needed
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

export const collections = { projects, research, timeline };