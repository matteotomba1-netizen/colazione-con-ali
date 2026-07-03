/* @ds-bundle: {"format":3,"namespace":"ColazioneConAliDesignSystem_665c4d","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Modal","sourcePath":"components/core/Modal.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"RecipeCard","sourcePath":"components/core/RecipeCard.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"f18eefdcb35e","components/core/Button.jsx":"549dececdfc8","components/core/Modal.jsx":"f52e8a59c06b","components/core/Pill.jsx":"8f75a303dd0d","components/core/RecipeCard.jsx":"7cf296cefd26","components/core/Tabs.jsx":"20518a946a5b","ui_kits/landing/app.jsx":"c401f2b09f9e","ui_kits/landing/carica-contenuti.js":"fd408e7068e4","ui_kits/landing/contenuti.js":"967c065e1c31","ui_kits/landing/sections-bottom.jsx":"52ac9a53f7b6","ui_kits/landing/sections-mid.jsx":"5b49ca19b2fc","ui_kits/landing/sections-top.jsx":"5d3973b38587"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ColazioneConAliDesignSystem_665c4d = window.ColazioneConAliDesignSystem_665c4d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — mono UPPERCASE label. Two tones: "dark" (overlay on imagery) and "plain" (muted label).
 */
function Badge({
  children,
  tone = 'dark',
  ...rest
}) {
  const tones = {
    dark: {
      background: 'rgba(0,0,0,0.7)',
      color: '#fff',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      padding: '5px 10px',
      borderRadius: 20
    },
    plain: {
      background: 'transparent',
      color: '#8a8a8a',
      padding: 0
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: tone === 'dark' ? 11 : 11,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.6px',
      display: 'inline-block',
      ...tones[tone]
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — Colazione con Ali pill button.
 * Variants: "pill" (solid black), "ghost" (outlined), "warm" (sunrise gradient).
 */
function Button({
  children,
  variant = 'pill',
  size = 'md',
  arrow = false,
  onDark = false,
  ...rest
}) {
  const pad = size === 'sm' ? '10px 18px' : '12px 22px';
  const fs = size === 'sm' ? 13 : 14;
  const base = {
    fontFamily: "'Inter', system-ui, sans-serif",
    fontVariationSettings: "'wght' 500",
    fontSize: fs,
    letterSpacing: '-0.14px',
    lineHeight: 1,
    padding: pad,
    borderRadius: 50,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    border: 'none',
    cursor: 'pointer',
    transition: 'transform 200ms cubic-bezier(0.34,1.56,0.64,1), box-shadow 200ms ease, background 300ms ease, color 300ms ease',
    textDecoration: 'none',
    whiteSpace: 'nowrap'
  };
  const variants = {
    pill: {
      background: '#000',
      color: '#fff'
    },
    ghost: {
      background: 'transparent',
      color: onDark ? '#fff' : '#000',
      border: `1.5px solid ${onDark ? '#fff' : '#000'}`
    },
    warm: {
      background: 'linear-gradient(135deg, #FFD46B 0%, #FF7E8A 60%, #E84393 100%)',
      color: '#fff'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      ...base,
      ...variants[variant]
    }
  }, rest), children, arrow && /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 11L11 3M11 3H5M11 3V9",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Modal.jsx
try { (() => {
/**
 * Modal — glass-backdrop dialog with rounded white card and rotating close button.
 */
function Modal({
  open,
  onClose,
  children,
  maxWidth = 960
}) {
  if (!open) return null;
  const [closeHover, setCloseHover] = React.useState(false);
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);
  return /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      background: 'rgba(0,0,0,0.6)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 32,
      animation: 'cca-fade 280ms cubic-bezier(0.16,1,0.3,1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      width: `min(${maxWidth}px, 100%)`,
      maxHeight: '90vh',
      overflow: 'auto',
      borderRadius: 20,
      position: 'relative',
      boxShadow: '0 40px 120px rgba(0,0,0,0.25)',
      animation: 'cca-rise 380ms cubic-bezier(0.16,1,0.3,1)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Chiudi",
    onMouseEnter: () => setCloseHover(true),
    onMouseLeave: () => setCloseHover(false),
    style: {
      position: 'absolute',
      top: 16,
      right: 16,
      zIndex: 2,
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: closeHover ? '#000' : '#fff',
      color: closeHover ? '#fff' : '#000',
      border: '1px solid #ededed',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer',
      transform: closeHover ? 'rotate(90deg)' : 'rotate(0)',
      transition: 'background 200ms ease, color 200ms ease, transform 300ms cubic-bezier(0.34,1.56,0.64,1)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 2L12 12M12 2L2 12",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }))), children, /*#__PURE__*/React.createElement("style", null, `@keyframes cca-fade{from{opacity:0}to{opacity:1}}@keyframes cca-rise{from{transform:translateY(28px) scale(0.97);opacity:0}to{transform:none;opacity:1}}`)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Modal.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pill — small rounded meta chip with an optional color dot.
 * Used for recipe metadata (time, portions, kcal).
 */
function Pill({
  children,
  dotColor,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      border: '1px solid #ededed',
      borderRadius: 50,
      padding: '8px 16px',
      fontSize: 13,
      letterSpacing: '-0.13px',
      fontFamily: "'Inter', system-ui, sans-serif",
      fontVariationSettings: "'wght' 340",
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      color: '#000'
    }
  }, rest), dotColor && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: dotColor,
      flex: 'none'
    },
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/core/RecipeCard.jsx
try { (() => {
const GRADIENTS = {
  warm: 'linear-gradient(135deg, #FFD46B 0%, #FF7E8A 60%, #E84393 100%)',
  peach: 'linear-gradient(135deg, #FFCBA0 0%, #FF7E8A 50%, #FFD46B 100%)',
  cool: 'linear-gradient(135deg, #C39BFF 0%, #FF4F8E 100%)',
  sky: 'linear-gradient(135deg, #9BC9FF 0%, #C39BFF 50%, #FF4F8E 100%)',
  berry: 'linear-gradient(135deg, #6E2A6F 0%, #E84393 60%, #FFB088 100%)',
  cream: 'linear-gradient(135deg, #FFF3E2 0%, #FFD46B 60%, #FF7E8A 100%)'
};

/**
 * RecipeCard — the signature card. Supply `image` OR a `gradient` key.
 * Hover lift + image zoom + arrow rotate are handled with inline state.
 */
function RecipeCard({
  label,
  title,
  meta,
  badge = 'Ricetta',
  image,
  gradient = 'warm',
  fillText,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: '#f7f7f7',
      borderRadius: 12,
      border: `1px solid ${hover ? 'rgba(0,0,0,0.1)' : '#ededed'}`,
      overflow: 'hidden',
      textAlign: 'left',
      cursor: 'pointer',
      padding: 0,
      width: '100%',
      boxShadow: hover ? '0 16px 48px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.06)' : 'none',
      transition: 'border-color 250ms ease, box-shadow 400ms cubic-bezier(0.16,1,0.3,1)',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14,
      zIndex: 1,
      background: 'rgba(0,0,0,0.7)',
      color: '#fff',
      backdropFilter: 'blur(8px)',
      padding: '5px 10px',
      borderRadius: 20,
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.6px'
    }
  }, badge), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 14,
      right: 14,
      zIndex: 1,
      fontSize: 18,
      lineHeight: 1,
      color: hover ? '#FF4F8E' : 'rgba(255,255,255,0.8)',
      transform: hover ? 'scale(1.25)' : 'scale(1)',
      transition: 'transform 300ms cubic-bezier(0.34,1.56,0.64,1), color 300ms ease'
    },
    "aria-hidden": "true"
  }, "\u2661"), image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transform: hover ? 'scale(1.05)' : 'scale(1)',
      transition: 'transform 600ms cubic-bezier(0.16,1,0.3,1)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'grid',
      placeItems: 'center',
      background: GRADIENTS[gradient] || GRADIENTS.warm,
      color: '#fff',
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 12,
      letterSpacing: '0.6px',
      textTransform: 'uppercase'
    }
  }, fillText || title)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 20px'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.6px',
      color: '#8a8a8a'
    }
  }, label), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "'Inter', system-ui, sans-serif",
      fontSize: 16,
      fontVariationSettings: "'wght' 480",
      letterSpacing: '-0.16px',
      marginTop: 6,
      lineHeight: 1.3,
      margin: '6px 0 0'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: '#5a5a5a',
      letterSpacing: '-0.13px'
    }
  }, meta), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
      border: `1px solid ${hover ? '#000' : '#c9c9c9'}`,
      flexShrink: 0,
      background: hover ? '#000' : 'transparent',
      color: hover ? '#fff' : '#000',
      transform: hover ? 'rotate(-45deg)' : 'rotate(0)',
      transition: 'background 200ms ease, color 200ms ease, border-color 200ms ease, transform 300ms cubic-bezier(0.34,1.56,0.64,1)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 9L9 3M9 3H4.5M9 3V7.5",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round"
  }))))));
}
Object.assign(__ds_scope, { RecipeCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/RecipeCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
/**
 * Tabs — segmented pill switcher with mono counts.
 * items: [{ id, label, count }]
 */
function Tabs({
  items = [],
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: 4,
      background: '#f7f7f7',
      borderRadius: 50,
      padding: 4,
      width: 'fit-content'
    }
  }, items.map(it => {
    const selected = it.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": selected,
      onClick: () => onChange && onChange(it.id),
      style: {
        padding: '10px 20px',
        borderRadius: 50,
        border: 'none',
        cursor: 'pointer',
        fontFamily: "'Inter', system-ui, sans-serif",
        fontSize: 14,
        fontVariationSettings: "'wght' 440",
        letterSpacing: '-0.14px',
        background: selected ? '#000' : 'transparent',
        color: selected ? '#fff' : '#5a5a5a',
        transition: 'background 250ms ease, color 250ms ease'
      }
    }, it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10,
        marginLeft: 6,
        opacity: 0.6
      }
    }, it.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/app.jsx
try { (() => {
/* app.jsx — assembles the full landing page */
function LandingApp() {
  React.useEffect(() => {
    const els = [...document.querySelectorAll('.reveal')];
    const vh = window.innerHeight || 800;
    // reveal anything already in (or near) the viewport on mount — robust against IO not firing for above-the-fold content
    els.forEach(el => {
      if (el.getBoundingClientRect().top < vh - 40) el.classList.add('in');
    });
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          obs.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });
    els.forEach(el => {
      if (!el.classList.contains('in')) obs.observe(el);
    });
    // safety net: never leave content invisible
    const t = setTimeout(() => els.forEach(el => el.classList.add('in')), 2500);
    return () => {
      obs.disconnect();
      clearTimeout(t);
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.Nav, null), /*#__PURE__*/React.createElement(window.Hero, null), /*#__PURE__*/React.createElement(window.Marquee, null), /*#__PURE__*/React.createElement(window.Stats, null), /*#__PURE__*/React.createElement(window.Recipes, null), /*#__PURE__*/React.createElement(window.Runs, null), /*#__PURE__*/React.createElement(window.Partner, null), /*#__PURE__*/React.createElement(window.About, null), /*#__PURE__*/React.createElement(window.Collab, null), /*#__PURE__*/React.createElement(window.Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(LandingApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/carica-contenuti.js
try { (() => {
/* ============================================================================
   carica-contenuti.js  —  NON TOCCARE QUESTO FILE 🙏
   ----------------------------------------------------------------------------
   Quando il sito è online, questo legge i contenuti salvati dal pannello /admin
   (il file content/contenuti.json) e sovrascrive quelli di default.
   Se il file non esiste (es. apri il sito con doppio clic dal computer),
   restano i contenuti di default di contenuti.js. Tutto continua a funzionare.
   ============================================================================ */
(function () {
  try {
    var req = new XMLHttpRequest();
    // sincrono di proposito: i dati devono essere pronti PRIMA che le sezioni si disegnino
    req.open('GET', '../../content/contenuti.json', false);
    req.send(null);
    if (req.status >= 200 && req.status < 300 && req.responseText) {
      var d = JSON.parse(req.responseText);
      if (d.numeri) window.NUMERI = d.numeri;
      if (d.ricette) window.RICETTE = d.ricette;
      if (d.corse) window.CORSE = d.corse;
      if (d.prozis) window.PROZIS = d.prozis;
      if (d.social) window.SOCIAL = d.social;
    }
  } catch (e) {
    /* nessun magazzino online: si usano i default di contenuti.js */
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/carica-contenuti.js", error: String((e && e.message) || e) }); }

// ui_kits/landing/contenuti.js
try { (() => {
/* ============================================================================

   📋  CONTENUTI DEL SITO “Colazione con Ali”  —  l’unico file da compilare

   ----------------------------------------------------------------------------
   CIAO ALI! Qui dentro c’è TUTTO il testo che puoi cambiare sul sito:
   i numeri in alto, le ricette, le corse, il codice Prozis e i tuoi social.

   COME FUNZIONA:
   •  Cambia solo il testo DENTRO le " virgolette ".
   •  NON cancellare le virgole , a fine riga.
   •  Se nel testo c’è un apostrofo (es. d'arachidi) va benissimo:
      tieni le virgolette doppie " " attorno, come negli esempi.
   •  Salva il file → il sito si aggiorna.

   Il file è diviso in 5 PARTI. Vai a quella che ti serve. 👇

   ============================================================================ */

/* ============================================================================
   PARTE 1 ·  I NUMERI in alto (la “prova social”)
   Cambia i numeri quando crescono. Lascia 4 voci.
   ============================================================================ */
window.NUMERI = [{
  numero: "6.392",
  testo: "follower Instagram"
}, {
  numero: "183",
  testo: "ricette & post"
}, {
  numero: "11",
  testo: "colazioni pubblicate"
}, {
  numero: "4",
  testo: "corse nel 2026"
}];

/* ============================================================================
   PARTE 2 ·  LE RICETTE   (la parte che aggiornerai più spesso)

   Per aggiungere una ricetta: COPIA un blocco { ... }, INCOLLALO sotto
   l’ultimo, e cambia il testo. Per toglierne una: cancella il suo blocco.

   I campi:
     titolo    →  nome ricetta             es. "Overnight Mugcake PB & J"
     etichetta →  categoria breve          es. "Overnight · Proteica"
     tempo     →  tempi / info             es. "12 min · ~420 kcal"
     badge     →  etichettina sulla foto   es. "Ricetta" (o "Featured", "Forno")
     foto      →  link a una foto (vedi GUIDA-PER-ALISSA.md). Vuoto "" = gradiente colorato.
     video     →  link al reel/post Instagram (opzionale). Vuoto "" = nessun pulsante.
     procedimento → i passaggi, UNO PER RIGA. Vuoto "" = "in arrivo".
   ============================================================================ */
window.RICETTE = [
/* ----- BLOCCO-MODELLO — copialo per una ricetta nuova -----
{
  titolo:    "Nome della ricetta",
  etichetta: "Categoria · sottocategoria",
  tempo:     "es. 10 min · riposo notte",
  badge:     "Ricetta",
  foto:      "",
  video:     "",
  procedimento: `Primo passaggio della ricetta.
Secondo passaggio.
Terzo passaggio.`,
},
----------------------------------------------------------- */

{
  titolo: "Overnight Mugcake PB & J",
  etichetta: "Overnight · Proteica",
  tempo: "12 min · ~420 kcal",
  badge: "Featured",
  foto: "",
  video: "https://www.instagram.com/colazioneconali",
  procedimento: `Unisci farina, cannella e lievito. Aggiungi la purea di mela e il latte fino a un composto liscio.
Cuoci in microonde 2 minuti (700–800 W), aprendo lo sportello un paio di volte.
Unisci yogurt e burro d'arachidi: crea il secondo strato sulla base raffreddata.
Termina con la marmellata. Riposo in frigo tutta la notte. La mattina, un filo di PB e buona colazione!`
}, {
  titolo: "Mugcake Banana & Burro d'Arachidi",
  etichetta: "Overnight · Bagnomaria",
  tempo: "15–20 min",
  badge: "Ricetta",
  foto: "",
  video: "",
  procedimento: ""
}, {
  titolo: "Choco & Cookie Overnight a Strati",
  etichetta: "Overnight · Strati",
  tempo: "5 min · riposo notte",
  badge: "Ricetta",
  foto: "",
  video: "",
  procedimento: ""
}, {
  titolo: "Plumcake alle Mele Monoporzione",
  etichetta: "Friggitrice · Monoporzione",
  tempo: "25 min cottura",
  badge: "Ricetta",
  foto: "",
  video: "",
  procedimento: ""
}, {
  titolo: "Lemon & PB Overnight Mug Cake",
  etichetta: "Overnight · Microonde",
  tempo: "2 min micro",
  badge: "Ricetta",
  foto: "",
  video: "",
  procedimento: ""
}, {
  titolo: "Tiramisù Monoporzione ai Plasmon",
  etichetta: "No-bake · Veloce",
  tempo: "5 min · riposo 2h",
  badge: "Ricetta",
  foto: "",
  video: "",
  procedimento: ""
}, {
  titolo: "Crostata al Cacao con Ricotta",
  etichetta: "Forno · La preferita",
  tempo: "40 min · stampo 24cm",
  badge: "Forno",
  foto: "",
  video: "",
  procedimento: ""
}, {
  titolo: "Giga Cookie con Cuore al Cocco",
  etichetta: "Friggitrice · Cuore morbido",
  tempo: "12–15 min",
  badge: "Ricetta",
  foto: "",
  video: "",
  procedimento: ""
}];

/* ============================================================================
   PARTE 3 ·  LE CORSE

   Stesso metodo delle ricette: copia un blocco, incolla, cambia il testo.
   I campi:
     titolo    →  nome gara             es. "Milano Marathon"
     etichetta →  tipo · luogo          es. "Maratona · Milano"
     km        →  distanza              es. "42,195"
     info      →  data o passo          es. "15 · 06 · 26"  oppure  "5′01″/km"
     stato     →  "Iscritta" · "Completata" · "In arrivo" · "In valutazione"
   ============================================================================ */
window.CORSE = [{
  titolo: "Milano Marathon",
  etichetta: "Maratona · Milano",
  km: "42,195",
  info: "15 · 06 · 26",
  stato: "Iscritta"
}, {
  titolo: "StraMilano 10K",
  etichetta: "10K · Milano",
  km: "6,60",
  info: "5′01″/km",
  stato: "Completata"
}, {
  titolo: "Bologna Run — Due Torri",
  etichetta: "10K · Bologna",
  km: "10,0",
  info: "22 · 09 · 26",
  stato: "In arrivo"
}, {
  titolo: "Appennino Trail 25K",
  etichetta: "Trail · Appennino",
  km: "25,0",
  info: "04 · 11 · 26",
  stato: "In valutazione"
}];

/* ============================================================================
   PARTE 4 ·  PROZIS  (codice sconto e link)
   ============================================================================ */
window.PROZIS = {
  codice: "ALI03",
  link: "https://www.prozis.com/it/it/?ot=AFFIT2402&utm_source=prz_affiliate&utm_medium=referral&utm_content=link_in_bio&utm_campaign=al_ba_pr_sa"
};

/* ============================================================================
   PARTE 5 ·  I TUOI SOCIAL  (i link dei pulsanti)
   Metti "#" se un social non ce l’hai ancora.
   ============================================================================ */
window.SOCIAL = {
  instagram: "https://www.instagram.com/colazioneconali",
  tiktok: "#",
  strava: "#"
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/contenuti.js", error: String((e && e.message) || e) }); }

// ui_kits/landing/sections-bottom.jsx
try { (() => {
/* sections-bottom.jsx — Prozis partner band, About, Collab CTA, Footer */
const NS_B = window.ColazioneConAliDesignSystem_665c4d || {};
const {
  Button: BtnB
} = NS_B;
const IGU = window.SOCIAL && window.SOCIAL.instagram || window.IG_URL;
const PRZ = window.PROZIS && window.PROZIS.link || window.PROZIS_URL;
const COD = window.PROZIS && window.PROZIS.codice || 'ALI03';
const SOC = window.SOCIAL || {};

/* ---------- PROZIS PARTNER BAND ---------- */
function Partner() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '110px 32px',
      background: 'var(--cream)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse 60% 80% at 90% 20%, rgba(255,176,136,0.5) 0%, transparent 60%), radial-gradient(ellipse 50% 70% at 5% 90%, rgba(255,79,142,0.25) 0%, transparent 55%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      position: 'relative',
      maxWidth: 1040,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.2fr 0.8fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: 'var(--grey-40)',
      marginBottom: 18
    }
  }, "Partnership ufficiale \xB7 2026"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(34px,4vw,52px)',
      fontVariationSettings: "'wght' 380",
      letterSpacing: '-1px',
      lineHeight: 1.05,
      margin: '0 0 18px'
    }
  }, "La prima collaborazione:", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      fontVariationSettings: "'wght' 340"
    }
  }, "Prozis.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--grey-60)',
      letterSpacing: '-0.17px',
      lineHeight: 1.6,
      maxWidth: 480,
      margin: '0 0 28px'
    }
  }, "Gli ingredienti dietro le colazioni e il carburante delle corse. Usa il codice qui sotto per il tuo sconto su tutto lo shop Prozis."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 14,
      background: '#000',
      color: '#fff',
      borderRadius: 50,
      padding: '10px 14px 10px 22px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      color: 'rgba(255,255,255,0.55)'
    }
  }, "Codice"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      fontVariationSettings: "'wght' 540",
      letterSpacing: '1px',
      fontFamily: "'JetBrains Mono', monospace"
    }
  }, COD)), /*#__PURE__*/React.createElement("a", {
    href: PRZ,
    target: "_blank",
    rel: "noopener",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(BtnB, {
    variant: "warm",
    arrow: true
  }, "Vai su Prozis")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 220,
      height: 220,
      borderRadius: 28,
      background: '#000',
      display: 'grid',
      placeItems: 'center',
      boxShadow: '0 30px 80px rgba(0,0,0,0.22)',
      transform: 'rotate(-4deg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontFamily: "'JetBrains Mono', monospace",
      letterSpacing: '3px',
      color: 'rgba(255,255,255,0.5)'
    }
  }, "PARTNER"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 42,
      fontVariationSettings: "'wght' 600",
      letterSpacing: '-1px',
      marginTop: 6
    }
  }, "PROZIS"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--sun)',
      marginTop: 8,
      fontFamily: "'JetBrains Mono', monospace"
    }
  }, "cod. ", COD))))));
}

