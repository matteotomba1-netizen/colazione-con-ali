/* @ds-bundle: {"format":4,"namespace":"ColazioneConAliDesignSystem_665c4d","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Modal","sourcePath":"components/core/Modal.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"RecipeCard","sourcePath":"components/core/RecipeCard.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"f18eefdcb35e","components/core/Button.jsx":"549dececdfc8","components/core/Modal.jsx":"f52e8a59c06b","components/core/Pill.jsx":"8f75a303dd0d","components/core/RecipeCard.jsx":"7cf296cefd26","components/core/Tabs.jsx":"20518a946a5b","seams.jsx":"362ee08eaf51","sections-bottom.jsx":"d835b60ab9e1","ui_kits/landing/app.jsx":"4cdb73c48ae8","ui_kits/landing/arcade-bottom.jsx":"7d83eb72a735","ui_kits/landing/arcade-top.jsx":"fec050d624af","ui_kits/landing/carica-contenuti.js":"7cdbc062006e","ui_kits/landing/contenuti.js":"90a768fb32bb","ui_kits/landing/parallax.js":"28108c85be07","ui_kits/landing/seams.jsx":"acfc7941ebbb","ui_kits/landing/sections-bottom.jsx":"4b04ad6055fe","ui_kits/landing/sections-mid.jsx":"b9b8472a3b58","ui_kits/landing/sections-top.jsx":"b3f43de14bce"},"inlinedExternals":[],"unexposedExports":[]} */

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

// seams.jsx
try { (() => {
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
  cool: ['#FFC074', '#9B8CFF', '#6FA8FF']
};
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const easeOut = t => 1 - Math.pow(1 - t, 3);

/* RNG deterministico: stesso seed → stessa forma */
function mulberry32(a) {
  return function () {
    a |= 0;
    a = a + 0x6D2B79F5 | 0;
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
    const p0 = pts[i - 1] || pts[i],
      p1 = pts[i],
      p2 = pts[i + 1],
      p3 = pts[i + 2] || p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6,
      c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6,
      c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return d;
}

/* genera un percorso GPS-like: cammino casuale che attraversa la banda */
function makeRoute(seed, W, H) {
  const rng = mulberry32(seed >>> 0 || 1);
  const N = 7 + Math.floor(rng() * 4); // 7–10 waypoint
  const dir = rng() < 0.5 ? 1 : -1; // sx→dx oppure dx→sx (partenza opposta)
  const mx = W * 0.07,
    top = H * 0.18,
    bot = H * 0.84;
  let y = top + rng() * (bot - top); // quota di partenza casuale
  const pts = [];
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    const base = mx + (W - 2 * mx) * t;
    let x = dir > 0 ? base : W - base;
    x += (rng() - 0.5) * (W * 0.05);
    y += (rng() - 0.5) * (H * 0.42); // serpentina verticale
    y = clamp(y, top, bot);
    pts.push([x, y]);
  }
  return {
    d: smoothPath(pts),
    start: pts[0]
  };
}
function Seam({
  from,
  to,
  tint = 'warm',
  height = 176,
  seed = 1
}) {
  const cols = SEAM_TINTS[tint] || SEAM_TINTS.warm;
  const band = React.useRef(null);
  const trail = React.useRef(null);
  const dot = React.useRef(null);
  const halo = React.useRef(null);
  const uid = (React.useId ? React.useId() : 'seam' + seed).replace(/[:]/g, '');
  const W = 1200,
    H = height;
  const route = React.useMemo(() => makeRoute(seed, W, H), [seed, H]);
  React.useEffect(() => {
    const p0 = trail.current;
    if (!p0) return;
    const total = p0.getTotalLength();
    p0.style.strokeDasharray = total;
    const apply = p => {
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
    if (SEAM_REDUCE) {
      apply(1);
      return;
    }
    apply(0);
    const update = () => {
      const el = band.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      const c = r.top + r.height / 2;
      const p = clamp((vh * 0.92 - c) / (vh * 0.6), 0, 1);
      apply(p);
    };
    update();
    const onScroll = () => update();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    window.addEventListener('resize', onScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [route]);
  return /*#__PURE__*/React.createElement("div", {
    ref: band,
    "aria-hidden": "true",
    style: {
      position: 'relative',
      height: H,
      overflow: 'hidden',
      background: `linear-gradient(180deg, ${from} 0%, ${to} 100%)`
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    preserveAspectRatio: "none",
    width: "100%",
    height: "100%",
    style: {
      position: 'absolute',
      inset: 0,
      display: 'block',
      strokeWidth: "0px"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: `g${uid}`,
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "0"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: cols[0]
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.5",
    stopColor: cols[1]
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: cols[2]
  })), /*#__PURE__*/React.createElement("filter", {
    id: `b${uid}`,
    x: "-60%",
    y: "-60%",
    width: "220%",
    height: "220%"
  }, /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: "7"
  }))), /*#__PURE__*/React.createElement("path", {
    d: route.d,
    fill: "none",
    stroke: `url(#g${uid})`,
    strokeWidth: "1.4",
    strokeOpacity: "0.14",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    ref: trail,
    d: route.d,
    fill: "none",
    stroke: `url(#g${uid})`,
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      filter: `drop-shadow(0 2px 9px ${cols[1]}55)`
    }
  }), /*#__PURE__*/React.createElement("circle", {
    cx: route.start[0],
    cy: route.start[1],
    r: "5.5",
    fill: "#fff",
    stroke: cols[0],
    strokeWidth: "2.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: route.start[0],
    cy: route.start[1],
    r: "1.8",
    fill: cols[0]
  }), /*#__PURE__*/React.createElement("circle", {
    ref: halo,
    r: "13",
    fill: cols[1],
    filter: `url(#b${uid})`,
    style: {
      opacity: 0
    }
  }), /*#__PURE__*/React.createElement("circle", {
    ref: dot,
    r: "5.4",
    fill: "#fff",
    stroke: cols[1],
    strokeWidth: "2.4",
    style: {
      opacity: 0
    }
  })));
}
window.Seam = Seam;
})(); } catch (e) { __ds_ns.__errors.push({ path: "seams.jsx", error: String((e && e.message) || e) }); }

