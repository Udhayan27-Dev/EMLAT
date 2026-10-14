import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://udhayan27-dev.github.io',
  base: '/EMLAT',
  output: 'static',
  build: {
    assets: '_assets',
  },
});
