import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "content", "projects");

export function getProjectCaseStudySlugs() {
  if (!fs.existsSync(projectsDirectory)) {
    console.error("Projects directory not found:", projectsDirectory);
    return [];
  }

  return fs
    .readdirSync(projectsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getProjectCaseStudyBySlug(slug) {
  try {
    const filePath = path.join(projectsDirectory, `${slug}.mdx`);

    console.log("Looking for project:", filePath);

    if (!fs.existsSync(filePath)) {
      console.error("Project MDX file not found:", filePath);
      return null;
    }

    const source = fs.readFileSync(filePath, "utf8");

    const { data, content } = matter(source);

    if (!data.title || !data.description) {
      console.error(`Invalid frontmatter in ${slug}.mdx`);
      return null;
    }

    return {
      slug,
      frontmatter: data,
      content,
    };
  } catch (error) {
    console.error(`Error reading project ${slug}:`, error);
    return null;
  }
}

export function getProjectCaseStudySlugsForNavigation() {
  return getProjectCaseStudySlugs();
}