// sections-bottom.jsx
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
    "data-px": "0.12",
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
      position: 'relative',
      overflow: 'hidden',
      padding: '140px 32px',
      background: 'var(--white)',
      opacity: "0",
      backgroundColor: "rgb(244, 182, 244)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-px": "0.1",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      background: 'radial-gradient(ellipse 55% 70% at 88% 28%, rgba(195,155,255,0.13) 0%, transparent 62%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
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
      display: 'inline-block',
      marginBottom: 22,
      border: '1px solid var(--grey-08)',
      padding: '8px 16px',
      borderRadius: 50,
      color: "rgb(30, 29, 29)"
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
      color: "rgb(255, 0, 118)"
    }
  }, "mettere le ali"), " alle tue mattine?\""), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44,
      paddingTop: 30,
      borderTop: '1px solid var(--grey-08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      marginBottom: 16,
      color: "rgb(17, 17, 17)"
    }
  }, "In evidenza su Instagram"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10
    }
  }, ['schiscettando', 'oats', 'mi muovo', 'proziss ❤', 'random', 'ricettefast'].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      border: '1px solid var(--grey-08)',
      borderRadius: 50,
      padding: '8px 16px',
      fontSize: 14,
      letterSpacing: '-0.14px',
      background: 'var(--white)'
    }
  }, t)))))));
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
    "data-px": "0.14",
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
      lineHeight: 1.16,
      margin: '0 0 22px',
      color: '#fff'
    }
  }, "Hai un brand che parla la lingua delle ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      background: 'var(--grad-rose)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      padding: '0.04em 0.1em',
      margin: '0 -0.1em',
      WebkitBoxDecorationBreak: 'clone',
      boxDecorationBreak: 'clone'
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "sections-bottom.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/app.jsx
try { (() => {
/* app.jsx — assembles the full landing page */
function LandingApp() {
  React.useEffect(() => {
    const els = [...document.querySelectorAll('.reveal')];
    const vh = () => window.innerHeight || 800;

    // Give each section's reveal elements an alternating entrance DIRECTION, so a
    // section assembles from behind → right → left → alba (sunrise), cycling, with
    // a sequenced stagger. Set before any reveal so the start-state is in place.
    const DIRS = ['rv-behind', 'rv-right', 'rv-left', 'rv-alba'];
    const groups = new Map();
    els.forEach(el => {
      const sec = el.closest('section, footer, header') || document.body;
      const arr = groups.get(sec) || [];
      arr.push(el);
      groups.set(sec, arr);
    });
    groups.forEach(arr => arr.forEach((el, i) => {
      el.classList.add(DIRS[i % DIRS.length]);
      el.style.transitionDelay = Math.min(i, 6) * 80 + 'ms';
    }));
    // commit the hidden start-state as a baseline so the very first reveal still
    // animates from it rather than snapping.
    void document.body.offsetHeight;
    // Reveal a single element: add `.in` to trigger the entrance transition, then
    // hard-guarantee the visible end-state. If the animation timeline is throttled
    // (background/automated tabs freeze CSS transitions at their start frame), the
    // transition can stall at opacity:0 — so a moment later we snap any element that
    // hasn't actually reached full opacity to its final visible style. In a normal
    // visible browser the transition completes first and this is a no-op, so the
    // magic plays; content can never stay hidden.
    const reveal = el => {
      if (el.dataset.revealed) return;
      el.dataset.revealed = '1';
      el.classList.add('in');
      // fallback fires just after this element's own (delayed) transition should
      // have finished, snapping it visible only if the timeline was throttled.
      const delay = parseFloat(el.style.transitionDelay) || 0;
      setTimeout(() => {
        if (parseFloat(getComputedStyle(el).opacity) < 0.99) {
          el.style.transition = 'none';
          el.style.opacity = '1';
          el.style.transform = 'none';
          el.style.filter = 'none';
        }
      }, delay + 850);
    };
    // reveal anything currently in view — runs on mount and as a position-aware
    // scroll/resize fallback, so the section-by-section reveal is preserved (no
    // blanket timer pre-revealing the whole page) while on-screen content always shows.
    const showInView = () => {
      els.forEach(el => {
        if (el.dataset.revealed) return;
        const r = el.getBoundingClientRect();
        if (r.top < vh() - 40 && r.bottom > -1) reveal(el);
      });
    };
    // run several times — getBoundingClientRect is 0-height pre-layout, so a single
    // mount-time pass misses most above-the-fold elements.
    showInView();
    requestAnimationFrame(() => {
      showInView();
      requestAnimationFrame(showInView);
    });
    [120, 400, 900].forEach(t => setTimeout(showInView, t));
    let obs = null;
    if ('IntersectionObserver' in window) {
      obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) reveal(e.target);
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px'
      });
      els.forEach(el => obs.observe(el));
    }
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        showInView();
      });
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    window.addEventListener('resize', onScroll, {
      passive: true
    });
    return () => {
      if (obs) obs.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.Nav, null), /*#__PURE__*/React.createElement(window.Hero, null), /*#__PURE__*/React.createElement(window.Marquee, null), /*#__PURE__*/React.createElement(window.About, null), /*#__PURE__*/React.createElement(window.Seam, {
    from: "#F3E8FF",
    to: "#FFE9C7",
    tint: "warm",
    seed: 7
  }), /*#__PURE__*/React.createElement(window.Quiz, null), /*#__PURE__*/React.createElement(window.Seam, {
    from: "#D9C4FF",
    to: "var(--white)",
    tint: "rose",
    seed: 200
  }), /*#__PURE__*/React.createElement(window.Recipes, null), /*#__PURE__*/React.createElement(window.Seam, {
    from: "var(--white)",
    to: "#000",
    tint: "cool",
    seed: 34
  }), /*#__PURE__*/React.createElement(window.Runs, null), /*#__PURE__*/React.createElement(window.Seam, {
    from: "#000",
    to: "var(--cream)",
    tint: "warm",
    seed: 61
  }), /*#__PURE__*/React.createElement(window.Partner, null), /*#__PURE__*/React.createElement(window.Seam, {
    from: "var(--cream)",
    to: "#FFF3E2",
    tint: "warm",
    seed: 108
  }), /*#__PURE__*/React.createElement(window.Stats, null), /*#__PURE__*/React.createElement(window.Seam, {
    from: "#F1E6FF",
    to: "#000",
    tint: "rose",
    seed: 155
  }), /*#__PURE__*/React.createElement(window.Collab, null), /*#__PURE__*/React.createElement(window.Footer, null));
}
// piccola sicurezza extra: se il bundle del design system non si è ancora
// attaccato a window (rete lenta / cache fredda), aspettiamo prima di montare
// così Button/RecipeCard/Modal non risultano mai `undefined` al primo render.
function mountWhenReady() {
  const ns = window.ColazioneConAliDesignSystem_665c4d;
  const ready = ns && ns.Button && ns.RecipeCard && ns.Modal && ns.Pill && ns.Badge && ns.Tabs;
  if (ready) {
    if (!window.__landingRoot) window.__landingRoot = ReactDOM.createRoot(document.getElementById('root'));
    window.__landingRoot.render(/*#__PURE__*/React.createElement(LandingApp, null));
  } else {
    setTimeout(mountWhenReady, 30);
  }
}
mountWhenReady();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/arcade-bottom.jsx
try { (() => {
/* arcade-bottom.jsx — Missioni (corse), Power-up (Prozis), Character sheet, Co-op, Footer, Level seam */
const B_IG = window.SOCIAL && window.SOCIAL.instagram || 'https://www.instagram.com/colazioneconali';
const B_PRZ = window.PROZIS && window.PROZIS.link || '#';
const B_COD = window.PROZIS && window.PROZIS.codice || 'ALI03';
const SOC = window.SOCIAL || {};
const CORSE = window.CORSE || [];
const Arr = window.A_Arr;
const Bar = window.A_Bar;

/* ---------- LEVEL SEAM (scroll-driven neon sweep between sections) ---------- */
function LevelSeam({
  label = 'LIVELLO SUCCESSIVO',
  tint = 'var(--neon2)'
}) {
  const band = React.useRef(null),
    bar = React.useRef(null),
    txt = React.useRef(null),
    beam = React.useRef(null);
  React.useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
    const apply = p => {
      if (bar.current) {
        bar.current.style.transform = `scaleX(${clamp(p * 1.2, 0, 1)})`;
      }
      if (beam.current) {
        beam.current.style.opacity = Math.sin(clamp(p, 0, 1) * Math.PI) * 0.9;
        beam.current.style.left = p * 100 + '%';
      }
      if (txt.current) {
        txt.current.style.opacity = clamp(p * 1.6 - 0.1, 0, 1);
        txt.current.style.transform = `translateY(${(1 - clamp(p, 0, 1)) * 14}px)`;
      }
    };
    if (reduce) {
      apply(1);
      return;
    }
    const update = () => {
      const el = band.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      const c = r.top + r.height / 2;
      apply(clamp((vh * 0.94 - c) / (vh * 0.6), 0, 1));
    };
    const onScroll = () => update();
    update();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    window.addEventListener('resize', onScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: band,
    "aria-hidden": "true",
    style: {
      position: 'relative',
      height: 132,
      display: 'grid',
      placeItems: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'min(900px,86%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: txt,
    className: "mono",
    style: {
      fontSize: 10.5,
      color: tint,
      textAlign: 'center',
      marginBottom: 12,
      opacity: 0,
      textShadow: `0 0 14px ${tint}`
    }
  }, "\u25B8 ", label, " \u25C2"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 3,
      background: 'rgba(255,255,255,0.08)',
      borderRadius: 3,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: bar,
    style: {
      position: 'absolute',
      inset: 0,
      transformOrigin: 'left',
      transform: 'scaleX(0)',
      background: `linear-gradient(90deg,${tint},var(--neon))`,
      boxShadow: `0 0 14px ${tint}`,
      borderRadius: 3
    }
  })), /*#__PURE__*/React.createElement("div", {
    ref: beam,
    style: {
      position: 'absolute',
      top: '50%',
      width: 60,
      height: 60,
      marginLeft: -30,
      marginTop: -18,
      borderRadius: '50%',
      background: `radial-gradient(circle,${tint},transparent 70%)`,
      filter: 'blur(6px)',
      opacity: 0,
      pointerEvents: 'none'
    }
  })));
}

/* ---------- MISSIONI (corse) ---------- */
function QuestCard({
  c,
  i
}) {
  const [h, setH] = React.useState(false);
  const done = c.stato === 'Completata' || c.stato === 'Iscritta';
  const pct = done ? '100%' : '64%';
  const col = ['var(--neon3)', 'var(--neon4)', 'var(--neon2)', 'var(--neon)'][i % 4];
  return /*#__PURE__*/React.createElement("div", {
    className: 'rv ' + ['right', 'up', 'left', 'zoom'][i % 4],
    style: {
      transitionDelay: i % 4 * 70 + 'ms'
    },
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "frame",
    style: {
      borderRadius: 12,
      padding: '18px 18px 16px',
      borderColor: h ? col : 'var(--hud2)',
      boxShadow: h ? `0 14px 40px rgba(0,0,0,0.5), 0 0 22px ${col}44` : 'none',
      transition: 'all .3s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 9.5,
      color: col,
      marginBottom: 8
    }
  }, c.etichetta || 'QUEST', " \xB7 ", c.info || ''), /*#__PURE__*/React.createElement("div", {
    className: "ttl",
    style: {
      fontSize: 17,
      fontWeight: 700,
      lineHeight: 1.15,
      maxWidth: 220
    }
  }, c.titolo)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ttl",
    style: {
      fontSize: 26,
      fontWeight: 800,
      color: col,
      textShadow: `0 0 16px ${col}66`
    }
  }, c.km), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 9,
      color: '#8C7E98'
    }
  }, "KM"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 9,
      color: done ? 'var(--mint,#7BE0AE)' : '#9C8EA8'
    }
  }, done ? '✓ ' : '', c.stato || 'In corso'), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 9,
      color: '#9C8EA8'
    }
  }, pct)), /*#__PURE__*/React.createElement(Bar, {
    v: pct,
    c: col,
    h: 5
  }))));
}
function Missioni() {
  const list = CORSE.length ? CORSE : [];
  return /*#__PURE__*/React.createElement("section", {
    id: "corse",
    style: {
      padding: '96px 26px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rv up",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 30,
      marginBottom: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10,
      color: 'var(--neon3)',
      marginBottom: 14
    }
  }, "Missioni \xB7 002"), /*#__PURE__*/React.createElement("h2", {
    className: "ttl",
    style: {
      fontSize: 'clamp(30px,4.4vw,56px)',
      fontWeight: 800,
      lineHeight: 1,
      margin: 0
    }
  }, "LE CORSE", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--neon3)',
      fontStyle: 'italic'
    }
  }, "= MISSIONI ATTIVE"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: '#9C8EA8',
      maxWidth: 330,
      textAlign: 'right',
      lineHeight: 1.6,
      margin: 0
    }
  }, "Dalle corse mattutine alle maratone. Non sempre vanno bene \u2014 ma a volte ci sono quelle corse che ti ricordano perch\xE9 lo fai.")), /*#__PURE__*/React.createElement("div", {
    className: "cards4",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 18
    }
  }, list.map((c, i) => /*#__PURE__*/React.createElement(QuestCard, {
    key: i,
    c: c,
    i: i
  })))));
}

/* ---------- POWER-UP (Prozis) ---------- */
function PowerUp() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '90px 26px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rv zoom frame",
    style: {
      maxWidth: 1040,
      margin: '0 auto',
      borderRadius: 18,
      padding: '46px 44px',
      display: 'grid',
      gridTemplateColumns: '1.2fr 0.8fr',
      gap: 44,
      alignItems: 'center',
      boxShadow: '0 30px 80px rgba(255,212,107,0.12)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10,
      color: 'var(--neon2)',
      marginBottom: 14
    }
  }, "Power-up sbloccato \xB7 partner 2026"), /*#__PURE__*/React.createElement("h2", {
    className: "ttl",
    style: {
      fontSize: 'clamp(28px,3.6vw,46px)',
      fontWeight: 800,
      lineHeight: 1.05,
      margin: '0 0 14px'
    }
  }, "CHEAT CODE: ", /*#__PURE__*/React.createElement("span", {
    className: "neonword"
  }, "PROZIS")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: '#C6B8D2',
      lineHeight: 1.6,
      maxWidth: 440,
      margin: '0 0 24px'
    }
  }, "Il carburante dietro colazioni e corse. Inserisci il codice per attivare lo sconto su tutto lo shop."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "frame",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 14,
      borderRadius: 8,
      padding: '11px 16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 9.5,
      color: '#8C7E98'
    }
  }, "CODE"), /*#__PURE__*/React.createElement("span", {
    className: "ttl",
    style: {
      fontSize: 22,
      fontWeight: 800,
      color: 'var(--neon2)',
      letterSpacing: 2,
      textShadow: '0 0 16px rgba(255,212,107,0.5)'
    }
  }, B_COD)), /*#__PURE__*/React.createElement("a", {
    href: B_PRZ,
    target: "_blank",
    rel: "noopener",
    className: "btn btn-primary"
  }, "Attiva su Prozis ", /*#__PURE__*/React.createElement(Arr, null)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 200,
      height: 200,
      borderRadius: 20,
      background: 'linear-gradient(150deg,rgba(255,212,107,0.12),rgba(255,79,142,0.12))',
      border: '1px solid var(--hud2)',
      display: 'grid',
      placeItems: 'center',
      transform: 'rotate(-4deg)',
      boxShadow: '0 0 50px rgba(255,79,142,0.25) inset'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10,
      color: 'var(--neon3)',
      letterSpacing: 3
    }
  }, "PARTNER"), /*#__PURE__*/React.createElement("div", {
    className: "ttl",
    style: {
      fontSize: 38,
      fontWeight: 900,
      marginTop: 4
    }
  }, "PROZIS"), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      color: 'var(--neon2)',
      marginTop: 6
    }
  }, "cod \xB7 ", B_COD))))));
}

