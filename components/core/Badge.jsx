import React from 'react';

/**
 * Badge — mono UPPERCASE label. Two tones: "dark" (overlay on imagery) and "plain" (muted label).
 */
export function Badge({ children, tone = 'dark', ...rest }) {
  const tones = {
    dark: {
      background: 'rgba(0,0,0,0.7)',
      color: '#fff',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      padding: '5px 10px',
      borderRadius: 20,
    },
    plain: {
      background: 'transparent',
      color: '#8a8a8a',
      padding: 0,
    },
  };
  return (
    <span
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: tone === 'dark' ? 11 : 11,
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: '0.6px',
        display: 'inline-block',
        ...tones[tone],
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
