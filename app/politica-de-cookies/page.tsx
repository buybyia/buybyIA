import LegalPage from '../components/LegalPage';
import { SITE } from '@/lib/site';

export const metadata = { title: 'Política de cookies · BuyByIA' };

export default function Page() {
  return (
    <LegalPage title="Política de cookies">
      <h2>Qué son las cookies</h2>
      <p>Son pequeños archivos que un sitio web guarda en tu dispositivo para recordar información.</p>
      <h2>Qué usamos</h2>
      <ul>
        <li>Necesarias: guardan tu elección sobre cookies y permiten que la web funcione. No requieren consentimiento.</li>
        <li>Analítica: ahora mismo no usamos ninguna. Si la activamos, solo se cargará si la aceptas.</li>
        <li>Terceros por afiliación: al hacer clic en un enlace a una tienda, esa tienda o su red de afiliación puede instalar cookies para registrar que la visita viene de {SITE.name}.</li>
      </ul>
      <h2>Cómo gestionarlas</h2>
      <p>Puedes cambiar tu elección borrando los datos del sitio en tu navegador, y eliminar o bloquear cookies desde sus ajustes.</p>
    </LegalPage>
  );
}
