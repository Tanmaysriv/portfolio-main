import Hero from "@/components/landing/hero";
import Experience from "@/components/landing/experience";
import Projects from "@/components/landing/project";
import About from "@/components/landing/about";
import Github from "@/components/landing/github";
import Blog from "@/components/landing/blog";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <About />
      <Github />
      <Blog />
    </>
  );
}