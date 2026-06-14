import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.ashokgopaloil.com",
  output: "static",
  build: {
    format: "directory"
  }
});
