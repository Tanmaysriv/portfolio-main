import { jsx as _jsx } from "react/jsx-runtime";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { registryExamples } from "@/registry/index";
export default function ComponentSource({ name }) {
    const item = registryExamples[name];
    if (!item)
        return null;
    return (_jsx("div", { className: "relative w-full p-2", children: _jsx("div", { className: "overflow-hidden rounded-xl border border-border/40 bg-card/70 shadow-sm", children: _jsx(DynamicCodeBlock, { lang: "tsx", code: item.source, options: {
                    themes: {
                        light: "github-light",
                        dark: "github-dark",
                    },
                } }) }) }));
}
