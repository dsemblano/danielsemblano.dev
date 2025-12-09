// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
site: 'https://danielsemblano.dev'
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
