import { jsx as _jsx } from "react/jsx-runtime";
import Link from "next/link";
export function ButtonDependency({ items }) {
    return (_jsx("div", { className: "flex flex-wrap gap-3 mb-10", children: items.map((item) => (_jsx(Link, { href: item.href ?? "https://vaibhavkesarwani.vercel.app/", children: _jsx("button", { className: "rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium transition hover:bg-muted cursor-pointer", children: item.name }) }, item.name))) }));
}
