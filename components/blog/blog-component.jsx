import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import React from "react";
import CodeBlock from "../common/code-block";
import { CodeCopyButton } from "./code-copy-button";
export const BlogComponents = {
    // Override default image component
    img: ({ src, alt, ...props }) => (_jsx(Image, { src: src, alt: alt, width: 800, height: 400, className: "rounded-lg", ...props })),
    // Custom heading with better styling
    h1: ({ children, ...props }) => (_jsx("h1", { className: "mb-6 text-4xl font-bold", ...props, children: children })),
    h2: ({ children, ...props }) => (_jsx("h2", { className: "mt-8 mb-4 text-3xl font-semibold", ...props, children: children })),
    h3: ({ children, ...props }) => (_jsx("h3", { className: "mt-6 mb-3 text-2xl font-medium", ...props, children: children })),
    // Custom paragraph styling
    p: ({ children, ...props }) => (_jsx("p", { className: "text-muted-foreground text-lg mb-4 leading-7", ...props, children: children })),
    b: ({ children, ...props }) => (_jsx("b", { className: "text-black dark:text-white font-semibold", ...props, children: children })),
    strong: ({ children, ...props }) => (_jsx("strong", { className: "text-black dark:text-white font-semibold", ...props, children: children })),
    // Custom list styling
    ul: ({ children, ...props }) => (_jsx("ul", { className: "mb-4 ml-6 list-disc space-y-2 text-lg", ...props, children: children })),
    ol: ({ children, ...props }) => (_jsx("ol", { className: "mb-4 ml-6 list-decimal space-y-2 text-lg", ...props, children: children })),
    li: ({ children, ...props }) => (_jsx("li", { className: "text-muted-foreground leading-7 text-lg", ...props, children: children })),
    pre: ({ children, ...props }) => {
        const getTextContent = (node) => {
            if (typeof node === "string") {
                return node;
            }
            if (typeof node === "number") {
                return String(node);
            }
            if (React.isValidElement(node) &&
                node.props &&
                typeof node.props === "object") {
                return getTextContent(node.props.children);
            }
            if (Array.isArray(node)) {
                return node.map(getTextContent).join("");
            }
            return "";
        };
        const codeText = getTextContent(children);
        return (_jsxs("div", { className: "group relative mb-4", children: [_jsx("pre", { className: "bg-muted/30 overflow-x-auto rounded-lg border p-4 text-sm [&>code]:bg-transparent [&>code]:p-0", ...props, children: children }), _jsx(CodeCopyButton, { code: codeText })] }));
    },
    // Inline code styling (not affected by syntax highlighting)
    code: ({ children, className, ...props }) => {
        // If it's part of a pre block (syntax highlighted), don't apply inline styling
        if (className?.includes("language-")) {
            return (_jsx("code", { className: className, ...props, children: children }));
        }
        // Inline code styling
        return (_jsx("code", { className: "rounded px-2 py-1 font-mono text-sm", ...props, children: children }));
    },
    // Custom blockquote styling
    blockquote: ({ children, ...props }) => (_jsx("blockquote", { className: "border-primary text-muted-foreground mb-4 border-l-4 pl-4 italic", ...props, children: children })),
    CodeBlock,
};