/* ---------- CHARACTER SHEET ---------- */
function CharSheet() {
  const stats = [['Energia mattutina', '92'], ['Endurance', '78'], ['Golosità', '100'], ['Ironia', '88']];
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      padding: '100px 26px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '0.5fr 0.5fr',
      gap: 56,
      alignItems: 'center'
    },
    className: "grid2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rv left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chip",
    style: {
      marginBottom: 20
    }
  }, "CHARACTER SHEET \xB7 ALISSA"), /*#__PURE__*/React.createElement("h2", {
    className: "ttl",
    style: {
      fontSize: 'clamp(26px,3.2vw,40px)',
      fontWeight: 800,
      lineHeight: 1.12,
      margin: '0 0 18px'
    }
  }, "22 ANNI, PADOVA.", /*#__PURE__*/React.createElement("br", null), "AMO ALLENARMI E", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "neonpink"
  }, "FARE COLAZIONE.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: '#C6B8D2',
      lineHeight: 1.6,
      maxWidth: 380,
      margin: 0
    }
  }, "\"Perch\xE9 correre con lo stomaco vuoto quando puoi mettere le ali alle tue mattine?\" \u2014 ogni giorno una nuova run da raccontare.")), /*#__PURE__*/React.createElement("div", {
    className: "rv right frame",
    style: {
      borderRadius: 16,
      padding: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10,
      color: 'var(--neon2)',
      marginBottom: 18
    }
  }, "ATTRIBUTI"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16
    }
  }, stats.map(([k, v], i) => {
    const c = ['var(--neon2)', 'var(--neon3)', 'var(--neon)', 'var(--neon4)'][i];
    return /*#__PURE__*/React.createElement("div", {
      key: k
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 10,
        color: '#C6B8D2'
      }
    }, k), /*#__PURE__*/React.createElement("span", {
      className: "ttl",
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: c
      }
    }, v)), /*#__PURE__*/React.createElement(Bar, {
      v: v + '%',
      c: c
    }));
  })))));
}

/* ---------- CO-OP CTA ---------- */
function Coop() {
  return /*#__PURE__*/React.createElement("section", {
    id: "collab",
    style: {
      padding: '100px 26px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rv up frame",
    style: {
      maxWidth: 800,
      margin: '0 auto',
      borderRadius: 18,
      padding: '54px 40px',
      textAlign: 'center',
      boxShadow: '0 30px 90px rgba(232,67,147,0.18)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10,
      color: 'var(--neon)',
      marginBottom: 18
    }
  }, "\u25C6 Player 2 cerca brand \u25C6"), /*#__PURE__*/React.createElement("h2", {
    className: "ttl",
    style: {
      fontSize: 'clamp(30px,5vw,58px)',
      fontWeight: 900,
      lineHeight: 1.04,
      margin: '0 0 18px'
    }
  }, "UNISCITI ALLA ", /*#__PURE__*/React.createElement("span", {
    className: "neonword",
    style: {
      fontStyle: 'italic'
    }
  }, "RUN.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: '#C6B8D2',
      lineHeight: 1.6,
      maxWidth: 500,
      margin: '0 auto 30px'
    }
  }, "Ricette sponsorizzate, recensioni, contenuti per le corse, reel e storie. Una community calda, reale e in crescita \u2014 modalit\xE0 co-op aperta."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:colazioneconali@gmail.com",
    className: "btn btn-primary"
  }, "Invita a collaborare"), /*#__PURE__*/React.createElement("a", {
    href: B_IG,
    target: "_blank",
    rel: "noopener",
    className: "btn btn-ghost"
  }, "Vedi il profilo ", /*#__PURE__*/React.createElement(Arr, null))), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10,
      color: '#8C7E98',
      marginTop: 24
    }
  }, "colazioneconali@gmail.com \xB7 @colazioneconali")));
}

/* ---------- FOOTER ---------- */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--hud2)',
      padding: '50px 26px 36px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      display: 'grid',
      placeItems: 'center',
      borderRadius: 6,
      border: '1px solid var(--hud2)',
      color: 'var(--neon2)',
      fontSize: 14
    }
  }, "\u2726"), /*#__PURE__*/React.createElement("span", {
    className: "ttl",
    style: {
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: 1
    }
  }, "COLAZIONE\xB7ALI")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, [['Instagram', B_IG], ['TikTok', SOC.tiktok || '#'], ['Strava', SOC.strava || '#'], ['Prozis ' + B_COD, B_PRZ]].map(([t, u]) => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: u,
    target: "_blank",
    rel: "noopener",
    className: "mono",
    style: {
      fontSize: 10.5,
      color: '#9C8EA8'
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = 'var(--neon2)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = '#9C8EA8';
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      maxWidth: 1320,
      margin: '28px auto 0',
      paddingTop: 20,
      borderTop: '1px solid var(--hud)',
      fontSize: 9.5,
      color: '#6E627A',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 COLAZIONE CON ALI \xB7 FATTA CON \u2661 E BURRO DI ARACHIDI"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--neon2)'
    }
  }, "SVEGLIATI \xB7 MANGIA \xB7 VOLA")));
}
Object.assign(window, {
  A_LevelSeam: LevelSeam,
  A_Missioni: Missioni,
  A_PowerUp: PowerUp,
  A_CharSheet: CharSheet,
  A_Coop: Coop,
  A_Footer: Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/arcade-bottom.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/arcade-top.jsx
try { (() => {
/* arcade-top.jsx — HUD nav, Main Menu hero, ticker, stat readout, inventory */
const A_IG = window.SOCIAL && window.SOCIAL.instagram || 'https://www.instagram.com/colazioneconali';
const A_PRZ = window.PROZIS && window.PROZIS.link || '#';
const A_COD = window.PROZIS && window.PROZIS.codice || 'ALI03';
const NUM = window.NUMERI || [];
const RIC = window.RICETTE || [];
const Arr = ({
  s = 14
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 14 14",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 11L11 3M11 3H5M11 3V9",
  stroke: "currentColor",
  strokeWidth: "1.7",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));

/* progress / stat bar */
function Bar({
  v,
  c = 'var(--neon2)',
  h = 6
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: h,
      borderRadius: h,
      background: 'rgba(255,255,255,0.08)',
      overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: v,
      background: c,
      boxShadow: `0 0 12px ${c}`,
      borderRadius: h
    }
  }));
}

/* ---------- HUD NAV ---------- */
function HudNav() {
  const [s, setS] = React.useState(false);
  React.useEffect(() => {
    const h = () => setS(window.scrollY > 40);
    window.addEventListener('scroll', h, {
      passive: true
    });
    return () => window.removeEventListener('scroll', h);
  }, []);
  const links = [['Loadout', '#colazioni'], ['Missioni', '#corse'], ['Player', '#about'], ['Co-op', '#collab']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      height: 66,
      display: 'flex',
      alignItems: 'center',
      padding: '0 26px',
      borderBottom: `1px solid ${s ? 'var(--hud2)' : 'transparent'}`,
      background: s ? 'rgba(7,5,9,0.72)' : 'transparent',
      backdropFilter: s ? 'blur(14px)' : 'none',
      WebkitBackdropFilter: s ? 'blur(14px)' : 'none',
      transition: 'all .35s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 1320,
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
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      display: 'grid',
      placeItems: 'center',
      borderRadius: 6,
      border: '1px solid var(--hud2)',
      color: 'var(--neon2)',
      textShadow: '0 0 10px var(--neon2)',
      fontSize: 14
    }
  }, "\u2726"), /*#__PURE__*/React.createElement("span", {
    className: "ttl",
    style: {
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: 1
    }
  }, "COLAZIONE", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--neon)'
    }
  }, "\xB7"), "ALI")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, links.map(([t, h]) => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: h,
    className: "mono",
    style: {
      fontSize: 11,
      padding: '8px 12px',
      color: '#CDBFD8',
      borderRadius: 4
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = 'var(--neon2)';
      e.currentTarget.style.textShadow = '0 0 12px var(--neon2)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = '#CDBFD8';
      e.currentTarget.style.textShadow = 'none';
    }
  }, t)), /*#__PURE__*/React.createElement("a", {
    href: A_IG,
    target: "_blank",
    rel: "noopener",
    className: "btn btn-ghost",
    style: {
      padding: '9px 14px',
      marginLeft: 8
    }
  }, "Seguimi ", /*#__PURE__*/React.createElement(Arr, null)))));
}

/* ---------- HERO / MAIN MENU ---------- */
function Hero() {
  const follower = (NUM.find(n => /follower/i.test(n.testo)) || {}).numero || '6.392';
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '128px 26px 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 1320,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.15fr 0.85fr',
      gap: 48,
      alignItems: 'center'
    },
    className: "grid2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rv left chip",
    style: {
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dotpulse"
  }), " Buongiorno \xB7 player online"), /*#__PURE__*/React.createElement("h1", {
    className: "rv up ttl glitch",
    "data-t": "SVEGLIATI",
    style: {
      fontSize: 'clamp(52px,8vw,118px)',
      fontWeight: 900,
      lineHeight: 0.92,
      letterSpacing: '-1px',
      margin: '0 0 18px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "neonword"
  }, "SVEGLIATI"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "neonpink",
    style: {
      fontStyle: 'italic'
    }
  }, "MANGIA"), /*#__PURE__*/React.createElement("br", null), "VOLA", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--neon3)'
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    className: "rv up",
    style: {
      fontSize: 17,
      color: '#C6B8D2',
      maxWidth: 460,
      lineHeight: 1.6,
      margin: '0 0 30px'
    }
  }, "Tre livelli, una sola run: colazioni che ti fanno alzare dal letto e chilometri che ti fanno sentire viva. Premi start e seguimi."), /*#__PURE__*/React.createElement("div", {
    className: "rv up",
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: A_IG,
    target: "_blank",
    rel: "noopener",
    className: "btn btn-primary"
  }, "\u25B6 Premi Start \xB7 Seguimi"), /*#__PURE__*/React.createElement("a", {
    href: "#colazioni",
    className: "btn btn-ghost"
  }, "Esplora il loadout ", /*#__PURE__*/React.createElement(Arr, null))), /*#__PURE__*/React.createElement("div", {
    className: "rv up",
    style: {
      display: 'flex',
      gap: 26,
      marginTop: 34,
      flexWrap: 'wrap'
    }
  }, [['LV', '22'], ['HQ', 'Padova'], ['STREAK', '183 post']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10,
      color: '#8C7E98'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    className: "ttl",
    style: {
      fontSize: 20,
      fontWeight: 700,
      marginTop: 3
    }
  }, v))))), /*#__PURE__*/React.createElement("div", {
    className: "rv zoom frame",
    style: {
      borderRadius: 16,
      padding: 22,
      boxShadow: '0 30px 80px rgba(255,79,142,0.18)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 60,
      borderRadius: 12,
      background: 'linear-gradient(135deg,var(--neon2),var(--neon) 60%,var(--neon3))',
      display: 'grid',
      placeItems: 'center',
      fontSize: 22,
      color: '#1a0610',
      boxShadow: '0 0 26px rgba(255,79,142,0.5)'
    }
  }, "\u2726"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10,
      color: 'var(--neon2)'
    }
  }, "Player \xB7 @colazioneconali"), /*#__PURE__*/React.createElement("div", {
    className: "ttl",
    style: {
      fontSize: 22,
      fontWeight: 700,
      marginTop: 2
    }
  }, "ALISSA")), /*#__PURE__*/React.createElement("div", {
    className: "chip"
  }, "EPIC")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: 'grid',
      gap: 14
    }
  }, [['Energia', '92%', 'var(--neon2)'], ['Endurance', '78%', 'var(--neon3)'], ['Fame', '100%', 'var(--neon)']].map(([k, v, c]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 10,
      color: '#C6B8D2'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 10,
      color: c
    }
  }, v)), /*#__PURE__*/React.createElement(Bar, {
    v: v,
    c: c
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      paddingTop: 16,
      borderTop: '1px solid var(--hud)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10,
      color: '#8C7E98'
    }
  }, "Community \xB7 live"), /*#__PURE__*/React.createElement("div", {
    className: "ttl",
    style: {
      fontSize: 32,
      fontWeight: 800,
      color: 'var(--neon2)',
      textShadow: '0 0 18px rgba(255,212,107,0.4)'
    }
  }, follower)), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10,
      color: 'var(--neon3)'
    }
  }, "follower \u2197")))));
}

