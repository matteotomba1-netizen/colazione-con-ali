/* ============================================================================

   📋  CONTENUTI DEL SITO “Colazione con Ali”  —  l’unico file da compilare

   ----------------------------------------------------------------------------
   CIAO ALI! Qui dentro c’è TUTTO il testo che puoi cambiare sul sito:
   i numeri in alto, le ricette, le corse, il codice Prozis e i tuoi social.

   COME FUNZIONA:
   •  Cambia solo il testo DENTRO le " virgolette ".
   •  NON cancellare le virgole , a fine riga.
   •  Se nel testo c’è un apostrofo (es. d'arachidi) va benissimo:
      tieni le virgolette doppie " " attorno, come negli esempi.
   •  Salva il file → il sito si aggiorna.

   Il file è diviso in 5 PARTI. Vai a quella che ti serve. 👇

   ============================================================================ */


/* ============================================================================
   PARTE 1 ·  I NUMERI in alto (la “prova social”)
   Cambia i numeri quando crescono. Lascia 4 voci.
   ============================================================================ */
window.NUMERI = [
  { numero: "6.392", testo: "follower Instagram" },
  { numero: "183",   testo: "ricette & post" },
  { numero: "19",    testo: "colazioni pubblicate" },
  { numero: "4",     testo: "corse nel 2026" },
];


/* ============================================================================
   PARTE 2 ·  LE RICETTE   (la parte che aggiornerai più spesso)

   Per aggiungere una ricetta: COPIA un blocco { ... }, INCOLLALO sotto
   l’ultimo, e cambia il testo. Per toglierne una: cancella il suo blocco.

   I campi:
     titolo    →  nome ricetta             es. "Overnight Mugcake PB & J"
     etichetta →  categoria breve          es. "Overnight · Proteica"
     tempo     →  tempi / info             es. "12 min · ~420 kcal"
     badge     →  etichettina sulla foto   es. "Ricetta" (o "Featured", "Forno")
     foto      →  link a una foto (vedi GUIDA-PER-ALISSA.md). Vuoto "" = gradiente colorato.
     video     →  link al reel/post Instagram (opzionale). Vuoto "" = nessun pulsante.
     procedimento → i passaggi, UNO PER RIGA. Vuoto "" = "in arrivo".
   ============================================================================ */
