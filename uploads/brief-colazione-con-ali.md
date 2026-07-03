# Brief di Design — "Colazione con Ali"

Sito web per food influencer. Brand che unisce **colazioni elaborate** e **passione per la corsa**. Collegato all'Instagram **@colazioneconali**.

**Tagline:** *Svegliati. Mangia. Vola.*

**Tono:** solare, gioioso, caldo. Mai clinico, mai neon, mai aggressivo. Tutta la copy è in **italiano** (UI, label, CTA, nomi delle sezioni — non negoziabile).

---

## Palette — toni sunrise + cromo black/white

Sfondi e colori caldi sono la priorità assoluta. La sensazione deve essere quella di un'alba.

| Nome | Hex |
|------|-----|
| Sun | `#FFD46B` |
| Peach | `#FFB088` |
| Coral | `#FF7E8A` |
| Rose | `#FF4F8E` |
| Magenta | `#E84393` |
| Lilac | `#C39BFF` |
| Sky | `#9BC9FF` |
| Cream | `#FFF3E2` |
| Berry | `#6E2A6F` |
| Mint | `#7EEDC9` |
| Amber | `#FFAA2C` |
| Black | `#000000` |
| White | `#FFFFFF` |

Cromo black & white usato per navbar, bordi, testo. Glass-morphism con `rgba(255,255,255,0.16)` e bordo `rgba(255,255,255,0.28)`.

---

## Tipografia

- **Inter Variable** (pesi non standard, letter-spacing negativo) per titoli e corpo
- **JetBrains Mono** (maiuscolo) per label di categoria e numeri di sezione

---

## Linguaggio UI

- Border radius **pill 50px**
- Outline di focus **tratteggiati**
- Elementi **glass-morphism**
- Card radius 12px

---

## Struttura — tre sezioni a tutta pagina

**Sezione 01 — `#colazioni`**
Sfondo alba caldo. Card ricette con pulsante hover "Esplodi". ~10 ricette (overnight oats, mug cake, prodotti da forno). Ogni card linka al Reel Instagram corrispondente; al click compare un popup "Vedi il procedimento su Instagram" prima di aprire il link.

**Sezione 02 — `#corse`**
Sfondo freddo lilla/sky. Contenuti su corsa e workout, anch'essi legati ai Reel.

**Sezione 03 — `#anatomia`**
Sfondo nero cinematic con texture grain e gradienti radiali. Vista "esplosione" della ricetta con reveal degli ingredienti, burst di particelle, effetto spotlight, navigazione ricette a chip.

---

## Animazioni / momenti chiave

- **Hero:** pulsante "Vola." che innesca l'animazione runner sprite (bob verticale, lieve rotazione/scala, drop-shadow, blur dello sfondo durante l'animazione)
- **Popup Instagram:** appare dopo ~15s (una volta per sessione), entra dall'angolo in basso a destra con animazione spring, mostra @colazioneconali con avatar gradient IG e CTA "Segui"

---

## Principi di lavoro

- Iterazione mirata, una richiesta specifica alla volta — non redesign totali
- Le feature possono andare oltre il richiesto (sistema preferiti, ricerca, condivisione, moltiplicatore porzioni sono stati apprezzati)
- Estetica solare e gioiosa sopra ogni cosa

---

## Risorse

- Instagram: **@colazioneconali** — `https://www.instagram.com/colazioneconali?igsh=OHF5b2RtMmEyemhh`