/* ---------- TICKER ---------- */
function Ticker() {
  const items = ['SVEGLIATI · MANGIA · VOLA', 'STRAMILANO 10K', 'OVERNIGHT MUGCAKE', 'PACE 5:28/KM', 'GIGA COOKIE', 'PROZIS · ' + A_COD, 'NEW QUEST UNLOCKED'];
  const row = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      borderTop: '1px solid var(--hud2)',
      borderBottom: '1px solid var(--hud2)',
      padding: '13px 0',
      background: 'rgba(255,79,142,0.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: 'max-content',
      animation: 'tick 24s linear infinite',
      whiteSpace: 'nowrap'
    }
  }, row.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "mono",
    style: {
      fontSize: 12,
      color: '#E9DBF2',
      padding: '0 26px',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--neon2)'
    }
  }, "\u25C6"), t))), /*#__PURE__*/React.createElement("style", null, `@keyframes tick{from{transform:translateX(0)}to{transform:translateX(-50%)}}`));
}

/* ---------- STAT READOUT ---------- */
function Stats() {
  const d = NUM.length ? NUM : [{
    numero: '6.392',
    testo: 'follower'
  }, {
    numero: '183',
    testo: 'post'
  }, {
    numero: '11',
    testo: 'ricette'
  }, {
    numero: '4',
    testo: 'corse 2026'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '70px 26px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16
    },
    className: "cards4"
  }, d.map((n, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: 'rv ' + ['zoom', 'up', 'up', 'right'][i % 4] + ' frame',
    style: {
      borderRadius: 12,
      padding: '22px 20px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ttl",
    style: {
      fontSize: 'clamp(34px,4.2vw,52px)',
      fontWeight: 800,
      color: i % 2 ? 'var(--neon3)' : 'var(--neon2)',
      textShadow: `0 0 22px ${i % 2 ? 'rgba(195,155,255,0.4)' : 'rgba(255,212,107,0.4)'}`
    }
  }, n.numero), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10,
      color: '#9C8EA8',
      marginTop: 8
    }
  }, n.testo)))));
}

