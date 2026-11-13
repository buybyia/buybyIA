import LegalPage from '../components/LegalPage';
import { SITE } from '@/lib/site';

export const metadata = { title: 'Sobre nosotros · BuyByIA' };

export default function Page() {
  return (
    <LegalPage title="Sobre nosotros">
      <p>{SITE.name} es un asistente de compras con inteligencia artificial. Tú describes con tus palabras lo que necesitas y nosotros lo traducimos en una búsqueda precisa, comparando opciones de varias tiendas.</p>
      <h2>Por qué existe</h2>
      <p>Muchas veces sabes lo que quieres, pero no sabes cómo buscarlo ni qué características importan. {SITE.name} te ayuda a dar ese paso y a comparar precio, tienda, valoraciones y envío en un solo lugar.</p>
      <h2>Cómo nos financiamos</h2>
      <p>Algunos enlaces a tiendas son enlaces de afiliado: si compras a través de ellos, podemos recibir una comisión, sin coste adicional para ti. Lo explicamos en el <a href="/aviso-de-afiliacion">aviso de afiliación</a>.</p>
      <h2>Una herramienta en evolución</h2>
      <p>La IA puede equivocarse. Revisa siempre las características y el precio en la tienda antes de comprar.</p>
    </LegalPage>
  );
}
