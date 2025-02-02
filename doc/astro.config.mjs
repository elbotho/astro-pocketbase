// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Astro Pocketbase",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Start here",
          items: [
            { label: "Getting Started", slug: "start-here/getting-started" },
            { label: "Manual Setup", slug: "start-here/manual-setup" },
          ],
        },
        {
          label: "Guides",
          items: [
            { label: "Schemas and Types", slug: "guides/schemas-and-types" },
            { label: "Middleware", slug: "guides/middleware" },
            { label: "Loader", slug: "guides/loader" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