/* ---------- LE COLAZIONI = INVENTORY ---------- */
const RARITY = [{
  name: 'EPIC',
  c: 'var(--neon)',
  g: 'linear-gradient(135deg,#FFD46B,#FF4F8E 60%,#C39BFF)'
}, {
  name: 'RARE',
  c: 'var(--neon3)',
  g: 'linear-gradient(135deg,#C39BFF,#7BE0FF)'
}, {
  name: 'SOLAR',
  c: 'var(--neon2)',
  g: 'linear-gradient(135deg,#FFD46B,#FF7E8A)'
}, {
  name: 'BERRY',
  c: '#FF7EA8',
  g: 'linear-gradient(135deg,#E84393,#FFB088)'
}];
function ItemCard({
  r,
  i
}) {
  const [h, setH] = React.useState(false);
  const rar = RARITY[i % RARITY.length];
  return /*#__PURE__*/React.createElement("div", {
    className: 'rv ' + ['zoom', 'right', 'left', 'up'][i % 4],
    style: {
      transitionDelay: i % 4 * 70 + 'ms'
    },
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "frame",
    style: {
      borderRadius: 14,
      overflow: 'hidden',
      borderColor: h ? rar.c : 'var(--hud2)',
      boxShadow: h ? `0 18px 50px rgba(0,0,0,0.5), 0 0 26px ${rar.c}55` : 'none',
      transform: h ? 'translateY(-6px)' : 'none',
      transition: 'transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s, border-color .2s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4/3',
      background: rar.g,
      overflow: 'hidden'
    }
  }, r.foto ? /*#__PURE__*/React.createElement("img", {
    src: r.foto,
    alt: r.titolo,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: h ? 'scale(1.06)' : 'none',
      transition: 'transform .5s'
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,transparent 40%,rgba(7,5,9,0.55))'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      position: 'absolute',
      top: 10,
      left: 10,
      fontSize: 9.5,
      padding: '5px 9px',
      borderRadius: 4,
      background: 'rgba(7,5,9,0.6)',
      color: rar.c,
      border: `1px solid ${rar.c}`
    }
  }, rar.name), r.tempo ? /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      fontSize: 9.5,
      padding: '5px 9px',
      borderRadius: 4,
      background: 'rgba(7,5,9,0.6)',
      color: '#E9DBF2'
    }
  }, "\u231B ", r.tempo) : null, /*#__PURE__*/React.createElement("div", {
    className: "ttl",
    style: {
      position: 'absolute',
      left: 12,
      bottom: 10,
      right: 12,
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 1.1,
      textShadow: '0 2px 10px #000'
    }
  }, r.titolo)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '13px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 9.5,
      color: '#9C8EA8',
      marginBottom: 10
    }
  }, r.etichetta || 'Ricetta'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 9.5,
      color: rar.c
    }
  }, r.video ? '▶ REEL' : 'DROP'), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      display: 'grid',
      placeItems: 'center',
      borderRadius: '50%',
      border: `1px solid ${h ? rar.c : 'var(--hud2)'}`,
      color: h ? rar.c : '#fff',
      transform: h ? 'rotate(-45deg)' : 'none',
      transition: 'all .3s cubic-bezier(.34,1.56,.64,1)'
    }
  }, /*#__PURE__*/React.createElement(Arr, {
    s: 12
  }))))));
}
function Colazioni({
  onPick
}) {
  const list = RIC.length ? RIC : [];
  return /*#__PURE__*/React.createElement("section", {
    id: "colazioni",
    style: {
      padding: '96px 26px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rv up",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 30,
      marginBottom: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10,
      color: 'var(--neon2)',
      marginBottom: 14
    }
  }, "Loadout \xB7 001"), /*#__PURE__*/React.createElement("h2", {
    className: "ttl",
    style: {
      fontSize: 'clamp(30px,4.4vw,56px)',
      fontWeight: 800,
      lineHeight: 1,
      margin: 0
    }
  }, "L'INVENTARIO", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "neonpink",
    style: {
      fontStyle: 'italic'
    }
  }, "DELLE COLAZIONI"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: '#9C8EA8',
      maxWidth: 320,
      textAlign: 'right',
      lineHeight: 1.6,
      margin: 0
    }
  }, "Overnight, mug cake, plumcake e dolci da forno \u2014 ogni drop ha la sua rarit\xE0. Equipaggia e parti.")), /*#__PURE__*/React.createElement("div", {
    className: "cards4",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 18
    }
  }, list.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => onPick && onPick(i),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(ItemCard, {
    r: r,
    i: i
  }))))));
}
Object.assign(window, {
  A_HudNav: HudNav,
  A_Hero: Hero,
  A_Ticker: Ticker,
  A_Stats: Stats,
  A_Colazioni: Colazioni,
  A_Bar: Bar,
  A_Arr: Arr,
  A_RIC: RIC
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/arcade-top.jsx", error: String((e && e.message) || e) }); }

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
      if (d.profilo) window.PROFILO = d.profilo;
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
  numero: "19",
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
  titolo: "Mugcake rovesciata alle mele",
  etichetta: "Mugcake · Overnight",
  tempo: "2 min cottura",
  badge: "Ricetta",
  foto: "",
  video: "https://www.instagram.com/colazioneconali/reel/DZ2uAVyus7v/",
  procedimento: `Mescola farina d'avena, cannella, lievito, purea di mela, liquido e dolcificante fino a ottenere un composto liscio.
Aggiungi i pezzettini di mela.
Cuoci in microonde a massima potenza per 2 minuti, aprendo lo sportello a metà cottura.
In alternativa: friggitrice a 150° per 15-20 min.
Una volta intiepidita, rovesciala in un piattino e lascia riposare in frigo tutta la notte.
Mescola yogurt greco, ricotta e dolcificante per la copertura.
Decora con la crema alla ricotta, pezzettini di mela e cannella.`
}, {
  titolo: "Mugcake ricotta, limone e pistacchio",
  etichetta: "Mugcake · Overnight",
  tempo: "2 min cottura",
  badge: "Ricetta",
  foto: "",
  video: "https://www.instagram.com/colazioneconali/reel/DZzifmDIjRL/",
  procedimento: `Mescola farina, purea di mela e lievito, poi aggiungi la parte liquida e il dolcificante.
Mescola fino a ottenere un composto liscio senza grumi.
Cuoci in microonde a massima potenza per 2 minuti, aprendo qualche volta lo sportello.
Alternative: friggitrice a 150-155° per 20 min, forno a 180° per 20 min, o bagnomaria per 20-30 min.
Mescola yogurt e ricotta con dolcificante per lo strato cremoso.
Decora con marmellata ai frutti di bosco e crema di pistacchi.`
}, {
  titolo: "Mugcake caffè e cioccolato",
  etichetta: "Mugcake · Overnight",
  tempo: "2 min cottura",
  badge: "Ricetta",
  foto: "",
  video: "https://www.instagram.com/colazioneconali/reel/DZfcDaKIg0S/",
  procedimento: `Mescola farina, cacao, lievito, purea di mela, latte e dolcificante fino a ottenere un composto liscio.
Cuoci in microonde a massima potenza per circa 2 minuti, facendo una pausa a metà.
In alternativa: friggitrice a 150-155° o forno a 180° per circa 20 min.
Una volta intiepidita, aggiungi lo strato di yogurt al caffè.
Prepara la salsina mescolando cacao, yogurt, dolcificante e caffè fino a formare una salsina liscia.
Decora con la salsina al cacao e, se vuoi, sbriciolaci mezzo biscotto.
Lascia riposare in frigo.`
}, {
  titolo: "Mugcake ricotta e mirtilli",
  etichetta: "Mugcake · Overnight",
  tempo: "2 min cottura",
  badge: "Ricetta",
  foto: "",
  video: "https://www.instagram.com/colazioneconali/reel/DZXe09lo4-d/",
  procedimento: `Mescola farina, purea di mela e lievito, poi aggiungi la parte liquida e il dolcificante.
Mescola fino a ottenere un composto liscio senza grumi.
Aggiungi qualche mirtillo.
Cuoci in microonde a massima potenza per 2 minuti, aprendo qualche volta lo sportello.
Mescola yogurt e ricotta con dolcificante per lo strato cremoso.
Decora con marmellata ai mirtilli e mirtilli freschi.
Lascia riposare in frigo.`
}, {
  titolo: "7 colazioni per 7 giorni",
  etichetta: "Compilazione · Colazione",
  tempo: "",
  badge: "Featured",
  foto: "",
  video: "https://www.instagram.com/colazioneconali/reel/DZFb95WIFCN/",
  procedimento: `Weetabix al cioccolato e PB: sbriciolate 2 formelle, unite yogurt, cacao, PB in polvere e dolcificante; decorate con salsina al cacao e PB.
Tortino ricotta e mirtilli: unite farina, lievito, purea di mela e albumi; versate in uno stampo con ricotta e mirtilli; cuocete in friggitrice a 155° per 20-25 min.
Overnight mugcake: vedi ricetta dedicata sul profilo.
Overnight oats vaniglia e mirtilli: mescolate fiocchi di avena, proteine, yogurt e dolcificante; coprite con yogurt o ricotta, marmellata e mirtilli.
Overnight oats PB e marmellata: stessa base; decorate con yogurt, PB, marmellata alle fragole e biscotto lotus sbriciolato.
Pancakes al tiramisù: vedi ricetta dedicata sul profilo.
Overnight oats fondente: mescolate fiocchi di avena, cacao, dolcificante e latte; decorate con salsina al cacao, crema fondente e cocco in scaglie.`
}, {
  titolo: "Pancakes al tiramisù",
  etichetta: "Pancakes · Colazione",
  tempo: "15-20 min cottura",
  badge: "Ricetta",
  foto: "",
  video: "https://www.instagram.com/colazioneconali/reel/DY97lV5IGFf/",
  procedimento: `Mescola farina d'avena, cacao, banana schiacciata, lievito, un goccio di caffè, albume e dolcificante.
Scalda una padella antiaderente leggermente oliata.
Versa due cucchiai di impasto alla volta formando piccoli pancakes.
Girali non appena si gonfiano bene.
Coprili con pellicola se vuoi prepararli la sera prima.
Mescola yogurt greco, ricotta, caffè e dolcificante per la crema al caffè.
Alterna strati di pancakes e crema.
Termina con una spolverata di cacao amaro.`
}, {
  titolo: "Weetabix fragole, ricotta e crema white",
  etichetta: "Weetabix · Overnight",
  tempo: "5 min preparazione",
  badge: "Ricetta",
  foto: "",
  video: "https://www.instagram.com/colazioneconali/reel/DYwmtIPIN6k/",
  procedimento: `Schiaccia mezza banana con una forchetta.
Sbriciolate 2 formelle di weetabix e uniscile alla banana, allo yogurt greco, al dolcificante e alla cannella.
Mescola e aggiungi un goccio di acqua o latte fino alla consistenza desiderata.
Mescola ricotta, yogurt, dolcificante e un cucchiaino di marmellata alle fragole per lo strato intermedio.
Aggiungi altra marmellata alle fragole in superficie.
Decora con la crema white e cocco rapè in scaglie.
Lascia riposare in frigo.`
}, {
  titolo: "Weetabix a strati",
  etichetta: "Weetabix · Overnight",
  tempo: "5 min preparazione",
  badge: "Ricetta",
  foto: "",
  video: "https://www.instagram.com/colazioneconali/reel/DYcrly_Ijue/",
  procedimento: `Sbriciolate 2 formelle di weetabix e uniscile al caffè, alla banana in purea, al dolcificante, al cacao e a un goccio di acqua o latte.
Mescola yogurt greco con burro di arachidi in polvere e dolcificante per la crema.
Alterna due volte la parte con i weetabix alla crema.
Termina con una gocciola sbriciolata sopra.
Lascia riposare in frigo.`
}, {
  titolo: "Torta di mele monoporzione",
  etichetta: "Mugcake · Overnight",
  tempo: "2 min cottura",
  badge: "Ricetta",
  foto: "",
  video: "https://www.instagram.com/colazioneconali/reel/DYUNEURIvNB/",
  procedimento: `Mescola farina d'avena, lievito, purea di mela, latte e cannella fino a ottenere un composto liscio.
Aggiungi i pezzettini di mela.
Cuoci in microonde a massima potenza per 2 minuti, con una pausa a metà.
Prepara lo strato di yogurt greco con cannella, burro di arachidi in polvere e dolcificante.
Aggiungi lo strato di yogurt sulla base intiepidita.
Decora con burro di arachidi crunchy e pezzettini di mela passati in micro con la cannella.
Lascia riposare in frigo.`
}, {
  titolo: "6 overnight mugcakes (dosi generali)",
  etichetta: "Mugcake · Compilazione",
  tempo: "2 min cottura",
  badge: "Featured",
  foto: "",
  video: "https://www.instagram.com/colazioneconali/reel/DYPrrslIcmO/",
  procedimento: `Mescola 40g di farina d'avena, 35g di purea di mela o banana, mezzo cucchiaino di lievito, dolcificante e 80g di latte.
Cuoci in microonde a massima potenza per 2 minuti.
In alternativa: forno a 180° per 15-20 min o friggitrice a 150-155° per 20 min.
Aggiungi sopra uno strato di yogurt greco o mix ricotta e yogurt (100-120g).
Decora con salsina al cacao, burro di frutta secca, marmellata o frutta fresca.`
}, {
  titolo: "Weetabix banana, ciocco e arachidi",
  etichetta: "Weetabix · Overnight",
  tempo: "5 min preparazione",
  badge: "Ricetta",
  foto: "",
  video: "https://www.instagram.com/colazioneconali/reel/DX1TAsCo2Kn/",
  procedimento: `Schiaccia mezza banana con una forchetta.
Sbriciolate 2 formelle di weetabix e uniscile alla banana, al cacao, al burro di arachidi in polvere, allo yogurt greco e al dolcificante.
Mescola e aggiungi un goccio di acqua o latte fino alla consistenza desiderata.
Prepara la salsina al cacao mescolando cacao, yogurt, un goccio di caffè e dolcificante; aggiungi acqua a poco a poco fino a formare una salsina.
Aggiungi la salsina alla base.
Decora con un cucchiaino di burro di arachidi e un biscotto lotus sbriciolato.
Lascia riposare in frigo.`
}, {
  titolo: "Mugcake burro di arachidi e marmellata",
  etichetta: "Mugcake · Overnight",
  tempo: "2 min cottura",
  badge: "Ricetta",
  foto: "",
  video: "https://www.instagram.com/colazioneconali/reel/DXweLDTIzCH/",
  procedimento: `Mescola farina, lievito, purea di mela, latte e dolcificante fino a ottenere un composto liscio.
Cuoci in microonde a 700-800W per circa 2 minuti, aprendo lo sportello qualche volta.
Tienila un po' meno del solito se vuoi evitare che diventi gommosa.
Mescola yogurt greco con burro di arachidi, dolcificante e un pizzico di cannella.
Aggiungi lo strato di yogurt sulla base intiepidita.
Termina con la tua marmellata preferita.
Lascia riposare in frigo tutta la notte.`
}, {
  titolo: "Mugcake ricotta e cioccolato",
  etichetta: "Mugcake · Overnight",
  tempo: "2 min cottura",
  badge: "Ricetta",
  foto: "",
  video: "https://www.instagram.com/colazioneconali/reel/DXgpIppCCH9/",
  procedimento: `Mescola cacao, farina d'avena e lievito, poi aggiungi la purea di mela, il latte e il dolcificante.
Mescola fino a ottenere un composto liscio senza grumi.
Cuoci in microonde a 700-800W per circa 2 minuti, aprendo qualche volta lo sportello.
Mescola yogurt greco, ricotta e gocce di cioccolato fondente con dolcificante.
Aggiungi lo strato di crema sulla base intiepidita.
Termina con una spolverata di cacao.
Lascia riposare in frigo tutta la notte.`
}, {
  titolo: "Pancakes facili e soffici",
  etichetta: "Pancakes · Colazione",
  tempo: "15-20 min cottura",
  badge: "Ricetta",
  foto: "",
  video: "https://www.instagram.com/colazioneconali/reel/DXT4nK7CKwF/",
  procedimento: `Mescola farina d'avena, cannella, lievito, uovo, purea di mela, un goccio di latte e dolcificante.
Scalda una padella antiaderente leggermente oliata.
Versa due cucchiai di impasto alla volta formando piccoli pancakes.
Girali non appena si gonfiano bene.
Coprili con pellicola se vuoi prepararli la sera prima.
Servili con yogurt greco dolcificato e frutta fresca.`
}, {
  titolo: "Mugcake cioccolato, ricotta e fragole",
  etichetta: "Mugcake · Overnight",
  tempo: "2 min cottura",
  badge: "Ricetta",
  foto: "",
  video: "https://www.instagram.com/colazioneconali/reel/DXMTYeTiA1X/",
  procedimento: `Mescola cacao, farina d'avena e lievito, poi aggiungi la purea di mela, il latte e il dolcificante.
Mescola fino a ottenere un composto liscio.
Cuoci in microonde a massima potenza per 2 minuti, aprendo qualche volta lo sportello.
Mescola yogurt greco e ricotta con dolcificante per lo strato cremoso.
Prepara la salsina al cacao unendo cacao, yogurt, dolcificante e acqua o latte fino a formare una salsina.
Aggiungi prima la crema poi la salsina sulla base intiepidita.
Lascia riposare in frigo tutta la notte e aggiungi le fragole fresche al mattino.`
}, {
  titolo: "6 idee overnight oats",
  etichetta: "Oats · Compilazione",
  tempo: "5 min preparazione",
  badge: "Featured",
  foto: "",
  video: "https://www.instagram.com/colazioneconali/reel/DWtBuf6CA0_/",
  procedimento: `Base classica: mescola 35g di fiocchi piccoli di avena con 120-130g di yogurt greco, dolcificante, 10g di proteine in polvere (facoltativo) e un goccio di latte.
Versione 1: decora con salsina al cacao e crema di nocciole.
Versione 2: usa base alla zucca con cacao; decora con salsina al cacao, PB e biscotto sbriciolato.
Versione 3: aggiungi cannella alla base; completa con ricotta, marmellata e biscotto (effetto cheesecake).
Versione 4: base classica con toppings freschi: banana e burro di arachidi.
Versione 5: aggiungi gocce di cioccolato alla base; decora con salsina al cacao e gocciola sbriciolata.
Versione 6: base al cacao; decora con yogurt alla nocciola, crema di nocciole e fragole.
Lascia riposare in frigo tutta la notte.`
}, {
  titolo: "Mugcake zucca e cannella",
  etichetta: "Mugcake · Overnight",
  tempo: "2 min cottura",
  badge: "Ricetta",
  foto: "",
  video: "https://www.instagram.com/colazioneconali/reel/DWle938iI94/",
  procedimento: `Schiaccia la zucca cotta fino a ridurla in purea.
Unisci farina d'avena, cannella e lievito, poi aggiungi il latte e la purea di zucca.
Mescola fino a ottenere un composto liscio.
Cuoci in microonde a massima potenza per 2 minuti, aprendo qualche volta lo sportello.
Mescola yogurt greco con dolcificante e cannella per lo strato cremoso.
Aggiungi lo strato di yogurt sulla base intiepidita.
Decora con burro di arachidi, cannella e un biscotto secco sbriciolato.
Lascia riposare in frigo.`
}, {
  titolo: "Mugcake ciocco, ricotta e frutti di bosco",
  etichetta: "Mugcake · Overnight",
  tempo: "2 min cottura",
  badge: "Ricetta",
  foto: "",
  video: "https://www.instagram.com/colazioneconali/reel/DWYuMewuxMm/",
  procedimento: `Mescola cacao, farina d'avena e lievito, poi aggiungi la purea di mela, il latte e il dolcificante.
Mescola fino a ottenere un composto liscio senza grumi.
Cuoci in microonde a massima potenza per 2 minuti, aprendo qualche volta lo sportello.
Mescola yogurt greco e ricotta con dolcificante per lo strato cremoso.
Aggiungi lo strato di crema sulla base intiepidita.
Termina con marmellata ai frutti di bosco o frutti rossi freschi e mezzo biscotto al cioccolato sbriciolato.
Lascia riposare in frigo.`
}, {
  titolo: "6 overnight mugcakes (video presentazione)",
  etichetta: "Mugcake · Compilazione",
  tempo: "",
  badge: "Featured",
  foto: "",
  video: "https://www.instagram.com/colazioneconali/reel/DWMPyPqiPjP/",
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

/* ============================================================================
   PARTE 6 ·  LA TUA FOTO  (la card nella sezione dei numeri)

   foto   →  link a una tua foto. Caricala dal pannello /admin (campo “La tua foto”).
             Vuoto "" = mostra il placeholder “La foto di Alissa”.
   nome   →  il tuo nome              es. "Alissa"
   handle →  il tuo @ Instagram       es. "@colazioneconali"
   bio    →  una frase breve su di te es. "amo allenarmi e fare colazione :)"
   ============================================================================ */
window.PROFILO = {
  foto: "",
  nome: "Alissa",
  handle: "@colazioneconali",
  bio: "amo allenarmi e fare colazione :)"
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/contenuti.js", error: String((e && e.message) || e) }); }

// ui_kits/landing/parallax.js
try { (() => {
/* parallax.js — whole-section DEPTH parallax.
   Each section's background layer drifts opposite to the scroll at its own speed,
   so the section reads as layers sitting at different depths (not just moving text).
   Tag any background layer with data-px="<speed>" (≈0.10–0.18).
   Driven directly by scroll position (no requestAnimationFrame / CSS timeline), so
   it reacts as you scroll and never freezes in throttled tabs. Each layer's position
   is measured from its SECTION (which is never transformed), so applying a transform
   to the layer can't feed back into the measurement. Respects reduced-motion. */
(function () {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var MAX = 120; // clamp so an oversized layer never exposes its edge

  function update() {
    var vh = window.innerHeight || 800;
    var els = document.querySelectorAll('[data-px]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var speed = parseFloat(el.getAttribute('data-px')) || 0;
      var ref = el.closest('section, header, footer') || el.parentElement;
      if (!ref) continue;
      var r = ref.getBoundingClientRect();
      var fromCenter = r.top + r.height / 2 - vh / 2;
      var t = -fromCenter * speed;
      if (t > MAX) t = MAX;else if (t < -MAX) t = -MAX;
      el.style.transform = 'translate3d(0,' + t.toFixed(1) + 'px,0)';
      el.style.willChange = 'transform';
    }
  }
  window.addEventListener('scroll', update, {
    passive: true
  });
  window.addEventListener('resize', update, {
    passive: true
  });
  // React mounts the sections asynchronously, so keep refreshing briefly until the
  // [data-px] layers exist, then settle into scroll-only updates.
  var n = 0,
    iv = setInterval(function () {
      update();
      if (++n > 26) clearInterval(iv);
    }, 120);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', update);else update();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/parallax.js", error: String((e && e.message) || e) }); }

// ui_kits/landing/seams.jsx
try { (() => {
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
  cool: ['#FFC074', '#9B8CFF', '#6FA8FF']
};
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const easeOut = t => 1 - Math.pow(1 - t, 3);

/* RNG deterministico: stesso seed → stessa forma */
function mulberry32(a) {
  return function () {
    a |= 0;
    a = a + 0x6D2B79F5 | 0;
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
    const p0 = pts[i - 1] || pts[i],
      p1 = pts[i],
      p2 = pts[i + 1],
      p3 = pts[i + 2] || p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6,
      c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6,
      c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return d;
}

/* genera un percorso GPS-like: cammino casuale che attraversa la banda */
function makeRoute(seed, W, H) {
  const rng = mulberry32(seed >>> 0 || 1);
  const N = 7 + Math.floor(rng() * 4); // 7–10 waypoint
  const dir = rng() < 0.5 ? 1 : -1; // sx→dx oppure dx→sx (partenza opposta)
  const mx = W * 0.07,
    top = H * 0.18,
    bot = H * 0.84;
  let y = top + rng() * (bot - top); // quota di partenza casuale
  const pts = [];
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    const base = mx + (W - 2 * mx) * t;
    let x = dir > 0 ? base : W - base;
    x += (rng() - 0.5) * (W * 0.05);
    y += (rng() - 0.5) * (H * 0.42); // serpentina verticale
    y = clamp(y, top, bot);
    pts.push([x, y]);
  }
  return {
    d: smoothPath(pts),
    start: pts[0]
  };
}
function Seam({
  from,
  to,
  tint = 'warm',
  height = 176,
  seed = 1
}) {
  const cols = SEAM_TINTS[tint] || SEAM_TINTS.warm;
  const band = React.useRef(null);
  const trail = React.useRef(null);
  const dot = React.useRef(null);
  const halo = React.useRef(null);
  const uid = (React.useId ? React.useId() : 'seam' + seed).replace(/[:]/g, '');
  const W = 1200,
    H = height;
  const route = React.useMemo(() => makeRoute(seed, W, H), [seed, H]);
  React.useEffect(() => {
    const p0 = trail.current;
    if (!p0) return;
    const total = p0.getTotalLength();
    p0.style.strokeDasharray = total;
    const apply = p => {
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
    if (SEAM_REDUCE) {
      apply(1);
      return;
    }
    apply(0);
    const update = () => {
      const el = band.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      const c = r.top + r.height / 2;
      const p = clamp((vh * 0.92 - c) / (vh * 0.6), 0, 1);
      apply(p);
    };
    update();
    const onScroll = () => update();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    window.addEventListener('resize', onScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [route]);
  return /*#__PURE__*/React.createElement("div", {
    ref: band,
    "aria-hidden": "true",
    style: {
      position: 'relative',
      height: H,
      overflow: 'hidden',
      background: `linear-gradient(180deg, ${from} 0%, ${to} 100%)`
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    preserveAspectRatio: "none",
    width: "100%",
    height: "100%",
    style: {
      position: 'absolute',
      inset: 0,
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: `g${uid}`,
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "0"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: cols[0]
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.5",
    stopColor: cols[1]
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: cols[2]
  })), /*#__PURE__*/React.createElement("filter", {
    id: `b${uid}`,
    x: "-60%",
    y: "-60%",
    width: "220%",
    height: "220%"
  }, /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: "7"
  }))), /*#__PURE__*/React.createElement("path", {
    d: route.d,
    fill: "none",
    stroke: `url(#g${uid})`,
    strokeWidth: "1.4",
    strokeOpacity: "0.14",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    ref: trail,
    d: route.d,
    fill: "none",
    stroke: `url(#g${uid})`,
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      filter: `drop-shadow(0 2px 9px ${cols[1]}55)`
    }
  }), /*#__PURE__*/React.createElement("circle", {
    cx: route.start[0],
    cy: route.start[1],
    r: "5.5",
    fill: "#fff",
    stroke: cols[0],
    strokeWidth: "2.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: route.start[0],
    cy: route.start[1],
    r: "1.8",
    fill: cols[0]
  }), /*#__PURE__*/React.createElement("circle", {
    ref: halo,
    r: "13",
    fill: cols[1],
    filter: `url(#b${uid})`,
    style: {
      opacity: 0
    }
  }), /*#__PURE__*/React.createElement("circle", {
    ref: dot,
    r: "5.4",
    fill: "#fff",
    stroke: cols[1],
    strokeWidth: "2.4",
    style: {
      opacity: 0
    }
  })));
}
window.Seam = Seam;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/seams.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/sections-bottom.jsx
try { (() => {
/* sections-bottom.jsx — Prozis partner band, About, Collab CTA, Footer */
const IGU = window.SOCIAL && window.SOCIAL.instagram || window.IG_URL;
const PRZ = window.PROZIS && window.PROZIS.link || window.PROZIS_URL;
const COD = window.PROZIS && window.PROZIS.codice || 'ALI03';
const SOC = window.SOCIAL || {};

/* ---------- PROZIS PARTNER BAND ---------- */
function Partner() {
  const {
    Button: BtnB
  } = window.ColazioneConAliDesignSystem_665c4d || {};
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '110px 32px',
      background: 'var(--cream)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-px": "0.12",
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
      position: 'relative',
      overflow: 'hidden',
      padding: '140px 32px',
      background: 'linear-gradient(175deg, #FFF7EE 0%, #FFE9E4 45%, #F3E8FF 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "orb",
    "data-px": "0.09",
    style: {
      width: 280,
      height: 280,
      background: 'var(--coral)',
      top: '-8%',
      right: '6%',
      animationDuration: '20s'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "orb",
    "data-px": "0.06",
    style: {
      width: 240,
      height: 240,
      background: 'var(--sky)',
      bottom: '-6%',
      left: '4%',
      animationDuration: '22s',
      animationDelay: '-9s'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "orb",
    "data-px": "0.12",
    style: {
      width: 180,
      height: 180,
      background: 'var(--amber)',
      top: '55%',
      left: '38%',
      animationDuration: '16s',
      animationDelay: '-3s',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "grain",
    style: {
      opacity: 0.26
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 1160,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'minmax(240px, 300px) 0.5fr 0.5fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      maxWidth: 300
    }
  }, /*#__PURE__*/React.createElement(window.ProfiloCard, null)), /*#__PURE__*/React.createElement("div", {
    className: "reveal d1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      color: 'var(--grey-40)',
      display: 'inline-block',
      marginBottom: 22,
      border: '1px solid var(--grey-08)',
      padding: '8px 16px',
      borderRadius: 50,
      background: 'var(--glass-strong)',
      backdropFilter: 'blur(10px)'
    }
  }, "Chi sono \xB7 Alissa"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(28px,3vw,40px)',
      fontVariationSettings: "'wght' 340",
      letterSpacing: '-0.42px',
      lineHeight: 1.18,
      margin: 0
    }
  }, "22 anni, Padova. Amo allenarmi e fare colazione \u2014 e raccontarvi entrambe le cose, ogni mattina.")), /*#__PURE__*/React.createElement("div", {
    className: "reveal d2"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 23,
      fontVariationSettings: "'wght' 340",
      letterSpacing: '-0.24px',
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
      marginTop: 40,
      paddingTop: 26,
      borderTop: '1px solid rgba(0,0,0,0.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: 'var(--grey-40)',
      marginBottom: 16
    }
  }, "In evidenza su Instagram"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10
    }
  }, ['schiscettando', 'oats', 'mi muovo', 'proziss ❤', 'random', 'ricettefast'].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      border: '1px solid var(--grey-08)',
      borderRadius: 50,
      padding: '8px 16px',
      fontSize: 14,
      letterSpacing: '-0.14px',
      background: 'rgba(255,255,255,0.6)',
      backdropFilter: 'blur(8px)'
    }
  }, t)))))));
}

