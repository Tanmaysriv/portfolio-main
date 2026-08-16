import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { navbarConfig } from "@/config/navbar";
import Image from "next/image";
export default function Logo() {
    return (_jsxs("div", { className: "flex items-center justify-between gap-4", children: [_jsx(Image, { src: navbarConfig.logo.src, alt: navbarConfig.logo.alt, width: navbarConfig.logo.width, height: navbarConfig.logo.height, className: "h-10 w-10 rounded-md border border-gray-200 bg-blue-300 transition-all duration-300 ease-in-out hover:scale-90 dark:bg-yellow-300" }), _jsxs("div", { className: "text-xl font-bold text-black/80 dark:text-white/90", children: ["Vaibhav ", _jsx("span", { className: "text-blue-500 dark:text-yellow-300", children: "Lab's" })] })] }));
}
