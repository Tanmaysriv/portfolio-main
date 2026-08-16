import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Container from '@/components/common/container';
import ContactForm from '@/components/contact/contact-form';
import { Separator } from '@/components/ui/separator';
import { contactConfig } from '@/config/contact';
import { generateMetadata as getMetadata } from '@/config/meta';
import React from 'react';
export const metadata = {
    ...getMetadata('/contact'),
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
export default function ContactPage() {
    return (_jsx(Container, { className: "py-16", children: _jsxs("div", { className: "space-y-8", children: [_jsxs("div", { className: "space-y-4 text-center", children: [_jsx("h1", { className: "text-4xl font-bold tracking-tight lg:text-5xl", children: contactConfig.title }), _jsx("p", { className: "text-muted-foreground mx-auto max-w-2xl text-lg", children: contactConfig.description })] }), _jsx(Separator, {}), _jsx("div", { className: "mx-auto max-w-2xl", children: _jsx(ContactForm, {}) })] }) }));
}
