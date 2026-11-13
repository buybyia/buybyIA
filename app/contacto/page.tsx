import LegalPage from '../components/LegalPage';
import { SITE } from '@/lib/site';

export const metadata = { title: 'Contacto · BuyByIA' };

export default function Page() {
  return (
    <LegalPage title="Contacto">
      <p>¿Dudas, sugerencias o algo que corregir? Escríbenos a <a href={'mailto:' + SITE.email}>{SITE.email}</a>.</p>
      <p>Procuramos responder en un plazo razonable. Si nos escribes por un asunto de privacidad, consulta antes la <a href="/politica-de-privacidad">política de privacidad</a>.</p>
    </LegalPage>
  );
}
