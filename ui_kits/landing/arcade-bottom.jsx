/* arcade-bottom.jsx — Missioni (corse), Power-up (Prozis), Character sheet, Co-op, Footer, Level seam */
const B_IG = (window.SOCIAL && window.SOCIAL.instagram) || 'https://www.instagram.com/colazioneconali';
const B_PRZ = (window.PROZIS && window.PROZIS.link) || '#';
const B_COD = (window.PROZIS && window.PROZIS.codice) || 'ALI03';
const SOC = window.SOCIAL || {};
const CORSE = window.CORSE || [];
const Arr = window.A_Arr;
const Bar = window.A_Bar;

/* ---------- LEVEL SEAM (scroll-driven neon sweep between sections) ---------- */
function LevelSeam({ label = 'LIVELLO SUCCESSIVO', tint = 'var(--neon2)' }) {
  const band = React.useRef(null), bar = React.useRef(null), txt = React.useRef(null), beam = React.useRef(null);
  React.useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
    const apply = (p) => {
      if (bar.current) { bar.current.style.transform = `scaleX(${clamp(p * 1.2, 0, 1)})`; }
      if (beam.current) { beam.current.style.opacity = Math.sin(clamp(p, 0, 1) * Math.PI) * 0.9; beam.current.style.left = (p * 100) + '%'; }
      if (txt.current) { txt.current.style.opacity = clamp(p * 1.6 - 0.1, 0, 1); txt.current.style.transform = `translateY(${(1 - clamp(p, 0, 1)) * 14}px)`; }
    };
    if (reduce) { apply(1); return; }
    const update = () => { const el = band.current; if (!el) return; const r = el.getBoundingClientRect(); const vh = window.innerHeight || 800; const c = r.top + r.height / 2; apply(clamp((vh * 0.94 - c) / (vh * 0.6), 0, 1)); };
    const onScroll = () => update(); update();
    window.addEventListener('scroll', onScroll, { passive: true }); window.addEventListener('resize', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);
  return (
    <div ref={band} aria-hidden="true" style={{ position: 'relative', height: 132, display: 'grid', placeItems: 'center', overflow: 'hidden' }}>
      <div style={{ width: 'min(900px,86%)' }}>
        <div ref={txt} className="mono" style={{ fontSize: 10.5, color: tint, textAlign: 'center', marginBottom: 12, opacity: 0, textShadow: `0 0 14px ${tint}` }}>▸ {label} ◂</div>
        <div style={{ position: 'relative', height: 3, background: 'rgba(255,255,255,0.08)', borderRadius: 3, overflow: 'hidden' }}>
          <div ref={bar} style={{ position: 'absolute', inset: 0, transformOrigin: 'left', transform: 'scaleX(0)', background: `linear-gradient(90deg,${tint},var(--neon))`, boxShadow: `0 0 14px ${tint}`, borderRadius: 3 }} />
        </div>
        <div ref={beam} style={{ position: 'absolute', top: '50%', width: 60, height: 60, marginLeft: -30, marginTop: -18, borderRadius: '50%', background: `radial-gradient(circle,${tint},transparent 70%)`, filter: 'blur(6px)', opacity: 0, pointerEvents: 'none' }} />
      </div>
    </div>
  );
}

