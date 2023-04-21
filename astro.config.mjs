import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://reading-list.zcip.dev",
  integrations: [tailwind()],
  markdown: {
    shikiConfig: {
      theme: "github-dark-dimmed",
      langs: [],
      wrap: true,
    },
  },
});
