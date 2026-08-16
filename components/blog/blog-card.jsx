import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import ArrowRight from "../svg/ArrowRight";
import Calender from "../svg/Calender";
export function BlogCard({ post }) {
    const { slug, frontmatter } = post;
    const { title, description, image, tags, date } = frontmatter;
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return (_jsxs(Card, { className: "group h-full w-full overflow-hidden border-gray-100 p-0 shadow-none transition-all dark:border-gray-800", children: [_jsx(CardHeader, { className: "p-0", children: _jsx("div", { className: "relative aspect-video overflow-hidden", children: _jsx(Link, { href: `/blog/${slug}`, children: _jsx(Image, { src: image, alt: title, fill: true, className: "object-cover" }) }) }) }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-3", children: [_jsx(Link, { href: `/blog/${slug}`, children: _jsx("h3", { className: "group-hover:text-primary line-clamp-2 text-xl leading-tight font-semibold", children: title }) }), _jsx("p", { className: "text-secondary mt-4 line-clamp-3", children: description })] }) }), _jsx(CardFooter, { className: "p-6 pt-0", children: _jsxs("div", { className: "flex w-full flex-col space-y-3", children: [_jsxs("div", { className: "flex flex-wrap gap-2", children: [tags.slice(0, 3).map((tag) => (_jsx(Badge, { variant: "secondary", className: "text-xs", children: tag }, tag))), tags.length > 3 && (_jsxs(Badge, { variant: "outline", className: "text-xs", children: ["+", tags.length - 3, " more"] }))] }), _jsxs("div", { className: "mt-4 flex items-center justify-between gap-2", children: [_jsxs("time", { className: "text-secondary flex items-center gap-2 text-sm", dateTime: date, children: [_jsx(Calender, { className: "size-4" }), " ", formattedDate] }), _jsxs(Link, { href: `/blog/${slug}`, className: "group relative inline-flex items-center justify-end gap-2\n             text-secondary transition-colors duration-300 hover:text-primary", children: [_jsx("span", { className: "relative\n      after:absolute after:left-0 after:-bottom-1\n      after:h-0.5 after:w-full\n      after:origin-left after:scale-x-0\n      after:bg-current\n      after:transition-transform after:duration-300 after:ease-out\n      group-hover:after:scale-x-100", children: "Read More" }), _jsx(ArrowRight, { className: "size-4 transition-transform duration-300 group-hover:translate-x-1" })] })] })] }) })] }));
}