/* ---------- COLLAB CTA ---------- */
function Collab() {
  const {
    Button: BtnB
  } = window.ColazioneConAliDesignSystem_665c4d || {};
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
    "data-px": "0.14",
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
      lineHeight: 1.16,
      margin: '0 0 22px',
      color: '#fff'
    }
  }, "Hai un brand che parla la lingua delle ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      background: 'var(--grad-rose)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      padding: '0.04em 0.1em',
      margin: '0 -0.1em',
      WebkitBoxDecorationBreak: 'clone',
      boxDecorationBreak: 'clone'
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
  const {
    Modal
  } = window.ColazioneConAliDesignSystem_665c4d || {};
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

/* ---------- QUIZ "Quale colazione fa per te?" ---------- */
/* Sezione parallela prima delle ricette: poche domande rapide, poi consiglia
   una ricetta vera tra quelle pubblicate. Effetto dedicato: card che scorrono
   (slide + fade) tra una domanda e l'altra, punti di avanzamento, e una
   rivelazione "a comparsa" del risultato. */
const QUIZ_QUESTIONS = [{
  q: 'Quanto tempo hai stamattina?',
  key: 'speed',
  options: [{
    icon: '⏱️',
    label: 'Pochissimo, mi sveglio a malapena',
    value: 'fast'
  }, {
    icon: '🚿',
    label: 'Il tempo di una doccia',
    value: 'medium'
  }, {
    icon: '☀️',
    label: 'Tutta la mattina, con calma',
    value: 'slow'
  }]
}, {
  q: 'La vuoi pronta dalla sera prima o cucinata al momento?',
  key: 'prep',
  options: [{
    icon: '🥶',
    label: 'Pronta in frigo, overnight',
    value: 'overnight'
  }, {
    icon: '🍳',
    label: 'Calda, appena cucinata',
    value: 'fresh'
  }]
}, {
  q: 'Cosa non può mancare?',
  key: 'flavor',
  options: [{
    icon: '🍫',
    label: 'Cioccolato o caffè',
    value: 'ciocc'
  }, {
    icon: '🍓',
    label: 'Frutta o marmellata',
    value: 'frutta'
  }, {
    icon: '🥣',
    label: 'Qualcosa di leggero',
    value: 'leggero'
  }]
}, {
  q: 'Che frutta ti fa più gola?',
  key: 'frutta',
  options: [{
    icon: '🍎',
    label: 'Mela e cannella',
    value: 'mela'
  }, {
    icon: '🫐',
    label: 'Mirtilli e frutti di bosco',
    value: 'bosco'
  }, {
    icon: '🍋',
    label: 'Limone o agrumi',
    value: 'limone'
  }, {
    icon: '🎃',
    label: 'Zucca',
    value: 'zucca'
  }]
}, {
  q: 'Cremosa o più semplice?',
  key: 'cream',
  options: [{
    icon: '🧀',
    label: 'Bella cremosa, ricotta o yogurt',
    value: 'cremosa'
  }, {
    icon: '✨',
    label: 'Semplice, senza troppi strati',
    value: 'semplice'
  }]
}];
function pickRecipe(answers) {
  const cat = r => (r.label.split('·')[0] || '').trim();
  let target = 'Mugcake';
  if (answers.prep === 'fresh') target = 'Pancakes';else if (answers.speed === 'slow') target = answers.flavor === 'leggero' ? 'Oats' : 'Weetabix';else if (answers.speed === 'fast') target = 'Mugcake';
  let pool = RECIPES.filter(r => cat(r) === target);
  if (!pool.length) pool = RECIPES;

  // priorità: frutta specifica scelta > gusto principale > cremosità
  const FRUIT_RX = {
    mela: /mela/i,
    bosco: /mirtill|frutti di bosco/i,
    limone: /limone|pistacchio/i,
    zucca: /zucca/i
  };
  const KEY_RX = {
    ciocc: /ciocc|cacao|caff[eè]/i,
    frutta: /mela|mirtill|fragol|frutti|limone|zucca/i,
    leggero: /ricotta|yogurt|weetabix/i
  };
  const CREAM_RX = {
    cremosa: /ricotta|crema|yogurt/i,
    semplice: /pancakes|weetabix/i
  };
  const candidates = [FRUIT_RX[answers.frutta], KEY_RX[answers.flavor], CREAM_RX[answers.cream]].filter(Boolean);
  for (const rx of candidates) {
    const match = pool.find(r => rx.test(r.title));
    if (match) return match;
  }
  return pool[0] || RECIPES[0];
}
function Quiz() {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const [openResult, setOpenResult] = React.useState(false);
  const done = step >= QUIZ_QUESTIONS.length;
  const result = React.useMemo(() => done ? pickRecipe(answers) : null, [done, answers]);
  const choose = (key, value) => {
    setAnswers(a => ({
      ...a,
      [key]: value
    }));
    setStep(s => s + 1);
  };
  const restart = () => {
    setAnswers({});
    setStep(0);
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "quiz",
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '120px 32px',
      background: 'linear-gradient(150deg, #FFE9C7 0%, #FFCBD6 48%, #D9C4FF 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "orb",
    "data-px": "0.1",
    style: {
      width: 320,
      height: 320,
      background: 'var(--sun)',
      top: '-10%',
      left: '-4%',
      animationDuration: '18s'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "orb",
    "data-px": "0.07",
    style: {
      width: 280,
      height: 280,
      background: 'var(--lilac)',
      bottom: '-12%',
      right: '0%',
      animationDuration: '21s',
      animationDelay: '-7s'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "grain",
    style: {
      opacity: 0.24
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 640,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal mono",
    style: {
      color: 'rgba(0,0,0,0.5)',
      marginBottom: 16
    }
  }, "Trova la tua colazione \xB7 quiz"), /*#__PURE__*/React.createElement("h2", {
    className: "reveal",
    style: {
      fontSize: 'clamp(28px,3.4vw,42px)',
      fontVariationSettings: "'wght' 380",
      letterSpacing: '-0.9px',
      lineHeight: 1.08,
      margin: '0 0 44px'
    }
  }, "Quale colazione fa ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      fontVariationSettings: "'wght' 320"
    }
  }, "per te?")), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 8,
      marginBottom: 30
    }
  }, QUIZ_QUESTIONS.map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: i === step ? 22 : 8,
      height: 8,
      borderRadius: 8,
      background: i <= step || done ? '#000' : 'rgba(0,0,0,0.18)',
      transition: 'width 320ms var(--ease-spring), background 320ms ease'
    }
  }))), !done ? /*#__PURE__*/React.createElement("div", {
    key: step,
    className: "quiz-card",
    style: {
      background: 'var(--glass-strong)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid var(--glass-border)',
      borderRadius: 20,
      padding: '40px 36px',
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: 'rgba(0,0,0,0.4)',
      marginBottom: 10
    }
  }, "Domanda ", step + 1, " di ", QUIZ_QUESTIONS.length), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 23,
      fontStyle: 'italic',
      fontVariationSettings: "'wght' 400",
      letterSpacing: '-0.34px',
      lineHeight: 1.28,
      marginBottom: 26
    }
  }, QUIZ_QUESTIONS[step].q), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, QUIZ_QUESTIONS[step].options.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    onClick: () => choose(QUIZ_QUESTIONS[step].key, o.value),
    className: "quiz-opt",
    style: {
      cursor: 'pointer',
      fontFamily: 'inherit',
      textAlign: 'left',
      fontSize: 16,
      letterSpacing: '-0.16px',
      padding: '15px 20px',
      borderRadius: 14,
      border: '1.5px solid rgba(0,0,0,0.1)',
      background: 'rgba(255,255,255,0.7)',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      transition: 'transform 200ms var(--ease-spring), background 200ms ease, border-color 200ms ease, box-shadow 200ms ease'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      lineHeight: 1
    }
  }, o.icon), o.label)))) : /*#__PURE__*/React.createElement("div", {
    className: "quiz-result",
    style: {
      background: '#000',
      color: '#fff',
      borderRadius: 20,
      padding: '40px 36px',
      boxShadow: 'var(--shadow-modal)',
      textAlign: 'left',
      display: 'grid',
      gridTemplateColumns: '120px 1fr',
      gap: 24,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 120,
      height: 120,
      borderRadius: 16,
      overflow: 'hidden',
      flexShrink: 0,
      background: RECIPE_GRADS[result.gradient] || RECIPE_GRADS.warm
    }
  }, result.image && /*#__PURE__*/React.createElement("img", {
    src: result.image,
    alt: result.title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: 'rgba(255,255,255,0.5)',
      marginBottom: 8
    }
  }, "\xC8 lei: la tua colazione"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 23,
      fontVariationSettings: "'wght' 480",
      letterSpacing: '-0.3px',
      lineHeight: 1.2,
      marginBottom: 16
    }
  }, result.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#ricette",
    onClick: () => window.dispatchEvent(new CustomEvent('quiz-open-recipe', {
      detail: result.title
    })),
    style: {
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: '#fff',
      color: '#000',
      borderRadius: 50,
      padding: '10px 18px',
      fontSize: 14,
      fontVariationSettings: "'wght' 520"
    }
  }, "Vai alla ricetta \u2192"), /*#__PURE__*/React.createElement("button", {
    onClick: restart,
    style: {
      cursor: 'pointer',
      fontFamily: 'inherit',
      background: 'transparent',
      color: 'rgba(255,255,255,0.7)',
      border: '1.5px solid rgba(255,255,255,0.3)',
      borderRadius: 50,
      padding: '10px 18px',
      fontSize: 14
    }
  }, "Rifai il quiz"))))));
}
const RECIPE_GRADS = {
  warm: 'linear-gradient(135deg,#FFD46B,#FF7E8A 60%,#E84393)',
  peach: 'linear-gradient(135deg,#FFCBA0,#FF7E8A 50%,#FFD46B)',
  cool: 'linear-gradient(135deg,#C39BFF,#FF4F8E)',
  sky: 'linear-gradient(135deg,#9BC9FF,#C39BFF 50%,#FF4F8E)',
  berry: 'linear-gradient(135deg,#6E2A6F,#E84393 60%,#FFB088)',
  cream: 'linear-gradient(135deg,#FFF3E2,#FFD46B 60%,#FF7E8A)'
};

