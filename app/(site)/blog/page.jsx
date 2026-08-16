import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Container from "@/components/common/container";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { getAllTags, getPublishedBlogPosts } from "@/lib/blog";
import { generateMetadata as getMetadata } from "@/config/meta";
import { Suspense } from "react";
import { BlogPageClient } from "./blog-page-client";
export const generateMetadata = () => {
    const metadata = getMetadata("/blog");
    return {
        ...metadata,
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
    };
};
function BlogPageLoading() {
    return (_jsx(Container, { className: "py-16", children: _jsxs("div", { className: "space-y-8", children: [_jsxs("div", { className: "space-y-4 text-center", children: [_jsx(Skeleton, { className: "mx-auto h-12 w-32" }), _jsx(Skeleton, { className: "mx-auto h-6 w-96" })] }), _jsx(Separator, {}), _jsxs("div", { className: "space-y-4", children: [_jsx(Skeleton, { className: "h-6 w-32" }), _jsx("div", { className: "flex flex-wrap gap-2", children: Array.from({ length: 5 }).map((_, i) => (_jsx(Skeleton, { className: "h-8 w-20" }, i))) })] }), _jsxs("div", { className: "space-y-6", children: [_jsx(Skeleton, { className: "h-8 w-48" }), _jsx("div", { className: "space-y-4", children: Array.from({ length: 3 }).map((_, i) => (_jsxs("div", { className: "space-y-2", children: [_jsx(Skeleton, { className: "h-6 w-3/4" }), _jsx(Skeleton, { className: "h-4 w-1/2" }), _jsx(Skeleton, { className: "h-4 w-2/3" })] }, i))) })] })] }) }));
}
export default function BlogPage() {
    const allPosts = getPublishedBlogPosts();
    const allTags = getAllTags();
    return (_jsx(Suspense, { fallback: _jsx(BlogPageLoading, {}), children: _jsx(BlogPageClient, { initialPosts: allPosts, initialTags: allTags }) }));
}
