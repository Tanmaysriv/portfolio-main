import { jsx as _jsx } from "react/jsx-runtime";
import Github from "@/components/svg/Github";
import LinkedIn from "@/components/svg/LinkedIn";
import Mail from "@/components/svg/Mail";
export const skillComponents = {};
export const heroConfig = {
    name: "Tanmay Srivastava",
    title: "Software Developer | AI/ML | AR/VR | DevOps",
    avatar: "/images/me.png",
    skills: ["Java","Python","JavaScript","React.js","Three.js","Node.js","Machine Learning","TensorFlow","Git","Linux",],
    description: {
        template: "I’m a Computer Science (AIML) graduate and Software Developer passionate about building web applications, AI/ML systems, immersive AR/VR experiences, and exploring DevOps and cloud technologies.",
    },
    buttons: [
        {
            varaiant: "outline",
            text: "Resume",
            href: "/resume",
            icon: "CV",
        },
        {
            varaiant: "default",
            text: "Get in touch",
            href: "/contact",
            icon: "Chat",
        },
    ],
};
export const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/Tanmaysriv",
        icon: _jsx(Github, {}),
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/tanmaysrivastava888/",
        icon: _jsx(LinkedIn, {}),
    },
    {
        name: "LeetCode",
        href: "https://leetcode.com/u/salvatore007/",
        icon: _jsx(CodeIcon, {}),
    },
    {
        name: "Email",
        href: "mailto:srivastavatanmay888@gmail.com",
        icon: _jsx(Mail, {}),
    },
];
function CodeIcon() {
    return (_jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", "aria-label": "LeetCode", className: "size-4", children: _jsx("path", { d: "M8 8.5 4 12l4 3.5M16 8.5 20 12l-4 3.5M14 5l-4 14", strokeLinecap: "round", strokeLinejoin: "round" }) }));
}
