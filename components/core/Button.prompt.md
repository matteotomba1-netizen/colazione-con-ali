Pill-shaped CTA button — solid black (`pill`), outlined (`ghost`), or sunrise-gradient (`warm`); the primary action affordance across the brand.

```jsx
<Button variant="pill" arrow onClick={...}>Inizia a Volare</Button>
<Button variant="ghost" onDark>Corri con Ali</Button>
<Button variant="warm" size="sm">Esplora le Ricette</Button>
```

- `variant`: `pill` (default, black/white) · `ghost` (1.5px outline, inverts to black on hover) · `warm` (Sun→Coral→Magenta gradient).
- `size`: `md` (default) · `sm`.
- `arrow`: appends the signature up-right arrow that nudges out-and-up on hover.
- `onDark`: light outline for ghost buttons on black sections.
