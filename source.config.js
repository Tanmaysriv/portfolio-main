import { rehypeCodeDefaultOptions } from "fumadocs-core/mdx-plugins";
import { defineCollections, defineConfig, defineDocs } from "fumadocs-mdx/config";
import lastModified from "fumadocs-mdx/plugins/last-modified";
import { transformerTwoslash } from "fumadocs-twoslash";
export const docs = defineDocs({
  dir: "content/docs",
});

export const projects = defineCollections({
  type: "doc",
  dir: "content/projects",
});

export default defineConfig({
  plugins: [lastModified()],
  mdxOptions: {
    remarkCodeTabOptions: {
      parseMdx: true,
    },

    rehypeCodeOptions: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },

      transformers: [
        ...(rehypeCodeDefaultOptions.transformers ?? []),
        transformerTwoslash(),
      ],

      langs: ["js", "jsx", "ts", "tsx"],
    },
  },
});