import React from 'react';

/**
 * Modal — glass-backdrop dialog with rounded white card and rotating close button.
 */
export function Modal({ open, onClose, children, maxWidth = 960 }) {
  if (!open) return null;
  const [closeHover, setCloseHover] = React.useState(false);

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && onClose) onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget && onClose) onClose(); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32,
        animation: 'cca-fade 280ms cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      <div style={{
        background: '#fff', width: `min(${maxWidth}px, 100%)`, maxHeight: '90vh',
        overflow: 'auto', borderRadius: 20, position: 'relative',
        boxShadow: '0 40px 120px rgba(0,0,0,0.25)',
        animation: 'cca-rise 380ms cubic-bezier(0.16,1,0.3,1)',
      }}>
        <button
          onClick={onClose}
          aria-label="Chiudi"
          onMouseEnter={() => setCloseHover(true)}
          onMouseLeave={() => setCloseHover(false)}
          style={{
            position: 'absolute', top: 16, right: 16, zIndex: 2,
            width: 40, height: 40, borderRadius: '50%',
            background: closeHover ? '#000' : '#fff', color: closeHover ? '#fff' : '#000',
            border: '1px solid #ededed', display: 'grid', placeItems: 'center', cursor: 'pointer',
            transform: closeHover ? 'rotate(90deg)' : 'rotate(0)',
            transition: 'background 200ms ease, color 200ms ease, transform 300ms cubic-bezier(0.34,1.56,0.64,1)',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        {children}
        <style>{`@keyframes cca-fade{from{opacity:0}to{opacity:1}}@keyframes cca-rise{from{transform:translateY(28px) scale(0.97);opacity:0}to{transform:none;opacity:1}}`}</style>
      </div>
    </div>
  );
}
