import LegalPage from '../components/LegalPage';
import { SITE } from '@/lib/site';

export const metadata = { title: 'Términos y condiciones · BuyByIA' };

export default function Page() {
  return (
    <LegalPage title="Términos y condiciones">
      <h2>Uso del servicio</h2>
      <p>{SITE.name} ofrece información orientativa para ayudarte a encontrar y comparar productos. Al usar el sitio aceptas estas condiciones.</p>
      <h2>No somos una tienda</h2>
      <p>No vendemos ni enviamos productos. La compra se realiza en la web de cada tienda, bajo sus condiciones.</p>
      <h2>Información y precios</h2>
      <p>Los precios, la disponibilidad, los plazos de envío y las valoraciones proceden de terceros y pueden cambiar o contener errores. Compruébalos en la tienda antes de comprar.</p>
      <h2>Inteligencia artificial</h2>
      <p>Las recomendaciones se generan con IA, que puede cometer errores. No sustituyen tu criterio ni el asesoramiento profesional.</p>
      <h2>Uso adecuado</h2>
      <p>No está permitido usar el servicio de forma automatizada o abusiva, ni intentar acceder a sistemas o datos que no te correspondan.</p>
      <h2>Cambios</h2>
      <p>Podemos modificar estas condiciones. La versión vigente es la publicada en esta página.</p>
    </LegalPage>
  );
}
