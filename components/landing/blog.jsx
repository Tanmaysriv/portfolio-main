import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getPublishedBlogPosts } from "@/lib/blog";
import Link from "next/link";
import { BlogCard } from "../blog/blog-card";
import SectionHeading from "../common/section-heading";
import { Button } from "../ui/button";
import Container from "../common/container";
export default function Blog() {
    const posts = getPublishedBlogPosts();
    return (_jsxs(Container, { className: "mt-20", children: [_jsx(SectionHeading, { subHeading: "Featured", heading: "Blogs" }), _jsx("div", { className: "mt-8 grid grid-cols-1 gap-4 md:grid-cols-2", children: posts.slice(0, 2).map((post) => (_jsx(BlogCard, { post: post }, post.slug))) }), _jsx("div", { className: "mt-8 flex justify-center", children: _jsx(Button, { variant: "outline", children: _jsx(Link, { href: "/blog", children: "Show all blogs" }) }) })] }));
}
