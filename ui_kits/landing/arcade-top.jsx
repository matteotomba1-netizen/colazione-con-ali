/* arcade-top.jsx — HUD nav, Main Menu hero, ticker, stat readout, inventory */
const A_IG = (window.SOCIAL && window.SOCIAL.instagram) || 'https://www.instagram.com/colazioneconali';
const A_PRZ = (window.PROZIS && window.PROZIS.link) || '#';
const A_COD = (window.PROZIS && window.PROZIS.codice) || 'ALI03';
const NUM = window.NUMERI || [];
const RIC = window.RICETTE || [];

const Arr = ({ s = 14 }) => (
  <svg width={s} height={s} viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

/* progress / stat bar */
function Bar({ v, c = 'var(--neon2)', h = 6 }) {
  return (
    <div style={{ height: h, borderRadius: h, background: 'rgba(255,255,255,0.08)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ height: '100%', width: v, background: c, boxShadow: `0 0 12px ${c}`, borderRadius: h }} />
    </div>
  );
}

/* ---------- HUD NAV ---------- */
function HudNav() {
  const [s, setS] = React.useState(false);
  React.useEffect(() => {
    const h = () => setS(window.scrollY > 40);
    window.addEventListener('scroll', h, { passive: true }); return () => window.removeEventListener('scroll', h);
  }, []);
  const links = [['Loadout', '#colazioni'], ['Missioni', '#corse'], ['Player', '#about'], ['Co-op', '#collab']];
  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, height: 66, display: 'flex', alignItems: 'center', padding: '0 26px',
      borderBottom: `1px solid ${s ? 'var(--hud2)' : 'transparent'}`, background: s ? 'rgba(7,5,9,0.72)' : 'transparent', backdropFilter: s ? 'blur(14px)' : 'none', WebkitBackdropFilter: s ? 'blur(14px)' : 'none', transition: 'all .35s ease' }}>
      <div style={{ width: '100%', maxWidth: 1320, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
          <span style={{ width: 30, height: 30, display: 'grid', placeItems: 'center', borderRadius: 6, border: '1px solid var(--hud2)', color: 'var(--neon2)', textShadow: '0 0 10px var(--neon2)', fontSize: 14 }}>✦</span>
          <span className="ttl" style={{ fontSize: 14, fontWeight: 700, letterSpacing: 1 }}>COLAZIONE<span style={{ color: 'var(--neon)' }}>·</span>ALI</span>
        </a>
        <nav style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          {links.map(([t, h]) => (
            <a key={t} href={h} className="mono" style={{ fontSize: 11, padding: '8px 12px', color: '#CDBFD8', borderRadius: 4 }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--neon2)'; e.currentTarget.style.textShadow = '0 0 12px var(--neon2)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#CDBFD8'; e.currentTarget.style.textShadow = 'none'; }}>{t}</a>
          ))}
          <a href={A_IG} target="_blank" rel="noopener" className="btn btn-ghost" style={{ padding: '9px 14px', marginLeft: 8 }}>Seguimi <Arr /></a>
        </nav>
      </div>
    </header>
  );
}

/* ---------- HERO / MAIN MENU ---------- */
function Hero() {
  const follower = (NUM.find((n) => /follower/i.test(n.testo)) || {}).numero || '6.392';
  return (
    <section id="top" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '128px 26px 80px' }}>
      <div style={{ width: '100%', maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 48, alignItems: 'center' }} className="grid2">
        <div>
          <div className="rv left chip" style={{ marginBottom: 26 }}><span className="dotpulse" /> Buongiorno · player online</div>
          <h1 className="rv up ttl glitch" data-t="SVEGLIATI" style={{ fontSize: 'clamp(52px,8vw,118px)', fontWeight: 900, lineHeight: 0.92, letterSpacing: '-1px', margin: '0 0 18px' }}>
            <span className="neonword">SVEGLIATI</span><br />
            <span className="neonpink" style={{ fontStyle: 'italic' }}>MANGIA</span><br />
            VOLA<span style={{ color: 'var(--neon3)' }}>.</span>
          </h1>
          <p className="rv up" style={{ fontSize: 17, color: '#C6B8D2', maxWidth: 460, lineHeight: 1.6, margin: '0 0 30px' }}>
            Tre livelli, una sola run: colazioni che ti fanno alzare dal letto e chilometri che ti fanno sentire viva. Premi start e seguimi.
          </p>
          <div className="rv up" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href={A_IG} target="_blank" rel="noopener" className="btn btn-primary">▶ Premi Start · Seguimi</a>
            <a href="#colazioni" className="btn btn-ghost">Esplora il loadout <Arr /></a>
          </div>
          <div className="rv up" style={{ display: 'flex', gap: 26, marginTop: 34, flexWrap: 'wrap' }}>
            {[['LV', '22'], ['HQ', 'Padova'], ['STREAK', '183 post']].map(([k, v]) => (
              <div key={k}><div className="mono" style={{ fontSize: 10, color: '#8C7E98' }}>{k}</div><div className="ttl" style={{ fontSize: 20, fontWeight: 700, marginTop: 3 }}>{v}</div></div>
            ))}
          </div>
        </div>

        {/* PLAYER CARD */}
        <div className="rv zoom frame" style={{ borderRadius: 16, padding: 22, boxShadow: '0 30px 80px rgba(255,79,142,0.18)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 60, height: 60, borderRadius: 12, background: 'linear-gradient(135deg,var(--neon2),var(--neon) 60%,var(--neon3))', display: 'grid', placeItems: 'center', fontSize: 22, color: '#1a0610', boxShadow: '0 0 26px rgba(255,79,142,0.5)' }}>✦</div>
            <div style={{ flex: 1 }}>
              <div className="mono" style={{ fontSize: 10, color: 'var(--neon2)' }}>Player · @colazioneconali</div>
              <div className="ttl" style={{ fontSize: 22, fontWeight: 700, marginTop: 2 }}>ALISSA</div>
            </div>
            <div className="chip">EPIC</div>
          </div>
          <div style={{ marginTop: 20, display: 'grid', gap: 14 }}>
            {[['Energia', '92%', 'var(--neon2)'], ['Endurance', '78%', 'var(--neon3)'], ['Fame', '100%', 'var(--neon)']].map(([k, v, c]) => (
              <div key={k}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span className="mono" style={{ fontSize: 10, color: '#C6B8D2' }}>{k}</span>
                  <span className="mono" style={{ fontSize: 10, color: c }}>{v}</span>
                </div>
                <Bar v={v} c={c} />
              </div>
            ))}
          </div>
          <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--hud)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div><div className="mono" style={{ fontSize: 10, color: '#8C7E98' }}>Community · live</div><div className="ttl" style={{ fontSize: 32, fontWeight: 800, color: 'var(--neon2)', textShadow: '0 0 18px rgba(255,212,107,0.4)' }}>{follower}</div></div>
            <div className="mono" style={{ fontSize: 10, color: 'var(--neon3)' }}>follower ↗</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TICKER ---------- */
function Ticker() {
  const items = ['SVEGLIATI · MANGIA · VOLA', 'STRAMILANO 10K', 'OVERNIGHT MUGCAKE', 'PACE 5:28/KM', 'GIGA COOKIE', 'PROZIS · ' + A_COD, 'NEW QUEST UNLOCKED'];
  const row = [...items, ...items];
  return (
    <div style={{ overflow: 'hidden', borderTop: '1px solid var(--hud2)', borderBottom: '1px solid var(--hud2)', padding: '13px 0', background: 'rgba(255,79,142,0.06)' }}>
      <div style={{ display: 'flex', width: 'max-content', animation: 'tick 24s linear infinite', whiteSpace: 'nowrap' }}>
        {row.map((t, i) => (<span key={i} className="mono" style={{ fontSize: 12, color: '#E9DBF2', padding: '0 26px', display: 'flex', alignItems: 'center', gap: 14 }}><span style={{ color: 'var(--neon2)' }}>◆</span>{t}</span>))}
      </div>
      <style>{`@keyframes tick{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  );
}

/* ---------- STAT READOUT ---------- */
function Stats() {
  const d = NUM.length ? NUM : [{ numero: '6.392', testo: 'follower' }, { numero: '183', testo: 'post' }, { numero: '11', testo: 'ricette' }, { numero: '4', testo: 'corse 2026' }];
  return (
    <section style={{ padding: '70px 26px' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }} className="cards4">
        {d.map((n, i) => (
          <div key={i} className={'rv ' + ['zoom', 'up', 'up', 'right'][i % 4] + ' frame'} style={{ borderRadius: 12, padding: '22px 20px', textAlign: 'center' }}>
            <div className="ttl" style={{ fontSize: 'clamp(34px,4.2vw,52px)', fontWeight: 800, color: i % 2 ? 'var(--neon3)' : 'var(--neon2)', textShadow: `0 0 22px ${i % 2 ? 'rgba(195,155,255,0.4)' : 'rgba(255,212,107,0.4)'}` }}>{n.numero}</div>
            <div className="mono" style={{ fontSize: 10, color: '#9C8EA8', marginTop: 8 }}>{n.testo}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- LE COLAZIONI = INVENTORY ---------- */
const RARITY = [
  { name: 'EPIC', c: 'var(--neon)', g: 'linear-gradient(135deg,#FFD46B,#FF4F8E 60%,#C39BFF)' },
  { name: 'RARE', c: 'var(--neon3)', g: 'linear-gradient(135deg,#C39BFF,#7BE0FF)' },
  { name: 'SOLAR', c: 'var(--neon2)', g: 'linear-gradient(135deg,#FFD46B,#FF7E8A)' },
  { name: 'BERRY', c: '#FF7EA8', g: 'linear-gradient(135deg,#E84393,#FFB088)' },
];
function ItemCard({ r, i }) {
  const [h, setH] = React.useState(false);
  const rar = RARITY[i % RARITY.length];
  return (
    <div className={'rv ' + ['zoom', 'right', 'left', 'up'][i % 4]} style={{ transitionDelay: (i % 4) * 70 + 'ms' }}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
      <div className="frame" style={{ borderRadius: 14, overflow: 'hidden', borderColor: h ? rar.c : 'var(--hud2)', boxShadow: h ? `0 18px 50px rgba(0,0,0,0.5), 0 0 26px ${rar.c}55` : 'none', transform: h ? 'translateY(-6px)' : 'none', transition: 'transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s, border-color .2s' }}>
        <div style={{ position: 'relative', aspectRatio: '4/3', background: rar.g, overflow: 'hidden' }}>
          {r.foto ? <img src={r.foto} alt={r.titolo} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: h ? 'scale(1.06)' : 'none', transition: 'transform .5s' }} /> : null}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 40%,rgba(7,5,9,0.55))' }} />
          <span className="mono" style={{ position: 'absolute', top: 10, left: 10, fontSize: 9.5, padding: '5px 9px', borderRadius: 4, background: 'rgba(7,5,9,0.6)', color: rar.c, border: `1px solid ${rar.c}` }}>{rar.name}</span>
          {r.tempo ? <span className="mono" style={{ position: 'absolute', top: 10, right: 10, fontSize: 9.5, padding: '5px 9px', borderRadius: 4, background: 'rgba(7,5,9,0.6)', color: '#E9DBF2' }}>⌛ {r.tempo}</span> : null}
          <div className="ttl" style={{ position: 'absolute', left: 12, bottom: 10, right: 12, fontSize: 16, fontWeight: 700, lineHeight: 1.1, textShadow: '0 2px 10px #000' }}>{r.titolo}</div>
        </div>
        <div style={{ padding: '13px 14px' }}>
          <div className="mono" style={{ fontSize: 9.5, color: '#9C8EA8', marginBottom: 10 }}>{r.etichetta || 'Ricetta'}</div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span className="mono" style={{ fontSize: 9.5, color: rar.c }}>{r.video ? '▶ REEL' : 'DROP'}</span>
            <span style={{ width: 28, height: 28, display: 'grid', placeItems: 'center', borderRadius: '50%', border: `1px solid ${h ? rar.c : 'var(--hud2)'}`, color: h ? rar.c : '#fff', transform: h ? 'rotate(-45deg)' : 'none', transition: 'all .3s cubic-bezier(.34,1.56,.64,1)' }}><Arr s={12} /></span>
          </div>
        </div>
      </div>
    </div>
  );
}
function Colazioni({ onPick }) {
  const list = RIC.length ? RIC : [];
  return (
    <section id="colazioni" style={{ padding: '96px 26px' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div className="rv up" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 30, marginBottom: 40, flexWrap: 'wrap' }}>
          <div>
            <div className="mono" style={{ fontSize: 10, color: 'var(--neon2)', marginBottom: 14 }}>Loadout · 001</div>
            <h2 className="ttl" style={{ fontSize: 'clamp(30px,4.4vw,56px)', fontWeight: 800, lineHeight: 1, margin: 0 }}>L'INVENTARIO<br /><span className="neonpink" style={{ fontStyle: 'italic' }}>DELLE COLAZIONI</span></h2>
          </div>
          <p style={{ fontSize: 15, color: '#9C8EA8', maxWidth: 320, textAlign: 'right', lineHeight: 1.6, margin: 0 }}>Overnight, mug cake, plumcake e dolci da forno — ogni drop ha la sua rarità. Equipaggia e parti.</p>
        </div>
        <div className="cards4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }}>
          {list.map((r, i) => <div key={i} onClick={() => onPick && onPick(i)} style={{ cursor: 'pointer' }}><ItemCard r={r} i={i} /></div>)}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { A_HudNav: HudNav, A_Hero: Hero, A_Ticker: Ticker, A_Stats: Stats, A_Colazioni: Colazioni, A_Bar: Bar, A_Arr: Arr, A_RIC: RIC });
