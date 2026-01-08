import { getCollection } from "astro:content";

export async function GET() {
    const blogPosts = await getCollection("posts");
    const feed = blogPosts.map(post => ({
        title: post.data.title,
        description: post.data.description,
        publishedAt: post.data.publishedAt,
        category: post.data.category,
        portrait: post.data.portrait,
        slug: post.slug,
    }))
    return new Response(JSON.stringify(feed), {
        headers: {
            "Content-Type": "application/json",
        },
    });
}