import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
export function Bold({ children, className, }) {
    return (_jsx("strong", { className: cn("font-bold text-foreground tracking-tight", "text-blue-500 dark:text-yellow-300", className), children: children }));
}