/* ---------- ABOUT ---------- */
function About() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      padding: '140px 32px',
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '0.5fr 0.5fr',
      gap: 72,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      color: 'var(--grey-40)',
      display: 'inline-block',
      marginBottom: 22,
      border: '1px solid var(--grey-08)',
      padding: '8px 16px',
      borderRadius: 50
    }
  }, "Chi sono \xB7 Alissa"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(28px,3.2vw,42px)',
      fontVariationSettings: "'wght' 340",
      letterSpacing: '-0.42px',
      lineHeight: 1.18,
      margin: 0
    }
  }, "22 anni, Padova. Amo allenarmi e fare colazione \u2014 e raccontarvi entrambe le cose, ogni mattina.")), /*#__PURE__*/React.createElement("div", {
    className: "reveal d2"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 25,
      fontVariationSettings: "'wght' 340",
      letterSpacing: '-0.26px',
      lineHeight: 1.35,
      margin: 0
    }
  }, "\"Perch\xE9 correre con lo stomaco vuoto quando puoi ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      fontVariationSettings: "'wght' 320",
      color: 'var(--magenta)'
    }
  }, "mettere le ali"), " alle tue mattine?\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 28,
      marginTop: 48,
      paddingTop: 30,
      borderTop: '1px solid var(--grey-08)'
    }
  }, [['6.392', 'follower'], ['11', 'ricette'], ['4', 'corse 2026']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      fontVariationSettings: "'wght' 400",
      letterSpacing: '-0.8px',
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: 'var(--grey-40)',
      marginTop: 8
    }
  }, l)))))));
}

