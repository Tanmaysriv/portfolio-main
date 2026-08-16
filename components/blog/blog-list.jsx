import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BlogCard } from "./blog-card";
export function BlogList({ posts, className = "" }) {
    if (posts.length === 0) {
        return (_jsxs("div", { className: "flex min-h-100 flex-col items-center justify-center space-y-4 text-center", children: [_jsx("h2", { className: "text-2xl font-semibold", children: "No blog posts found" }), _jsx("p", { className: "text-muted-foreground", children: "Check back later for new content!" })] }));
    }
    return (_jsx("div", { className: `grid gap-6 md:grid-cols-2 lg:grid-cols-2 ${className}`, children: posts.map((post) => (_jsx(BlogCard, { post: post }, post.slug))) }));
}
