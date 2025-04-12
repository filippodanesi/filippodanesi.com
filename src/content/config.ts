import { defineCollection, z } from 'astro:content';

// Schema comune per le immagini
const imageSchema = z.object({
    src: z.string(),
    alt: z.string().optional().default('')
});

// Schema SEO con supporto migliorato per le immagini
const seoSchema = z.object({
    title: z.string().min(5).max(120).optional(),
    description: z.string().min(15).max(160).optional(),
    image: imageSchema.optional(),
    pageType: z.enum(['website', 'article']).default('website')
});

const pages = defineCollection({
    schema: z.object({
        title: z.string(),
        image: imageSchema.optional(), // Aggiunto supporto per immagini nelle pagine
        seo: seoSchema.optional()
    })
});

export const collections = { pages };