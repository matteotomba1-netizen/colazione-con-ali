/* sections-top.jsx — Nav, Hero, Marquee, Stats band
   Mounted after the DS bundle; pulls Button/Pill from the namespace. */
const IG_URL = (window.SOCIAL && window.SOCIAL.instagram) || 'https://www.instagram.com/colazioneconali';
const PROZIS_URL = (window.PROZIS && window.PROZIS.link) || '#';

/* ---------- tiny inline icons ---------- */
function IgGlyph({ s = 16 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="currentColor" strokeWidth="1.8"/>
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8"/>
      <circle cx="17.4" cy="6.6" r="1.3" fill="currentColor"/>
    </svg>
  );
}
function Arrow({ s = 14 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ---------- NAV ---------- */
const NAV_ITEMS = [['Ricette', '#ricette'], ['Le Corse', '#corse'], ['Chi sono', '#about'], ['Collabora', '#collab']];

function Nav() {
  const { Button } = window.ColazioneConAliDesignSystem_665c4d || {};
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  React.useEffect(() => { setOpen(false); }, []);
  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, height: 72,
      display: 'flex', alignItems: 'center', padding: '0 32px',
      borderBottom: `1px solid ${scrolled || open ? 'var(--grey-08)' : 'transparent'}`,
      background: scrolled || open ? 'rgba(255,255,255,0.92)' : 'transparent',
      backdropFilter: scrolled || open ? 'blur(20px)' : 'none',
      WebkitBackdropFilter: scrolled || open ? 'blur(20px)' : 'none',
      transition: 'background 400ms ease, backdrop-filter 400ms ease, border-color 400ms ease',
    }}>
      <div style={{ width: '100%', maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'inherit', textDecoration: 'none', fontSize: 19, fontVariationSettings: "'wght' 520", letterSpacing: '-0.4px', flexShrink: 0 }}>
          <span style={{ width: 28, height: 28, borderRadius: '50%', background: '#000', color: '#fff', display: 'grid', placeItems: 'center', fontSize: 13, flexShrink: 0 }}>✦</span>
          <span className="nav-wordmark">Colazione con Ali</span>
        </a>
        <nav className="nav-desktop" style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
          {NAV_ITEMS.map(([t, h]) => (
            <a key={t} href={h} className="nav-link" style={{ fontSize: 14, color: 'var(--text-primary)', textDecoration: 'none', fontVariationSettings: "'wght' 420", letterSpacing: '-0.14px' }}>{t}</a>
          ))}
          <a href={IG_URL} target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
            <Button arrow size="sm"><IgGlyph s={15} />Seguimi</Button>
          </a>
        </nav>
        <button
          className="nav-burger" aria-label={open ? 'Chiudi menu' : 'Apri menu'} onClick={() => setOpen((o) => !o)}
          style={{ display: 'none', cursor: 'pointer', background: 'transparent', border: 'none', width: 36, height: 36, position: 'relative', flexShrink: 0 }}>
          <span style={{ position: 'absolute', left: 7, right: 7, top: 13, height: 1.5, background: '#000', transition: 'transform 250ms ease, opacity 200ms ease', transform: open ? 'translateY(4px) rotate(45deg)' : 'none' }} />
          <span style={{ position: 'absolute', left: 7, right: 7, top: 20, height: 1.5, background: '#000', transition: 'transform 250ms ease, opacity 200ms ease', opacity: open ? 0 : 1 }} />
          <span style={{ position: 'absolute', left: 7, right: 7, top: 27, height: 1.5, background: '#000', transition: 'transform 250ms ease, opacity 200ms ease', transform: open ? 'translateY(-4px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>
      {open && (
        <div className="nav-mobile-panel" style={{ background: 'rgba(255,255,255,0.98)', borderTop: '1px solid var(--grey-08)', padding: '10px 24px 22px', display: 'flex', flexDirection: 'column' }}>
          {NAV_ITEMS.map(([t, h]) => (
            <a key={t} href={h} onClick={() => setOpen(false)} style={{ padding: '14px 6px', fontSize: 17, color: 'var(--text-primary)', textDecoration: 'none', fontVariationSettings: "'wght' 420", letterSpacing: '-0.16px', borderBottom: '1px solid var(--grey-08)' }}>{t}</a>
          ))}
          <a href={IG_URL} target="_blank" rel="noopener" onClick={() => setOpen(false)} style={{ textDecoration: 'none', marginTop: 18 }}>
            <Button arrow size="sm"><IgGlyph s={15} />Seguimi</Button>
          </a>
        </div>
      )}
    </header>
  );
}

/* ---------- HERO ---------- */
function FloatCard({ style, children, delay = 0 }) {
  return (
    <div style={{
      position: 'absolute', background: 'var(--glass-strong)', backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 18,
      boxShadow: '0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.08)',
      animation: `floaty ${6 + delay}s ease-in-out ${-delay}s infinite`,
      ...style,
    }}>{children}</div>
  );
}

function Hero() {
  const { Button } = window.ColazioneConAliDesignSystem_665c4d || {};
  return (
    <section id="top" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '140px 32px 100px' }}>
      {/* sunrise photographic backdrop */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img src="../../assets/bg-sunrise-warm.png" alt="" data-px="0.15" style={{ position: 'absolute', top: '-30%', left: 0, width: '100%', height: '160%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0.15) 100%)' }} />
        {/* drifting colour orbs for depth */}
        <div className="orb" style={{ width: 320, height: 320, background: 'var(--sun)', top: '2%', left: '4%', animationDuration: '16s' }} />
        <div className="orb" style={{ width: 240, height: 240, background: 'var(--coral)', top: '14%', right: '8%', animationDuration: '20s', animationDelay: '-6s' }} />
        <div className="orb" style={{ width: 360, height: 360, background: 'var(--lilac)', bottom: '4%', left: '26%', animationDuration: '24s', animationDelay: '-11s' }} />
        <div className="orb" style={{ width: 200, height: 200, background: 'var(--rose)', bottom: '16%', right: '4%', animationDuration: '18s', animationDelay: '-3s' }} />
        <div className="grain" />
      </div>

      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 60, alignItems: 'center' }}>
        <div>
          <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, border: '1px solid rgba(0,0,0,0.12)', background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(12px)', padding: '8px 16px', borderRadius: 50, marginBottom: 28 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--rose)', animation: 'pulse 2s ease-in-out infinite' }} />
            <span className="mono">Buongiorno · @colazioneconali</span>
          </div>
          <h1 className="reveal d1" style={{ fontSize: 'var(--fs-hero)', fontVariationSettings: "'wght' 380", letterSpacing: 'var(--ls-hero)', lineHeight: 1.0, margin: '0 0 28px' }}>
            Svegliati.<br />
            <span className="shine" style={{ fontStyle: 'italic' }}>Mangia.</span><br />
            Vola.
          </h1>
          <p className="reveal d2" style={{ fontSize: 18, color: 'var(--grey-60)', letterSpacing: '-0.18px', lineHeight: 1.6, maxWidth: 480, margin: '0 0 34px' }}>
            Colazioni che ti fanno alzare dal letto e chilometri che ti fanno sentire viva. Due mondi, una sola energia — la mattina di Alissa, finalmente con le ali.
          </p>
          <div className="reveal d3" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href={IG_URL} target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
              <Button arrow variant="pill"><IgGlyph s={16} />Seguimi su Instagram</Button>
            </a>
            <a href="#ricette" style={{ textDecoration: 'none' }}>
              <Button variant="ghost">Scopri le ricette</Button>
            </a>
          </div>
        </div>

        {/* floating glass stack */}
        <div className="reveal d4" style={{ position: 'relative', height: 480 }}>
          <FloatCard delay={0} style={{ width: 230, right: 40, top: 0, padding: '18px 20px' }}>
            <div className="mono" style={{ color: 'var(--grey-40)' }}>Community · Live</div>
            <div style={{ fontSize: 44, fontVariationSettings: "'wght' 420", letterSpacing: '-0.9px', lineHeight: 1, marginTop: 6 }}>6.392</div>
            <div style={{ fontSize: 13, color: 'var(--grey-60)', marginTop: 2 }}>follower e in crescita ↗</div>
          </FloatCard>
          <FloatCard delay={1.4} style={{ width: 250, left: 0, top: 120, padding: '16px 18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 46, height: 46, borderRadius: '50%', background: 'var(--grad-cool)', display: 'grid', placeItems: 'center', color: '#fff', fontSize: 11 }}>✦</div>
              <div>
                <div className="mono" style={{ color: 'var(--grey-40)' }}>Run · Stamattina</div>
                <div style={{ fontSize: 22, fontVariationSettings: "'wght' 520", letterSpacing: '-0.44px' }}>18,30 km</div>
              </div>
            </div>
            <div style={{ height: 4, background: 'var(--grey-08)', borderRadius: 4, marginTop: 12 }}>
              <div style={{ height: '100%', width: '74%', background: 'var(--grad-rose)', borderRadius: 4 }} />
            </div>
            <div className="mono" style={{ color: 'var(--grey-40)', marginTop: 6 }}>Pace 5′28″/km · 1h40m</div>
          </FloatCard>
          <FloatCard delay={2.2} style={{ width: 215, right: 0, bottom: 0, padding: '16px 18px', display: 'flex', gap: 14, alignItems: 'center' }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: '#000', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 600, fontSize: 13, fontFamily: "'JetBrains Mono', monospace" }}>PZ</div>
            <div>
              <div className="mono" style={{ color: 'var(--grey-40)' }}>Partner · 2026</div>
              <div style={{ fontSize: 15, fontVariationSettings: "'wght' 520" }}>Prozis · ALI03</div>
            </div>
          </FloatCard>
        </div>
      </div>
    </section>
  );
}

