'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const KEY = 'bbia-cookies';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  function choose(value: string) {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* sin almacenamiento disponible */
    }
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="cb" role="dialog" aria-label="Preferencias de cookies">
      <p>
        Ahora mismo solo usamos lo imprescindible para que la web funcione. Si activamos analítica o
        publicidad, solo lo haremos con tu permiso. <Link href="/politica-de-cookies">Más información</Link>
      </p>
      <div>
        <button className="chip" onClick={() => choose('rejected')}>
          Rechazar
        </button>
        <button className="go" onClick={() => choose('accepted')}>
          Aceptar
        </button>
      </div>
    </div>
  );
}
