import LegalPage from '../components/LegalPage';
import { SITE } from '@/lib/site';

export const metadata = { title: 'Aviso de afiliación · BuyByIA' };

export default function Page() {
  return (
    <LegalPage title="Aviso de afiliación">
      <p>{SITE.name} participa en programas de afiliación. Cuando haces clic en un enlace a una tienda y compras, podemos recibir una comisión de esa tienda. Esto no supone ningún coste adicional para ti y no influye en el precio que pagas.</p>
      <h2>Cómo ordenamos los resultados</h2>
      <p>Los resultados se ordenan según lo que has pedido (precio, características, valoraciones, envío). Las comisiones no deben determinar el orden; si en el futuro hubiera resultados patrocinados, se indicarán claramente.</p>
      <h2>Declaraciones de los programas</h2>
      <p>[Pegar aquí la declaración oficial de Amazon cuando tengas la cuenta aprobada, tal como figura en su Acuerdo Operativo, y las de otras redes si las exigen.]</p>
      <h2>Precios y disponibilidad</h2>
      <p>Los precios y la disponibilidad mostrados pueden cambiar. El precio final es el que figura en la web de la tienda en el momento de la compra.</p>
    </LegalPage>
  );
}
