# Colazione con Ali — Design System

Design system for **Colazione con Ali**, the brand of a food influencer who unites **elaborate breakfasts** and a **passion for running**. Tied to Instagram **[@colazioneconali](https://www.instagram.com/colazioneconali)**.

> **Tagline:** *Svegliati. Mangia. Vola.* (Wake up. Eat. Fly.)

**The whole feeling is dawn** — sunrise warmth on top of black/white chrome. Solar, joyful, warm. Never clinical, never neon, never aggressive.

## The person behind it — Alissa
- **@colazioneconali** · *"Alissa ✨"* · 22 anni, **Padova**. Bio: *"amo allenarmi e fare colazione :)"* · *"non solo colazioni"* (second account @alissiusbassius).
- **~6.392 follower · 183 post · 312 seguiti** (growing fast). Story highlights: *schiscettando, oats, mi muovo, proziss❤️, random, ricettefast*.
- **First brand collaboration: Prozis** — `@prozisitalia`, discount code **ALI03**, link `prozis.com/1TNty`. The site's job is to **win more collabs, sponsors and IG followers** — it is a shop-window / soft press-kit, not just a recipe blog.
- Real content texture: morning **runs with Strava overlays** (e.g. 18,30 km · 5:28/km · 1h40m; 6,60 km · 5:01/km · StraMilano 10k) intercut with **overnight oats, mug cakes, baked goods**. Honest, warm, first-person, a little self-deprecating (*"non sempre vanno bene, però a volte ci sono quelle corse…"*).

## Sources
- Design brief: `uploads/brief-colazione-con-ali.md`
- Instagram screenshots: `uploads/pasted-178195*.png` (profile, grid, reels).
- Reference build: full HTML "v2 — 3D Motion Edition" provided by the user (sunrise marketing site with recipe cards, run section, cinematic "anatomia" reveal).
- Instagram: @colazioneconali · Prozis code ALI03

---

## CONTENT FUNDAMENTALS

**Language is Italian — non-negotiable.** Every piece of UI copy, label, CTA and section name is in Italian. Do not translate to English.

- **Voice:** warm, sunny, encouraging, a little playful. Speaks *to* the reader informally ("Svegliati", "Corri con Ali", "la tua mattina"). First-person from the creator when telling stories ("Chi Sono", "la torta preferita in assoluto").
- **Tone examples:** *"Svegliati. Mangia. Vola."* · *"Colazioni che ti fanno alzare dal letto e chilometri che ti fanno sentire viva."* · *"Perché correre con lo stomaco vuoto quando puoi mettere le ali alle tue mattine?"* · footer: *"Fatta con ♡ e burro di arachidi."*
- **Casing:** Sentence case or Title Case for headings; **UPPERCASE only** for mono category labels and section numbers (`COLAZIONE · FEATURED`, `FILOSOFIA · 001`).
- **Punctuation flourishes:** middot separators in labels (`Overnight · Proteica`), arrows in CTAs (`Scopri di più →`), three-beat rhythm (`Svegliati · Mangia · Vola`).
- **Emoji:** used sparingly and tastefully as recipe glyphs / accents (🍌🥜🍫🍪🎃) — part of the playful food vocabulary, never as UI chrome. A heart ♡ appears as the "like" affordance and in copy.
- **Section names (canonical):** Le Colazioni · Le Corse · Chi Sono · Contatti · L'Anatomia. CTAs: *Inizia a Volare*, *Esplora le Ricette*, *Corri con Ali*, *Iscriviti*, *Segui*.

---

## VISUAL FOUNDATIONS

**Colors.** Sunrise palette (Sun → Peach → Coral → Rose → Magenta → Lilac → Sky, plus Cream, Berry, Mint, Amber) layered over black/white chrome. Warm tones dominate the breakfast world; cool lilac/sky owns the running world; pure black owns the cinematic "anatomia" world. The signature gradient is `--grad-sunrise` (cream→pink→lilac, 160°); rose→magenta→lilac text gradient (`--grad-rose`) accents key words. Recipe card fills are diagonal warm gradients with a subtle SVG grain overlay (`mix-blend-mode: overlay`).

**Type.** Inter Variable everywhere, with **non-standard variable weights** (340 body, 380 display, 480 strong) and **negative letter-spacing** (down to -2px on the hero). Italic, slightly-lighter accent words inside headings. JetBrains Mono, UPPERCASE, +0.6px tracking, 10–11px for category labels and section numbers. Hero is `clamp(64px,7.5vw,110px)`, line-height 1.0.

**Spacing & layout.** 8px base scale; generous section padding (140px desktop). Max content widths 1280px. Grids: 3-up recipe cards collapsing 2→1. Fixed navbar (72px) that gains a blurred glass background after 40px scroll. Right-aligned section sub-text balancing a left heading.

**Backgrounds.** Layered radial-gradient "orbs" (blurred, floating) over the sunrise gradient in the hero; black with faint radial color washes + grain texture for cinematic sections. No flat solid hero — always atmospheric warmth.

**Animation.** `--ease-out-expo` for reveals, `--ease-spring` for playful pops. Scroll-reveal (fade + 32px rise, 900ms, staggered delays). Floating orbs (14–22s loops). 3D card tilt on mousemove (±10°) with a moving radial shine. Magnetic buttons (translate toward cursor, spring back). Counter count-ups. Custom cursor (dot + lerping ring, `mix-blend-mode: difference`). Respect `prefers-reduced-motion`.

**Hover / press.** Pills: dark shadow lift + arrow nudges out-and-up. Ghost buttons: invert to black fill. Cards: lift with soft shadow, image scales 1.05, arrow-button rotates -45° to black, heart scales + turns rose. Links: animated underline wipe. Nav logo mark spins 90°.

**Borders, radii, shadows.** Pill radius **50px**; card radius **12px**; glass radius **20px**; circles for icon buttons/avatars. Hairline borders `--grey-08`; 1.5px black borders on ghost buttons. Soft layered shadows (`--shadow-card`, `--shadow-glass`, `--shadow-modal`) — no harsh single drop shadows.

**Glass-morphism.** `rgba(255,255,255,0.16)` fill, `rgba(255,255,255,0.28)` border, `backdrop-filter: blur(20px)`. Used on floating hero cards, the scrolled navbar, eyebrows and the Instagram popup.

**Focus.** **Dashed** 2px outline, 4px offset (white on dark surfaces) — a deliberate, friendly focus ring.

---

## ICONOGRAPHY

The brand has **no custom icon font**. Approach:
- **Inline stroke SVGs**, 1.4–1.5px stroke, round caps — tiny arrows (the up-right "explode/open" arrow `M3 9L9 3…`, the nav arrow), close `×`, pulse dots. These are simple geometric glyphs, drawn inline. Lucide (CDN) is the closest match if a broader icon set is ever needed — same thin-stroke, round-cap style.
- **Unicode/typographic marks** as icons: `✦` (the logo mark / sparkle), `♡` (like), `·` `→` `↗` in copy and labels.
- **Emoji** as recipe glyphs only (🍌🥜🍫🍪🎃🍋🍎) — never structural UI.
- **Color dots** (`.ic-sm`, small filled circles in palette colors) act as meta-icons in recipe pill chips.

See `assets/` for the mark. No raster icon assets ship with this system.

---

## INDEX

- **`styles.css`** — global entry (consumers link this).
- **`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`.
- **`assets/`** — logo mark / brand glyph notes.
- **`components/`** — reusable primitives:
  - `core/` — `Button`, `Pill`, `Badge`, `RecipeCard`, `Tabs`, `Modal`.
- **`ui_kits/marketing/`** — full marketing-site recreation (hero, recipe grid, anatomia, footer).
- **Specimen cards** — `*.card.html` across `tokens/` & `assets/` populate the Design System tab.
- **`SKILL.md`** — portable skill manifest.

### Caveats
- Fonts load from **Google Fonts CDN** (Inter + JetBrains Mono) — matches the reference exactly; no local font binaries needed but requires network.
- No brand photography or logo files were provided; the mark is the `✦` glyph + wordmark. Real Reel thumbnails / photos should replace gradient-fill placeholders when available.
