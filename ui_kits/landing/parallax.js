/* parallax.js — whole-section DEPTH parallax.
   Each section's background layer drifts opposite to the scroll at its own speed,
   so the section reads as layers sitting at different depths (not just moving text).
   Tag any background layer with data-px="<speed>" (≈0.10–0.18).
   Driven directly by scroll position (no requestAnimationFrame / CSS timeline), so
   it reacts as you scroll and never freezes in throttled tabs. Each layer's position
   is measured from its SECTION (which is never transformed), so applying a transform
   to the layer can't feed back into the measurement. Respects reduced-motion. */
(function () {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var MAX = 120; // clamp so an oversized layer never exposes its edge

  function update() {
    var vh = window.innerHeight || 800;
    var els = document.querySelectorAll('[data-px]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var speed = parseFloat(el.getAttribute('data-px')) || 0;
      var ref = el.closest('section, header, footer') || el.parentElement;
      if (!ref) continue;
      var r = ref.getBoundingClientRect();
      var fromCenter = (r.top + r.height / 2) - vh / 2;
      var t = -fromCenter * speed;
      if (t > MAX) t = MAX; else if (t < -MAX) t = -MAX;
      el.style.transform = 'translate3d(0,' + t.toFixed(1) + 'px,0)';
      el.style.willChange = 'transform';
    }
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  // React mounts the sections asynchronously, so keep refreshing briefly until the
  // [data-px] layers exist, then settle into scroll-only updates.
  var n = 0, iv = setInterval(function () { update(); if (++n > 26) clearInterval(iv); }, 120);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', update);
  else update();
})();
