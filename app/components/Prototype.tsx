'use client';

import { useState } from 'react';
import { D, KW } from '@/lib/data';
import type { Product } from '@/lib/data';

const SHIP: Record<string, number> = {
  Amazon: 1,
  MediaMarkt: 2,
  PcComponentes: 2,
  Decathlon: 2,
  'Leroy Merlin': 3,
  eBay: 5,
  AliExpress: 12,
};
const STEPS = [
  'Entendiendo tu necesidad…',
  'Extrayendo especificaciones…',
  'Buscando en varias tiendas…',
  'Comparando resultados…',
];
const PAGE = 4;

const days = (p: Product) => SHIP[p[1]] ?? 7;
const shipLabel = (p: Product) => {
  const n = days(p);
  return n <= 1 ? '24 h' : n <= 3 ? '24-72 h' : n <= 7 ? '3-7 días' : '8-15 días';
};
const eur = (n: number) => n.toLocaleString('es-ES') + ' €';
const rate = (n: number) => String(n).replace('.', ',');

function detect(q: string): string | null {
  for (const [key, re] of KW) {
    if (re.test(q)) return key;
  }
  return null;
}

function Thumb({ p, icon }: { p: Product; icon: string }) {
  let n = 0;
  for (let i = 0; i < p[0].length; i++) n = (n * 31 + p[0].charCodeAt(i)) % 360;
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
    `<stop offset="0" stop-color="hsl(${n},75%,88%)"/><stop offset="1" stop-color="hsl(${(n + 50) % 360},70%,72%)"/>` +
    '</linearGradient></defs><rect width="400" height="300" fill="url(#g)"/>' +
    `<text x="200" y="185" font-size="130" text-anchor="middle">${p[6] ?? icon}</text></svg>`;
  return (
    <div className="img">
      <img alt="" loading="lazy" src={'data:image/svg+xml,' + encodeURIComponent(svg)} />
    </div>
  );
}