/* ---------- COLLAB CTA ---------- */
function Collab() {
  return /*#__PURE__*/React.createElement("section", {
    id: "collab",
    style: {
      padding: '120px 32px',
      background: '#000',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(circle at 50% 0%, rgba(232,67,147,0.22) 0%, transparent 55%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      position: 'relative',
      maxWidth: 760,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: 'rgba(255,255,255,0.5)',
      marginBottom: 22
    }
  }, "Brand & collab \xB7 Lavoriamo insieme"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(36px,5vw,64px)',
      fontVariationSettings: "'wght' 380",
      letterSpacing: '-1.2px',
      lineHeight: 1.05,
      margin: '0 0 22px',
      color: '#fff'
    }
  }, "Hai un brand che parla la lingua delle ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      background: 'var(--grad-rose)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    }
  }, "mattine buone?")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'rgba(255,255,255,0.65)',
      letterSpacing: '-0.18px',
      lineHeight: 1.6,
      maxWidth: 540,
      margin: '0 auto 36px'
    }
  }, "Ricette sponsorizzate, recensioni prodotto, contenuti per le corse, reel e storie. Una community calda, reale e in crescita ti aspetta."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:colazioneconali@gmail.com",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(BtnB, {
    variant: "pill",
    arrow: true,
    onDark: true,
    style: {
      background: '#fff',
      color: '#000'
    }
  }, "Scrivimi per collaborare")), /*#__PURE__*/React.createElement("a", {
    href: IGU,
    target: "_blank",
    rel: "noopener",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(BtnB, {
    variant: "ghost",
    onDark: true
  }, "Vedi il profilo"))), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: 'rgba(255,255,255,0.4)',
      marginTop: 28
    }
  }, "colazioneconali@gmail.com \xB7 @colazioneconali")));
}

