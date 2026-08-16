import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import ArrowLeft from "../svg/ArrowLeft";
import ArrowUUpRight from "../svg/ArrowUUpRight";
export function ProjectNavigation({ previous, next }) {
    if (!previous && !next) {
        return null;
    }
    return (_jsxs("div", { className: "space-y-6", children: [_jsx(Separator, {}), _jsxs("div", { className: "grid gap-5 md:grid-cols-2", children: [_jsx("div", { className: `${next ? "" : "md:col-span-2"}`, children: previous ? (_jsx(Button, { variant: "outline", asChild: true, className: "group h-auto w-full justify-start p-4 text-left", children: _jsx(Link, { href: `/projects/${previous.slug}`, children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(ArrowLeft, { className: "size-4 transition-transform group-hover:-translate-x-1" }), _jsxs("div", { children: [_jsx("div", { className: "text-muted-foreground text-xs", children: "Previous Project" }), _jsx("div", { className: "font-medium", children: previous.title })] })] }) }) })) : (_jsx("div", { className: "h-16" })) }), _jsx("div", { className: `${previous ? "" : "md:col-span-2"}`, children: next ? (_jsx(Button, { variant: "outline", asChild: true, className: "group h-auto w-full justify-end p-4 text-right", children: _jsx(Link, { href: `/projects/${next.slug}`, children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsxs("div", { children: [_jsx("div", { className: "text-muted-foreground text-xs", children: "Next Project" }), _jsx("div", { className: "font-medium", children: next.title })] }), _jsx(ArrowUUpRight, { className: "size-4 transition-transform group-hover:translate-x-1" })] }) }) })) : (_jsx("div", { className: "h-16" })) })] })] }));
}
