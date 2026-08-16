import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip";
import { heroConfig, skillComponents, socialLinks } from "@/config/hero";
import { parseTemplate } from "@/lib/hero";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Container from "../common/container";
import Skill from "../common/skill";
import CV from "../svg/CV";
import Chat from "../svg/Chat";
import { Button } from "../ui/button";
import Link from "next/link";
const buttonIcons = {
    CV: CV,
    Chat: Chat,
};
export default function Hero() {
    const { avatar, name, title, description, skills, buttons } = heroConfig;
    const renderDescription = () => {
        const parts = parseTemplate(description.template, skills);
        return parts.map((part) => {
            if (part.type === "skill" && "skill" in part && part.skill) {
                const SkillComponent = part.skill.component &&
                    skillComponents[part.skill.component];
                if (SkillComponent) {
                    return (_jsx(Skill, { name: part.skill.name, href: part.skill.href, children: _jsx(SkillComponent, {}) }, part.key));
                }
                return (_jsx("a", { href: part.skill.href, className: "text-primary underline underline-offset-4", children: part.skill.name }, part.key));
            }
            else if (part.type === "bold" && "text" in part) {
                return (_jsx("b", { className: "text-primary whitespace-pre-wrap", children: part.text }, part.key));
            }
            else if (part.type === "text" && "text" in part) {
                return (_jsx("span", { className: "whitespace-pre-wrap", children: part.text }, part.key));
            }
            return null;
        });
    };
    return (_jsxs(Container, { className: "mx-auto max-w-5xl", children: [_jsx(Image, { src: avatar, alt: "hero", width: 100, height: 100, className: "bg-blue-300 dark:bg-yellow-300 size-24 rounded-full" }), _jsxs("div", { className: "mt-8 flex flex-col gap-2", children: [_jsxs("h1", { className: "text-4xl font-bold", children: ["Hi, I'm ", name, " - ", _jsx("span", { className: "text-secondary", children: title })] }), _jsx("div", { className: "mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2 text-base whitespace-pre-wrap text-neutral-500 md:text-lg", children: renderDescription() })] }), _jsx("div", { className: "mt-8 flex gap-4", children: buttons.map((button, idx) => {
                    const Icon = buttonIcons[button.icon];
                    return (_jsx(Link, { href: button.href, children: _jsxs(Button, { variant: button.varaiant, className: cn(button.varaiant === "outline" && "inset-shadow-indigo-500", button.varaiant === "default" && "inset-shadow-indigo-500", "cursor-pointer"), children: [Icon && _jsx(Icon, {}), button.text] }) }, idx));
                }) }), _jsx("div", { className: "mt-8 flex gap-2", children: _jsx(TooltipProvider, { delayDuration: 0, children: socialLinks.map((link, idx) => (_jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { asChild: true, children: _jsx(Link, { href: link.href, className: "text-secondary flex items-center gap-2", children: _jsx("span", { className: "size-6", children: link.icon }) }) }), _jsx(TooltipContent, { side: "top", sideOffset: 6, className: "z-50 bg-white text-black px-3 py-1 text-xs rounded shadow", children: link.name })] }, idx))) }) })] }));
}
