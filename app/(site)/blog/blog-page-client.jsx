"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BlogList } from "@/components/blog/blog-list";
import Container from "@/components/common/container";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useHapticFeedback } from "@/hooks/use-haptic-feedback";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
const getBlogPostsByTagClient = (posts, tag) => {
    return posts.filter((post) => post.frontmatter.tags.some((postTag) => postTag.toLowerCase() === tag.toLowerCase()));
};
export function BlogPageClient({ initialPosts, initialTags, }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const { triggerHaptic, isMobile } = useHapticFeedback();
    const [selectedTag, setSelectedTag] = useState(null);
    const [filteredPosts, setFilteredPosts] = useState(initialPosts);
    // Get tag from URL params on mount
    useEffect(() => {
        const tagParam = searchParams.get("tag");
        if (tagParam) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setSelectedTag(tagParam);
            const filtered = getBlogPostsByTagClient(initialPosts, tagParam);
            setFilteredPosts(filtered);
        }
        else {
            setSelectedTag(null);
            setFilteredPosts(initialPosts);
        }
    }, [searchParams, initialPosts]);
    // Handle tag click
    const handleTagClick = (tag) => {
        if (isMobile()) {
            triggerHaptic("light");
        }
        if (selectedTag === tag) {
            setSelectedTag(null);
            setFilteredPosts(initialPosts);
            router.replace("/blog");
        }
        else {
            setSelectedTag(tag);
            const filtered = getBlogPostsByTagClient(initialPosts, tag);
            setFilteredPosts(filtered);
            router.replace(`/blog?tag=${encodeURIComponent(tag)}`);
        }
    };
    const getTagPostCount = (tag) => {
        return initialPosts.filter((post) => post.frontmatter.tags.some((postTag) => postTag.toLowerCase() === tag.toLowerCase())).length;
    };
    return (_jsx(Container, { className: "py-16", children: _jsxs("div", { className: "space-y-8", children: [_jsxs("div", { className: "space-y-4 text-center", children: [_jsx("h1", { className: "text-4xl font-bold tracking-tight lg:text-5xl", children: "Blogs" }), _jsx("p", { className: "text-muted-foreground mx-auto max-w-2xl text-lg", children: "Thoughts, tutorials, and insights on engineering, and programming." })] }), _jsx(Separator, {}), initialTags.length > 0 && (_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h2", { className: "text-lg font-semibold", children: "Popular Tags" }), selectedTag && (_jsx("button", { onClick: () => handleTagClick(selectedTag), className: "text-muted-foreground hover:text-foreground text-sm underline", children: "Clear filter" }))] }), _jsx("div", { className: "flex flex-wrap gap-2", children: initialTags.map((tag) => {
                                const postCount = getTagPostCount(tag);
                                const isSelected = selectedTag === tag;
                                return (_jsx("button", { onClick: () => handleTagClick(tag), className: "transition-colors", children: _jsxs(Badge, { variant: isSelected ? "default" : "outline", className: "hover:bg-accent hover:text-accent-foreground tag-inner-shadow cursor-pointer capitalize", children: [tag, " (", postCount, ")"] }) }, tag));
                            }) })] })), _jsxs("div", { className: "space-y-6", children: [_jsx("div", { className: "flex items-center justify-between", children: _jsxs("h2", { className: "text-2xl font-semibold", children: [selectedTag ? `Posts tagged "${selectedTag}"` : "Latest Posts", filteredPosts.length > 0 && (_jsxs("span", { className: "text-muted-foreground ml-2 text-sm font-normal", children: ["(", filteredPosts.length, " ", filteredPosts.length === 1 ? "post" : "posts", ")"] }))] }) }), _jsx(BlogList, { posts: filteredPosts })] })] }) }));
}
