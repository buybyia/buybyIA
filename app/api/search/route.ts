import { NextResponse } from 'next/server';

// Ruta de servidor: aquí es donde se usarán las claves (IA, tiendas).
// Las claves viven en variables de entorno y NUNCA llegan al navegador.

const WINDOW_MS = 60000; // 1 minuto
const MAX_REQUESTS = 10; // por IP y minuto (límite básico; en producción conviene uno compartido)
const MAX_LENGTH = 300; // caracteres máximos de la consulta
const hits = new Map<string, { count: number; start: number }>();

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now - entry.start > WINDOW_MS) {
    hits.set(ip, { count: 1, start: now });
  } else {
    entry.count += 1;
    if (entry.count > MAX_REQUESTS) {
      return NextResponse.json({ error: 'Demasiadas peticiones. Inténtalo en un minuto.' }, { status: 429 });
    }
  }

  let body: { query?: unknown } = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Petición no válida.' }, { status: 400 });
  }

  const query = typeof body.query === 'string' ? body.query.trim() : '';
  if (!query || query.length > MAX_LENGTH) {
    return NextResponse.json({ error: 'La consulta no es válida.' }, { status: 400 });
  }

  const apiKey = process.env.AI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ mode: 'demo', message: 'Sin clave de IA configurada: modo demostración.' });
  }

  // TODO (Fase 3): llamar al proveedor de IA con apiKey para extraer las especificaciones de `query`
  // y buscar productos en las fuentes de afiliación. Nunca devuelvas la clave en la respuesta.
  return NextResponse.json({ mode: 'demo', message: 'Clave detectada en el servidor. Integración pendiente.' });
}
