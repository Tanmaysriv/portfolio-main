import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { BlogContent } from "@/components/blog/blog-content";
import { BlogList } from "@/components/blog/blog-list";
import Container from "@/components/common/container";
import ArrowLeft from "@/components/svg/ArrowLeft";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/meta";
import { getBlogPostBySlug, getBlogPostSlugs, getRelatedPosts, } from "@/lib/blog";
import Link from "next/link";
import { notFound } from "next/navigation";
// Generate static paths for all blog posts
export async function generateStaticParams() {
    const slugs = getBlogPostSlugs();
    return slugs.map((slug) => ({
        slug,
    }));
}
// Generate metadata for each blog post
export async function generateMetadata({ params, }) {
    //  await params
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);
    if (!post || !post.frontmatter.isPublished) {
        return {
            title: "Post Not Found",
        };
    }
    const { title, description, image } = post.frontmatter;
    return {
        metadataBase: new URL(siteConfig.url),
        title,
        description,
        openGraph: {
            title,
            description,
            images: [image],
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },
    };
}
export default async function BlogPostPage({ params }) {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);
    if (!post || !post.frontmatter.isPublished) {
        notFound();
    }
    const relatedPosts = await getRelatedPosts(slug, 3);
    return (_jsx(_Fragment, { children: _jsx(Container, { className: "py-16", children: _jsxs("div", { className: "space-y-12", children: [_jsx("div", { children: _jsx(Button, { variant: "ghost", asChild: true, className: "group border border-black/10 dark:border-white/10", children: _jsxs(Link, { href: "/blog", className: "flex items-center space-x-2", children: [_jsx(ArrowLeft, { className: "size-4" }), _jsx("span", { children: "Back to Blog" })] }) }) }), _jsx(BlogContent, { frontmatter: post.frontmatter, content: post.content }), relatedPosts.length > 0 && (_jsxs("div", { className: "space-y-6", children: [_jsx(Separator, {}), _jsxs("div", { className: "space-y-6", children: [_jsx("h2", { className: "text-2xl font-semibold", children: "Related Posts" }), _jsx(BlogList, { posts: relatedPosts })] })] })), _jsxs("div", { className: "text-center", children: [_jsx(Separator, { className: "mb-8" }), _jsx(Button, { asChild: true, size: "lg", children: _jsx(Link, { href: "/blog", children: "View All Blogs" }) })] })] }) }) }));
}
