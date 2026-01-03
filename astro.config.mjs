import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

export default defineConfig({
  // base: "/"  // optional; default is fine for user sites
  site: "https://alanp13.github.io",

  integrations: [mdx()]
});