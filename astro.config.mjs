// @ts-check
import { defineConfig } from 'astro/config';
import { paraglideVitePlugin } from '@inlang/paraglide-js';

// https://astro.build
export default defineConfig({
  site: 'https://vontus.dev',
  // Dominio propio (apex) vía CNAME → base en la raíz.
  base: '/',
  output: 'static',
  vite: {
    plugins: [
      paraglideVitePlugin({
        project: './project.inlang',
        outdir: './src/paraglide',
        emitTsDeclarations: true,
        strategy: ['url', 'globalVariable', 'baseLocale'],
        urlPatterns: [
          {
            pattern: '/',
            localized: [
              ['en', '/en'],
              ['es', '/'],
            ],
          },
          {
            pattern: '/:path(.*)?',
            localized: [
              ['en', '/en/:path(.*)?'],
              ['es', '/:path(.*)?'],
            ],
          },
        ],
      }),
    ],
  },
});