window.RICETTE = [

  /* ----- BLOCCO-MODELLO — copialo per una ricetta nuova -----
  {
    titolo:    "Nome della ricetta",
    etichetta: "Categoria · sottocategoria",
    tempo:     "es. 10 min · riposo notte",
    badge:     "Ricetta",
    foto:      "",
    video:     "",
    procedimento: `Primo passaggio della ricetta.
Secondo passaggio.
Terzo passaggio.`,
  },
  ----------------------------------------------------------- */

  {
    titolo:    "Mugcake rovesciata alle mele",
    etichetta: "Mugcake · Overnight",
    tempo:     "2 min cottura",
    badge:     "Ricetta",
    foto:      "",
    video:     "https://www.instagram.com/colazioneconali/reel/DZ2uAVyus7v/",
    procedimento: `Mescola farina d'avena, cannella, lievito, purea di mela, liquido e dolcificante fino a ottenere un composto liscio.
Aggiungi i pezzettini di mela.
Cuoci in microonde a massima potenza per 2 minuti, aprendo lo sportello a metà cottura.
In alternativa: friggitrice a 150° per 15-20 min.
Una volta intiepidita, rovesciala in un piattino e lascia riposare in frigo tutta la notte.
Mescola yogurt greco, ricotta e dolcificante per la copertura.
Decora con la crema alla ricotta, pezzettini di mela e cannella.`,
  },
  {
    titolo:    "Mugcake ricotta, limone e pistacchio",
    etichetta: "Mugcake · Overnight",
    tempo:     "2 min cottura",
    badge:     "Ricetta",
    foto:      "",
    video:     "https://www.instagram.com/colazioneconali/reel/DZzifmDIjRL/",
    procedimento: `Mescola farina, purea di mela e lievito, poi aggiungi la parte liquida e il dolcificante.
Mescola fino a ottenere un composto liscio senza grumi.
Cuoci in microonde a massima potenza per 2 minuti, aprendo qualche volta lo sportello.
Alternative: friggitrice a 150-155° per 20 min, forno a 180° per 20 min, o bagnomaria per 20-30 min.
Mescola yogurt e ricotta con dolcificante per lo strato cremoso.
Decora con marmellata ai frutti di bosco e crema di pistacchi.`,
  },
  {
    titolo:    "Mugcake caffè e cioccolato",
    etichetta: "Mugcake · Overnight",
    tempo:     "2 min cottura",
    badge:     "Ricetta",
    foto:      "",
    video:     "https://www.instagram.com/colazioneconali/reel/DZfcDaKIg0S/",
    procedimento: `Mescola farina, cacao, lievito, purea di mela, latte e dolcificante fino a ottenere un composto liscio.
Cuoci in microonde a massima potenza per circa 2 minuti, facendo una pausa a metà.
In alternativa: friggitrice a 150-155° o forno a 180° per circa 20 min.
Una volta intiepidita, aggiungi lo strato di yogurt al caffè.
Prepara la salsina mescolando cacao, yogurt, dolcificante e caffè fino a formare una salsina liscia.
Decora con la salsina al cacao e, se vuoi, sbriciolaci mezzo biscotto.
Lascia riposare in frigo.`,
  },
  {
    titolo:    "Mugcake ricotta e mirtilli",
    etichetta: "Mugcake · Overnight",
    tempo:     "2 min cottura",
    badge:     "Ricetta",
    foto:      "",
    video:     "https://www.instagram.com/colazioneconali/reel/DZXe09lo4-d/",
    procedimento: `Mescola farina, purea di mela e lievito, poi aggiungi la parte liquida e il dolcificante.
Mescola fino a ottenere un composto liscio senza grumi.
Aggiungi qualche mirtillo.
Cuoci in microonde a massima potenza per 2 minuti, aprendo qualche volta lo sportello.
Mescola yogurt e ricotta con dolcificante per lo strato cremoso.
Decora con marmellata ai mirtilli e mirtilli freschi.
Lascia riposare in frigo.`,
  },
  {
    titolo:    "7 colazioni per 7 giorni",
    etichetta: "Compilazione · Colazione",
    tempo:     "",
    badge:     "Featured",
    foto:      "",
    video:     "https://www.instagram.com/colazioneconali/reel/DZFb95WIFCN/",
    procedimento: `Weetabix al cioccolato e PB: sbriciolate 2 formelle, unite yogurt, cacao, PB in polvere e dolcificante; decorate con salsina al cacao e PB.
Tortino ricotta e mirtilli: unite farina, lievito, purea di mela e albumi; versate in uno stampo con ricotta e mirtilli; cuocete in friggitrice a 155° per 20-25 min.
Overnight mugcake: vedi ricetta dedicata sul profilo.
Overnight oats vaniglia e mirtilli: mescolate fiocchi di avena, proteine, yogurt e dolcificante; coprite con yogurt o ricotta, marmellata e mirtilli.
Overnight oats PB e marmellata: stessa base; decorate con yogurt, PB, marmellata alle fragole e biscotto lotus sbriciolato.
Pancakes al tiramisù: vedi ricetta dedicata sul profilo.
Overnight oats fondente: mescolate fiocchi di avena, cacao, dolcificante e latte; decorate con salsina al cacao, crema fondente e cocco in scaglie.`,
  },
  {
    titolo:    "Pancakes al tiramisù",
    etichetta: "Pancakes · Colazione",
    tempo:     "15-20 min cottura",
    badge:     "Ricetta",
    foto:      "",
    video:     "https://www.instagram.com/colazioneconali/reel/DY97lV5IGFf/",
    procedimento: `Mescola farina d'avena, cacao, banana schiacciata, lievito, un goccio di caffè, albume e dolcificante.
Scalda una padella antiaderente leggermente oliata.
Versa due cucchiai di impasto alla volta formando piccoli pancakes.
Girali non appena si gonfiano bene.
Coprili con pellicola se vuoi prepararli la sera prima.
Mescola yogurt greco, ricotta, caffè e dolcificante per la crema al caffè.
Alterna strati di pancakes e crema.
Termina con una spolverata di cacao amaro.`,
  },
  {
    titolo:    "Weetabix fragole, ricotta e crema white",
    etichetta: "Weetabix · Overnight",
    tempo:     "5 min preparazione",
    badge:     "Ricetta",
    foto:      "",
    video:     "https://www.instagram.com/colazioneconali/reel/DYwmtIPIN6k/",
    procedimento: `Schiaccia mezza banana con una forchetta.
Sbriciolate 2 formelle di weetabix e uniscile alla banana, allo yogurt greco, al dolcificante e alla cannella.
Mescola e aggiungi un goccio di acqua o latte fino alla consistenza desiderata.
Mescola ricotta, yogurt, dolcificante e un cucchiaino di marmellata alle fragole per lo strato intermedio.
Aggiungi altra marmellata alle fragole in superficie.
Decora con la crema white e cocco rapè in scaglie.
Lascia riposare in frigo.`,
  },
  {
    titolo:    "Weetabix a strati",
    etichetta: "Weetabix · Overnight",
    tempo:     "5 min preparazione",
    badge:     "Ricetta",
    foto:      "",
    video:     "https://www.instagram.com/colazioneconali/reel/DYcrly_Ijue/",
    procedimento: `Sbriciolate 2 formelle di weetabix e uniscile al caffè, alla banana in purea, al dolcificante, al cacao e a un goccio di acqua o latte.
Mescola yogurt greco con burro di arachidi in polvere e dolcificante per la crema.
Alterna due volte la parte con i weetabix alla crema.
Termina con una gocciola sbriciolata sopra.
Lascia riposare in frigo.`,
  },
  {
    titolo:    "Torta di mele monoporzione",
    etichetta: "Mugcake · Overnight",
    tempo:     "2 min cottura",
    badge:     "Ricetta",
    foto:      "",
    video:     "https://www.instagram.com/colazioneconali/reel/DYUNEURIvNB/",
    procedimento: `Mescola farina d'avena, lievito, purea di mela, latte e cannella fino a ottenere un composto liscio.
Aggiungi i pezzettini di mela.
Cuoci in microonde a massima potenza per 2 minuti, con una pausa a metà.
Prepara lo strato di yogurt greco con cannella, burro di arachidi in polvere e dolcificante.
Aggiungi lo strato di yogurt sulla base intiepidita.
Decora con burro di arachidi crunchy e pezzettini di mela passati in micro con la cannella.
Lascia riposare in frigo.`,
  },
  {
    titolo:    "6 overnight mugcakes (dosi generali)",
    etichetta: "Mugcake · Compilazione",
    tempo:     "2 min cottura",
    badge:     "Featured",
    foto:      "",
    video:     "https://www.instagram.com/colazioneconali/reel/DYPrrslIcmO/",
    procedimento: `Mescola 40g di farina d'avena, 35g di purea di mela o banana, mezzo cucchiaino di lievito, dolcificante e 80g di latte.
Cuoci in microonde a massima potenza per 2 minuti.
In alternativa: forno a 180° per 15-20 min o friggitrice a 150-155° per 20 min.
Aggiungi sopra uno strato di yogurt greco o mix ricotta e yogurt (100-120g).
Decora con salsina al cacao, burro di frutta secca, marmellata o frutta fresca.`,
  },
  {
    titolo:    "Weetabix banana, ciocco e arachidi",
    etichetta: "Weetabix · Overnight",
    tempo:     "5 min preparazione",
    badge:     "Ricetta",
    foto:      "",
    video:     "https://www.instagram.com/colazioneconali/reel/DX1TAsCo2Kn/",
    procedimento: `Schiaccia mezza banana con una forchetta.
Sbriciolate 2 formelle di weetabix e uniscile alla banana, al cacao, al burro di arachidi in polvere, allo yogurt greco e al dolcificante.
Mescola e aggiungi un goccio di acqua o latte fino alla consistenza desiderata.
Prepara la salsina al cacao mescolando cacao, yogurt, un goccio di caffè e dolcificante; aggiungi acqua a poco a poco fino a formare una salsina.
Aggiungi la salsina alla base.
Decora con un cucchiaino di burro di arachidi e un biscotto lotus sbriciolato.
Lascia riposare in frigo.`,
  },
  {
    titolo:    "Mugcake burro di arachidi e marmellata",
    etichetta: "Mugcake · Overnight",
    tempo:     "2 min cottura",
    badge:     "Ricetta",
    foto:      "",
    video:     "https://www.instagram.com/colazioneconali/reel/DXweLDTIzCH/",
    procedimento: `Mescola farina, lievito, purea di mela, latte e dolcificante fino a ottenere un composto liscio.
Cuoci in microonde a 700-800W per circa 2 minuti, aprendo lo sportello qualche volta.
Tienila un po' meno del solito se vuoi evitare che diventi gommosa.
Mescola yogurt greco con burro di arachidi, dolcificante e un pizzico di cannella.
Aggiungi lo strato di yogurt sulla base intiepidita.
Termina con la tua marmellata preferita.
Lascia riposare in frigo tutta la notte.`,
  },
  {
    titolo:    "Mugcake ricotta e cioccolato",
    etichetta: "Mugcake · Overnight",
    tempo:     "2 min cottura",
    badge:     "Ricetta",
    foto:      "",
    video:     "https://www.instagram.com/colazioneconali/reel/DXgpIppCCH9/",
    procedimento: `Mescola cacao, farina d'avena e lievito, poi aggiungi la purea di mela, il latte e il dolcificante.
Mescola fino a ottenere un composto liscio senza grumi.
Cuoci in microonde a 700-800W per circa 2 minuti, aprendo qualche volta lo sportello.
Mescola yogurt greco, ricotta e gocce di cioccolato fondente con dolcificante.
Aggiungi lo strato di crema sulla base intiepidita.
Termina con una spolverata di cacao.
Lascia riposare in frigo tutta la notte.`,
  },
  {
    titolo:    "Pancakes facili e soffici",
    etichetta: "Pancakes · Colazione",
    tempo:     "15-20 min cottura",
    badge:     "Ricetta",
    foto:      "",
    video:     "https://www.instagram.com/colazioneconali/reel/DXT4nK7CKwF/",
    procedimento: `Mescola farina d'avena, cannella, lievito, uovo, purea di mela, un goccio di latte e dolcificante.
Scalda una padella antiaderente leggermente oliata.
Versa due cucchiai di impasto alla volta formando piccoli pancakes.
Girali non appena si gonfiano bene.
Coprili con pellicola se vuoi prepararli la sera prima.
Servili con yogurt greco dolcificato e frutta fresca.`,
  },
  {
    titolo:    "Mugcake cioccolato, ricotta e fragole",
    etichetta: "Mugcake · Overnight",
    tempo:     "2 min cottura",
    badge:     "Ricetta",
    foto:      "",
    video:     "https://www.instagram.com/colazioneconali/reel/DXMTYeTiA1X/",
    procedimento: `Mescola cacao, farina d'avena e lievito, poi aggiungi la purea di mela, il latte e il dolcificante.
Mescola fino a ottenere un composto liscio.
Cuoci in microonde a massima potenza per 2 minuti, aprendo qualche volta lo sportello.
Mescola yogurt greco e ricotta con dolcificante per lo strato cremoso.
Prepara la salsina al cacao unendo cacao, yogurt, dolcificante e acqua o latte fino a formare una salsina.
Aggiungi prima la crema poi la salsina sulla base intiepidita.
Lascia riposare in frigo tutta la notte e aggiungi le fragole fresche al mattino.`,
  },
  {
    titolo:    "6 idee overnight oats",
    etichetta: "Oats · Compilazione",
    tempo:     "5 min preparazione",
    badge:     "Featured",
    foto:      "",
    video:     "https://www.instagram.com/colazioneconali/reel/DWtBuf6CA0_/",
    procedimento: `Base classica: mescola 35g di fiocchi piccoli di avena con 120-130g di yogurt greco, dolcificante, 10g di proteine in polvere (facoltativo) e un goccio di latte.
Versione 1: decora con salsina al cacao e crema di nocciole.
Versione 2: usa base alla zucca con cacao; decora con salsina al cacao, PB e biscotto sbriciolato.
Versione 3: aggiungi cannella alla base; completa con ricotta, marmellata e biscotto (effetto cheesecake).
Versione 4: base classica con toppings freschi: banana e burro di arachidi.
Versione 5: aggiungi gocce di cioccolato alla base; decora con salsina al cacao e gocciola sbriciolata.
Versione 6: base al cacao; decora con yogurt alla nocciola, crema di nocciole e fragole.
Lascia riposare in frigo tutta la notte.`,
  },
  {
    titolo:    "Mugcake zucca e cannella",
    etichetta: "Mugcake · Overnight",
    tempo:     "2 min cottura",
    badge:     "Ricetta",
    foto:      "",
    video:     "https://www.instagram.com/colazioneconali/reel/DWle938iI94/",
    procedimento: `Schiaccia la zucca cotta fino a ridurla in purea.
Unisci farina d'avena, cannella e lievito, poi aggiungi il latte e la purea di zucca.
Mescola fino a ottenere un composto liscio.
Cuoci in microonde a massima potenza per 2 minuti, aprendo qualche volta lo sportello.
Mescola yogurt greco con dolcificante e cannella per lo strato cremoso.
Aggiungi lo strato di yogurt sulla base intiepidita.
Decora con burro di arachidi, cannella e un biscotto secco sbriciolato.
Lascia riposare in frigo.`,
  },
  {
    titolo:    "Mugcake ciocco, ricotta e frutti di bosco",
    etichetta: "Mugcake · Overnight",
    tempo:     "2 min cottura",
    badge:     "Ricetta",
    foto:      "",
    video:     "https://www.instagram.com/colazioneconali/reel/DWYuMewuxMm/",
    procedimento: `Mescola cacao, farina d'avena e lievito, poi aggiungi la purea di mela, il latte e il dolcificante.
Mescola fino a ottenere un composto liscio senza grumi.
Cuoci in microonde a massima potenza per 2 minuti, aprendo qualche volta lo sportello.
Mescola yogurt greco e ricotta con dolcificante per lo strato cremoso.
Aggiungi lo strato di crema sulla base intiepidita.
Termina con marmellata ai frutti di bosco o frutti rossi freschi e mezzo biscotto al cioccolato sbriciolato.
Lascia riposare in frigo.`,
  },
  {
    titolo:    "6 overnight mugcakes (video presentazione)",
    etichetta: "Mugcake · Compilazione",
    tempo:     "",
    badge:     "Featured",
    foto:      "",
    video:     "https://www.instagram.com/colazioneconali/reel/DWMPyPqiPjP/",
    procedimento: "",
  },

];


