import { projects } from "fumadocs-mdx:collections/server";
import { toFumadocsSource } from "fumadocs-mdx/runtime/server";
import { loader } from "fumadocs-core/source";

export const projectSource = loader({
  baseUrl: "/projects",
  source: toFumadocsSource(projects, []),
});