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

export const collections = {
    faq: faqCollection,
};