(function () {
  const btn = document.getElementById("backToTopBtn");
  const threshold = 100;
  let ticking = false;

  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        btn.classList.toggle("visible", scrollTop > threshold);
        ticking = false;
      });
      ticking = true;
    }
  });

  window.scrollToTop = function () {
    if ("scrollBehavior" in document.documentElement.style) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  };
})();