/* ============================================================================
   PARTE 3 ·  LE CORSE

   Stesso metodo delle ricette: copia un blocco, incolla, cambia il testo.
   I campi:
     titolo    →  nome gara             es. "Milano Marathon"
     etichetta →  tipo · luogo          es. "Maratona · Milano"
     km        →  distanza              es. "42,195"
     info      →  data o passo          es. "15 · 06 · 26"  oppure  "5′01″/km"
     stato     →  "Iscritta" · "Completata" · "In arrivo" · "In valutazione"
   ============================================================================ */
window.CORSE = [
  {
    titolo:    "Milano Marathon",
    etichetta: "Maratona · Milano",
    km:        "42,195",
    info:      "15 · 06 · 26",
    stato:     "Iscritta",
  },
  {
    titolo:    "StraMilano 10K",
    etichetta: "10K · Milano",
    km:        "6,60",
    info:      "5′01″/km",
    stato:     "Completata",
  },
  {
    titolo:    "Bologna Run — Due Torri",
    etichetta: "10K · Bologna",
    km:        "10,0",
    info:      "22 · 09 · 26",
    stato:     "In arrivo",
  },
  {
    titolo:    "Appennino Trail 25K",
    etichetta: "Trail · Appennino",
    km:        "25,0",
    info:      "04 · 11 · 26",
    stato:     "In valutazione",
  },
];


