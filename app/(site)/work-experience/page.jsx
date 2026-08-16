import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Container from '@/components/common/container';
import ExperienceList from '@/components/experience/experience-list';
import { Separator } from '@/components/ui/separator';
import  experiences  from '@/config/experience';
import { generateMetadata as getMetadata } from '@/config/meta';
export const metadata = {
    ...getMetadata('/work-experience'),
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};
export default function WorkExperiencePage() {
    return (_jsx(Container, { className: "py-16", children: _jsxs("div", { className: "space-y-8", children: [_jsxs("div", { className: "space-y-4 text-center", children: [_jsx("h1", { className: "text-4xl font-bold tracking-tight lg:text-5xl", children: "Work Experience" }), _jsx("p", { className: "text-muted-foreground mx-auto max-w-2xl text-lg", children: "My work experiences across different companies and roles." })] }), _jsx(Separator, {}), _jsxs("div", { className: "space-y-6", children: [_jsx("div", { className: "flex items-center justify-between", children: _jsxs("h2", { className: "text-2xl font-semibold", children: ["All Experiences", experiences.length > 0 && (_jsxs("span", { className: "text-muted-foreground ml-2 text-sm font-normal", children: ["(", experiences.length, ' ', experiences.length === 1 ? 'experience' : 'experiences', ")"] }))] }) }), _jsx(ExperienceList, { experiences: experiences })] })] }) }));
}
