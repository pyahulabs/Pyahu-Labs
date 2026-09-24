# Pyahu Labs — sitio web

Sitio de **pyahulabs.com**: portfolio + todos los proyectos navegables.

| Ruta | Proyecto |
|---|---|
| `/` | Portfolio de Pyahu Labs |
| `/sgt-peppers/` | Sgt. Pepper's (proyecto real) — landing |
| `/kuarahy-tech/` | Kuarahy Tech — tienda online (`/kuarahy-tech/panel.html` = panel del dueño) |
| `/poty/` | Poty — catálogo + pedidos por WhatsApp |
| `/mesa-guaira/` | Mesa Guairá — reservas |
| `/vera-studio/` | Verá Studio — turnos |
| `/cafe-kaa/` | Café Ka'a — landing (`/cafe-kaa/google.html` = caso Presencia en Google) |
| `/odontologia-benitez/` | Odontología Benítez — sitio institucional |

## Publicar
Cloudflare Pages → Conectar a Git → este repo, rama `main`, **sin comando de build**, carpeta de salida `/`.

## Cambiar el número de WhatsApp
- Portfolio: bloque `CONFIG` al final de `index.html`.
- Demos: constante `WHATSAPP` en cada `index.html` (Kuarahy: `kuarahy-tech/data.js`).

Repo privado. © Pyahu Labs.
