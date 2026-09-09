// Helper compartido por las páginas bajo `src/pages/[...locale]/`: mismo
// getStaticPaths() (ES sin prefijo, EN bajo /en/) y misma resolución de
// locale + setLocale() antes de renderizar, para no repetirlo en cada página.
import { locales, setLocale, type Locale } from '../paraglide/runtime.js';

export function getStaticPaths() {
  return locales.map((locale) => ({
    params: { locale: locale === 'es' ? undefined : locale },
  }));
}

export function setLocaleFromParams(param: string | undefined): Locale {
  const locale: Locale = param === 'en' ? 'en' : 'es';
  setLocale(locale);
  return locale;
}