/* ============================================================================
   PARTE 4 ·  PROZIS  (codice sconto e link)
   ============================================================================ */
window.PROZIS = {
  codice: "ALI03",
  link:   "https://www.prozis.com/it/it/?ot=AFFIT2402&utm_source=prz_affiliate&utm_medium=referral&utm_content=link_in_bio&utm_campaign=al_ba_pr_sa",
};


/* ============================================================================
   PARTE 5 ·  I TUOI SOCIAL  (i link dei pulsanti)
   Metti "#" se un social non ce l’hai ancora.
   ============================================================================ */
window.SOCIAL = {
  instagram: "https://www.instagram.com/colazioneconali",
  tiktok:    "#",
  strava:    "#",
};


/* ============================================================================
   PARTE 6 ·  LA TUA FOTO  (la card nella sezione dei numeri)

   foto   →  link a una tua foto. Caricala dal pannello /admin (campo “La tua foto”).
             Vuoto "" = mostra il placeholder “La foto di Alissa”.
   nome   →  il tuo nome              es. "Alissa"
   handle →  il tuo @ Instagram       es. "@colazioneconali"
   bio    →  una frase breve su di te es. "amo allenarmi e fare colazione :)"
   ============================================================================ */
window.PROFILO = {
  foto:   "",
  nome:   "Alissa",
  handle: "@colazioneconali",
  bio:    "amo allenarmi e fare colazione :)",
};
