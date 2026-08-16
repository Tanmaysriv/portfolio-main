import { jsx as _jsx } from "react/jsx-runtime";
import Clerk from "@/components/technologies/Clerk";
import NextJs from "@/components/technologies/NextJs";
import PostgreSQL from "@/components/technologies/PostgreSQL";
import Prisma from "@/components/technologies/Prisma";
import ReactIcon from "@/components/technologies/ReactIcon";
import Shadcn from "@/components/technologies/Shadcn";
import Supabase from "@/components/technologies/Supabase";
import TailwindCss from "@/components/technologies/TailwindCss";
import TypeScript from "@/components/technologies/TypeScript";
import Vercel from "@/components/technologies/Vercel";
import ThreeJs from "@/components/technologies/ThreeJs";
import Vite from "@/components/technologies/Vite";
import MediaPipe from "@/components/technologies/MediaPipe";
import TensorFlowJs from "@/components/technologies/TensorFlowJs";
import WebXR from "@/components/technologies/WebXR";
export const projects = [
    {
      id: "arvana",  
      title: "ARVANA",
        image: "/project/arvana/hero.png",
        description: "AR Virtual Try-On and immersive e-commerce platform combining real-time detection, 3D rendering and modern web technologies.",
        link: "https://arvana-pvt.vercel.app/",
        technologies: [
  {
    name: "React",
    icon: <ReactIcon />
  },
  {
    name: "Vite",
    icon: <Vite />
  },
  {
    name: "Tailwind CSS",
    icon: <TailwindCss />
  },
  {
    name: "Three.js",
    icon: <ThreeJs />
  },
  {
    name: "MediaPipe",
    icon: <MediaPipe />
  },
  {
    name: "TensorFlow.js",
    icon: <TensorFlowJs />
  },
  {
    name: "WebXR",
    icon: <WebXR />
  },
  {
    name: "Vercel",
    icon: <Vercel />
  }
],
        github: "https://github.com/Tanmaysriv/ARVANA-pvt",
        details: true,
        projectDetailsPageSlug: "/projects/arvana",
        isWorking: true,
    },
    {
      id: "3d_iphone",  
      title: "3d_iphone",
        image: "/project/3d_iphone/hero.png",

        description: "Interactive React-based e-commerce experience showcasing the iPhone 15 Pro using 3D visualization, animations and modern UI.",
        video: "",
        link: "/projects/3d_iphone",
        technologies: [
  {
    name: "React",
    icon: <ReactIcon />
  },
  {
    name: "Vite",
    icon: <Vite />
  },
  {
    name: "Tailwind CSS",
    icon: <TailwindCss />
  },
  {
    name: "Three.js",
    icon: <ThreeJs />
  },
  {
    name: "WebXR",
    icon: <WebXR />
},{
    name: "Vercel",
    icon: <Vercel />
  }
],
        github: "https://github.com/Tanmaysriv/3d_iphone",
        live: "https://3d-iphone-jet.vercel.app/",
        details: true,
        projectDetailsPageSlug: "/projects/3d_iphone",
        isWorking: true,
    },
    {
      id: "ele-types",
        title: "Ele-Types",
        image: "/project/ele-types/hero.png",
        description: "Typing test application measuring WPM and accuracy with real-time feedback, progress animations, confetti effects and dark mode.",
        link: "/projects/ele-types",
        technologies: [
  {
    name: "React",
    icon: <ReactIcon />
  },
  {
    name: "Vite",
    icon: <Vite />
  },
  {
    name: "Tailwind CSS",
    icon: <TailwindCss />
  },
  {
    name: "Three.js",
    icon: <ThreeJs />
  },
  {
    name: "Vercel",
    icon: <Vercel />
  }
],
        github: "https://github.com/Tanmaysriv/Ele-Types",
        live: "https://ele-types.vercel.app/",
        details: true,
        projectDetailsPageSlug: "/projects/Ele-Types",
        isWorking: true,
    },
];
