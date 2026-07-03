/* app.jsx — assembles the full landing page */
function LandingApp() {
  React.useEffect(() => {
    const els = [...document.querySelectorAll('.reveal')];
    const vh = () => window.innerHeight || 800;

    // Give each section's reveal elements an alternating entrance DIRECTION, so a
    // section assembles from behind → right → left → alba (sunrise), cycling, with
    // a sequenced stagger. Set before any reveal so the start-state is in place.
    const DIRS = ['rv-behind', 'rv-right', 'rv-left', 'rv-alba'];
    const groups = new Map();
    els.forEach((el) => {
      const sec = el.closest('section, footer, header') || document.body;
      const arr = groups.get(sec) || []; arr.push(el); groups.set(sec, arr);
    });
    groups.forEach((arr) => arr.forEach((el, i) => {
      el.classList.add(DIRS[i % DIRS.length]);
      el.style.transitionDelay = Math.min(i, 6) * 80 + 'ms';
    }));
    // commit the hidden start-state as a baseline so the very first reveal still
    // animates from it rather than snapping.
    void document.body.offsetHeight;
    // Reveal a single element: add `.in` to trigger the entrance transition, then
    // hard-guarantee the visible end-state. If the animation timeline is throttled
    // (background/automated tabs freeze CSS transitions at their start frame), the
    // transition can stall at opacity:0 — so a moment later we snap any element that
    // hasn't actually reached full opacity to its final visible style. In a normal
    // visible browser the transition completes first and this is a no-op, so the
    // magic plays; content can never stay hidden.
    const reveal = (el) => {
      if (el.dataset.revealed) return;
      el.dataset.revealed = '1';
      el.classList.add('in');
      // fallback fires just after this element's own (delayed) transition should
      // have finished, snapping it visible only if the timeline was throttled.
      const delay = parseFloat(el.style.transitionDelay) || 0;
      setTimeout(() => {
        if (parseFloat(getComputedStyle(el).opacity) < 0.99) {
          el.style.transition = 'none';
          el.style.opacity = '1';
          el.style.transform = 'none';
          el.style.filter = 'none';
        }
      }, delay + 850);
    };
    // reveal anything currently in view — runs on mount and as a position-aware
    // scroll/resize fallback, so the section-by-section reveal is preserved (no
    // blanket timer pre-revealing the whole page) while on-screen content always shows.
    const showInView = () => {
      els.forEach((el) => {
        if (el.dataset.revealed) return;
        const r = el.getBoundingClientRect();
        if (r.top < vh() - 40 && r.bottom > -1) reveal(el);
      });
    };
    // run several times — getBoundingClientRect is 0-height pre-layout, so a single
    // mount-time pass misses most above-the-fold elements.
    showInView();
    requestAnimationFrame(() => { showInView(); requestAnimationFrame(showInView); });
    [120, 400, 900].forEach((t) => setTimeout(showInView, t));

    let obs = null;
    if ('IntersectionObserver' in window) {
      obs = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) reveal(e.target); });
      }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
      els.forEach((el) => obs.observe(el));
    }
    let raf = 0;
    const onScroll = () => { if (raf) return; raf = requestAnimationFrame(() => { raf = 0; showInView(); }); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => { if (obs) obs.disconnect(); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);
  return (
    <React.Fragment>
      <window.Nav />
      <window.Hero />
      <window.Marquee />
      <window.About />
      <window.Seam from="#F3E8FF" to="#FFE9C7" tint="warm" seed={7} />
      <window.Quiz />
      <window.Seam from="#D9C4FF" to="var(--white)" tint="rose" seed={200} />
      <window.Recipes />
      <window.Seam from="var(--white)" to="#000" tint="cool" seed={34} />
      <window.Runs />
      <window.Seam from="#000" to="var(--cream)" tint="warm" seed={61} />
      <window.Partner />
      <window.Seam from="var(--cream)" to="#FFF3E2" tint="warm" seed={108} />
      <window.Stats />
      <window.Seam from="#F1E6FF" to="#000" tint="rose" seed={155} />
      <window.Collab />
      <window.Footer />
    </React.Fragment>
  );
}
// piccola sicurezza extra: se il bundle del design system non si è ancora
// attaccato a window (rete lenta / cache fredda), aspettiamo prima di montare
// così Button/RecipeCard/Modal non risultano mai `undefined` al primo render.
function mountWhenReady() {
  const ns = window.ColazioneConAliDesignSystem_665c4d;
  const ready = ns && ns.Button && ns.RecipeCard && ns.Modal && ns.Pill && ns.Badge && ns.Tabs;
  if (ready) {
    if (!window.__landingRoot) window.__landingRoot = ReactDOM.createRoot(document.getElementById('root'));
    window.__landingRoot.render(<LandingApp />);
  } else {
    setTimeout(mountWhenReady, 30);
  }
}
mountWhenReady();