// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: "https://github.io",
  base: "/store-starter",
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [icon()],
});