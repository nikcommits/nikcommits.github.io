import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const productionSite = process.env.PUBLIC_SITE_URL;

export default defineConfig({
  site: productionSite,
  trailingSlash: "never",
  integrations: productionSite ? [sitemap()] : [],
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});
