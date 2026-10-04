import { defineConfig } from "astro/config";
import relativeLinks from "astro-relative-links";

export default defineConfig({
  site: process.env.URL,
  integrations: [relativeLinks()],
});
