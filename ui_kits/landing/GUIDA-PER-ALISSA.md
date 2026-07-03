# 🍳 Guida per Alissa — gestire il sito “Colazione con Ali”

Ciao Ali! Questa è la tua guida. Niente codice complicato: solo testo da riempire.
C'è **un solo file** da toccare: **`contenuti.js`**. Dentro trovi 5 parti — numeri, ricette, corse, Prozis, social.

---

## ✍️ Aggiungere una ricetta (2 minuti)

1. Apri il file **`contenuti.js`** e vai alla **PARTE 2 · LE RICETTE**.
2. Trovi il **BLOCCO-MODELLO**: copia tutto da `{` fino a `},`.
3. Incollalo sotto, **dopo l’ultima ricetta** (prima della riga `];`).
4. Cambia il testo dentro le `" virgolette "` con i dati del tuo post:
   - **titolo** → il nome della ricetta
   - **etichetta** → categoria breve (es. `"Overnight · Proteica"`)
   - **tempo** → tempi/info (es. `"12 min · ~420 kcal"`)
   - **badge** → l’etichettina sulla foto (`"Ricetta"`, `"Featured"`, `"Forno"`…)
   - **foto** → il link a una foto (vedi sotto 👇)
5. **Salva.** La ricetta appare sul sito. ✨

> ⚠️ **Le 2 regole d’oro:** scrivi sempre dentro le `" virgolette "` e non cancellare le **virgole** `,` a fine riga.

**Togliere una ricetta?** Cancella tutto il suo blocco `{ ... },`.

---

## 🎯 Il quiz "Quale colazione fa per te?"

Prima delle ricette c'è un piccolo quiz: 5 domande veloci (tempo, overnight o calda, gusto, frutta preferita, cremosità) e alla fine consiglia **una ricetta vera** tra quelle pubblicate. Funziona da solo: pesca automaticamente dalla lista in `contenuti.js`, quindi **non richiede nessuna modifica** — più ricette aggiungi, più il quiz ha scelta.

---

## 📸 La tua foto (card in "Chi sono")

La foto grande con la tua bio, in cima alla sezione "Chi sono", si carica dal **pannello riservato** (`/admin`):

1. Entra in `/admin` con le tue credenziali
2. Vai su **"📸 La tua foto"**
3. Carica l'immagine nel campo **Foto** e salva

Finché non carichi nulla, resta il placeholder "La foto di Alissa" — il sito non si rompe mai.

---

## 📸 La foto — come avere il link

Il sito ha bisogno di un **link** alla foto (non del file dal telefono). Il modo più semplice e gratuito:

1. Vai su **postimages.org**
2. Carica la foto dal telefono o dal computer
3. Copia il link **“Diretto” (Direct link)** — finisce con `.jpg`
4. Incollalo nel campo `foto: "qui-il-link"`

**Non hai una foto pronta?** Lascia `foto: ""` (vuoto): comparirà un bel **gradiente colorato automatico**. Funziona benissimo lo stesso e il sito resta ordinato.

---

## 🏃‍♀️ Corse, numeri, codice Prozis, social

Tutto nello **stesso file `contenuti.js`**, basta scorrere:

- **PARTE 1** → i **numeri** in alto (follower, ricette…)
- **PARTE 3** → le **corse** (stesso metodo delle ricette: copia un blocco, incolla, cambia)
- **PARTE 4** → **codice Prozis** e link
- **PARTE 5** → i link dei tuoi **social** (Instagram, TikTok, Strava)

---

## 🌍 Mettere il sito online (link per la bio)

Il modo gratuito più semplice:

1. Vai su **netlify.com → “Add new site” → “Deploy manually” (Netlify Drop)**
2. Trascina la **cartella del progetto** nella finestra
3. In pochi secondi ottieni un link tipo `colazioneconali.netlify.app`
4. Mettilo nel **link in bio** di Instagram 🎉

Vuoi un dominio tuo (es. `colazioneconali.it`)? Si può aggiungere dopo.

---

## ❓ Hai un dubbio?

Scrivimi e ti aiuto. Meglio chiedere che cancellare una virgola per sbaglio 😉
