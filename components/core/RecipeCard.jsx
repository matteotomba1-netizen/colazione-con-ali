import React from 'react';

const GRADIENTS = {
  warm:  'linear-gradient(135deg, #FFD46B 0%, #FF7E8A 60%, #E84393 100%)',
  peach: 'linear-gradient(135deg, #FFCBA0 0%, #FF7E8A 50%, #FFD46B 100%)',
  cool:  'linear-gradient(135deg, #C39BFF 0%, #FF4F8E 100%)',
  sky:   'linear-gradient(135deg, #9BC9FF 0%, #C39BFF 50%, #FF4F8E 100%)',
  berry: 'linear-gradient(135deg, #6E2A6F 0%, #E84393 60%, #FFB088 100%)',
  cream: 'linear-gradient(135deg, #FFF3E2 0%, #FFD46B 60%, #FF7E8A 100%)',
};

/**
 * RecipeCard — the signature card. Supply `image` OR a `gradient` key.
 * Hover lift + image zoom + arrow rotate are handled with inline state.
 */
export function RecipeCard({
  label,
  title,
  meta,
  badge = 'Ricetta',
  image,
  gradient = 'warm',
  fillText,
  onClick,
}) {
  const [hover, setHover] = React.useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
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
        display: 'block',
      }}
    >
      <div style={{ aspectRatio: '4 / 3', position: 'relative', overflow: 'hidden' }}>
        <span style={{
          position: 'absolute', top: 14, left: 14, zIndex: 1,
          background: 'rgba(0,0,0,0.7)', color: '#fff', backdropFilter: 'blur(8px)',
          padding: '5px 10px', borderRadius: 20,
          fontFamily: "'JetBrains Mono', monospace", fontSize: 11, fontWeight: 500,
          textTransform: 'uppercase', letterSpacing: '0.6px',
        }}>{badge}</span>
        <span style={{
          position: 'absolute', top: 14, right: 14, zIndex: 1, fontSize: 18, lineHeight: 1,
          color: hover ? '#FF4F8E' : 'rgba(255,255,255,0.8)',
          transform: hover ? 'scale(1.25)' : 'scale(1)',
          transition: 'transform 300ms cubic-bezier(0.34,1.56,0.64,1), color 300ms ease',
        }} aria-hidden="true">♡</span>
        {image ? (
          <img src={image} alt={title} style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transform: hover ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 600ms cubic-bezier(0.16,1,0.3,1)',
          }} />
        ) : (
          <div style={{
            width: '100%', height: '100%', display: 'grid', placeItems: 'center',
            background: GRADIENTS[gradient] || GRADIENTS.warm,
            color: '#fff', fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12, letterSpacing: '0.6px', textTransform: 'uppercase',
          }}>{fillText || title}</div>
        )}
      </div>
      <div style={{ padding: '18px 20px 20px' }}>
        {label && (
          <span style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 11, fontWeight: 500,
            textTransform: 'uppercase', letterSpacing: '0.6px', color: '#8a8a8a',
          }}>{label}</span>
        )}
        <h3 style={{
          fontFamily: "'Inter', system-ui, sans-serif", fontSize: 16,
          fontVariationSettings: "'wght' 480", letterSpacing: '-0.16px',
          marginTop: 6, lineHeight: 1.3, margin: '6px 0 0',
        }}>{title}</h3>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10,
        }}>
          <span style={{ fontSize: 13, color: '#5a5a5a', letterSpacing: '-0.13px' }}>{meta}</span>
          <span style={{
            width: 32, height: 32, borderRadius: '50%', display: 'grid', placeItems: 'center',
            border: `1px solid ${hover ? '#000' : '#c9c9c9'}`, flexShrink: 0,
            background: hover ? '#000' : 'transparent', color: hover ? '#fff' : '#000',
            transform: hover ? 'rotate(-45deg)' : 'rotate(0)',
            transition: 'background 200ms ease, color 200ms ease, border-color 200ms ease, transform 300ms cubic-bezier(0.34,1.56,0.64,1)',
          }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M3 9L9 3M9 3H4.5M9 3V7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </span>
        </div>
      </div>
    </button>
  );
}
