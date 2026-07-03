/* ============================================================================
   carica-contenuti.js  —  NON TOCCARE QUESTO FILE 🙏
   ----------------------------------------------------------------------------
   Quando il sito è online, questo legge i contenuti salvati dal pannello /admin
   (il file content/contenuti.json) e sovrascrive quelli di default.
   Se il file non esiste (es. apri il sito con doppio clic dal computer),
   restano i contenuti di default di contenuti.js. Tutto continua a funzionare.
   ============================================================================ */
(function () {
  try {
    var req = new XMLHttpRequest();
    // sincrono di proposito: i dati devono essere pronti PRIMA che le sezioni si disegnino
    req.open('GET', '../../content/contenuti.json', false);
    req.send(null);
    if (req.status >= 200 && req.status < 300 && req.responseText) {
      var d = JSON.parse(req.responseText);
      if (d.numeri)  window.NUMERI  = d.numeri;
      if (d.ricette) window.RICETTE = d.ricette;
      if (d.corse)   window.CORSE   = d.corse;
      if (d.prozis)  window.PROZIS  = d.prozis;
      if (d.social)  window.SOCIAL  = d.social;
      if (d.profilo) window.PROFILO = d.profilo;
    }
  } catch (e) {
    /* nessun magazzino online: si usano i default di contenuti.js */
  }
})();