/* ---------- FOOTER ---------- */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--white)',
      borderTop: '1px solid var(--grey-08)',
      padding: '64px 32px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 19,
      fontVariationSettings: "'wght' 520",
      letterSpacing: '-0.4px',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: '#000',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      fontSize: 13
    }
  }, "\u2726"), "Colazione con Ali"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--grey-60)',
      letterSpacing: '-0.14px',
      maxWidth: 280,
      lineHeight: 1.6,
      margin: 0
    }
  }, "Ricette, corse e mattine che hanno il sapore di qualcosa di buono. Sempre.")), [['Esplora', [['Ricette', '#ricette'], ['Le Corse', '#corse'], ['Chi sono', '#about']]], ['Partner', [['Prozis · ' + COD, PRZ]]], ['Social', [['Instagram', IGU], ['TikTok', SOC.tiktok || '#'], ['Strava', SOC.strava || '#']]]].map(([h, links]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("h4", {
    className: "mono",
    style: {
      color: 'var(--grey-40)',
      margin: '0 0 18px'
    }
  }, h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, links.map(([t, u]) => /*#__PURE__*/React.createElement("li", {
    key: t
  }, /*#__PURE__*/React.createElement("a", {
    href: u,
    target: u.startsWith('http') ? '_blank' : undefined,
    rel: "noopener",
    style: {
      fontSize: 14,
      color: 'var(--text-primary)',
      textDecoration: 'none',
      fontVariationSettings: "'wght' 400"
    },
    className: "footer-link"
  }, t))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '56px auto 0',
      paddingTop: 24,
      borderTop: '1px solid var(--grey-08)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'var(--grey-40)',
      fontSize: 13,
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Colazione con Ali. Fatta con \u2661 e burro di arachidi."), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 10
    }
  }, "Svegliati \xB7 Mangia \xB7 Vola")));
}
Object.assign(window, {
  Partner,
  About,
  Collab,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/sections-bottom.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/sections-mid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* sections-mid.jsx — Le Colazioni (recipe grid) + Le Corse (run cards) */
const NS_M = window.ColazioneConAliDesignSystem_665c4d || {};
const {
  RecipeCard,
  Tabs,
  Modal
} = NS_M;

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
  gradient: GRAD_CICLO[i % GRAD_CICLO.length]
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
  grad: GRAD_CORSE[i % GRAD_CORSE.length]
}));
function SectionHead({
  eyebrow,
  title,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 40,
      marginBottom: 48,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: 'var(--grey-40)',
      marginBottom: 18
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-h2)',
      fontVariationSettings: "'wght' 380",
      letterSpacing: 'var(--ls-h2)',
      lineHeight: 1.0,
      maxWidth: 680,
      margin: 0
    }
  }, title)), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--grey-60)',
      letterSpacing: '-0.16px',
      maxWidth: 340,
      textAlign: 'right',
      lineHeight: 1.6,
      margin: 0
    }
  }, sub));
}

