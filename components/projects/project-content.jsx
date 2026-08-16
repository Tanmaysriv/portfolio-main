import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import Image from "next/image";
import rehypePrettyCode from "rehype-pretty-code";
import Github from "../svg/Github";
import Website from "../svg/Website";
import { ProjectComponents } from "./project-component";
export function ProjectContent({ frontmatter, content }) {
    const { title, description, image, technologies, github, live, timeline, role, team, status, } = frontmatter;
    const statusVariant = status === "completed"
        ? "default"
        : status === "in-progress"
            ? "secondary"
            : "outline";
    return (_jsxs("article", { className: "mx-auto max-w-4xl", children: [_jsxs("header", { className: "mb-8 space-y-6", children: [_jsx("div", { className: "relative aspect-video overflow-hidden rounded-lg", children: _jsx(Image, { src: image, alt: title, fill: true, className: "object-cover", priority: true }) }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [_jsx(Badge, { variant: statusVariant, className: "text-sm rounded-md", children: status.charAt(0).toUpperCase() + status.slice(1) }), technologies.slice(0, 3).map((tech) => (_jsx(Badge, { variant: "outline", className: "text-xs rounded-md", children: tech }, tech))), technologies.length > 3 && (_jsxs(Badge, { variant: "outline", className: "text-xs rounded-md", children: ["+", technologies.length - 3, " more"] }))] }), _jsx("h1", { className: "text-4xl leading-tight font-bold lg:text-5xl", children: title }), _jsx("p", { className: "text-muted-foreground text-xl", children: description }), _jsxs("div", { className: "bg-muted/20 grid gap-4 rounded-lg border p-4 sm:grid-cols-2 lg:grid-cols-4", children: [_jsxs("div", { children: [_jsx("h5", { className: "text-muted-foreground text-sm font-semibold", children: "Timeline" }), _jsx("p", { className: "text-sm", children: timeline })] }), _jsxs("div", { children: [_jsx("h5", { className: "text-muted-foreground text-sm font-semibold", children: "Role" }), _jsx("p", { className: "text-sm", children: role })] }), team && (_jsxs("div", { children: [_jsx("h5", { className: "text-muted-foreground text-sm font-semibold", children: "Team" }), _jsx("p", { className: "text-sm", children: team })] })), _jsxs("div", { children: [_jsx("h5", { className: "text-muted-foreground text-sm font-semibold", children: "Status" }), _jsx(Badge, { variant: statusVariant, className: "text-xs rounded-md", children: status.charAt(0).toUpperCase() + status.slice(1) })] })] }), _jsxs("div", { className: "flex flex-wrap gap-3", children: [live && (_jsx(Button, { asChild: true, children: _jsxs(Link, { href: live, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-2", children: [_jsx(Website, { className: "size-4" }), "Live Demo"] }) })), github && (_jsx(Button, { variant: "outline", asChild: true, children: _jsxs(Link, { href: github, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-2", children: [_jsx(Github, { className: "size-4" }), "Source Code"] }) }))] })] }), _jsx(Separator, {})] }), _jsx("div", { className: "max-w-none", children: _jsx(MDXRemote, { source: content, components: ProjectComponents, options: {
                        mdxOptions: {
                            remarkPlugins: [],
                            rehypePlugins: [
                                [
                                    rehypePrettyCode,
                                    {
                                        keepBackground: false,
                                    },
                                ],
                            ],
                            format: "mdx",
                        },
                    } }) })] }));
}
