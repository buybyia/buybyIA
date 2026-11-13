import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

export const metadata: Metadata = {
  title: 'BuyByIA · Dime qué necesitas',
  description:
    'Describe lo que buscas con tus palabras y compara las mejores opciones entre varias tiendas.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <div className="wrap">
          <header>
            <Link href="/" className="logo">
              BuyBy<b>IA</b>
            </Link>
            <span className="tag">Prototipo · datos de ejemplo</span>
          </header>
          {children}
          <Footer />
        </div>
        <CookieBanner />
      </body>
    </html>
  );
}
