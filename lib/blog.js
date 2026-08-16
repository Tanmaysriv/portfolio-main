import fs from "fs";
import matter from "gray-matter";
import path from "path";
const blogDirectory = path.join(process.cwd(), "data/blog");
/**
 * Get all blog post files from the blog directory
 */
export function getBlogPostSlugs() {
    if (!fs.existsSync(blogDirectory)) {
        return [];
    }
    const files = fs.readdirSync(blogDirectory);
    return files
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => file.replace(/\.mdx$/, ""));
}
/**
 * Get blog post by slug with full content
 */
export function getBlogPostBySlug(slug) {
    try {
        const fullPath = path.join(blogDirectory, `${slug}.mdx`);
        if (!fs.existsSync(fullPath)) {
            return null;
        }
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);
        // Validate frontmatter
        const frontmatter = data;
        if (!frontmatter.title || !frontmatter.description) {
            throw new Error(`Invalid frontmatter in ${slug}.mdx`);
        }
        return {
            slug,
            frontmatter,
            content,
        };
    }
    catch (error) {
        console.error(`Error reading blog post ${slug}:`, error);
        return null;
    }
}
/**
 * Get all blog posts with frontmatter only (for listing page)
 */
export function getAllBlogPosts() {
    const slugs = getBlogPostSlugs();
    const posts = slugs
        .map((slug) => {
        const post = getBlogPostBySlug(slug);
        if (!post)
            return null;
        return {
            slug: post.slug,
            frontmatter: post.frontmatter,
        };
    })
        .filter((post) => post !== null)
        .sort((a, b) => {
        // Sort by date, newest first
        return (new Date(b.frontmatter.date).getTime() -
            new Date(a.frontmatter.date).getTime());
    });
    return posts;
}
/**
 * Get all published blog posts
 */
export function getPublishedBlogPosts() {
    const allPosts = getAllBlogPosts();
    return allPosts.filter((post) => post.frontmatter.isPublished);
}
/**
 * Get blog posts by tag
 */
export function getBlogPostsByTag(tag) {
    const publishedPosts = getPublishedBlogPosts();
    return publishedPosts.filter((post) => post.frontmatter.tags.some((postTag) => postTag.toLowerCase() === tag.toLowerCase()));
}
/**
 * Get all unique tags from published posts
 */
export function getAllTags() {
    const publishedPosts = getPublishedBlogPosts();
    const tagsSet = new Set();
    publishedPosts.forEach((post) => {
        post.frontmatter.tags.forEach((tag) => {
            tagsSet.add(tag.toLowerCase());
        });
    });
    return Array.from(tagsSet).sort();
}
/**
 * Get related posts based on tags (excluding the current post)
 */
export async function getRelatedPosts(currentSlug, maxPosts = 3) {
    const currentPost = await getBlogPostBySlug(currentSlug);
    if (!currentPost || !currentPost.frontmatter.isPublished) {
        return [];
    }
    const allPosts = getPublishedBlogPosts();
    const currentTags = currentPost.frontmatter.tags.map((tag) => tag.toLowerCase());
    // Calculate relevance score based on shared tags
    const postsWithScore = allPosts
        .filter((post) => post.slug !== currentSlug)
        .map((post) => {
        const sharedTags = post.frontmatter.tags.filter((tag) => currentTags.includes(tag.toLowerCase()));
        return {
            post,
            score: sharedTags.length,
        };
    })
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score);
    return postsWithScore.slice(0, maxPosts).map((item) => item.post);
}
