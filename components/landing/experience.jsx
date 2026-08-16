import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import  experiences  from "@/config/experience";
import Link from "next/link";
import Container from "../common/container";
import SectionHeading from "../common/section-heading";
import ExperienceList from "../experience/experience-list";
import { Button } from "../ui/button";

export default function Experience() {
    return (_jsxs(Container, { 
        className: "mt-20", 
        children: [
            _jsx(SectionHeading, { subHeading: "Featured", heading: "Experience" }), 
            _jsx(ExperienceList, { experiences: experiences.slice(0, 3) }), 
            _jsx("div", { 
                className: "mt-8 flex justify-center", 
                children: _jsx(Button, { 
                    variant: "outline", 
                    children: _jsx(Link, { 
                        href: "/work-experience", 
                        children: "Show all work experiences" 
                    }) 
                }) 
            })
        ] 
    }));
}
