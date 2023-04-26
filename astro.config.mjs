import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://reading-list.zcip.dev/",
  integrations: [tailwind(), sitemap()],
  trailingSlash: "always",
  markdown: {
    shikiConfig: {
      theme: "github-dark-dimmed",
      langs: [],
      wrap: true,
    },
  },
  experimental: {
    assets: true,
  },
});