/* ---------- MARQUEE ---------- */
function Marquee() {
  const items = ['Overnight Mugcake', 'Milano Marathon', 'Plumcake alle Mele', 'StraMilano 10K', 'Crostata al Cacao', 'Giga Cookie', 'Tiramisù ai Plasmon', 'Svegliati · Mangia · Vola'];
  const row = [...items, ...items];
  return (
    <div style={{ overflow: 'hidden', borderTop: '1px solid var(--grey-08)', borderBottom: '1px solid var(--grey-08)', padding: '18px 0', background: '#000' }}>
      <div style={{ display: 'flex', width: 'max-content', animation: 'marquee 26s linear infinite', whiteSpace: 'nowrap' }}>
        {row.map((t, i) => (
          <span key={i} className="mono" style={{ color: '#fff', padding: '0 28px', display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ width: 4, height: 4, background: 'var(--rose)', borderRadius: '50%' }} />{t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- STATS / SOCIAL PROOF ---------- */
/* singolo numero con "effetto di caricamento": conta da 0 al valore e una
   barra si riempie in parallelo, partendo quando entra nello schermo. */
function StatNum({ numero, testo }) {
  const box = React.useRef(null);
  const num = React.useRef(null);
  const bar = React.useRef(null);

  React.useEffect(() => {
    const raw = String(numero == null ? '' : numero).trim();
    const isNum = /^[\d.\s]+$/.test(raw) && /\d/.test(raw);
    const target = isNum ? parseInt(raw.replace(/[.\s]/g, ''), 10) : null;
    const fmt = (v) => v.toLocaleString('it-IT');
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const setFinal = () => {
      if (num.current) num.current.textContent = isNum ? fmt(target) : raw;
      if (bar.current) bar.current.style.width = '100%';
    };
    if (!isNum) { setFinal(); return; }
    if (reduce) { setFinal(); return; }

    let started = false, rafId = 0, t0 = 0;
    const dur = 1500;
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    const step = (now) => {
      if (!t0) t0 = now;
      const p = Math.min((now - t0) / dur, 1);
      const e = ease(p);
      if (num.current) num.current.textContent = fmt(Math.round(target * e));
      if (bar.current) bar.current.style.width = (e * 100).toFixed(1) + '%';
      if (p < 1) rafId = requestAnimationFrame(step);
    };
    const start = () => {
      if (started) return; started = true;
      if (num.current) num.current.textContent = fmt(0);
      rafId = requestAnimationFrame(step);
      // se il timeline è strozzato (tab in background), forza il valore finale
      setTimeout(setFinal, dur + 500);
    };

    let io;
    if ('IntersectionObserver' in window && box.current) {
      io = new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) { start(); io.disconnect(); } }), { threshold: 0.45 });
      io.observe(box.current);
    } else { start(); }
    const safety = setTimeout(() => { if (!started) setFinal(); }, 2600);
    return () => { if (rafId) cancelAnimationFrame(rafId); if (io) io.disconnect(); clearTimeout(safety); };
  }, [numero]);

  return (
    <div ref={box} className="reveal">
      <div ref={num} style={{ fontSize: 'clamp(38px,4.2vw,56px)', fontVariationSettings: "'wght' 400", letterSpacing: '-1.04px', lineHeight: 1 }}>{numero}</div>
      <div style={{ height: 3, borderRadius: 3, background: 'var(--grey-08)', overflow: 'hidden', margin: '14px 0 12px', maxWidth: 160 }}>
        <div ref={bar} style={{ height: '100%', width: '0%', borderRadius: 3, background: 'var(--grad-rose)' }} />
      </div>
      <div className="mono" style={{ color: 'var(--grey-40)' }}>{testo}</div>
    </div>
  );
}

/* card foto di Alissa — la foto si carica dal pannello /admin (campo PROFILO) */
function ProfiloCard() {
  const P = window.PROFILO || {};
  const foto = P.foto || '';
  const nome = P.nome || 'Alissa';
  const handle = P.handle || '@colazioneconali';
  const bio = P.bio || 'amo allenarmi e fare colazione :)';
  return (
    <div className="reveal" style={{ position: 'relative', aspectRatio: '4 / 5', borderRadius: 20, overflow: 'hidden', boxShadow: 'var(--shadow-card)', border: '1px solid var(--grey-08)', background: 'var(--grad-sunrise)' }}>
      {foto
        ? <img src={foto} alt={nome} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        : (
          <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', textAlign: 'center', padding: 28 }}>
            <div>
              <div style={{ width: 60, height: 60, margin: '0 auto 16px', borderRadius: '50%', background: '#000', color: '#fff', display: 'grid', placeItems: 'center', fontSize: 24 }}>✦</div>
              <div style={{ fontSize: 18, fontVariationSettings: "'wght' 480", letterSpacing: '-0.3px' }}>La foto di Alissa</div>
              <div className="mono" style={{ color: 'var(--grey-40)', marginTop: 8, lineHeight: 1.6 }}>caricala dal pannello<br />/admin → la tua foto</div>
            </div>
          </div>
        )}
      <div className="grain" style={{ opacity: 0.3 }} />
      <div style={{ position: 'absolute', left: 14, right: 14, bottom: 14, padding: '11px 14px', borderRadius: 14, background: 'var(--glass-strong)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ width: 38, height: 38, flexShrink: 0, borderRadius: '50%', background: '#000', color: '#fff', display: 'grid', placeItems: 'center', fontSize: 14 }}>✦</span>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 15, fontVariationSettings: "'wght' 520", letterSpacing: '-0.2px' }}>{nome} <span style={{ color: 'var(--rose)' }}>✨</span></div>
          <div className="mono" style={{ color: 'var(--grey-40)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{handle} · {bio}</div>
        </div>
      </div>
    </div>
  );
}

function Stats() {
  const data = (window.NUMERI || []);
  return (
    <section id="numeri" style={{ position: 'relative', overflow: 'hidden', padding: '110px 32px', background: 'linear-gradient(170deg, #FFF3E2 0%, #FFE4EC 55%, #F1E6FF 100%)' }}>
      {/* elementi di contesto: orb colorati + grana, come nell'hero, per non lasciare mai uno sfondo piatto */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <div className="orb" data-px="0.08" style={{ width: 300, height: 300, background: 'var(--sun)', top: '-6%', left: '8%', animationDuration: '19s' }} />
        <div className="orb" data-px="0.05" style={{ width: 260, height: 260, background: 'var(--lilac)', bottom: '-8%', right: '10%', animationDuration: '23s', animationDelay: '-8s' }} />
        <div className="orb" data-px="0.11" style={{ width: 200, height: 200, background: 'var(--mint)', top: '30%', right: '30%', animationDuration: '17s', animationDelay: '-4s', opacity: 0.35 }} />
        <div className="grain" style={{ opacity: 0.28 }} />
      </div>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <div className="reveal mono" style={{ color: 'var(--grey-40)', marginBottom: 30 }}>La community, in numeri · @colazioneconali</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '38px 28px' }} className="stats-grid">
          {data.map((n) => (<StatNum key={n.testo} numero={n.numero} testo={n.testo} />))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero, Marquee, Stats, ProfiloCard, Arrow, IgGlyph, IG_URL, PROZIS_URL });