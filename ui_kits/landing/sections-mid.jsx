/* sections-mid.jsx — Le Colazioni (recipe grid) + Le Corse (run cards) */
/* Le ricette arrivano da ricette.js (il file che Alissa compila).
   Qui traduciamo i campi italiani nei prop della card e, se manca la foto,
   assegniamo a rotazione un gradiente colorato così ogni card resta bella. */
const GRAD_CICLO = ['warm', 'peach', 'berry', 'cream', 'cool', 'sky'];
const RECIPES = (window.RICETTE || []).map((r, i) => ({
  title: r.titolo || '',
  label: r.etichetta || '',
  meta: r.tempo || '',
  badge: r.badge || 'Ricetta',
  image: r.foto || undefined,
  video: r.video || '',
  procedimento: r.procedimento || '',
  gradient: GRAD_CICLO[i % GRAD_CICLO.length],
}));

/* Le corse arrivano da contenuti.js. Traduciamo i campi italiani e diamo
   a ogni card un gradiente colorato a rotazione. */
const GRAD_CORSE = ['var(--grad-rose)', 'var(--grad-cool)', 'var(--grad-warm)', 'linear-gradient(135deg,#6E2A6F,#C39BFF 80%,#9BC9FF)'];
const RUNS = (window.CORSE || []).map((c, i) => ({
  title: c.titolo || '',
  label: c.etichetta || '',
  km: c.km || '',
  date: c.info || '',
  status: c.stato || '',
  grad: GRAD_CORSE[i % GRAD_CORSE.length],
}));

function SectionHead({ eyebrow, title, sub }) {
  return (
    <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, marginBottom: 48, flexWrap: 'wrap' }}>
      <div>
        {eyebrow && <div className="mono" style={{ color: 'var(--grey-40)', marginBottom: 18 }}>{eyebrow}</div>}
        <h2 style={{ fontSize: 'var(--fs-h2)', fontVariationSettings: "'wght' 380", letterSpacing: 'var(--ls-h2)', lineHeight: 1.0, maxWidth: 680, margin: 0 }}>{title}</h2>
      </div>
      {sub && <p style={{ fontSize: 16, color: 'var(--grey-60)', letterSpacing: '-0.16px', maxWidth: 340, textAlign: 'right', lineHeight: 1.6, margin: 0 }}>{sub}</p>}
    </div>
  );
}

/* ---------- RECIPE MODAL (procedimento + reel) ---------- */
const PLAY_ICON = (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M5 3.5v9l8-4.5-8-4.5z" fill="currentColor"/></svg>
);
function RecipeModal({ recipe, onClose }) {
  const { Modal } = window.ColazioneConAliDesignSystem_665c4d || {};
  if (!recipe) return null;
  const steps = (recipe.procedimento || '').split('\n').map(s => s.trim()).filter(Boolean);
  const GRADS = { warm:'linear-gradient(135deg,#FFD46B,#FF7E8A 60%,#E84393)', peach:'linear-gradient(135deg,#FFCBA0,#FF7E8A 50%,#FFD46B)', cool:'linear-gradient(135deg,#C39BFF,#FF4F8E)', sky:'linear-gradient(135deg,#9BC9FF,#C39BFF 50%,#FF4F8E)', berry:'linear-gradient(135deg,#6E2A6F,#E84393 60%,#FFB088)', cream:'linear-gradient(135deg,#FFF3E2,#FFD46B 60%,#FF7E8A)' };
  return (
    <Modal open onClose={onClose} maxWidth={680}>
      <div style={{ aspectRatio: '16/7', overflow: 'hidden' }}>
        {recipe.image
          ? <img src={recipe.image} alt={recipe.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          : <div style={{ width: '100%', height: '100%', background: GRADS[recipe.gradient] || GRADS.warm }} />}
      </div>
      <div style={{ padding: '36px 44px 44px' }}>
        <div className="mono" style={{ color: 'var(--grey-40)', marginBottom: 12 }}>{recipe.label || 'Ricetta'}</div>
        <h2 style={{ fontSize: 'clamp(26px,3.4vw,38px)', fontVariationSettings: "'wght' 400", letterSpacing: '-0.7px', lineHeight: 1.1, margin: '0 0 12px' }}>{recipe.title}</h2>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center', marginBottom: 26 }}>
          {recipe.meta && <span style={{ border: '1px solid var(--grey-08)', borderRadius: 50, padding: '7px 15px', fontSize: 13, letterSpacing: '-0.13px' }}>{recipe.meta}</span>}
          {recipe.video && (
            <a href={recipe.video} target="_blank" rel="noopener" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--grad-rose)', color: '#fff', borderRadius: 50, padding: '8px 17px', fontSize: 13, fontVariationSettings: "'wght' 520" }}>
              {PLAY_ICON} Guarda il reel su Instagram
            </a>
          )}
        </div>
        {steps.length > 0 ? (
          <React.Fragment>
            <h3 style={{ fontSize: 14, fontFamily: "var(--font-mono)", textTransform: 'uppercase', letterSpacing: '0.6px', color: 'var(--grey-40)', margin: '0 0 16px' }}>Procedimento</h3>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0, counterReset: 'step' }}>
              {steps.map((s, i) => (
                <li key={i} style={{ display: 'grid', gridTemplateColumns: '34px 1fr', gap: 14, padding: '14px 0', borderBottom: '1px solid var(--grey-08)' }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: 'var(--magenta)', fontWeight: 600 }}>{String(i + 1).padStart(2, '0')}</span>
                  <p style={{ fontSize: 15, letterSpacing: '-0.15px', lineHeight: 1.6, margin: 0 }}>{s}</p>
                </li>
              ))}
            </ol>
          </React.Fragment>
        ) : (
          <p style={{ fontSize: 15, color: 'var(--grey-60)', lineHeight: 1.6, margin: 0 }}>
            Il procedimento completo arriva presto.{recipe.video ? ' Intanto guarda il reel qui sopra! 🎬' : ''}
          </p>
        )}
      </div>
    </Modal>
  );
}

