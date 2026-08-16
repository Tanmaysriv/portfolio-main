import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import rehypePrism from "rehype-prism-plus";
import Calender from "../svg/Calender";
import { BlogComponents } from "./blog-component";
export function BlogContent({ frontmatter, content }) {
    const { title, description, image, tags, date } = frontmatter;
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return (_jsxs("article", { className: "mx-auto max-w-4xl", children: [_jsxs("header", { className: "mb-8 space-y-6", children: [_jsx("div", { className: "relative aspect-video overflow-hidden rounded-lg", children: _jsx(Image, { src: image, alt: title, fill: true, className: "object-cover", priority: true }) }), _jsxs("div", { className: "space-y-4", children: [_jsx("div", { className: "flex flex-wrap gap-2", children: tags.map((tag) => (_jsx(Badge, { variant: "secondary", className: "rounded-md", children: tag }, tag))) }), _jsx("h1", { className: "text-4xl leading-tight font-bold lg:text-5xl", children: title }), _jsx("p", { className: "text-muted-foreground text-xl", children: description }), _jsxs("div", { className: "text-muted-foreground flex items-center gap-2 text-sm", children: [_jsx(Calender, { className: "size-6" }), _jsx("time", { dateTime: date, children: formattedDate })] })] }), _jsx(Separator, {})] }), _jsx("div", { className: "max-w-none", children: _jsx(MDXRemote, { source: content, components: BlogComponents, options: {
                        mdxOptions: {
                            remarkPlugins: [],
                            rehypePlugins: [
                                [
                                    rehypePrism,
                                    {
                                        theme: "github-dark",
                                    },
                                ],
                            ],
                            format: "mdx",
                        },
                    } }) })] }));
}
