/* sections-bottom.jsx — Prozis partner band, About, Collab CTA, Footer */
const IGU = (window.SOCIAL && window.SOCIAL.instagram) || window.IG_URL;
const PRZ = (window.PROZIS && window.PROZIS.link) || window.PROZIS_URL;
const COD = (window.PROZIS && window.PROZIS.codice) || 'ALI03';
const SOC = window.SOCIAL || {};

/* ---------- PROZIS PARTNER BAND ---------- */
function Partner() {
  const { Button: BtnB } = window.ColazioneConAliDesignSystem_665c4d || {};
  return (
    <section id="prozis" style={{ padding: '110px 32px', background: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
      <div data-px="0.12" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 80% at 90% 20%, rgba(255,176,136,0.5) 0%, transparent 60%), radial-gradient(ellipse 50% 70% at 5% 90%, rgba(255,79,142,0.25) 0%, transparent 55%)', pointerEvents: 'none' }} />
      <div className="reveal" style={{ position: 'relative', maxWidth: 1040, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 56, alignItems: 'center' }}>
        <div>
          <div className="mono" style={{ color: 'var(--grey-40)', marginBottom: 18 }}>Partnership ufficiale · 2026</div>
          <h2 style={{ fontSize: 'clamp(34px,4vw,52px)', fontVariationSettings: "'wght' 380", letterSpacing: '-1px', lineHeight: 1.05, margin: '0 0 18px' }}>
            La prima collaborazione:<br /><span style={{ fontStyle: 'italic', fontVariationSettings: "'wght' 340" }}>Prozis.</span>
          </h2>
          <p style={{ fontSize: 17, color: 'var(--grey-60)', letterSpacing: '-0.17px', lineHeight: 1.6, maxWidth: 480, margin: '0 0 28px' }}>
            Gli ingredienti dietro le colazioni e il carburante delle corse. Usa il codice qui sotto per il tuo sconto su tutto lo shop Prozis.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, background: '#000', color: '#fff', borderRadius: 50, padding: '10px 14px 10px 22px' }}>
              <span className="mono" style={{ color: 'rgba(255,255,255,0.55)' }}>Codice</span>
              <span style={{ fontSize: 20, fontVariationSettings: "'wght' 540", letterSpacing: '1px', fontFamily: "'JetBrains Mono', monospace" }}>{COD}</span>
            </div>
            <a href={PRZ} target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
              <BtnB variant="warm" arrow>Vai su Prozis</BtnB>
            </a>
          </div>
        </div>
        <div style={{ display: 'grid', placeItems: 'center' }}>
          <div style={{ width: 220, height: 220, borderRadius: 28, background: '#000', display: 'grid', placeItems: 'center', boxShadow: '0 30px 80px rgba(0,0,0,0.22)', transform: 'rotate(-4deg)' }}>
            <div style={{ textAlign: 'center', color: '#fff' }}>
              <div style={{ fontSize: 13, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '3px', color: 'rgba(255,255,255,0.5)' }}>PARTNER</div>
              <div style={{ fontSize: 42, fontVariationSettings: "'wght' 600", letterSpacing: '-1px', marginTop: 6 }}>PROZIS</div>
              <div style={{ fontSize: 13, color: 'var(--sun)', marginTop: 8, fontFamily: "'JetBrains Mono', monospace" }}>cod. {COD}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section id="about" style={{ position: 'relative', overflow: 'hidden', padding: '140px 32px', background: 'linear-gradient(175deg, #FFF7EE 0%, #FFE9E4 45%, #F3E8FF 100%)' }}>
      {/* elementi di contesto: orb colorati + grana, coerenti con l'hero */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <div className="orb" data-px="0.09" style={{ width: 280, height: 280, background: 'var(--coral)', top: '-8%', right: '6%', animationDuration: '20s' }} />
        <div className="orb" data-px="0.06" style={{ width: 240, height: 240, background: 'var(--sky)', bottom: '-6%', left: '4%', animationDuration: '22s', animationDelay: '-9s' }} />
        <div className="orb" data-px="0.12" style={{ width: 180, height: 180, background: 'var(--amber)', top: '55%', left: '38%', animationDuration: '16s', animationDelay: '-3s', opacity: 0.3 }} />
        <div className="grain" style={{ opacity: 0.26 }} />
      </div>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1160, margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(240px, 300px) 0.5fr 0.5fr', gap: 56, alignItems: 'center' }}>
        <div className="reveal" style={{ maxWidth: 300 }}>
          <window.ProfiloCard />
        </div>
        <div className="reveal d1">
          <span className="mono" style={{ color: 'var(--grey-40)', display: 'inline-block', marginBottom: 22, border: '1px solid var(--grey-08)', padding: '8px 16px', borderRadius: 50, background: 'var(--glass-strong)', backdropFilter: 'blur(10px)' }}>Chi sono · Alissa</span>
          <h2 style={{ fontSize: 'clamp(28px,3vw,40px)', fontVariationSettings: "'wght' 340", letterSpacing: '-0.42px', lineHeight: 1.18, margin: 0 }}>
            22 anni, Padova. Amo allenarmi e fare colazione — e raccontarvi entrambe le cose, ogni mattina.
          </h2>
        </div>
        <div className="reveal d2">
          <p style={{ fontSize: 23, fontVariationSettings: "'wght' 340", letterSpacing: '-0.24px', lineHeight: 1.35, margin: 0 }}>
            "Perché correre con lo stomaco vuoto quando puoi <em style={{ fontStyle: 'italic', fontVariationSettings: "'wght' 320", color: 'var(--magenta)' }}>mettere le ali</em> alle tue mattine?"
          </p>
          <div style={{ marginTop: 40, paddingTop: 26, borderTop: '1px solid rgba(0,0,0,0.08)' }}>
            <div className="mono" style={{ color: 'var(--grey-40)', marginBottom: 16 }}>In evidenza su Instagram</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {['schiscettando', 'oats', 'mi muovo', 'proziss ❤', 'random', 'ricettefast'].map((t) => (
                <span key={t} style={{ border: '1px solid var(--grey-08)', borderRadius: 50, padding: '8px 16px', fontSize: 14, letterSpacing: '-0.14px', background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(8px)' }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- COLLAB CTA ---------- */
function Collab() {
  const { Button: BtnB } = window.ColazioneConAliDesignSystem_665c4d || {};
  return (
    <section id="collab" style={{ padding: '120px 32px', background: '#000', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div data-px="0.14" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 0%, rgba(232,67,147,0.22) 0%, transparent 55%)', pointerEvents: 'none' }} />
      <div className="reveal" style={{ position: 'relative', maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
        <div className="mono" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 22 }}>Brand & collab · Lavoriamo insieme</div>
        <h2 style={{ fontSize: 'clamp(36px,5vw,64px)', fontVariationSettings: "'wght' 380", letterSpacing: '-1.2px', lineHeight: 1.16, margin: '0 0 22px', color: '#fff' }}>
          Hai un brand che parla la lingua delle <span style={{ fontStyle: 'italic', background: 'var(--grad-rose)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', padding: '0.04em 0.1em', margin: '0 -0.1em', WebkitBoxDecorationBreak: 'clone', boxDecorationBreak: 'clone' }}>mattine buone?</span>
        </h2>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.65)', letterSpacing: '-0.18px', lineHeight: 1.6, maxWidth: 540, margin: '0 auto 36px' }}>
          Ricette sponsorizzate, recensioni prodotto, contenuti per le corse, reel e storie. Una community calda, reale e in crescita ti aspetta.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:colazioneconali@gmail.com" style={{ textDecoration: 'none' }}>
            <BtnB variant="pill" arrow onDark style={{ background: '#fff', color: '#000' }}>Scrivimi per collaborare</BtnB>
          </a>
          <a href={IGU} target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
            <BtnB variant="ghost" onDark>Vedi il profilo</BtnB>
          </a>
        </div>
        <div className="mono" style={{ color: 'rgba(255,255,255,0.4)', marginTop: 28 }}>colazioneconali@gmail.com · @colazioneconali</div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer style={{ background: 'var(--white)', borderTop: '1px solid var(--grey-08)', padding: '64px 32px 40px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 40 }} className="footer-grid">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 19, fontVariationSettings: "'wght' 520", letterSpacing: '-0.4px', marginBottom: 16 }}>
            <span style={{ width: 28, height: 28, borderRadius: '50%', background: '#000', color: '#fff', display: 'grid', placeItems: 'center', fontSize: 13 }}>✦</span>
            Colazione con Ali
          </div>
          <p style={{ fontSize: 13, color: 'var(--grey-60)', letterSpacing: '-0.14px', maxWidth: 280, lineHeight: 1.6, margin: 0 }}>
            Ricette, corse e mattine che hanno il sapore di qualcosa di buono. Sempre.
          </p>
        </div>
        {[['Esplora', [['Ricette', '#ricette'], ['Le Corse', '#corse'], ['Chi sono', '#about']]],
          ['Partner', [['Prozis · ' + COD, PRZ]]],
          ['Social', [['Instagram', IGU], ['TikTok', SOC.tiktok || '#'], ['Strava', SOC.strava || '#']]]].map(([h, links]) => (
          <div key={h}>
            <h4 className="mono" style={{ color: 'var(--grey-40)', margin: '0 0 18px' }}>{h}</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {links.map(([t, u]) => <li key={t}><a href={u} target={u.startsWith('http') ? '_blank' : undefined} rel="noopener" style={{ fontSize: 14, color: 'var(--text-primary)', textDecoration: 'none', fontVariationSettings: "'wght' 400" }} className="footer-link">{t}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 1280, margin: '56px auto 0', paddingTop: 24, borderTop: '1px solid var(--grey-08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--grey-40)', fontSize: 13, flexWrap: 'wrap', gap: 12 }}>
        <span>© 2026 Colazione con Ali. Fatta con ♡ e burro di arachidi.</span>
        <span className="mono" style={{ fontSize: 10 }}>Svegliati · Mangia · Vola</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Partner, About, Collab, Footer });