/* ---------- RECIPE MODAL (procedimento + reel) ---------- */
const PLAY_ICON = /*#__PURE__*/React.createElement("svg", {
  width: "15",
  height: "15",
  viewBox: "0 0 16 16",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 3.5v9l8-4.5-8-4.5z",
  fill: "currentColor"
}));
function RecipeModal({
  recipe,
  onClose
}) {
  if (!recipe) return null;
  const steps = (recipe.procedimento || '').split('\n').map(s => s.trim()).filter(Boolean);
  const GRADS = {
    warm: 'linear-gradient(135deg,#FFD46B,#FF7E8A 60%,#E84393)',
    peach: 'linear-gradient(135deg,#FFCBA0,#FF7E8A 50%,#FFD46B)',
    cool: 'linear-gradient(135deg,#C39BFF,#FF4F8E)',
    sky: 'linear-gradient(135deg,#9BC9FF,#C39BFF 50%,#FF4F8E)',
    berry: 'linear-gradient(135deg,#6E2A6F,#E84393 60%,#FFB088)',
    cream: 'linear-gradient(135deg,#FFF3E2,#FFD46B 60%,#FF7E8A)'
  };
  return /*#__PURE__*/React.createElement(Modal, {
    open: true,
    onClose: onClose,
    maxWidth: 680
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16/7',
      overflow: 'hidden'
    }
  }, recipe.image ? /*#__PURE__*/React.createElement("img", {
    src: recipe.image,
    alt: recipe.title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: GRADS[recipe.gradient] || GRADS.warm
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '36px 44px 44px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: 'var(--grey-40)',
      marginBottom: 12
    }
  }, recipe.label || 'Ricetta'), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(26px,3.4vw,38px)',
      fontVariationSettings: "'wght' 400",
      letterSpacing: '-0.7px',
      lineHeight: 1.1,
      margin: '0 0 12px'
    }
  }, recipe.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      alignItems: 'center',
      marginBottom: 26
    }
  }, recipe.meta && /*#__PURE__*/React.createElement("span", {
    style: {
      border: '1px solid var(--grey-08)',
      borderRadius: 50,
      padding: '7px 15px',
      fontSize: 13,
      letterSpacing: '-0.13px'
    }
  }, recipe.meta), recipe.video && /*#__PURE__*/React.createElement("a", {
    href: recipe.video,
    target: "_blank",
    rel: "noopener",
    style: {
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--grad-rose)',
      color: '#fff',
      borderRadius: 50,
      padding: '8px 17px',
      fontSize: 13,
      fontVariationSettings: "'wght' 520"
    }
  }, PLAY_ICON, " Guarda il reel su Instagram")), steps.length > 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 14,
      fontFamily: "var(--font-mono)",
      textTransform: 'uppercase',
      letterSpacing: '0.6px',
      color: 'var(--grey-40)',
      margin: '0 0 16px'
    }
  }, "Procedimento"), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      counterReset: 'step'
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '34px 1fr',
      gap: 14,
      padding: '14px 0',
      borderBottom: '1px solid var(--grey-08)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: 'var(--magenta)',
      fontWeight: 600
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      letterSpacing: '-0.15px',
      lineHeight: 1.6,
      margin: 0
    }
  }, s))))) : /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--grey-60)',
      lineHeight: 1.6,
      margin: 0
    }
  }, "Il procedimento completo arriva presto.", recipe.video ? ' Intanto guarda il reel qui sopra! 🎬' : '')));
}

