// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  site: 'https://vontus.dev',
  // Dominio propio (apex) vía CNAME → base en la raíz.
  base: '/',
});
