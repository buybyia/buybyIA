import LegalPage from '../components/LegalPage';
import { SITE } from '@/lib/site';

export const metadata = { title: 'Aviso legal · BuyByIA' };

export default function Page() {
  return (
    <LegalPage title="Aviso legal">
      <h2>Titular del sitio web</h2>
      <ul>
        <li>Titular: {SITE.titular}</li>
        <li>NIF/NIE: {SITE.nif}</li>
        <li>Domicilio: {SITE.domicilio}</li>
        <li>Correo electrónico: {SITE.email}</li>
      </ul>
      <h2>Objeto</h2>
      <p>Este sitio web ofrece un asistente de búsqueda y comparación de productos. {SITE.name} no vende productos: redirige a tiendas de terceros.</p>
      <h2>Propiedad intelectual</h2>
      <p>Los contenidos propios del sitio (textos, diseño y código) pertenecen al titular. Las marcas y los nombres de tiendas y productos pertenecen a sus respectivos propietarios.</p>
      <h2>Responsabilidad</h2>
      <p>El titular no se hace responsable de la exactitud de los precios, la disponibilidad o las características de los productos mostrados, que dependen de cada tienda, ni del contenido de sitios web de terceros enlazados.</p>
      <h2>Legislación aplicable</h2>
      <p>Este sitio se rige por la legislación española. Para cualquier controversia serán competentes los juzgados y tribunales que correspondan conforme a la normativa vigente.</p>
    </LegalPage>
  );
}