/* ---------- RECIPES ---------- */
function Recipes() {
  const {
    RecipeCard
  } = window.ColazioneConAliDesignSystem_665c4d || {};
  const [openIdx, setOpenIdx] = React.useState(null);
  const [filter, setFilter] = React.useState('Tutte');

  // categorie dedotte dai dati (la prima parola dell'etichetta: Mugcake, Weetabix…)
  const cat = r => (r.label.split('·')[0] || '').trim();
  const cats = React.useMemo(() => {
    const seen = [];
    RECIPES.forEach(r => {
      const c = cat(r);
      if (c && !seen.includes(c)) seen.push(c);
    });
    return ['Tutte', ...seen];
  }, []);
  const shown = filter === 'Tutte' ? RECIPES : RECIPES.filter(r => cat(r) === filter);

  // il quiz può chiedere di aprire una ricetta specifica (evento custom)
  React.useEffect(() => {
    const onOpen = e => {
      const i = RECIPES.findIndex(r => r.title === e.detail);
      if (i > -1) {
        setFilter('Tutte');
        setOpenIdx(i);
      }
    };
    window.addEventListener('quiz-open-recipe', onOpen);
    return () => window.removeEventListener('quiz-open-recipe', onOpen);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    id: "ricette",
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '120px 32px',
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-px": "0.12",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      background: 'radial-gradient(ellipse 50% 60% at 10% 16%, rgba(255,126,138,0.10) 0%, transparent 60%), radial-gradient(ellipse 46% 58% at 92% 86%, rgba(255,212,107,0.13) 0%, transparent 60%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
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
    className: "reveal",
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      alignItems: 'center',
      marginBottom: 38
    }
  }, cats.map(c => {
    const active = c === filter;
    const n = c === 'Tutte' ? RECIPES.length : RECIPES.filter(r => cat(r) === c).length;
    return /*#__PURE__*/React.createElement("button", {
      key: c,
      className: "filter-chip",
      onClick: () => setFilter(c),
      "aria-pressed": active,
      style: {
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: 14,
        letterSpacing: '-0.14px',
        fontVariationSettings: "'wght' 460",
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '9px 18px',
        borderRadius: 50,
        border: `1.5px solid ${active ? '#000' : 'var(--grey-08)'}`,
        background: active ? '#000' : 'transparent',
        color: active ? '#fff' : 'var(--text-primary)',
        transition: 'background 300ms var(--ease-out-expo), color 300ms var(--ease-out-expo), border-color 300ms ease, transform 220ms var(--ease-spring), box-shadow 220ms ease'
      }
    }, c, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 10.5,
        opacity: active ? 0.7 : 0.45
      }
    }, n));
  })), /*#__PURE__*/React.createElement("div", {
    className: "recipe-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 20
    }
  }, shown.map((r, pos) => {
    const i = RECIPES.indexOf(r);
    return /*#__PURE__*/React.createElement("div", {
      key: `${filter}-${i}`,
      className: "recipe-pop",
      style: {
        animationDelay: `${Math.min(pos, 8) * 55}ms`
      }
    }, /*#__PURE__*/React.createElement(RecipeCard, _extends({}, r, {
      onClick: () => setOpenIdx(i)
    })));
  }))), /*#__PURE__*/React.createElement(RecipeModal, {
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
    "data-px": "0.13",
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
  SectionHead,
  Quiz
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/sections-mid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/sections-top.jsx
try { (() => {
/* sections-top.jsx — Nav, Hero, Marquee, Stats band
   Mounted after the DS bundle; pulls Button/Pill from the namespace. */
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
  const {
    Button
  } = window.ColazioneConAliDesignSystem_665c4d || {};
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
  const {
    Button
  } = window.ColazioneConAliDesignSystem_665c4d || {};
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
    "data-px": "0.15",
    style: {
      position: 'absolute',
      top: '-30%',
      left: 0,
      width: '100%',
      height: '160%',
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
/* singolo numero con "effetto di caricamento": conta da 0 al valore e una
   barra si riempie in parallelo, partendo quando entra nello schermo. */
function StatNum({
  numero,
  testo
}) {
  const box = React.useRef(null);
  const num = React.useRef(null);
  const bar = React.useRef(null);
  React.useEffect(() => {
    const raw = String(numero == null ? '' : numero).trim();
    const isNum = /^[\d.\s]+$/.test(raw) && /\d/.test(raw);
    const target = isNum ? parseInt(raw.replace(/[.\s]/g, ''), 10) : null;
    const fmt = v => v.toLocaleString('it-IT');
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const setFinal = () => {
      if (num.current) num.current.textContent = isNum ? fmt(target) : raw;
      if (bar.current) bar.current.style.width = '100%';
    };
    if (!isNum) {
      setFinal();
      return;
    }
    if (reduce) {
      setFinal();
      return;
    }
    let started = false,
      rafId = 0,
      t0 = 0;
    const dur = 1500;
    const ease = t => 1 - Math.pow(1 - t, 3);
    const step = now => {
      if (!t0) t0 = now;
      const p = Math.min((now - t0) / dur, 1);
      const e = ease(p);
      if (num.current) num.current.textContent = fmt(Math.round(target * e));
      if (bar.current) bar.current.style.width = (e * 100).toFixed(1) + '%';
      if (p < 1) rafId = requestAnimationFrame(step);
    };
    const start = () => {
      if (started) return;
      started = true;
      if (num.current) num.current.textContent = fmt(0);
      rafId = requestAnimationFrame(step);
      // se il timeline è strozzato (tab in background), forza il valore finale
      setTimeout(setFinal, dur + 500);
    };
    let io;
    if ('IntersectionObserver' in window && box.current) {
      io = new IntersectionObserver(ents => ents.forEach(en => {
        if (en.isIntersecting) {
          start();
          io.disconnect();
        }
      }), {
        threshold: 0.45
      });
      io.observe(box.current);
    } else {
      start();
    }
    const safety = setTimeout(() => {
      if (!started) setFinal();
    }, 2600);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (io) io.disconnect();
      clearTimeout(safety);
    };
  }, [numero]);
  return /*#__PURE__*/React.createElement("div", {
    ref: box,
    className: "reveal"
  }, /*#__PURE__*/React.createElement("div", {
    ref: num,
    style: {
      fontSize: 'clamp(38px,4.2vw,56px)',
      fontVariationSettings: "'wght' 400",
      letterSpacing: '-1.04px',
      lineHeight: 1
    }
  }, numero), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      borderRadius: 3,
      background: 'var(--grey-08)',
      overflow: 'hidden',
      margin: '14px 0 12px',
      maxWidth: 160
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: bar,
    style: {
      height: '100%',
      width: '0%',
      borderRadius: 3,
      background: 'var(--grad-rose)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: 'var(--grey-40)'
    }
  }, testo));
}

/* card foto di Alissa — la foto si carica dal pannello /admin (campo PROFILO) */
function ProfiloCard() {
  const P = window.PROFILO || {};
  const foto = P.foto || '';
  const nome = P.nome || 'Alissa';
  const handle = P.handle || '@colazioneconali';
  const bio = P.bio || 'amo allenarmi e fare colazione :)';
  return /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      position: 'relative',
      aspectRatio: '4 / 5',
      borderRadius: 20,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-card)',
      border: '1px solid var(--grey-08)',
      background: 'var(--grad-sunrise)'
    }
  }, foto ? /*#__PURE__*/React.createElement("img", {
    src: foto,
    alt: nome,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      textAlign: 'center',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 60,
      margin: '0 auto 16px',
      borderRadius: '50%',
      background: '#000',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      fontSize: 24
    }
  }, "\u2726"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontVariationSettings: "'wght' 480",
      letterSpacing: '-0.3px'
    }
  }, "La foto di Alissa"), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: 'var(--grey-40)',
      marginTop: 8,
      lineHeight: 1.6
    }
  }, "caricala dal pannello", /*#__PURE__*/React.createElement("br", null), "/admin \u2192 la tua foto"))), /*#__PURE__*/React.createElement("div", {
    className: "grain",
    style: {
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 14,
      right: 14,
      bottom: 14,
      padding: '11px 14px',
      borderRadius: 14,
      background: 'var(--glass-strong)',
      backdropFilter: 'blur(18px)',
      WebkitBackdropFilter: 'blur(18px)',
      border: '1px solid var(--glass-border)',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      flexShrink: 0,
      borderRadius: '50%',
      background: '#000',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      fontSize: 14
    }
  }, "\u2726"), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontVariationSettings: "'wght' 520",
      letterSpacing: '-0.2px'
    }
  }, nome, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--rose)'
    }
  }, "\u2728")), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: 'var(--grey-40)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, handle, " \xB7 ", bio))));
}
function Stats() {
  const data = window.NUMERI || [];
  return /*#__PURE__*/React.createElement("section", {
    id: "numeri",
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '110px 32px',
      background: 'linear-gradient(170deg, #FFF3E2 0%, #FFE4EC 55%, #F1E6FF 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "orb",
    "data-px": "0.08",
    style: {
      width: 300,
      height: 300,
      background: 'var(--sun)',
      top: '-6%',
      left: '8%',
      animationDuration: '19s'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "orb",
    "data-px": "0.05",
    style: {
      width: 260,
      height: 260,
      background: 'var(--lilac)',
      bottom: '-8%',
      right: '10%',
      animationDuration: '23s',
      animationDelay: '-8s'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "orb",
    "data-px": "0.11",
    style: {
      width: 200,
      height: 200,
      background: 'var(--mint)',
      top: '30%',
      right: '30%',
      animationDuration: '17s',
      animationDelay: '-4s',
      opacity: 0.35
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "grain",
    style: {
      opacity: 0.28
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 900,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal mono",
    style: {
      color: 'var(--grey-40)',
      marginBottom: 30
    }
  }, "La community, in numeri \xB7 @colazioneconali"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '38px 28px'
    },
    className: "stats-grid"
  }, data.map(n => /*#__PURE__*/React.createElement(StatNum, {
    key: n.testo,
    numero: n.numero,
    testo: n.testo
  })))));
}
Object.assign(window, {
  Nav,
  Hero,
  Marquee,
  Stats,
  ProfiloCard,
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
