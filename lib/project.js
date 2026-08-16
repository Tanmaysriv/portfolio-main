import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(
  process.cwd(),
  "content",
  "projects"
);

/**
 * Get all available project slugs.
 */
export function getProjectCaseStudySlugs() {
  if (!fs.existsSync(projectsDirectory)) {
    console.error("Projects directory not found:", projectsDirectory);
    return [];
  }

  return fs
    .readdirSync(projectsDirectory)
    .filter((file) => file.toLowerCase().endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/i, ""));
}

/**
 * Get a project by slug.
 *
 * Matching is case-insensitive so:
 * /projects/ele-types
 * /projects/Ele-Types
 * /projects/ELE-TYPES
 *
 * all resolve to ele-types.mdx.
 */
export function getProjectCaseStudyBySlug(slug) {
  try {
    if (!slug) {
      console.error("No project slug provided");
      return null;
    }

    const normalizedSlug = String(slug).trim().toLowerCase();

    const files = getProjectCaseStudySlugs();

    const matchingSlug = files.find(
      (fileSlug) => fileSlug.toLowerCase() === normalizedSlug
    );

    if (!matchingSlug) {
      console.error(
        `Project not found for slug "${slug}". Available projects:`,
        files
      );
      return null;
    }

    const filePath = path.join(
      projectsDirectory,
      `${matchingSlug}.mdx`
    );

    console.log("Loading project:", filePath);

    if (!fs.existsSync(filePath)) {
      console.error("Project MDX file not found:", filePath);
      return null;
    }

    const source = fs.readFileSync(filePath, "utf8");

    const { data, content } = matter(source);

    if (!data.title || !data.description) {
      console.error(
        `Invalid frontmatter in ${matchingSlug}.mdx`
      );
      return null;
    }

    return {
      slug: matchingSlug,
      frontmatter: data,
      content,
    };
  } catch (error) {
    console.error(`Error reading project "${slug}":`, error);
    return null;
  }
}

/**
 * Get projects for navigation.
 */
export function getProjectCaseStudySlugsForNavigation() {
  return getProjectCaseStudySlugs();
}