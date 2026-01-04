import { defineCollection, z } from "astro:content";

const faqCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        faqs: z.array(
            z.object({
                question: z.string(),
                answer: z.string(),
            })
        )
    })
})

const tutorialsCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        portrait: z.string(),
        objectPortrait: z.string().optional(),
        screenshotsKey: z.string(),
        order: z.number(),
        feature: z.enum(["transactions", "budgets", "reports", "accounts", "settings"]),
        difficulty: z.enum(["beginner", "intermediate", "advanced"]),
    })
})

const postsCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishedAt: z.coerce.date(),
        category: z.string(),
        portrait: z.string(),
        order: z.number().optional(),
    })
})

export const collections = {
    faq: faqCollection,
    tutorials: tutorialsCollection,
    posts: postsCollection,
};