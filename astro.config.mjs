import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://paweljureczko.github.io',
  base: '/Barber',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
