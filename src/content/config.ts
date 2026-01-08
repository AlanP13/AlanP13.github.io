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
  }),
});

export const collections = { projects, research };
