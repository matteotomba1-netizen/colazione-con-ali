import React from 'react';

/**
 * Button — Colazione con Ali pill button.
 * Variants: "pill" (solid black), "ghost" (outlined), "warm" (sunrise gradient).
 */
export function Button({
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
    whiteSpace: 'nowrap',
  };

  const variants = {
    pill: { background: '#000', color: '#fff' },
    ghost: {
      background: 'transparent',
      color: onDark ? '#fff' : '#000',
      border: `1.5px solid ${onDark ? '#fff' : '#000'}`,
    },
    warm: {
      background: 'linear-gradient(135deg, #FFD46B 0%, #FF7E8A 60%, #E84393 100%)',
      color: '#fff',
    },
  };

  return (
    <button style={{ ...base, ...variants[variant] }} {...rest}>
      {children}
      {arrow && (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}
