import LegalPage from '../components/LegalPage';
import { SITE } from '@/lib/site';

export const metadata = { title: 'Política de privacidad · BuyByIA' };

export default function Page() {
  return (
    <LegalPage title="Política de privacidad">
      <h2>Responsable del tratamiento</h2>
      <p>{SITE.titular}, con NIF/NIE {SITE.nif} y domicilio en {SITE.domicilio}. Contacto: <a href={'mailto:' + SITE.email}>{SITE.email}</a>.</p>
      <h2>Qué datos tratamos y para qué</h2>
      <ul>
        <li>Texto de tus búsquedas: para entender lo que necesitas y mostrarte resultados. No incluyas datos personales en el buscador.</li>
        <li>Datos técnicos básicos (como la dirección IP): para el funcionamiento y la seguridad del servicio.</li>
        <li>Tu correo y el contenido de tu mensaje, si nos escribes: para responderte.</li>
        <li>Datos de uso agregados, solo si aceptas las cookies de analítica (cuando existan).</li>
      </ul>
      <h2>Base jurídica</h2>
      <p>La ejecución del servicio que solicitas, el interés legítimo en mantenerlo seguro y, en su caso, tu consentimiento.</p>
      <h2>Destinatarios</h2>
      <p>Para prestar el servicio utilizamos proveedores que pueden tratar datos por nuestra cuenta: alojamiento web (Vercel), proveedor de inteligencia artificial ([PROVEEDOR DE IA]), base de datos ([PROVEEDOR]) y redes de afiliación. Al hacer clic en un enlace a una tienda, esa tienda trata tus datos conforme a su propia política.</p>
      <h2>Conservación</h2>
      <p>Conservamos los datos solo el tiempo necesario para la finalidad indicada y para cumplir obligaciones legales.</p>
      <h2>Tus derechos</h2>
      <p>Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a {SITE.email}. También puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).</p>
    </LegalPage>
  );
}
