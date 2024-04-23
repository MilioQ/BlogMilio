import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import expressiveCode from "astro-expressive-code";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [preact(), expressiveCode(), tailwind()]
});