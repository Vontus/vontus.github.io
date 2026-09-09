// Paraglide messages are flat string leaves (no array message type, by
// design — each message compiles to its own tree-shakeable function), so
// list content still has to be rebuilt in code. This module is that single
// place: structural shape (order, urls, which image goes where) lives here
// in code, text comes from `m.*()`, and the views just map over the result.
import { m } from '../paraglide/messages.js';
import homeScreen from '../assets/moone/home.jpg';
import movimientoScreen from '../assets/moone/movimiento.jpg';
import calculadoraScreen from '../assets/moone/calculadora.jpg';
import cuentasScreen from '../assets/moone/cuentas.jpg';

export type HomeProject = {
  nombre: string;
  desc: string;
  tags: string[];
  url?: string;
  source?: string;
  closed?: boolean;
};

/**
 * "What I build" cards on the home page. Structural fields (url, source,
 * closed) are identical regardless of locale; text comes from messages
 * home_project_{i}_nombre / _desc / _tag_{j}.
 */
export function getHomeProjects(): HomeProject[] {
  return [
    {
      nombre: m.home_project_0_nombre(),
      desc: m.home_project_0_desc(),
      tags: [m.home_project_0_tag_0(), m.home_project_0_tag_1()],
      url: 'https://tallermartinez.net',
      source: 'https://github.com/Vontus/tallermartinez.dev',
    },
    {
      nombre: m.home_project_1_nombre(),
      desc: m.home_project_1_desc(),
      tags: [m.home_project_1_tag_0(), m.home_project_1_tag_1(), m.home_project_1_tag_2()],
      closed: true,
    },
    {
      nombre: m.home_project_2_nombre(),
      desc: m.home_project_2_desc(),
      tags: [m.home_project_2_tag_0(), m.home_project_2_tag_1(), m.home_project_2_tag_2()],
      url: '/moone',
      closed: true,
    },
    {
      nombre: m.home_project_3_nombre(),
      desc: m.home_project_3_desc(),
      tags: [m.home_project_3_tag_0(), m.home_project_3_tag_1()],
      url: 'https://vontus.github.io/pinatarius-2026-galeria/',
      source: 'https://github.com/vontus/pinatarius-2026-galeria',
    },
    {
      nombre: m.home_project_4_nombre(),
      desc: m.home_project_4_desc(),
      tags: [m.home_project_4_tag_0(), m.home_project_4_tag_1()],
      url: 'https://t.me/urbandictionarybot',
      source: 'https://github.com/vontus/UrbanDictionaryBot',
    },
  ];
}

/**
 * Moone screenshot gallery. Which image goes in which slot is structural
 * (same in both locales); alt/caption come from messages
 * moone_screen_{i}_alt / _caption.
 */
export function getMooneScreens() {
  return [
    { src: homeScreen, alt: m.moone_screen_0_alt(), caption: m.moone_screen_0_caption() },
    { src: movimientoScreen, alt: m.moone_screen_1_alt(), caption: m.moone_screen_1_caption() },
    { src: calculadoraScreen, alt: m.moone_screen_2_alt(), caption: m.moone_screen_2_caption() },
    { src: cuentasScreen, alt: m.moone_screen_3_alt(), caption: m.moone_screen_3_caption() },
  ];
}

export function getMooneFeatures() {
  return [m.moone_feature_0(), m.moone_feature_1(), m.moone_feature_2(), m.moone_feature_3()];
}
