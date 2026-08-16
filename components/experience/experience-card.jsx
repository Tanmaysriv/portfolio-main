import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import Skill from "../common/skill";
import Github from "../svg/Github";
import LinkedIn from "../svg/LinkedIn";
import Website from "../svg/Website";
import X from "../svg/X";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
const parseDescription = (text) => {
    return text.replace(/\*(.*?)\*/g, "<b>$1</b>");
};
export default function ExperienceCard({ experience }) {
    return (_jsx("div", { children: _jsxs("div", { className: "flex flex-col gap-4", children: [_jsxs("div", { className: "flex flex-col gap-2 md:flex-row md:justify-between", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Image, { src: experience.image, alt: experience.company, width: 100, height: 100, className: "size-12 rounded-md" }), _jsxs("div", { className: "flex flex-col", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("h3", { className: cn("text-lg font-bold", experience.isBlur ? "blur-[5px]" : "blur-none"), children: experience.company }), experience.website && (_jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { asChild: true, children: _jsx(Link, { href: experience.website, target: "_blank", className: "size-4 text-neutral-500", children: _jsx(Website, {}) }) }), _jsx(TooltipContent, { children: "Visit Website" })] })), experience.x && (_jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { asChild: true, children: _jsx(Link, { href: experience.x, target: "_blank", className: "size-4 text-neutral-500", children: _jsx(X, {}) }) }), _jsx(TooltipContent, { children: "Follow on X" })] })), experience.linkedin && (_jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { asChild: true, children: _jsx(Link, { href: experience.linkedin, target: "_blank", className: "size-4 text-neutral-500", children: _jsx(LinkedIn, {}) }) }), _jsx(TooltipContent, { children: "Connect on LinkedIn" })] })), experience.github && (_jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { asChild: true, children: _jsx(Link, { href: experience.github, target: "_blank", className: "size-4 text-neutral-500", children: _jsx(Github, {}) }) }), _jsx(TooltipContent, { children: "View GitHub" })] })), experience.isCurrent && (_jsxs("div", { className: "flex items-center gap-1 rounded-md border-green-300 bg-green-500/10 px-2 py-1 text-xs", children: [_jsx("div", { className: "size-2 animate-pulse rounded-full bg-green-500" }), "Working"] }))] }), _jsx("p", { children: experience.position })] })] }), _jsxs("div", { className: "text-secondary flex flex-col md:text-right", children: [_jsxs("p", { children: [experience.startDate, " -", " ", experience.isCurrent ? "Present" : experience.endDate] }), _jsx("p", { children: experience.location })] })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-md mt-4 mb-2 font-semibold", children: "Technologies" }), _jsx("div", { className: "flex flex-wrap gap-2", children: experience.technologies.map((technology, techIndex) => (_jsx(Skill, { name: technology.name, href: technology.href, children: technology.icon }, techIndex))) })] }), _jsx("div", { className: "text-secondary flex flex-col", children: experience.description.map((description, descIndex) => (_jsx("p", { dangerouslySetInnerHTML: {
                            __html: `• ${parseDescription(description)}`,
                        } }, descIndex))) })] }) }));
}
