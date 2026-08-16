import { jsx as _jsx } from "react/jsx-runtime";
export default function Container({ children, className, ...props }) {
    return (_jsx("div", { className: `animate-fade-in-blur container mx-auto max-w-[1200px] px-4 ${className ?? ""}`, ...props, children: children }));
}
