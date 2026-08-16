import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { UserIcon } from "lucide-react";
import Image from "next/image";
const creator = {
    name: "Vaibhav Kesarwani",
    url: "https://github.com/Vaibhav-kesarwani",
    avatar: "/images/me.png",
};
export const Contributor = () => {
    return (_jsx("div", { className: "not-prose mt-6 flex flex-col gap-2", children: _jsxs("div", { className: "flex flex-col gap-2", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(UserIcon, { className: "size-4 text-muted-foreground" }), _jsx("p", { className: "text-muted-foreground text-sm", children: "Created by" })] }), _jsx("div", { className: "pl-3.5", children: creator.url ? (_jsxs("a", { className: "flex items-center gap-2", href: creator.url, rel: "noopener", target: "_blank", children: [creator.avatar ? (_jsx("div", { className: "relative h-6 w-6 overflow-hidden rounded-full border border-border", children: _jsx(Image, { alt: `${creator.name}'s avatar`, className: "object-cover bg-blue-300 dark:bg-yellow-300", height: 24, src: creator.avatar, width: 24 }) })) : (_jsx("div", { className: "flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border border-border bg-muted", children: _jsx(UserIcon, { className: "h-3 w-3 text-muted-foreground" }) })), _jsx("span", { className: "font-normal text-muted-foreground text-sm", children: creator.name })] })) : (_jsxs("div", { className: "flex items-center gap-2", children: [creator.avatar ? (_jsx("div", { className: "relative h-6 w-6 overflow-hidden rounded-full border border-border", children: _jsx(Image, { alt: `${creator.name}'s avatar`, className: "object-cover", height: 24, src: creator.avatar, width: 24 }) })) : (_jsx("div", { className: "flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border border-border bg-muted", children: _jsx(UserIcon, { className: "h-3 w-3 text-muted-foreground" }) })), _jsx("span", { className: "font-light text-muted-foreground text-sm", children: creator.name })] })) })] }) }));
};
