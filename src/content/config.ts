import { defineCollection, z } from 'astro:content';

const notes = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string().optional(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val))
      .optional(),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    heroImage: z.string().optional(),
  }),
});

export const collections = { notes };
