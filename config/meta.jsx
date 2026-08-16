import { heroConfig } from "./hero";

export const siteConfig = {
    name: heroConfig.name,
    title: "Tanmay Srivastava | Software Developer",
    description: "I build interactive web applications using Typescript, React, Next.js, Node.js and PostgreSQL. Full Stack developer passionate about solving real-world problems with code.",
    url: process.env.NEXT_PUBLIC_URL || "http://localhost:3000",
    ogImage: "/meta/hero.png",
    author: {
        name: "Tanmay Srivastava",
        twitter: "@tanmaysriv",
        github: "Tanmaysriv",
        linkedin: "tanmaysrivastava888",
        email: "srivastavatanmay888@gmail.com",
    },
    keywords: [
        "software developer","software engineer","Tanmay Srivastava","Java","Python","C++","JavaScript","React","Node.js","Machine Learning","Artificial Intelligence","AR","VR","Three.js","WebXR","DevOps","Cloud","DSA",
    ],
};
export const pageMetadata = {
    "/": {
        title: "Tanmay Srivastava | Software Developer | AI/ML | AR/VR | DevOps",
        description: "Tanmay Srivastava is a Computer Science (AIML) graduate and software developer building web applications, AI/ML systems, AR/VR experiences and exploring DevOps.",
        keywords: [
            "Tanmay Srivastava",
            "software developer",
            "AI/ML",
            "AR/VR",
            "DevOps",
            "portfolio",
        ],
        ogImage: "/meta/hero.png",
        twitterCard: "summary_large_image",
    },
    "/contact": {
        title: "Contact | Tanmay Srivastava",
        description: "Open to software development opportunities, collaborations, AI/ML projects and engineering challenges.",
        keywords: ["contact", "hire", "software developer", "AI/ML"],
        ogImage: "/images/me.png",
        twitterCard: "summary",
    },
    "/resume": {
        title: "Resume | Tanmay Srivastava",
        description: "View and download Tanmay Srivastava's resume and portfolio profile information.",
        keywords: ["resume", "cv", "software developer", "Tanmay Srivastava"],
        ogImage: "/meta/resume.png",
        twitterCard: "summary",
    },
};
export function getPageMetadata(pathname) {
    return pageMetadata[pathname] || pageMetadata["/"];
}
export function generateMetadata(pathname) {
    const pageMeta = getPageMetadata(pathname);
    return {
        metadataBase: new URL(siteConfig.url),
        title: pageMeta.title,
        description: pageMeta.description,
        keywords: pageMeta.keywords?.join(", "),
        authors: [{ name: siteConfig.author.name }],
        creator: siteConfig.author.name,
        openGraph: {
            type: "website",
            url: `${siteConfig.url}${pathname}`,
            title: pageMeta.title,
            description: pageMeta.description,
            siteName: siteConfig.title,
            images: [
                {
                    url: pageMeta.ogImage || siteConfig.ogImage,
                    width: 1200,
                    height: 630,
                    alt: pageMeta.title,
                },
            ],
        },
        twitter: {
            card: pageMeta.twitterCard || "summary_large_image",
            title: pageMeta.title,
            description: pageMeta.description,
            creator: siteConfig.author.twitter,
            images: [pageMeta.ogImage || siteConfig.ogImage],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        alternates: {
            canonical: `${siteConfig.url}${pathname}`,
        },
    };
}
