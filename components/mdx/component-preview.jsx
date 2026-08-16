import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { registryExamples } from "@/registry/index";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
export function ComponentPreview({ name }) {
    const item = registryExamples[name];
    if (!item)
        return null;
    const Component = item.component;
    return (_jsxs(Tabs, { items: ["Preview", "Code"], children: [_jsx(Tab, { value: "Preview", children: _jsx("div", { className: "relative flex min-h-87.5 w-full items-center justify-center p-10", children: _jsx(Component, {}) }) }), _jsx(Tab, { value: "Code", children: _jsx("div", { className: "relative w-full p-2", children: _jsx("div", { className: "overflow-hidden rounded-xl border border-border/40 bg-card/70 shadow-sm", children: _jsx(DynamicCodeBlock, { lang: "tsx", code: item.source, options: {
                                themes: {
                                    light: "github-light",
                                    dark: "github-dark",
                                },
                            } }) }) }) })] }));
}
