# PAGINA WEB ECOLU — Landing Page

Static landing page for the **Ecolu Stair Basket** (bamboo, L-shape, fits the step). Sold on Amazon; contact via WhatsApp +51 934 568 884.

Built from a Claude Design (claude.ai/design) handoff bundle. Tech: plain HTML + CSS, no build step.

## Estructura del proyecto

```
PAGINA WEB ECOLU/
├── index.html              # Página principal (abrir en navegador)
├── listing.css             # Design tokens (variables CSS, tipografía base)
├── landing.css             # Estilos específicos del landing
├── images/                 # Todas las imágenes referenciadas
│   ├── 01-hero.jpg         # Hero + final CTA
│   ├── 02-product.jpg      # Sección "The Idea"
│   ├── 05-dimensions.jpg   # Sección de medidas
│   ├── 06-mom-girl-carry.jpg
│   ├── detail-lid.jpg      # Detalle tapa
│   ├── detail-liner.jpg    # Detalle forro
│   ├── feat-bamboo.jpg     # Highlights 01
│   ├── feat-stairs.jpg     # Highlights 02
│   ├── feat-handles.jpg    # Highlights 03
│   ├── feat-clips.jpg      # Highlights 04
│   └── (otras imágenes sin referenciar disponibles)
├── _handoff/               # Bundle original de Claude Design (NO TOCAR)
└── CLAUDE.md               # Este archivo
```

## Cómo previsualizar

Abrir `index.html` directamente en el navegador. No hay build, no hay dependencias. Las fuentes (Instrument Serif, Manrope, JetBrains Mono) se cargan desde Google Fonts.

```powershell
Start-Process "index.html"
```

## Deploy

El sitio se despliega en **Vercel** conectado al repo de GitHub. Cada push a `main` actualiza la URL pública automáticamente.

## Design tokens (definidos en `listing.css`)

| Token | Valor | Uso |
|---|---|---|
| `--forest-900` | `#14271d` | Títulos sobre claro |
| `--forest-800` | `#1f3a2c` | Botón primario, nav CTA, footer |
| `--forest-700` | `#2d4a35` | — |
| `--moss-500` | `#5a7a4f` | Hoja del logo (claro) |
| `--moss-300` | `#9bb088` | Hoja del logo (oscuro) |
| `--cream-100` | `#fbf8ee` | Fondo de secciones cream |
| `--cream-200` | `#f4ecd6` | Fondo de iconos, avatares |
| `--bamboo-500` | `#c9a86b` | Acentos (estrellas, dots) |
| `--bamboo-600` | `#a8884d` | Énfasis itálico en títulos |
| `--ink-900` | `#14180f` | Texto principal |
| `--ink-700` | `#2a2e25` | Texto secundario |
| `--ink-500` | `#5a5e51` | Eyebrows, captions |
| `--paper` | `#fffdf7` | Fondo base |
| `--line` | `rgba(20,24,15,0.12)` | Bordes sutiles |

## Tipografía

- **Instrument Serif** — Titulares (H1, H2, números grandes, blockquotes)
- **Manrope** — Body, navegación, botones
- **JetBrains Mono** — Eyebrows, captions, etiquetas técnicas

## Enlaces externos importantes

- **Producto en Amazon**: https://www.amazon.com/Ecolu-Stair-Carpeted-Staircase-Organizer/dp/B0FHFTBHWV/
- **WhatsApp**: +51 934 568 884 (`https://wa.me/51934568884`)
- **Email**: hello@ecolu-home.com
- **Diseño original (Claude Design)**: https://api.anthropic.com/v1/design/h/FrUula8bHOcQj1bKp5SZRg

## Secciones del landing (en orden)

1. **Nav** — sticky, con CTA a Amazon
2. **Hero** — H1 "Storage that fits the step", stats (4.8★, 60s, 3.5 lb), tags flotantes
3. **Trust strip** — banda verde con reviews/shipping
4. **Highlights** (4 cards) — bamboo, stairs, handles, clips
5. **The Idea** — explicación de la forma en L (1 imagen + 3 pasos)
6. **Uses** (4 cards) — books, shoes, laundry, toys
7. **Details** — 3 filas alternas (liner, lid, handles)
8. **Dimensions** — tabla de specs + foto técnica
9. **Setup** — 6 pasos para armar
10. **Sustainability** — sección verde oscuro (FSC, bamboo, packaging)
11. **Reviews** — 3 testimonios
12. **FAQ** — 6 preguntas (`<details>` nativos)
13. **Final CTA** — repite el botón de Amazon
14. **Footer** — verde oscuro con links y contacto WhatsApp
15. **WhatsApp FAB** — botón flotante bottom-right

## Convenciones

- No usar build tools — todo es HTML/CSS plano.
- Las imágenes ya están con filtro `contrast(1.06) saturate(1.12) brightness(1.02)` aplicado vía CSS (`.eco-photo-fix`). No re-procesar las imágenes.
- Para añadir secciones nuevas, reutilizar las clases existentes (`.section`, `.section-cream`, `.eyebrow`, `.section-title`, `.section-lead`).
- Responsive: breakpoints en 920px y 600px (definidos en `landing.css`).
- El handoff original vive en `_handoff/` — no modificar; es la fuente de verdad si hay que rehacer algo.
