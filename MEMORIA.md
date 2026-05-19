# 📋 MEMORIA — Ecolu Stair Basket Landing

> Resumen de TODO lo importante del proyecto. Si abres este archivo, tienes el panorama completo en 1 minuto.
> Última actualización: 2026-05-18

---

## 🌐 URLs principales

| Qué | URL |
|---|---|
| **Sitio en vivo** | https://ecolu-home.vercel.app/ |
| **Repo de código (GitHub)** | https://github.com/altamiranoluisen-stack/ECOLU-HOME |
| **Dashboard Vercel** | https://vercel.com/dashboard |
| **Producto en Amazon** | https://www.amazon.com/Ecolu-Stair-Carpeted-Staircase-Organizer/dp/B0FHFTBHWV/ |
| **Diseño original (Claude Design)** | https://api.anthropic.com/v1/design/h/FrUula8bHOcQj1bKp5SZRg |

## 📞 Contacto del negocio (mostrado en el landing)

- **WhatsApp**: +51 934 568 884 → link: `https://wa.me/51934568884`
- **Email**: hello@ecolu-home.com
- **Negocio**: Ecolu Home Goods (Perú)

## 🔑 Cuentas

| Servicio | Usuario | Plan |
|---|---|---|
| GitHub | `altamiranoluisen-stack` | Free |
| Vercel | (vinculado vía GitHub) | Hobby (gratis) |

---

## 🚀 Cómo actualizar el sitio

**Flujo automático**: cualquier cambio que guardes en esta carpeta + push a GitHub = el sitio se actualiza solo en ~30 seg.

### Si Claude está editando contigo
Solo dile qué quieres cambiar (ej. "cambia el precio a $19.99", "reemplaza la foto del hero"). Él edita, hace commit y push. Listo.

### Si quieres hacerlo a mano desde PowerShell
```powershell
cd "C:\Users\LUIS ALTAMIRANO\OneDrive\Documentos\PAGINA WEB ECOLU"
git add .
git commit -m "describe el cambio aquí"
git push
```

---

## 📁 Qué archivo cambia qué cosa

| Quieres cambiar... | Archivo a editar |
|---|---|
| Textos, títulos, descripciones, precio | `index.html` |
| Una foto | reemplazar archivo en `images/` con el MISMO nombre |
| Colores, tamaños, espaciados | `landing.css` (estilos del landing) o `listing.css` (tokens base) |
| Agregar/quitar secciones | `index.html` |
| Número de WhatsApp | `index.html` (buscar `934568884`) y este `MEMORIA.md` |
| Link de Amazon | `index.html` (buscar `amazon.com`) |

## 🗂️ Estructura de la carpeta

```
PAGINA WEB ECOLU/
├── index.html         ← La página web (lo que ve el visitante)
├── landing.css        ← Estilos específicos del landing
├── listing.css        ← Design tokens (colores, fuentes base)
├── images/            ← Todas las fotos del sitio
├── _handoff/          ← Diseño original de Claude Design (NO TOCAR — respaldo)
├── CLAUDE.md          ← Instrucciones técnicas para Claude
├── MEMORIA.md         ← Este archivo
├── .gitignore         ← Configuración (no tocar)
└── .vercelignore      ← Configuración (no tocar)
```

> Los archivos `CLAUDE.md`, `MEMORIA.md` y la carpeta `_handoff/` **NO se publican** en el sitio web — solo viven en tu carpeta y en GitHub como respaldo.

---

## 🎨 Identidad visual (paleta de colores)

| Color | Código | Uso |
|---|---|---|
| 🟩 Verde oscuro (forest) | `#1f3a2c` | Botones principales, footer |
| 🟢 Verde musgo (moss) | `#5a7a4f` | Hoja del logo |
| 🟨 Crema (paper) | `#fffdf7` | Fondo de la página |
| 🟫 Bambú dorado | `#c9a86b` | Acentos (estrellas, dots) |
| ⬛ Tinta (ink) | `#14180f` | Texto principal |

**Fuentes**: Instrument Serif (títulos), Manrope (texto), JetBrains Mono (etiquetas) — todas de Google Fonts.

---

## 📐 Secciones del landing (orden)

1. **Nav** sticky con botón a Amazon
2. **Hero** — "Storage that fits the step"
3. **Trust strip** — reviews + envío
4. **Highlights** (4 cards) — bamboo, stairs, handles, clips
5. **The Idea** — explicación forma en L
6. **Uses** (4 cards) — books, shoes, laundry, toys
7. **Details** — liner, lid, handles
8. **Dimensions** — tabla de medidas
9. **Setup** — 6 pasos para armar
10. **Sustainability** — sección verde oscuro
11. **Reviews** — 3 testimonios
12. **FAQ** — 6 preguntas
13. **Final CTA** — botón Amazon
14. **Footer** — verde oscuro
15. **WhatsApp FAB** — botón flotante

---

## ⚙️ Datos técnicos

- **Tipo**: sitio estático (HTML + CSS plano, sin build, sin dependencias)
- **Hosting**: Vercel — plan Hobby (gratis), 100 GB tráfico/mes, HTTPS automático
- **Repo**: público en GitHub, branch `main`
- **Deploy automático**: cada `git push` al branch `main` dispara redeploy en Vercel (~30 seg)
- **Identidad git local**: `Luis Altamirano <altamiranoluisen@gmail.com>`
- **Responsive**: breakpoints en 920px y 600px

---

## ✅ Estado actual del proyecto

- [x] Landing diseñado desde handoff de Claude Design
- [x] HTML/CSS implementado y probado local
- [x] Repo creado en GitHub
- [x] Deploy hecho en Vercel
- [x] URL pública funcionando: https://ecolu-home.vercel.app/
- [ ] Dominio propio (ej. ecolu-home.com) — pendiente cuando se quiera
- [ ] Analítica / tracking de visitas — pendiente si interesa

---

## 💡 Próximos pasos sugeridos (cuando quieras)

1. **Conectar dominio propio** — comprar `ecolu-home.com` y apuntarlo a Vercel (configuración: ~10 min)
2. **Agregar analítica gratis** — Vercel Analytics o Google Analytics para ver cuánta gente entra
3. **SEO básico** — agregar meta tags de Open Graph (preview cuando comparten en WhatsApp/redes)
4. **Más idiomas** — versión en español del landing si quieres apuntar al mercado latino

---

> Este archivo es para tu referencia. Si Claude cambia algo importante en el proyecto, debe actualizar también este archivo.