export default function Prototype() {
  const [cur, setCur] = useState('tech');
  const [q, setQ] = useState('');
  const [phase, setPhase] = useState<'home' | 'load' | 'res'>('home');
  const [step, setStep] = useState(STEPS[0]);
  const [key, setKey] = useState('tech');
  const [sort, setSort] = useState('rel');
  const [pmin, setPmin] = useState('');
  const [pmax, setPmax] = useState('');
  const [ship, setShip] = useState('99');
  const [store, setStore] = useState('');
  const [shown, setShown] = useState(PAGE);
  const [thx, setThx] = useState('');

  function resetFilters() {
    setPmin('');
    setPmax('');
    setShip('99');
    setStore('');
    setShown(PAGE);
  }

  function search() {
    const text = q.trim();
    if (!text) return;
    const k = detect(text) ?? cur;
    setPhase('load');
    setStep(STEPS[0]);
    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      if (i < STEPS.length) setStep(STEPS[i]);
    }, 550);
    setTimeout(() => {
      clearInterval(timer);
      setKey(k);
      setSort('rel');
      resetFilters();
      setThx('');
      setPhase('res');
      window.scrollTo(0, 0);
    }, 2300);
  }

  const d = D[key];
  const prices = d.p.map((p) => p[2]);
  const stores = Array.from(new Set(d.p.map((p) => p[1])));
  const mn = parseFloat(pmin);
  const mx = parseFloat(pmax);
  const list = d.p.filter(
    (p) =>
      p[2] >= (isNaN(mn) ? 0 : mn) &&
      p[2] <= (isNaN(mx) ? 1e9 : mx) &&
      days(p) <= Number(ship) &&
      (!store || p[1] === store),
  );
  if (sort === 'pa') list.sort((a, b) => a[2] - b[2]);
  if (sort === 'pd') list.sort((a, b) => b[2] - a[2]);
  if (sort === 'val') list.sort((a, b) => b[3] - a[3]);
  const vis = list.slice(0, shown);
  const cmp = vis.slice(0, 4);

  return (
    <>
      {phase === 'home' && (
        <section>
          <h1>Dime qué necesitas. Yo me encargo de buscarlo.</h1>
          <p className="sub">
            Descríbelo con tus palabras y comparamos las mejores opciones entre varias tiendas.
          </p>
          <div className="chips" role="group" aria-label="Sector">
            {Object.keys(D).map((k) => (
              <button key={k} className="chip" aria-pressed={k === cur} onClick={() => setCur(k)}>
                {D[k].ic} {D[k].n}
              </button>
            ))}
          </div>
          <div className="box">
            <textarea
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) search();
              }}
              placeholder="Ej.: quiero algo para…"
            />
            <div className="row">
              <span className="store">Sector: {D[cur].n}</span>
              <button className="go" onClick={search}>
                Buscar con IA
              </button>
            </div>
          </div>
          <div className="ex">Prueba con un ejemplo</div>
          <div>
            {D[cur].ex.map((t) => (
              <button key={t} className="exb" onClick={() => setQ(t)}>
                “{t}”
              </button>
            ))}
          </div>
        </section>
      )}

      {phase === 'load' && (
        <section className="load">
          <div className="spin" />
          <div>{step}</div>
        </section>
      )}

      {phase === 'res' && (
        <section>
          <button className="link" onClick={() => setPhase('home')}>
            ← Nueva búsqueda
          </button>
          <h2>Esto es lo que he entendido</h2>
          <div>
            {d.specs.map((s) => (
              <span className="spec" key={s[0]}>
                <span>{s[0]}:</span> {s[1]}
              </span>
            ))}
          </div>

          <div className="box fl">
            <label>
              Precio desde (€)
              <input
                type="number"
                min="0"
                inputMode="numeric"
                value={pmin}
                placeholder={String(Math.min(...prices))}
                onChange={(e) => {
                  setPmin(e.target.value);
                  setShown(PAGE);
                }}
              />
            </label>
            <label>
              Precio hasta (€)
              <input
                type="number"
                min="0"
                inputMode="numeric"
                value={pmax}
                placeholder={String(Math.max(...prices))}
                onChange={(e) => {
                  setPmax(e.target.value);
                  setShown(PAGE);
                }}
              />
            </label>
            <label>
              Envío
              <select
                value={ship}
                onChange={(e) => {
                  setShip(e.target.value);
                  setShown(PAGE);
                }}
              >
                <option value="99">Cualquiera</option>
                <option value="1">En 24 h</option>
                <option value="3">Hasta 3 días</option>
                <option value="7">Hasta 7 días</option>
              </select>
            </label>
            <label>
              Tienda
              <select
                value={store}
                onChange={(e) => {
                  setStore(e.target.value);
                  setShown(PAGE);
                }}
              >
                <option value="">Todas</option>
                {stores.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>
            <button className="link" onClick={resetFilters}>
              Limpiar filtros
            </button>
          </div>

          <div className="row">
            <h2>
              Mostrando {vis.length} de {list.length} resultados
            </h2>
            <select className="chip" aria-label="Ordenar" value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="rel">Relevancia</option>
              <option value="pa">Precio: menor a mayor</option>
              <option value="pd">Precio: mayor a menor</option>
              <option value="val">Mejor valoración</option>
            </select>
          </div>

          <div className="grid">
            {vis.map((p) => {
              const best = p === d.p[0];
              return (
                <div className={'card' + (best ? ' best' : '')} key={p[0]}>
                  <Thumb p={p} icon={d.ic} />
                  {best && <span className="badge">Mejor opción</span>}
                  <h3>{p[0]}</h3>
                  <div className="store">
                    {p[1]} · Envío {shipLabel(p)}
                  </div>
                  <div className="price">{eur(p[2])}</div>
                  <div className="rate">★ {rate(p[3])} valoración media</div>
                  <div className="why">{p[5]}</div>
                  <button
                    className="buy"
                    onClick={() =>
                      alert('En la versión real, esto abrirá la tienda con el enlace de afiliado.')
                    }
                  >
                    Ver en {p[1]}
                  </button>
                </div>
              );
            })}
          </div>
          {list.length === 0 && (
            <p className="store">Ningún resultado con estos filtros. Prueba a ampliarlos.</p>
          )}
          {vis.length < list.length && (
            <button className="chip more" onClick={() => setShown(shown + PAGE)}>
              Ver más resultados
            </button>
          )}

          {list.length > 0 && (
            <>
              <h2>Comparativa de los 4 primeros</h2>
              <div className="tw">
                <table>
                  <tbody>
                    <tr>
                      <th></th>
                      {cmp.map((p) => (
                        <th key={p[0]}>{p[0]}</th>
                      ))}
                    </tr>
                    <tr>
                      <td>Precio</td>
                      {cmp.map((p) => (
                        <td key={p[0]}>
                          <b>{eur(p[2])}</b>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td>Tienda</td>
                      {cmp.map((p) => (
                        <td key={p[0]}>{p[1]}</td>
                      ))}
                    </tr>
                    <tr>
                      <td>Envío</td>
                      {cmp.map((p) => (
                        <td key={p[0]}>{shipLabel(p)}</td>
                      ))}
                    </tr>
                    {d.lab.map((l, j) => (
                      <tr key={l}>
                        <td>{l}</td>
                        {cmp.map((p) => (
                          <td key={p[0]}>{p[4][j]}</td>
                        ))}
                      </tr>
                    ))}
                    <tr>
                      <td>Valoración</td>
                      {cmp.map((p) => (
                        <td key={p[0]}>★ {rate(p[3])}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}

          <div className="fb">
            ¿Te ha servido?{' '}
            <button className="chip" onClick={() => setThx('¡Gracias por tu opinión!')}>
              👍
            </button>
            <button className="chip" onClick={() => setThx('¡Gracias por tu opinión!')}>
              👎
            </button>
            <span>{thx}</span>
          </div>
          <p className="note">
            Productos, imágenes, precios y valoraciones de ejemplo (las fotos reales llegarán con las tiendas
            conectadas). Los plazos de envío son estimaciones.
          </p>
        </section>
      )}
    </>
  );
}
