import React from 'react';

/**
 * Tabs — segmented pill switcher with mono counts.
 * items: [{ id, label, count }]
 */
export function Tabs({ items = [], value, onChange }) {
  return (
    <div
      role="tablist"
      style={{
        display: 'inline-flex', gap: 4, background: '#f7f7f7',
        borderRadius: 50, padding: 4, width: 'fit-content',
      }}
    >
      {items.map((it) => {
        const selected = it.id === value;
        return (
          <button
            key={it.id}
            role="tab"
            aria-selected={selected}
            onClick={() => onChange && onChange(it.id)}
            style={{
              padding: '10px 20px', borderRadius: 50, border: 'none', cursor: 'pointer',
              fontFamily: "'Inter', system-ui, sans-serif", fontSize: 14,
              fontVariationSettings: "'wght' 440", letterSpacing: '-0.14px',
              background: selected ? '#000' : 'transparent',
              color: selected ? '#fff' : '#5a5a5a',
              transition: 'background 250ms ease, color 250ms ease',
            }}
          >
            {it.label}
            {it.count != null && (
              <span style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
                marginLeft: 6, opacity: 0.6,
              }}>{it.count}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
