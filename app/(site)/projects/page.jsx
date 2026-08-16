import { ProjectList } from "@/components/projects/project-list";
import { projects } from "@/config/project";

export const metadata = {
  title: "Projects",
  description: "My projects and case studies.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="space-y-8">
        <ProjectList projects={projects} />
      </div>
    </main>
  );
}