// @ts-check
import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // site: "https://github.io",
  site: "https://chiicglowstore.aditsweb.in",
  // base: "/store-starter",
  base: "",
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [icon(), alpinejs({ entrypoint: "/src/scripts/alpine" })],
});
