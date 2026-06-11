# vontus.dev

Web personal / taller de software de Alberto Martínez (`vontus`).
Sitio estático en **Astro**, desplegado en **GitHub Pages** con dominio propio
`vontus.dev`.

## Desarrollo

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # genera dist/
pnpm preview    # sirve dist/ en local
```

## Estructura

```
src/
  layouts/Base.astro     cabecera + pie + <head> comunes
  pages/
    index.astro          landing + proyectos
    contacto.astro       correos (general y legal)
  styles/global.css      diseño (paleta cálida, serif)
public/
  CNAME                  dominio propio para GitHub Pages
  favicon.svg
```

## Pendiente antes de publicar

- [ ] Registrar `vontus.dev` y apuntar el DNS (Cloudflare).
- [ ] Configurar Email Routing: `hola@` y `legal@` → Gmail.
- [ ] En el repo de GitHub: Settings → Pages → Source = GitHub Actions.
- [ ] Añadir el dominio propio en Settings → Pages y activar HTTPS.

## Despliegue

`git push` a `main` dispara el workflow `.github/workflows/deploy.yml`.