/* ---------- QUIZ "Quale colazione fa per te?" ---------- */
/* Sezione parallela prima delle ricette: poche domande rapide, poi consiglia
   una ricetta vera tra quelle pubblicate. Effetto dedicato: card che scorrono
   (slide + fade) tra una domanda e l'altra, punti di avanzamento, e una
   rivelazione "a comparsa" del risultato. */
const QUIZ_QUESTIONS = [
  {
    q: 'Quanto tempo hai stamattina?',
    key: 'speed',
    options: [
      { icon: '⏱️', label: 'Pochissimo, mi sveglio a malapena', value: 'fast' },
      { icon: '🚿', label: 'Il tempo di una doccia', value: 'medium' },
      { icon: '☀️', label: 'Tutta la mattina, con calma', value: 'slow' },
    ],
  },
  {
    q: 'La vuoi pronta dalla sera prima o cucinata al momento?',
    key: 'prep',
    options: [
      { icon: '🥶', label: 'Pronta in frigo, overnight', value: 'overnight' },
      { icon: '🍳', label: 'Calda, appena cucinata', value: 'fresh' },
    ],
  },
  {
    q: 'Cosa non può mancare?',
    key: 'flavor',
    options: [
      { icon: '🍫', label: 'Cioccolato o caffè', value: 'ciocc' },
      { icon: '🍓', label: 'Frutta o marmellata', value: 'frutta' },
      { icon: '🥣', label: 'Qualcosa di leggero', value: 'leggero' },
    ],
  },
  {
    q: 'Che frutta ti fa più gola?',
    key: 'frutta',
    options: [
      { icon: '🍎', label: 'Mela e cannella', value: 'mela' },
      { icon: '🫐', label: 'Mirtilli e frutti di bosco', value: 'bosco' },
      { icon: '🍋', label: 'Limone o agrumi', value: 'limone' },
      { icon: '🎃', label: 'Zucca', value: 'zucca' },
    ],
  },
  {
    q: 'Cremosa o più semplice?',
    key: 'cream',
    options: [
      { icon: '🧀', label: 'Bella cremosa, ricotta o yogurt', value: 'cremosa' },
      { icon: '✨', label: 'Semplice, senza troppi strati', value: 'semplice' },
    ],
  },
];

function pickRecipe(answers) {
  const cat = (r) => (r.label.split('·')[0] || '').trim();
  let target = 'Mugcake';
  if (answers.prep === 'fresh') target = 'Pancakes';
  else if (answers.speed === 'slow') target = answers.flavor === 'leggero' ? 'Oats' : 'Weetabix';
  else if (answers.speed === 'fast') target = 'Mugcake';

  let pool = RECIPES.filter((r) => cat(r) === target);
  if (!pool.length) pool = RECIPES;

  // priorità: frutta specifica scelta > gusto principale > cremosità
  const FRUIT_RX = { mela: /mela/i, bosco: /mirtill|frutti di bosco/i, limone: /limone|pistacchio/i, zucca: /zucca/i };
  const KEY_RX = { ciocc: /ciocc|cacao|caff[eè]/i, frutta: /mela|mirtill|fragol|frutti|limone|zucca/i, leggero: /ricotta|yogurt|weetabix/i };
  const CREAM_RX = { cremosa: /ricotta|crema|yogurt/i, semplice: /pancakes|weetabix/i };

  const candidates = [FRUIT_RX[answers.frutta], KEY_RX[answers.flavor], CREAM_RX[answers.cream]].filter(Boolean);
  for (const rx of candidates) {
    const match = pool.find((r) => rx.test(r.title));
    if (match) return match;
  }
  return pool[0] || RECIPES[0];
}