/* ---------- RECIPES ---------- */
function Recipes() {
  const [openIdx, setOpenIdx] = React.useState(null);
  return /*#__PURE__*/React.createElement("section", {
    id: "ricette",
    style: {
      padding: '120px 32px',
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Le Colazioni \xB7 001",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Colazioni che fanno", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
      style: {
        fontStyle: 'italic',
        fontVariationSettings: "'wght' 320"
      }
    }, "saltare gi\xF9 dal letto.")),
    sub: "Overnight oats, mug cake, plumcake e dolci da forno \u2014 proteici, golosi e pronti quando suona la sveglia."
  }), /*#__PURE__*/React.createElement("div", {
    className: "recipe-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 20
    }
  }, RECIPES.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "reveal",
    style: {
      transitionDelay: `${i % 4 * 70}ms`
    }
  }, /*#__PURE__*/React.createElement(RecipeCard, _extends({}, r, {
    onClick: () => setOpenIdx(i)
  })))))), /*#__PURE__*/React.createElement(RecipeModal, {
    recipe: openIdx === null ? null : RECIPES[openIdx],
    onClose: () => setOpenIdx(null)
  }));
}

/* ---------- RUNS ---------- */
function RunCard({
  run,
  i
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      transitionDelay: `${i % 4 * 70}ms`,
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.12)',
      borderRadius: 14,
      overflow: 'hidden',
      boxShadow: hover ? '0 16px 48px rgba(0,0,0,0.3)' : 'none',
      transition: 'box-shadow 400ms cubic-bezier(0.16,1,0.3,1), border-color 250ms ease',
      borderColor: hover ? 'rgba(255,255,255,0.28)' : 'rgba(255,255,255,0.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '16/10',
      background: run.grad,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>\")",
      mixBlendMode: 'overlay'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14,
      background: 'rgba(0,0,0,0.55)',
      color: '#fff',
      backdropFilter: 'blur(8px)',
      padding: '5px 12px',
      borderRadius: 20,
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.4px'
    }
  }, run.date), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 14,
      left: 14,
      color: '#fff',
      fontSize: 30,
      fontVariationSettings: "'wght' 500",
      letterSpacing: '-0.6px',
      textShadow: '0 2px 12px rgba(0,0,0,0.25)'
    }
  }, run.km, " km")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px 18px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      color: 'rgba(255,255,255,0.5)'
    }
  }, run.label), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16,
      fontVariationSettings: "'wght' 480",
      letterSpacing: '-0.16px',
      margin: '6px 0 0',
      color: '#fff',
      lineHeight: 1.3
    }
  }, run.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: run.status === 'Iscritta' || run.status === 'Completata' ? 'var(--mint)' : 'rgba(255,255,255,0.55)'
    }
  }, run.status === 'Iscritta' || run.status === 'Completata' ? '✓ ' : '', run.status), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      border: '1px solid rgba(255,255,255,0.3)',
      display: 'grid',
      placeItems: 'center',
      color: '#fff',
      transform: hover ? 'rotate(-45deg)' : 'none',
      transition: 'transform 300ms cubic-bezier(0.34,1.56,0.64,1)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 9L9 3M9 3H4.5M9 3V7.5",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round"
  }))))));
}
function Runs() {
  return /*#__PURE__*/React.createElement("section", {
    id: "corse",
    style: {
      padding: '120px 32px',
      background: '#000',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(circle at 80% 15%, rgba(255,126,138,0.16) 0%, transparent 42%), radial-gradient(circle at 12% 88%, rgba(195,155,255,0.16) 0%, transparent 42%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 40,
      marginBottom: 48,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: 'rgba(255,255,255,0.5)',
      marginBottom: 18
    }
  }, "Le Corse \xB7 002"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-h2)',
      fontVariationSettings: "'wght' 380",
      letterSpacing: 'var(--ls-h2)',
      lineHeight: 1.0,
      maxWidth: 680,
      margin: 0,
      color: '#fff'
    }
  }, "Chilometri che ti fanno ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      fontVariationSettings: "'wght' 320",
      color: 'var(--lilac)'
    }
  }, "sentire viva."))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'rgba(255,255,255,0.6)',
      letterSpacing: '-0.16px',
      maxWidth: 340,
      textAlign: 'right',
      lineHeight: 1.6,
      margin: 0
    }
  }, "Dalle corse mattutine alle maratone. Non sempre vanno bene \u2014 per\xF2 a volte ci sono quelle corse che ti ricordano perch\xE9 lo fai.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 20
    }
  }, RUNS.map((run, i) => /*#__PURE__*/React.createElement(RunCard, {
    key: i,
    run: run,
    i: i
  })))));
}
Object.assign(window, {
  Recipes,
  Runs,
  SectionHead
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/sections-mid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/sections-top.jsx
try { (() => {
/* sections-top.jsx — Nav, Hero, Marquee, Stats band
   Mounted after the DS bundle; pulls Button/Pill from the namespace. */
const NS = window.ColazioneConAliDesignSystem_665c4d || {};
const {
  Button,
  Pill
} = NS;
const IG_URL = window.SOCIAL && window.SOCIAL.instagram || 'https://www.instagram.com/colazioneconali';
const PROZIS_URL = window.PROZIS && window.PROZIS.link || '#';

/* ---------- tiny inline icons ---------- */
function IgGlyph({
  s = 16
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2.5",
    y: "2.5",
    width: "19",
    height: "19",
    rx: "5.5",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4.2",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.4",
    cy: "6.6",
    r: "1.3",
    fill: "currentColor"
  }));
}
function Arrow({
  s = 14
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 14 14",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 11L11 3M11 3H5M11 3V9",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

/* ---------- NAV ---------- */
function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      height: 72,
      display: 'flex',
      alignItems: 'center',
      padding: '0 32px',
      borderBottom: `1px solid ${scrolled ? 'var(--grey-08)' : 'transparent'}`,
      background: scrolled ? 'rgba(255,255,255,0.82)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
      transition: 'background 400ms ease, backdrop-filter 400ms ease, border-color 400ms ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 1280,
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      color: 'inherit',
      textDecoration: 'none',
      fontSize: 19,
      fontVariationSettings: "'wght' 520",
      letterSpacing: '-0.4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: '#000',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      fontSize: 13
    }
  }, "\u2726"), "Colazione con Ali"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 30,
      alignItems: 'center'
    }
  }, [['Ricette', '#ricette'], ['Le Corse', '#corse'], ['Chi sono', '#about'], ['Collabora', '#collab']].map(([t, h]) => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: h,
    className: "nav-link",
    style: {
      fontSize: 14,
      color: 'var(--text-primary)',
      textDecoration: 'none',
      fontVariationSettings: "'wght' 420",
      letterSpacing: '-0.14px'
    }
  }, t)), /*#__PURE__*/React.createElement("a", {
    href: IG_URL,
    target: "_blank",
    rel: "noopener",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    arrow: true,
    size: "sm"
  }, /*#__PURE__*/React.createElement(IgGlyph, {
    s: 15
  }), "Seguimi")))));
}

