"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Check, Copy, Terminal } from "lucide-react";
import { isValidElement, useState } from "react";
function hasChildren(node) {
    return isValidElement(node);
}
function getText(node) {
    if (typeof node === "string" || typeof node === "number")
        return String(node);
    if (Array.isArray(node))
        return node.map(getText).join("");
    if (hasChildren(node))
        return getText(node.props.children);
    return "";
}
function isCodeElement(node) {
    return isValidElement(node) && node.type === "code";
}
export default function CodeBlock({ children, className }) {
    const [copied, setCopied] = useState(false);
    const codeEl = isCodeElement(children) ? children : null;
    if (!codeEl)
        return null;
    const code = getText(codeEl.props.children);
    const lang = codeEl.props["data-language"] ??
        codeEl.props.className?.replace("language-", "") ??
        "";
    const title = codeEl.props["data-title"] ?? "";
    const copy = async () => {
        if (!code)
            return;
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };
    return (_jsxs("div", { className: `relative my-6 overflow-hidden rounded-xl border shadow-sm transition-colors
      bg-white/30 text-zinc-900 border-zinc-200
      dark:bg-zinc-900/60 dark:text-zinc-100 dark:border-white/10
      ${className ?? ""}`, children: [(title || lang) && (_jsxs("div", { className: "flex items-center justify-between border-b px-3 py-2 text-xs\n          bg-zinc-50 text-zinc-600 border-zinc-200\n          dark:bg-black/40 dark:text-zinc-400 dark:border-white/10", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Terminal, { className: "size-3.5 text-zinc-500" }), title && (_jsx("span", { className: "text-zinc-900 dark:text-zinc-200", children: title })), lang && (_jsx("span", { className: "rounded px-1.5 py-0.5 text-[10px] uppercase\n                bg-zinc-200 text-zinc-700\n                dark:bg-white/10 dark:text-zinc-300", children: lang }))] }), _jsx("button", { onClick: copy, className: "flex items-center gap-1 rounded-md px-2 py-1 transition\n            hover:bg-zinc-200/60 dark:hover:bg-white/10", children: copied ? (_jsxs(_Fragment, { children: [_jsx(Check, { className: "size-3.5 text-green-600 dark:text-green-400" }), _jsx("span", { className: "text-green-600 dark:text-green-400", children: "Copied" })] })) : (_jsxs(_Fragment, { children: [_jsx(Copy, { className: "size-3.5" }), _jsx("span", { children: "Copy" })] })) })] })), _jsx("pre", { className: "overflow-x-auto p-4 text-sm leading-relaxed font-mono\n        bg-transparent text-zinc-900\n        dark:text-zinc-200", children: children })] }));
}
