import Link from 'next/link';
import { SITE } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="site">
      <nav aria-label="Información legal">
        <Link href="/sobre-nosotros">Sobre nosotros</Link>
        <Link href="/contacto">Contacto</Link>
        <Link href="/politica-de-privacidad">Política de privacidad</Link>
        <Link href="/politica-de-cookies">Política de cookies</Link>
        <Link href="/terminos-y-condiciones">Términos y condiciones</Link>
        <Link href="/aviso-de-afiliacion">Aviso de afiliación</Link>
        <Link href="/aviso-legal">Aviso legal</Link>
      </nav>
      <p>
        {SITE.name} puede recibir una comisión por las compras realizadas a través de los enlaces a tiendas,
        sin ningún coste adicional para ti. Los precios y la disponibilidad pueden cambiar.{' '}
        <Link href="/aviso-de-afiliacion">Más información</Link>.
      </p>
    </footer>
  );
}