/* ---------- MISSIONI (corse) ---------- */
function QuestCard({ c, i }) {
  const [h, setH] = React.useState(false);
  const done = c.stato === 'Completata' || c.stato === 'Iscritta';
  const pct = done ? '100%' : '64%';
  const col = ['var(--neon3)', 'var(--neon4)', 'var(--neon2)', 'var(--neon)'][i % 4];
  return (
    <div className={'rv ' + ['right', 'up', 'left', 'zoom'][i % 4]} style={{ transitionDelay: (i % 4) * 70 + 'ms' }}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
      <div className="frame" style={{ borderRadius: 12, padding: '18px 18px 16px', borderColor: h ? col : 'var(--hud2)', boxShadow: h ? `0 14px 40px rgba(0,0,0,0.5), 0 0 22px ${col}44` : 'none', transition: 'all .3s' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div className="mono" style={{ fontSize: 9.5, color: col, marginBottom: 8 }}>{c.etichetta || 'QUEST'} · {c.info || ''}</div>
            <div className="ttl" style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.15, maxWidth: 220 }}>{c.titolo}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="ttl" style={{ fontSize: 26, fontWeight: 800, color: col, textShadow: `0 0 16px ${col}66` }}>{c.km}</div>
            <div className="mono" style={{ fontSize: 9, color: '#8C7E98' }}>KM</div>
          </div>
        </div>
        <div style={{ marginTop: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <span className="mono" style={{ fontSize: 9, color: done ? 'var(--mint,#7BE0AE)' : '#9C8EA8' }}>{done ? '✓ ' : ''}{c.stato || 'In corso'}</span>
            <span className="mono" style={{ fontSize: 9, color: '#9C8EA8' }}>{pct}</span>
          </div>
          <Bar v={pct} c={col} h={5} />
        </div>
      </div>
    </div>
  );
}
function Missioni() {
  const list = CORSE.length ? CORSE : [];
  return (
    <section id="corse" style={{ padding: '96px 26px' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div className="rv up" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 30, marginBottom: 40, flexWrap: 'wrap' }}>
          <div>
            <div className="mono" style={{ fontSize: 10, color: 'var(--neon3)', marginBottom: 14 }}>Missioni · 002</div>
            <h2 className="ttl" style={{ fontSize: 'clamp(30px,4.4vw,56px)', fontWeight: 800, lineHeight: 1, margin: 0 }}>LE CORSE<br /><span style={{ color: 'var(--neon3)', fontStyle: 'italic' }}>= MISSIONI ATTIVE</span></h2>
          </div>
          <p style={{ fontSize: 15, color: '#9C8EA8', maxWidth: 330, textAlign: 'right', lineHeight: 1.6, margin: 0 }}>Dalle corse mattutine alle maratone. Non sempre vanno bene — ma a volte ci sono quelle corse che ti ricordano perché lo fai.</p>
        </div>
        <div className="cards4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }}>
          {list.map((c, i) => <QuestCard key={i} c={c} i={i} />)}
        </div>
      </div>
    </section>
  );
}

/* ---------- POWER-UP (Prozis) ---------- */
function PowerUp() {
  return (
    <section style={{ padding: '90px 26px' }}>
      <div className="rv zoom frame" style={{ maxWidth: 1040, margin: '0 auto', borderRadius: 18, padding: '46px 44px', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 44, alignItems: 'center', boxShadow: '0 30px 80px rgba(255,212,107,0.12)' }}>
        <div>
          <div className="mono" style={{ fontSize: 10, color: 'var(--neon2)', marginBottom: 14 }}>Power-up sbloccato · partner 2026</div>
          <h2 className="ttl" style={{ fontSize: 'clamp(28px,3.6vw,46px)', fontWeight: 800, lineHeight: 1.05, margin: '0 0 14px' }}>CHEAT CODE: <span className="neonword">PROZIS</span></h2>
          <p style={{ fontSize: 16, color: '#C6B8D2', lineHeight: 1.6, maxWidth: 440, margin: '0 0 24px' }}>Il carburante dietro colazioni e corse. Inserisci il codice per attivare lo sconto su tutto lo shop.</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <div className="frame" style={{ display: 'inline-flex', alignItems: 'center', gap: 14, borderRadius: 8, padding: '11px 16px' }}>
              <span className="mono" style={{ fontSize: 9.5, color: '#8C7E98' }}>CODE</span>
              <span className="ttl" style={{ fontSize: 22, fontWeight: 800, color: 'var(--neon2)', letterSpacing: 2, textShadow: '0 0 16px rgba(255,212,107,0.5)' }}>{B_COD}</span>
            </div>
            <a href={B_PRZ} target="_blank" rel="noopener" className="btn btn-primary">Attiva su Prozis <Arr /></a>
          </div>
        </div>
        <div style={{ display: 'grid', placeItems: 'center' }}>
          <div style={{ width: 200, height: 200, borderRadius: 20, background: 'linear-gradient(150deg,rgba(255,212,107,0.12),rgba(255,79,142,0.12))', border: '1px solid var(--hud2)', display: 'grid', placeItems: 'center', transform: 'rotate(-4deg)', boxShadow: '0 0 50px rgba(255,79,142,0.25) inset' }}>
            <div style={{ textAlign: 'center' }}>
              <div className="mono" style={{ fontSize: 10, color: 'var(--neon3)', letterSpacing: 3 }}>PARTNER</div>
              <div className="ttl" style={{ fontSize: 38, fontWeight: 900, marginTop: 4 }}>PROZIS</div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--neon2)', marginTop: 6 }}>cod · {B_COD}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CHARACTER SHEET ---------- */
function CharSheet() {
  const stats = [['Energia mattutina', '92'], ['Endurance', '78'], ['Golosità', '100'], ['Ironia', '88']];
  return (
    <section id="about" style={{ padding: '100px 26px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.5fr 0.5fr', gap: 56, alignItems: 'center' }} className="grid2">
        <div className="rv left">
          <div className="chip" style={{ marginBottom: 20 }}>CHARACTER SHEET · ALISSA</div>
          <h2 className="ttl" style={{ fontSize: 'clamp(26px,3.2vw,40px)', fontWeight: 800, lineHeight: 1.12, margin: '0 0 18px' }}>22 ANNI, PADOVA.<br />AMO ALLENARMI E<br /><span className="neonpink">FARE COLAZIONE.</span></h2>
          <p style={{ fontSize: 16, color: '#C6B8D2', lineHeight: 1.6, maxWidth: 380, margin: 0 }}>"Perché correre con lo stomaco vuoto quando puoi mettere le ali alle tue mattine?" — ogni giorno una nuova run da raccontare.</p>
        </div>
        <div className="rv right frame" style={{ borderRadius: 16, padding: 26 }}>
          <div className="mono" style={{ fontSize: 10, color: 'var(--neon2)', marginBottom: 18 }}>ATTRIBUTI</div>
          <div style={{ display: 'grid', gap: 16 }}>
            {stats.map(([k, v], i) => {
              const c = ['var(--neon2)', 'var(--neon3)', 'var(--neon)', 'var(--neon4)'][i];
              return (
                <div key={k}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span className="mono" style={{ fontSize: 10, color: '#C6B8D2' }}>{k}</span>
                    <span className="ttl" style={{ fontSize: 14, fontWeight: 700, color: c }}>{v}</span>
                  </div>
                  <Bar v={v + '%'} c={c} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CO-OP CTA ---------- */
function Coop() {
  return (
    <section id="collab" style={{ padding: '100px 26px' }}>
      <div className="rv up frame" style={{ maxWidth: 800, margin: '0 auto', borderRadius: 18, padding: '54px 40px', textAlign: 'center', boxShadow: '0 30px 90px rgba(232,67,147,0.18)' }}>
        <div className="mono" style={{ fontSize: 10, color: 'var(--neon)', marginBottom: 18 }}>◆ Player 2 cerca brand ◆</div>
        <h2 className="ttl" style={{ fontSize: 'clamp(30px,5vw,58px)', fontWeight: 900, lineHeight: 1.04, margin: '0 0 18px' }}>UNISCITI ALLA <span className="neonword" style={{ fontStyle: 'italic' }}>RUN.</span></h2>
        <p style={{ fontSize: 17, color: '#C6B8D2', lineHeight: 1.6, maxWidth: 500, margin: '0 auto 30px' }}>Ricette sponsorizzate, recensioni, contenuti per le corse, reel e storie. Una community calda, reale e in crescita — modalità co-op aperta.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:colazioneconali@gmail.com" className="btn btn-primary">Invita a collaborare</a>
          <a href={B_IG} target="_blank" rel="noopener" className="btn btn-ghost">Vedi il profilo <Arr /></a>
        </div>
        <div className="mono" style={{ fontSize: 10, color: '#8C7E98', marginTop: 24 }}>colazioneconali@gmail.com · @colazioneconali</div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--hud2)', padding: '50px 26px 36px', position: 'relative' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
          <span style={{ width: 30, height: 30, display: 'grid', placeItems: 'center', borderRadius: 6, border: '1px solid var(--hud2)', color: 'var(--neon2)', fontSize: 14 }}>✦</span>
          <span className="ttl" style={{ fontSize: 14, fontWeight: 700, letterSpacing: 1 }}>COLAZIONE·ALI</span>
        </div>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          {[['Instagram', B_IG], ['TikTok', SOC.tiktok || '#'], ['Strava', SOC.strava || '#'], ['Prozis ' + B_COD, B_PRZ]].map(([t, u]) => (
            <a key={t} href={u} target="_blank" rel="noopener" className="mono" style={{ fontSize: 10.5, color: '#9C8EA8' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--neon2)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#9C8EA8'; }}>{t}</a>
          ))}
        </div>
      </div>
      <div className="mono" style={{ maxWidth: 1320, margin: '28px auto 0', paddingTop: 20, borderTop: '1px solid var(--hud)', fontSize: 9.5, color: '#6E627A', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
        <span>© 2026 COLAZIONE CON ALI · FATTA CON ♡ E BURRO DI ARACHIDI</span>
        <span style={{ color: 'var(--neon2)' }}>SVEGLIATI · MANGIA · VOLA</span>
      </div>
    </footer>
  );
}

Object.assign(window, { A_LevelSeam: LevelSeam, A_Missioni: Missioni, A_PowerUp: PowerUp, A_CharSheet: CharSheet, A_Coop: Coop, A_Footer: Footer });
