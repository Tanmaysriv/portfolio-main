import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Bun from "@/components/technologies/Bun";
import JavaScript from "@/components/technologies/JavaScript";
import MongoDB from "@/components/technologies/MongoDB";
import NextJs from "@/components/technologies/NextJs";
import NodeJs from "@/components/technologies/NodeJs";
import PostgreSQL from "@/components/technologies/PostgreSQL";
import Prisma from "@/components/technologies/Prisma";
import ReactIcon from "@/components/technologies/ReactIcon";
import TypeScript from "@/components/technologies/TypeScript";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";
import CodeBlock from "../common/code-block";
// Technology mapping for dynamic components
const TechnologyComponents = {
    "Next.js": NextJs,
    nextjs: NextJs,
    React: ReactIcon,
    react: ReactIcon,
    TypeScript: TypeScript,
    typescript: TypeScript,
    JavaScript: JavaScript,
    javascript: JavaScript,
    "Node.js": NodeJs,
    nodejs: NodeJs,
    node: NodeJs,
    MongoDB: MongoDB,
    mongodb: MongoDB,
    PostgreSQL: PostgreSQL,
    postgresql: PostgreSQL,
    Prisma: Prisma,
    prisma: Prisma,
    Bun: Bun,
    bun: Bun,
};
// Custom Technology component for displaying technology badges with icons
const Technology = ({ name }) => {
    const TechComponent = TechnologyComponents[name] || TechnologyComponents[name.toLowerCase()];
    return (_jsxs("div", { className: "bg-muted/50 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium", children: [TechComponent && _jsx(TechComponent, {}), _jsx("span", { children: name })] }));
};
// Custom TechStack component for displaying multiple technologies
const TechStack = ({ technologies }) => {
    return (_jsxs("div", { className: "bg-muted/20 my-6 rounded-lg border p-4", children: [_jsx("h4", { className: "mb-3 text-lg font-semibold", children: "Technology Stack" }), _jsx("div", { className: "flex flex-wrap gap-2", children: technologies.map((tech) => (_jsx(Technology, { name: tech }, tech))) })] }));
};
// Custom ProjectMeta component for project information
const ProjectMeta = ({ timeline, role, team, status, }) => {
    return (_jsxs("div", { className: "bg-muted/20 my-6 grid gap-4 rounded-lg border p-4 sm:grid-cols-2 lg:grid-cols-4", children: [timeline && (_jsxs("div", { children: [_jsx("h5", { className: "text-muted-foreground text-sm font-semibold", children: "Timeline" }), _jsx("p", { className: "text-sm", children: timeline })] })), role && (_jsxs("div", { children: [_jsx("h5", { className: "text-muted-foreground text-sm font-semibold", children: "Role" }), _jsx("p", { className: "text-sm", children: role })] })), team && (_jsxs("div", { children: [_jsx("h5", { className: "text-muted-foreground text-sm font-semibold", children: "Team" }), _jsx("p", { className: "text-sm", children: team })] })), status && (_jsxs("div", { children: [_jsx("h5", { className: "text-muted-foreground text-sm font-semibold", children: "Status" }), _jsx(Badge, { variant: status === "completed"
                            ? "default"
                            : status === "in-progress"
                                ? "secondary"
                                : "outline", children: status.charAt(0).toUpperCase() + status.slice(1) })] }))] }));
};
export const ProjectComponents = {
    // Inherit blog components for basic markdown
    img: ({ src, alt, ...props }) => (_jsx(Image, { src: src, alt: alt, width: 800, height: 400, className: "rounded-lg", ...props })),
    h1: ({ children, ...props }) => (_jsx("h1", { className: "mb-6 text-4xl font-bold", ...props, children: children })),
    h2: ({ children, ...props }) => (_jsx("h2", { className: "mt-8 mb-4 text-3xl font-semibold", ...props, children: children })),
    h3: ({ children, ...props }) => (_jsx("h3", { className: "mt-6 mb-3 text-2xl font-medium", ...props, children: children })),
    p: ({ children, ...props }) => (_jsx("p", { className: "text-muted-foreground text-lg mb-4 leading-7", ...props, children: children })),
    b: ({ children, ...props }) => (_jsx("b", { className: "text-black dark:text-white font-semibold", ...props, children: children })),
    strong: ({ children, ...props }) => (_jsx("strong", { className: "text-black dark:text-white font-semibold", ...props, children: children })),
    ul: ({ children, ...props }) => (_jsx("ul", { className: "mb-4 ml-6 list-disc space-y-2 text-lg", ...props, children: children })),
    ol: ({ children, ...props }) => (_jsx("ol", { className: "mb-4 ml-6 list-decimal space-y-2 text-lg", ...props, children: children })),
    li: ({ children, ...props }) => (_jsx("li", { className: "text-muted-foreground leading-7 text-lg", ...props, children: children })),
    // pre: ({
    //   children,
    //   ...props
    // }: {
    //   children: React.ReactNode;
    //   [key: string]: unknown;
    // }) => {
    //   const getTextContent = (node: React.ReactNode): string => {
    //     if (typeof node === "string") {
    //       return node;
    //     }
    //     if (typeof node === "number") {
    //       return String(node);
    //     }
    //     if (
    //       React.isValidElement(node) &&
    //       node.props &&
    //       typeof node.props === "object"
    //     ) {
    //       return getTextContent(
    //         (node.props as { children?: React.ReactNode }).children,
    //       );
    //     }
    //     if (Array.isArray(node)) {
    //       return node.map(getTextContent).join("");
    //     }
    //     return "";
    //   };
    //   const codeText = getTextContent(children);
    //   return (
    //     <div className="group relative mb-4">
    //       <pre
    //         className="bg-muted/30 overflow-x-auto rounded-lg border p-4 text-sm [&>code]:bg-transparent [&>code]:p-0"
    //         {...props}
    //       >
    //         {children}
    //       </pre>
    //       <CodeCopyButton code={codeText} />
    //     </div>
    //   );
    // },
    // code: ({
    //   children,
    //   className,
    //   ...props
    // }: {
    //   children: React.ReactNode;
    //   className?: string;
    //   [key: string]: unknown;
    // }) => {
    //   if (className?.includes("language-")) {
    //     return (
    //       <code className={className} {...props}>
    //         {children}
    //       </code>
    //     );
    //   }
    //   return (
    //     <code className="rounded px-2 py-1 font-mono text-sm" {...props}>
    //       {children}
    //     </code>
    //   );
    // },
    pre: (props) => _jsx(CodeBlock, { ...props }),
    blockquote: ({ children, ...props }) => (_jsx("blockquote", { className: "border-primary text-muted-foreground mb-4 border-l-4 pl-4 italic", ...props, children: children })),
    // Project-specific components
    Technology,
    TechStack,
    ProjectMeta,
};
