import Link from "next/link";
import ArrowLeft from "@/components/svg/ArrowLeft";
import { ProjectDetailMotion } from "@/components/projects/project-detail-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  getProjectCaseStudyBySlug,
  getProjectCaseStudySlugs,
} from "@/lib/project";

export async function generateStaticParams() {
  const slugs = await getProjectCaseStudySlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = await getProjectCaseStudyBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.frontmatter.title} — Project`,
    description: project.frontmatter.description,
  };
}

export default async function ProjectCaseStudyPage({ params }) {
  const { slug } = await params;

  const project = await getProjectCaseStudyBySlug(slug);

  if (!project) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="text-4xl font-bold">Project Not Found</h1>

        <p className="mt-4 text-muted-foreground">
          The project you are looking for does not exist.
        </p>

        <Link href="/projects">
          <Button className="mt-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>
      </main>
    );
  }

  const { frontmatter, content } = project;

  return (
    <ProjectDetailMotion>
    <main className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">

      {/* Back button */}
      <div className="mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
      </div>

      {/* Project Hero */}
      <section className="space-y-8">

        {/* Project Image */}
        {frontmatter.image && (
          <div className="overflow-hidden rounded-2xl border bg-muted">
            <img
              src={frontmatter.image}
              alt={frontmatter.title}
              className="h-auto w-full object-cover"
            />
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2">

          {frontmatter.status && (
            <span className="rounded-full border px-3 py-1 text-sm">
              {frontmatter.status}
            </span>
          )}

          {frontmatter.technologies
            ?.slice(0, 4)
            .map((technology) => (
              <span
                key={technology}
                className="rounded-full border px-3 py-1 text-sm"
              >
                {technology}
              </span>
            ))}

          {frontmatter.technologies?.length > 4 && (
            <span className="rounded-full border px-3 py-1 text-sm">
              +{frontmatter.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Title */}
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            {frontmatter.title}
          </h1>

          <p className="mt-6 text-xl leading-relaxed text-muted-foreground md:text-2xl">
            {frontmatter.description}
          </p>
        </div>

      </section>

      <Separator className="my-12" />

      {/* MDX Content */}
      <article className="prose prose-neutral max-w-4xl dark:prose-invert">
        {content}
      </article>

    </main>
    </ProjectDetailMotion>
  );
}