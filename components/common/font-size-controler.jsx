"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useHapticFeedback } from "@/hooks/use-haptic-feedback";
import { Minus, Plus, Settings } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger, } from "../ui/drawer";
export default function FontSizeControls() {
    const [fontSize, setFontSize] = useState(16);
    const { triggerHaptic, isMobile } = useHapticFeedback();
    // Load font size from localStorage on mount
    useEffect(() => {
        const savedFontSize = localStorage.getItem("blog-font-size");
        if (savedFontSize) {
            const size = parseInt(savedFontSize, 10);
            setFontSize(size);
            // eslint-disable-next-line react-hooks/immutability
            applyFontSize(size);
        }
    }, []);
    // Apply font size to the document
    const applyFontSize = (size) => {
        if (typeof window !== "undefined") {
            document.documentElement.style.setProperty("--blog-font-size", `${size}px`);
        }
    };
    // Save to localStorage and apply
    const updateFontSize = (newSize) => {
        const clampedSize = Math.max(12, Math.min(24, newSize));
        setFontSize(clampedSize);
        applyFontSize(clampedSize);
        localStorage.setItem("blog-font-size", clampedSize.toString());
    };
    const handleIncrease = () => {
        if (isMobile()) {
            triggerHaptic("light");
        }
        updateFontSize(fontSize + 2);
    };
    const handleDecrease = () => {
        if (isMobile()) {
            triggerHaptic("light");
        }
        updateFontSize(fontSize - 2);
    };
    const handleReset = () => {
        if (isMobile()) {
            triggerHaptic("medium");
        }
        updateFontSize(16);
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "md:hidden", children: _jsxs(Drawer, { children: [_jsx(DrawerTrigger, { asChild: true, children: _jsx(Button, { variant: "outline", size: "sm", className: "bg-background/95 border-border hover:bg-accent fixed bottom-4 left-4 z-50 h-12 w-12 rounded-full border shadow-lg backdrop-blur-sm", "aria-label": "Open font size controls", children: _jsx(Settings, { size: 20 }) }) }), _jsxs(DrawerContent, { className: "max-h-[60vh]", children: [_jsx(DrawerHeader, { className: "text-center", children: _jsx(DrawerTitle, { children: "Font Size Controls" }) }), _jsx("div", { className: "px-4 pb-6", children: _jsxs("div", { className: "flex flex-col items-center gap-6", children: [_jsxs("div", { className: "text-center", children: [_jsxs("div", { className: "text-foreground mb-2 font-mono text-3xl font-bold", children: [fontSize, "px"] }), _jsx("div", { className: "text-muted-foreground text-sm", children: "Current font size" })] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Button, { variant: "outline", size: "lg", onClick: handleDecrease, disabled: fontSize <= 12, className: "h-12 w-12 p-0", "aria-label": "Decrease font size", children: _jsx(Minus, { size: 20 }) }), _jsx(Button, { variant: "outline", size: "lg", onClick: handleReset, className: "hover:bg-accent h-12 px-4 font-mono text-sm whitespace-nowrap", "aria-label": "Reset font size", children: "Reset" }), _jsx(Button, { variant: "outline", size: "lg", onClick: handleIncrease, disabled: fontSize >= 24, className: "h-12 w-12 p-0", "aria-label": "Increase font size", children: _jsx(Plus, { size: 20 }) })] }), _jsxs("div", { className: "w-full max-w-xs", children: [_jsxs("div", { className: "text-muted-foreground mb-2 flex justify-between text-xs", children: [_jsx("span", { children: "12px" }), _jsx("span", { children: "24px" })] }), _jsx("div", { className: "bg-muted h-2 w-full rounded-full", children: _jsx("div", { className: "bg-primary h-2 rounded-full transition-all duration-300", style: {
                                                                width: `${((fontSize - 12) / (24 - 12)) * 100}%`,
                                                            } }) })] })] }) })] })] }) }), _jsx("div", { className: "fixed top-1/2 right-6 z-50 hidden -translate-y-1/2 md:flex", children: _jsx("div", { className: "bg-background/95 border-border rounded-lg border p-2 shadow-lg backdrop-blur-sm", children: _jsx("div", { className: "flex flex-col items-center gap-3", children: _jsxs("div", { className: "flex flex-col items-center gap-2", children: [_jsx(Button, { variant: "outline", size: "sm", onClick: handleIncrease, disabled: fontSize >= 24, className: "h-8 w-8 p-0", "aria-label": "Increase font size", children: _jsx(Plus, { size: 14 }) }), _jsxs(Button, { variant: "ghost", size: "sm", onClick: handleReset, className: "hover:bg-accent h-10 px-1 font-mono text-xs whitespace-nowrap", "aria-label": "Reset font size", children: [fontSize, "px"] }), _jsx(Button, { variant: "outline", size: "sm", onClick: handleDecrease, disabled: fontSize <= 12, className: "h-8 w-8 p-0", "aria-label": "Decrease font size", children: _jsx(Minus, { size: 14 }) })] }) }) }) })] }));
}
