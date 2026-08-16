import { jsx as _jsx } from "react/jsx-runtime";
import ExperienceCard from "./experience-card";
export default function ExperienceList({ experiences }) {
    if (experiences.length === 0) {
        return (_jsx("div", { className: "py-8 text-center", children: _jsx("p", { className: "text-muted-foreground", children: "No work experiences found." }) }));
    }
    return (_jsx("div", { className: "flex flex-col gap-8", children: experiences.map((experience) => (_jsx(ExperienceCard, { experience: experience }, experience.company))) }));
}