/* ---------- HERO ---------- */
function FloatCard({
  style,
  children,
  delay = 0
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      background: 'var(--glass-strong)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid var(--glass-border)',
      borderRadius: 18,
      boxShadow: '0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.08)',
      animation: `floaty ${6 + delay}s ease-in-out ${-delay}s infinite`,
      ...style
    }
  }, children);
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '140px 32px 100px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/bg-sunrise-warm.png",
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0.15) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "orb",
    style: {
      width: 320,
      height: 320,
      background: 'var(--sun)',
      top: '2%',
      left: '4%',
      animationDuration: '16s'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "orb",
    style: {
      width: 240,
      height: 240,
      background: 'var(--coral)',
      top: '14%',
      right: '8%',
      animationDuration: '20s',
      animationDelay: '-6s'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "orb",
    style: {
      width: 360,
      height: 360,
      background: 'var(--lilac)',
      bottom: '4%',
      left: '26%',
      animationDuration: '24s',
      animationDelay: '-11s'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "orb",
    style: {
      width: 200,
      height: 200,
      background: 'var(--rose)',
      bottom: '16%',
      right: '4%',
      animationDuration: '18s',
      animationDelay: '-3s'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "grain"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      width: '100%',
      maxWidth: 1280,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 60,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      border: '1px solid rgba(0,0,0,0.12)',
      background: 'rgba(255,255,255,0.5)',
      backdropFilter: 'blur(12px)',
      padding: '8px 16px',
      borderRadius: 50,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--rose)',
      animation: 'pulse 2s ease-in-out infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, "Buongiorno \xB7 @colazioneconali")), /*#__PURE__*/React.createElement("h1", {
    className: "reveal d1",
    style: {
      fontSize: 'var(--fs-hero)',
      fontVariationSettings: "'wght' 380",
      letterSpacing: 'var(--ls-hero)',
      lineHeight: 1.0,
      margin: '0 0 28px'
    }
  }, "Svegliati.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "shine",
    style: {
      fontStyle: 'italic'
    }
  }, "Mangia."), /*#__PURE__*/React.createElement("br", null), "Vola."), /*#__PURE__*/React.createElement("p", {
    className: "reveal d2",
    style: {
      fontSize: 18,
      color: 'var(--grey-60)',
      letterSpacing: '-0.18px',
      lineHeight: 1.6,
      maxWidth: 480,
      margin: '0 0 34px'
    }
  }, "Colazioni che ti fanno alzare dal letto e chilometri che ti fanno sentire viva. Due mondi, una sola energia \u2014 la mattina di Alissa, finalmente con le ali."), /*#__PURE__*/React.createElement("div", {
    className: "reveal d3",
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: IG_URL,
    target: "_blank",
    rel: "noopener",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    arrow: true,
    variant: "pill"
  }, /*#__PURE__*/React.createElement(IgGlyph, {
    s: 16
  }), "Seguimi su Instagram")), /*#__PURE__*/React.createElement("a", {
    href: "#ricette",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Scopri le ricette")))), /*#__PURE__*/React.createElement("div", {
    className: "reveal d4",
    style: {
      position: 'relative',
      height: 480
    }
  }, /*#__PURE__*/React.createElement(FloatCard, {
    delay: 0,
    style: {
      width: 230,
      right: 40,
      top: 0,
      padding: '18px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: 'var(--grey-40)'
    }
  }, "Community \xB7 Live"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 44,
      fontVariationSettings: "'wght' 420",
      letterSpacing: '-0.9px',
      lineHeight: 1,
      marginTop: 6
    }
  }, "6.392"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--grey-60)',
      marginTop: 2
    }
  }, "follower e in crescita \u2197")), /*#__PURE__*/React.createElement(FloatCard, {
    delay: 1.4,
    style: {
      width: 250,
      left: 0,
      top: 120,
      padding: '16px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: '50%',
      background: 'var(--grad-cool)',
      display: 'grid',
      placeItems: 'center',
      color: '#fff',
      fontSize: 11
    }
  }, "\u2726"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: 'var(--grey-40)'
    }
  }, "Run \xB7 Stamattina"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontVariationSettings: "'wght' 520",
      letterSpacing: '-0.44px'
    }
  }, "18,30 km"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      background: 'var(--grey-08)',
      borderRadius: 4,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: '74%',
      background: 'var(--grad-rose)',
      borderRadius: 4
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: 'var(--grey-40)',
      marginTop: 6
    }
  }, "Pace 5\u203228\u2033/km \xB7 1h40m")), /*#__PURE__*/React.createElement(FloatCard, {
    delay: 2.2,
    style: {
      width: 215,
      right: 0,
      bottom: 0,
      padding: '16px 18px',
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: '#000',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      fontWeight: 600,
      fontSize: 13,
      fontFamily: "'JetBrains Mono', monospace"
    }
  }, "PZ"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: 'var(--grey-40)'
    }
  }, "Partner \xB7 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontVariationSettings: "'wght' 520"
    }
  }, "Prozis \xB7 ALI03"))))));
}

