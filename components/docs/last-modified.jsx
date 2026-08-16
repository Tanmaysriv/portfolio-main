import { jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
export function LastModified({ lastModified, className }) {
    const date = new Date(lastModified);
    const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return (_jsxs("p", { className: cn("text-foreground/70 text-sm", className), children: ["Last updated: ", formattedDate] }));
}
