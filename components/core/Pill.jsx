import React from 'react';

/**
 * Pill — small rounded meta chip with an optional color dot.
 * Used for recipe metadata (time, portions, kcal).
 */
export function Pill({ children, dotColor, ...rest }) {
  return (
    <span
      style={{
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
        color: '#000',
      }}
      {...rest}
    >
      {dotColor && (
        <span style={{ width: 14, height: 14, borderRadius: '50%', background: dotColor, flex: 'none' }} aria-hidden="true" />
      )}
      {children}
    </span>
  );
}