/* ---------- MARQUEE ---------- */
function Marquee() {
  const items = ['Overnight Mugcake', 'Milano Marathon', 'Plumcake alle Mele', 'StraMilano 10K', 'Crostata al Cacao', 'Giga Cookie', 'Tiramisù ai Plasmon', 'Svegliati · Mangia · Vola'];
  const row = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      borderTop: '1px solid var(--grey-08)',
      borderBottom: '1px solid var(--grey-08)',
      padding: '18px 0',
      background: '#000'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: 'max-content',
      animation: 'marquee 26s linear infinite',
      whiteSpace: 'nowrap'
    }
  }, row.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "mono",
    style: {
      color: '#fff',
      padding: '0 28px',
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      background: 'var(--rose)',
      borderRadius: '50%'
    }
  }), t))));
}

/* ---------- STATS / SOCIAL PROOF ---------- */
function Stats() {
  const data = (window.NUMERI || []).map(n => [n.numero, n.testo]);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 32px',
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 24
    }
  }, data.map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    className: "reveal",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'clamp(40px,4.5vw,58px)',
      fontVariationSettings: "'wght' 400",
      letterSpacing: '-1.04px',
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: 'var(--grey-40)',
      marginTop: 10
    }
  }, l)))));
}
Object.assign(window, {
  Nav,
  Hero,
  Marquee,
  Stats,
  Arrow,
  IgGlyph,
  IG_URL,
  PROZIS_URL
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/sections-top.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.RecipeCard = __ds_scope.RecipeCard;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
