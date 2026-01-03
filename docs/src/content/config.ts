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

export const collections = {
    faq: faqCollection,
    tutorials: tutorialsCollection,
};