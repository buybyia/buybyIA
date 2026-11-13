import { SITE } from '@/lib/site';

export default function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="legal">
      <h1>{title}</h1>
      {children}
      <p className="note">
        Borrador pendiente de revisión legal. Última actualización: {SITE.updated}.
      </p>
    </article>
  );
}
