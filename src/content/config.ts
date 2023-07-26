import { defineCollection, z } from 'astro:content';

const notes = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		id: z.string(),
		title: z.string(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { notes };
