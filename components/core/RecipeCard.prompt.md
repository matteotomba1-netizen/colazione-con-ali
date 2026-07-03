The signature card of the system — a recipe (or run) tile with media, a glass category badge, a heart "like", a title block and a circular arrow button that rotates -45° to black on hover. The whole card lifts and the image zooms.

```jsx
<RecipeCard
  badge="Ricetta · Featured"
  label="Overnight · Proteica"
  title="Overnight Mugcake PB & J"
  meta="12 min · ~420 kcal"
  image="/photo.jpg"
  onClick={...}
/>

// No photo? Use a sunrise gradient fill:
<RecipeCard title="Crostata al Cacao" gradient="berry" fillText="🍫 Crostata" meta="40 min" />
```

Gradients: `warm` · `peach` · `cool` · `sky` · `berry` · `cream`. Use for ~10-recipe grids; each links to the matching Instagram Reel.
