# BuyByIA

Asistente de compras con IA (prototipo con datos de ejemplo). Next.js (App Router) + TypeScript.

## Qué incluye
- Prototipo interactivo en la página de inicio (sectores, filtros, orden, "Ver más").
- Páginas: Sobre nosotros, Contacto, Aviso legal, Privacidad, Cookies, Términos, Aviso de afiliación.
- Banner de cookies y pie con aviso de afiliación en todas las páginas.
- Ruta de servidor `app/api/search/route.ts`: es donde irán las claves (IA y tiendas).

## Antes de publicar de verdad
1. Edita `lib/site.ts`: titular, NIF/NIE, domicilio y correo de contacto.
2. Revisa las páginas legales con un profesional (son borradores) y quita el aviso "Borrador pendiente de revisión legal" de `app/components/LegalPage.tsx` cuando estén revisadas.
3. Completa en la política de privacidad los proveedores marcados entre corchetes.

## Claves y seguridad
- Las claves van SOLO en variables de entorno del servidor (Vercel > Settings > Environment Variables).
- Nunca con el prefijo `NEXT_PUBLIC_`, y nunca dentro del código.
- `.env.example` muestra los nombres; los valores reales no se suben a GitHub.

## Subir a GitHub (sin instalar nada)
1. Descomprime el ZIP.
2. En tu repositorio vacío: **Add file > Upload files**.
3. Arrastra el CONTENIDO de la carpeta (no el ZIP): `app`, `lib`, `package.json`, etc.
4. Pulsa **Commit changes**.

## Publicar en Vercel
1. Vercel > **Add New > Project** > importa el repositorio de GitHub.
2. Framework: Next.js (se detecta solo). Pulsa **Deploy**.
3. Cuando funcione en la dirección `.vercel.app`, añade tu dominio en **Settings > Domains** y crea en Cloudflare los registros DNS que Vercel indique, con el proxy desactivado (nube gris).

## Desarrollo local (opcional)
```
npm install
npm run dev
```
