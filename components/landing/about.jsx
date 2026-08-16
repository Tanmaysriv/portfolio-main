import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { about, mySkills } from "@/config/about";
import Container from "../common/container";
import SectionHeading from "../common/section-heading";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
export default function About() {
    return (_jsxs(Container, { className: "mt-20", children: [_jsx(SectionHeading, { subHeading: "About", heading: "Me" }), _jsxs("div", { className: "mt-8 flex flex-col gap-4 md:flex-row md:items-center", children: [_jsx(Image, { src: "/images/me.png", alt: "About", width: 100, height: 100, className: "border-secondary size-60 rounded-md border-2 bg-blue-300 dark:bg-yellow-300" }), _jsxs("div", { className: "mt-4 md:mt-0", children: [_jsx("h3", { className: "text-2xl font-bold", children: about.name }), _jsx("p", { className: "text-secondary mt-4", children: about.description }), _jsx("p", { className: "text-secondary mt-8 font-bold", children: "Skills" }), _jsx("div", { className: "flex flex-wrap gap-2", children: mySkills.map((skill) => (_jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { asChild: true, children: _jsx("div", { className: "mt-4 size-6 hover:cursor-pointer", children: skill }) }), _jsx(TooltipContent, { children: skill.key })] }, skill.key))) })] })] })] }));
}