function Quiz() {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const [openResult, setOpenResult] = React.useState(false);
  const done = step >= QUIZ_QUESTIONS.length;
  const result = React.useMemo(() => (done ? pickRecipe(answers) : null), [done, answers]);

  const choose = (key, value) => {
    setAnswers((a) => ({ ...a, [key]: value }));
    setStep((s) => s + 1);
  };
  const restart = () => { setAnswers({}); setStep(0); };

  return (
    <section id="quiz" style={{ position: 'relative', overflow: 'hidden', padding: '120px 32px', background: 'linear-gradient(150deg, #FFE9C7 0%, #FFCBD6 48%, #D9C4FF 100%)' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <div className="orb" data-px="0.1" style={{ width: 320, height: 320, background: 'var(--sun)', top: '-10%', left: '-4%', animationDuration: '18s' }} />
        <div className="orb" data-px="0.07" style={{ width: 280, height: 280, background: 'var(--lilac)', bottom: '-12%', right: '0%', animationDuration: '21s', animationDelay: '-7s' }} />
        <div className="grain" style={{ opacity: 0.24 }} />
      </div>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
        <div className="reveal mono" style={{ color: 'rgba(0,0,0,0.5)', marginBottom: 16 }}>Trova la tua colazione · quiz</div>
        <h2 className="reveal" style={{ fontSize: 'clamp(28px,3.4vw,42px)', fontVariationSettings: "'wght' 380", letterSpacing: '-0.9px', lineHeight: 1.08, margin: '0 0 44px' }}>
          Quale colazione fa <em style={{ fontStyle: 'italic', fontVariationSettings: "'wght' 320" }}>per te?</em>
        </h2>

        {/* punti di avanzamento */}
        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 30 }}>
          {QUIZ_QUESTIONS.map((_, i) => (
            <span key={i} style={{ width: i === step ? 22 : 8, height: 8, borderRadius: 8, background: i <= step || done ? '#000' : 'rgba(0,0,0,0.18)', transition: 'width 320ms var(--ease-spring), background 320ms ease' }} />
          ))}
        </div>

        {!done ? (
          <div key={step} className="quiz-card" style={{ background: 'var(--glass-strong)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--glass-border)', borderRadius: 20, padding: '40px 36px', boxShadow: 'var(--shadow-card)' }}>
            <div className="mono" style={{ color: 'rgba(0,0,0,0.4)', marginBottom: 10 }}>Domanda {step + 1} di {QUIZ_QUESTIONS.length}</div>
            <div style={{ fontSize: 23, fontStyle: 'italic', fontVariationSettings: "'wght' 400", letterSpacing: '-0.34px', lineHeight: 1.28, marginBottom: 26 }}>{QUIZ_QUESTIONS[step].q}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {QUIZ_QUESTIONS[step].options.map((o) => (
                <button key={o.value} onClick={() => choose(QUIZ_QUESTIONS[step].key, o.value)} className="quiz-opt"
                  style={{ cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left', fontSize: 16, letterSpacing: '-0.16px', padding: '15px 20px', borderRadius: 14, border: '1.5px solid rgba(0,0,0,0.1)', background: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: 14, transition: 'transform 200ms var(--ease-spring), background 200ms ease, border-color 200ms ease, box-shadow 200ms ease' }}>
                  <span style={{ fontSize: 20, lineHeight: 1 }}>{o.icon}</span>
                  {o.label}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="quiz-result" style={{ background: '#000', color: '#fff', borderRadius: 20, padding: '40px 36px', boxShadow: 'var(--shadow-modal)', textAlign: 'left', display: 'grid', gridTemplateColumns: '120px 1fr', gap: 24, alignItems: 'center' }}>
            <div style={{ width: 120, height: 120, borderRadius: 16, overflow: 'hidden', flexShrink: 0, background: RECIPE_GRADS[result.gradient] || RECIPE_GRADS.warm }}>
              {result.image && <img src={result.image} alt={result.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
            </div>
            <div>
              <div className="mono" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>È lei: la tua colazione</div>
              <div style={{ fontSize: 23, fontVariationSettings: "'wght' 480", letterSpacing: '-0.3px', lineHeight: 1.2, marginBottom: 16 }}>{result.title}</div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <a href="#ricette" onClick={() => window.dispatchEvent(new CustomEvent('quiz-open-recipe', { detail: result.title }))} style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: '#000', borderRadius: 50, padding: '10px 18px', fontSize: 14, fontVariationSettings: "'wght' 520" }}>Vai alla ricetta →</a>
                <button onClick={restart} style={{ cursor: 'pointer', fontFamily: 'inherit', background: 'transparent', color: 'rgba(255,255,255,0.7)', border: '1.5px solid rgba(255,255,255,0.3)', borderRadius: 50, padding: '10px 18px', fontSize: 14 }}>Rifai il quiz</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
const RECIPE_GRADS = { warm:'linear-gradient(135deg,#FFD46B,#FF7E8A 60%,#E84393)', peach:'linear-gradient(135deg,#FFCBA0,#FF7E8A 50%,#FFD46B)', cool:'linear-gradient(135deg,#C39BFF,#FF4F8E)', sky:'linear-gradient(135deg,#9BC9FF,#C39BFF 50%,#FF4F8E)', berry:'linear-gradient(135deg,#6E2A6F,#E84393 60%,#FFB088)', cream:'linear-gradient(135deg,#FFF3E2,#FFD46B 60%,#FF7E8A)' };

/* ---------- RECIPES ---------- */
function Recipes() {
  const { RecipeCard } = window.ColazioneConAliDesignSystem_665c4d || {};
  const [openIdx, setOpenIdx] = React.useState(null);
  const [filter, setFilter] = React.useState('Tutte');

  // categorie dedotte dai dati (la prima parola dell'etichetta: Mugcake, Weetabix…)
  const cat = (r) => (r.label.split('·')[0] || '').trim();
  const cats = React.useMemo(() => {
    const seen = [];
    RECIPES.forEach((r) => { const c = cat(r); if (c && !seen.includes(c)) seen.push(c); });
    return ['Tutte', ...seen];
  }, []);
  const shown = filter === 'Tutte' ? RECIPES : RECIPES.filter((r) => cat(r) === filter);

  // il quiz può chiedere di aprire una ricetta specifica (evento custom)
  React.useEffect(() => {
    const onOpen = (e) => {
      const i = RECIPES.findIndex((r) => r.title === e.detail);
      if (i > -1) { setFilter('Tutte'); setOpenIdx(i); }
    };
    window.addEventListener('quiz-open-recipe', onOpen);
    return () => window.removeEventListener('quiz-open-recipe', onOpen);
  }, []);

  return (
    <section id="ricette" style={{ position: 'relative', overflow: 'hidden', padding: '120px 32px', background: 'var(--white)' }}>
      <div data-px="0.12" aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0, background: 'radial-gradient(ellipse 50% 60% at 10% 16%, rgba(255,126,138,0.10) 0%, transparent 60%), radial-gradient(ellipse 46% 58% at 92% 86%, rgba(255,212,107,0.13) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1280, margin: '0 auto' }}>
        <SectionHead
          eyebrow="Le Colazioni · 001"
          title={<React.Fragment>Colazioni che fanno<br/><em style={{ fontStyle: 'italic', fontVariationSettings: "'wght' 320" }}>saltare giù dal letto.</em></React.Fragment>}
          sub="Overnight oats, mug cake, plumcake e dolci da forno — proteici, golosi e pronti quando suona la sveglia."
        />
        {/* filtro orizzontale per categoria */}
        <div className="reveal" style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center', marginBottom: 38 }}>
          {cats.map((c) => {
            const active = c === filter;
            const n = c === 'Tutte' ? RECIPES.length : RECIPES.filter((r) => cat(r) === c).length;
            return (
              <button key={c} className="filter-chip" onClick={() => setFilter(c)} aria-pressed={active}
                style={{
                  cursor: 'pointer', fontFamily: 'inherit', fontSize: 14, letterSpacing: '-0.14px', fontVariationSettings: "'wght' 460",
                  display: 'inline-flex', alignItems: 'center', gap: 8, padding: '9px 18px', borderRadius: 50,
                  border: `1.5px solid ${active ? '#000' : 'var(--grey-08)'}`, background: active ? '#000' : 'transparent', color: active ? '#fff' : 'var(--text-primary)',
                  transition: 'background 300ms var(--ease-out-expo), color 300ms var(--ease-out-expo), border-color 300ms ease, transform 220ms var(--ease-spring), box-shadow 220ms ease',
                }}>
                {c}
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, opacity: active ? 0.7 : 0.45 }}>{n}</span>
              </button>
            );
          })}
        </div>
        <div className="recipe-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {shown.map((r, pos) => {
            const i = RECIPES.indexOf(r);
            return (
              <div key={`${filter}-${i}`} className="recipe-pop" style={{ animationDelay: `${Math.min(pos, 8) * 55}ms` }}>
                <RecipeCard {...r} onClick={() => setOpenIdx(i)} />
              </div>
            );
          })}
        </div>
      </div>
      <RecipeModal recipe={openIdx === null ? null : RECIPES[openIdx]} onClose={() => setOpenIdx(null)} />
    </section>
  );
}

/* ---------- RUNS ---------- */
function RunCard({ run, i }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      className="reveal"
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        transitionDelay: `${(i % 4) * 70}ms`,
        background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: 14, overflow: 'hidden',
        boxShadow: hover ? '0 16px 48px rgba(0,0,0,0.3)' : 'none',
        transition: 'box-shadow 400ms cubic-bezier(0.16,1,0.3,1), border-color 250ms ease',
        borderColor: hover ? 'rgba(255,255,255,0.28)' : 'rgba(255,255,255,0.12)',
      }}>
      <div style={{ position: 'relative', aspectRatio: '16/10', background: run.grad, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>\")", mixBlendMode: 'overlay' }} />
        <span style={{ position: 'absolute', top: 14, left: 14, background: 'rgba(0,0,0,0.55)', color: '#fff', backdropFilter: 'blur(8px)', padding: '5px 12px', borderRadius: 20, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, fontWeight: 500, letterSpacing: '0.4px' }}>{run.date}</span>
        <span style={{ position: 'absolute', bottom: 14, left: 14, color: '#fff', fontSize: 30, fontVariationSettings: "'wght' 500", letterSpacing: '-0.6px', textShadow: '0 2px 12px rgba(0,0,0,0.25)' }}>{run.km} km</span>
      </div>
      <div style={{ padding: '16px 18px 18px' }}>
        <span className="mono" style={{ color: 'rgba(255,255,255,0.5)' }}>{run.label}</span>
        <h3 style={{ fontSize: 16, fontVariationSettings: "'wght' 480", letterSpacing: '-0.16px', margin: '6px 0 0', color: '#fff', lineHeight: 1.3 }}>{run.title}</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
          <span style={{ fontSize: 13, color: run.status === 'Iscritta' || run.status === 'Completata' ? 'var(--mint)' : 'rgba(255,255,255,0.55)' }}>{run.status === 'Iscritta' || run.status === 'Completata' ? '✓ ' : ''}{run.status}</span>
          <span style={{ width: 30, height: 30, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)', display: 'grid', placeItems: 'center', color: '#fff', transform: hover ? 'rotate(-45deg)' : 'none', transition: 'transform 300ms cubic-bezier(0.34,1.56,0.64,1)' }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 9L9 3M9 3H4.5M9 3V7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
          </span>
        </div>
      </div>
    </div>
  );
}

function Runs() {
  return (
    <section id="corse" style={{ padding: '120px 32px', background: '#000', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div data-px="0.13" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 80% 15%, rgba(255,126,138,0.16) 0%, transparent 42%), radial-gradient(circle at 12% 88%, rgba(195,155,255,0.16) 0%, transparent 42%)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto' }}>
        <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, marginBottom: 48, flexWrap: 'wrap' }}>
          <div>
            <div className="mono" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 18 }}>Le Corse · 002</div>
            <h2 style={{ fontSize: 'var(--fs-h2)', fontVariationSettings: "'wght' 380", letterSpacing: 'var(--ls-h2)', lineHeight: 1.0, maxWidth: 680, margin: 0, color: '#fff' }}>
              Chilometri che ti fanno <em style={{ fontStyle: 'italic', fontVariationSettings: "'wght' 320", color: 'var(--lilac)' }}>sentire viva.</em>
            </h2>
          </div>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', letterSpacing: '-0.16px', maxWidth: 340, textAlign: 'right', lineHeight: 1.6, margin: 0 }}>
            Dalle corse mattutine alle maratone. Non sempre vanno bene — però a volte ci sono quelle corse che ti ricordano perché lo fai.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {RUNS.map((run, i) => <RunCard key={i} run={run} i={i} />)}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Recipes, Runs, SectionHead, Quiz });