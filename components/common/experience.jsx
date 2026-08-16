import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { experiences } from "@/config/experience";
import ExperienceCard from "../experience/experience-card";
import { Button } from "../ui/button";
import Container from "./container";
import SectionHeading from "./section-heading";
import Link from "next/link";
export default function Experience() {
    return (_jsxs(Container, { className: "mt-20", children: [_jsx(SectionHeading, { subHeading: "Featured", heading: "Experience" }), _jsx("div", { className: "mt-4 flex flex-col gap-8", children: experiences.slice(0, 2).map((experience, idx) => {
                    return _jsx(ExperienceCard, { experience: experience }, idx);
                }) }), _jsx("div", { className: "mt-8 flex justify-center", children: _jsx(Button, { variant: "outline", children: _jsx(Link, { href: "/work-experience", children: "Show all work experiences" }) }) })] }));
}
