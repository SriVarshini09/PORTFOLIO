import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const metric = z.object({ value: z.string(), label: z.string() });
const links = z.object({
  live: z.string().url().optional(),
  repo: z.string().url().optional(),
  paper: z.string().url().optional(),
  pdf: z.string().optional(),
  code: z.string().url().optional(),
});

// One file per project in src/content/projects. The file name becomes the URL: /work/<file-name>.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    theme: z.enum(['agent-infra', 'agent-product', 'evaluation-ml']),
    tag: z.string(),
    order: z.number(),
    featured: z.boolean().default(false),
    building: z.boolean().default(false),
    // Two or three short bullets shown on the project card.
    highlights: z.array(z.string()).default([]),
    role: z.string().optional(),
    timeline: z.string().optional(),
    stack: z.array(z.string()),
    flow: z.array(z.string()).min(2),
    links: links.default({}),
    metrics: z.array(metric).default([]),
    decisions: z.array(z.object({ title: z.string(), text: z.string() })).default([]),
    // Shown last on the project page, after decisions and results.
    next: z.string().optional(),
    related: z.array(z.string()).default([]),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    kind: z.string(),
    status: z.string().default('Published'),
    venue: z.string().optional(),
    date: z.coerce.date().optional(),
    order: z.number(),
    role: z.string().optional(),
    authors: z.array(z.string()).default([]),
    summary: z.string(),
    highlights: z.array(z.string()).default([]),
    topics: z.array(z.string()),
    flow: z.array(z.string()).min(2),
    links: links.default({}),
    metrics: z.array(metric).default([]),
    citation: z.string().optional(),
    related: z.array(z.string()).default([]),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    org: z.string(),
    short: z.string(),
    start: z.string(),
    end: z.string(),
    order: z.number(),
    type: z.string().optional(),
    location: z.string().optional(),
    summary: z.string(),
    skills: z.array(z.string()),
    owned: z.array(z.string()).default([]),
    metrics: z.array(metric).default([]),
    projects: z.array(z.string()).default([]),
    research: z.array(z.string()).default([]),
  }),
});

// Posts: set `draft: true` while writing. Drafts show in `npm run dev` only, never on the live site.
const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    projects: z.array(z.string()).default([]),
    research: z.array(z.string()).default([]),
  }),
});

export const collections = { projects, research, experience, writing };
