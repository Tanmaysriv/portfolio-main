"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { projects } from "@/config/project";
import Link from "next/link";
import Container from "../common/container";
import SectionHeading from "../common/section-heading";
import { ProjectList } from "../projects/project-list";
import { Button } from "../ui/button";
export default function Projects() {
    return (_jsxs(Container, { className: "mt-20", children: [_jsx(SectionHeading, { subHeading: "Featured", heading: "Projects" }), _jsx(ProjectList, { className: "mt-8", projects: projects.slice(0, 4) }), _jsx("div", { className: "mt-8 flex justify-center", children: _jsx(Button, { variant: "outline", children: _jsx(Link, { href: "/projects", children: "Show all projects" }) }) })] }));
}
