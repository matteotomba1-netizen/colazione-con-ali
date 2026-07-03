/* seams.jsx — transizioni "tracciato Strava" tra le sezioni.
   ----------------------------------------------------------------------------
   Tra una sezione e l'altra si DISEGNA un percorso — come una route di corsa
   registrata col GPS — mentre scrolli, e una ✦ (la posizione attuale) lo
   percorre partendo da un pin di partenza. Ogni seam ha una FORMA DIVERSA e
   PARTE DA UN PUNTO DIVERSO (in base al `seed`), così non si ripetono mai.
   Guidato direttamente dallo scroll (non da un timeline CSS): reagisce e non si
   blocca. Il fondo sfuma dal colore della sezione sopra a quello della sotto. */

const SEAM_REDUCE = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* colori del tracciato per ciascun "mondo" (caldo · rosa · freddo/corsa) */
const SEAM_TINTS = {
  warm: ['#FFB46B', '#FF7E8A', '#C9A0FF'],
  rose: ['#FF9FC4', '#E84393', '#A77BFF'],
  cool: ['#FFC074', '#9B8CFF', '#6FA8FF'],
};

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const easeOut = (t) => 1 - Math.pow(1 - t, 3);

/* RNG deterministico: stesso seed → stessa forma */
function mulberry32(a) {
  return function () {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

/* Catmull-Rom → Bézier: rende il percorso fluido e organico */
function smoothPath(pts) {
  if (pts.length < 2) return '';
  let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6, c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6, c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return d;
}

/* genera un percorso GPS-like: cammino casuale che attraversa la banda */
function makeRoute(seed, W, H) {
  const rng = mulberry32((seed >>> 0) || 1);
  const N = 7 + Math.floor(rng() * 4);          // 7–10 waypoint
  const dir = rng() < 0.5 ? 1 : -1;             // sx→dx oppure dx→sx (partenza opposta)
  const mx = W * 0.07, top = H * 0.18, bot = H * 0.84;
  let y = top + rng() * (bot - top);            // quota di partenza casuale
  const pts = [];
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    const base = mx + (W - 2 * mx) * t;
    let x = dir > 0 ? base : (W - base);
    x += (rng() - 0.5) * (W * 0.05);
    y += (rng() - 0.5) * (H * 0.42);            // serpentina verticale
    y = clamp(y, top, bot);
    pts.push([x, y]);
  }
  return { d: smoothPath(pts), start: pts[0] };
}

function Seam({ from, to, tint = 'warm', height = 176, seed = 1 }) {
  const cols = SEAM_TINTS[tint] || SEAM_TINTS.warm;
  const band = React.useRef(null);
  const trail = React.useRef(null);
  const dot = React.useRef(null);
  const halo = React.useRef(null);
  const uid = (React.useId ? React.useId() : 'seam' + seed).replace(/[:]/g, '');
  const W = 1200, H = height;

  const route = React.useMemo(() => makeRoute(seed, W, H), [seed, H]);

  React.useEffect(() => {
    const p0 = trail.current;
    if (!p0) return;
    const total = p0.getTotalLength();
    p0.style.strokeDasharray = total;

    const apply = (p) => {
      const e = easeOut(clamp(p, 0, 1));
      p0.style.strokeDashoffset = total * (1 - e);
      const pt = p0.getPointAtLength(total * e);
      if (dot.current) {
        dot.current.setAttribute('cx', pt.x);
        dot.current.setAttribute('cy', pt.y);
        dot.current.style.opacity = clamp(p * 3, 0, 1);
      }
      if (halo.current) {
        halo.current.setAttribute('cx', pt.x);
        halo.current.setAttribute('cy', pt.y);
        halo.current.style.opacity = clamp(p * 2, 0, 1) * 0.5;
      }
    };

    if (SEAM_REDUCE) { apply(1); return; }
    apply(0);

    const update = () => {
      const el = band.current; if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      const c = r.top + r.height / 2;
      const p = clamp((vh * 0.92 - c) / (vh * 0.6), 0, 1);
      apply(p);
    };
    update();
    const onScroll = () => update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, [route]);

  return (
    <div ref={band} aria-hidden="true" style={{ position: 'relative', height: H, overflow: 'hidden', background: `linear-gradient(180deg, ${from} 0%, ${to} 100%)` }}>
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" width="100%" height="100%" style={{ position: 'absolute', inset: 0, display: 'block' }}>
        <defs>
          <linearGradient id={`g${uid}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor={cols[0]} />
            <stop offset="0.5" stopColor={cols[1]} />
            <stop offset="1" stopColor={cols[2]} />
          </linearGradient>
          <filter id={`b${uid}`} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="7" />
          </filter>
        </defs>
        {/* percorso intero, tenue (la route registrata) */}
        <path d={route.d} fill="none" stroke={`url(#g${uid})`} strokeWidth="1.4" strokeOpacity="0.14" strokeLinecap="round" strokeLinejoin="round" />
        {/* percorso che si disegna mentre scrolli */}
        <path ref={trail} d={route.d} fill="none" stroke={`url(#g${uid})`} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ filter: `drop-shadow(0 2px 9px ${cols[1]}55)` }} />
        {/* pin di partenza (varia per ogni seam) */}
        <circle cx={route.start[0]} cy={route.start[1]} r="5.5" fill="#fff" stroke={cols[0]} strokeWidth="2.4" />
        <circle cx={route.start[0]} cy={route.start[1]} r="1.8" fill={cols[0]} />
        {/* ✦ posizione attuale che percorre la route */}
        <circle ref={halo} r="13" fill={cols[1]} filter={`url(#b${uid})`} style={{ opacity: 0 }} />
        <circle ref={dot} r="5.4" fill="#fff" stroke={cols[1]} strokeWidth="2.4" style={{ opacity: 0 }} />
      </svg>
    </div>
  );
}

window.Seam = Seam;
