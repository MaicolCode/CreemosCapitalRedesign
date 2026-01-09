import { defineCollection, z } from 'astro:content';

const news = defineCollection({
    type: 'content',
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        description: z.string(),
        // Transform string to Date object
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        category: z.enum(['technical', 'investment']),
        author: z.string().default('Creemos Capital Team'),
        // HYBRID FEATURE: Optional external URL
        externalUrl: z.string().url().optional(),
    }),
});

export const collections = { news };
