/* ================================================
   LENIS SMOOTH SCROLL
   ================================================ */

let lenis = null;

/**
 * Initialize Lenis smooth scrolling
 */
function initLenis() {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
  });

  // Connect Lenis to GSAP ScrollTrigger
  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        lenis.scrollTo(target, {
          offset: -100,
          duration: 1.5,
        });
      }
    });
  });
}

/**
 * Get the Lenis instance
 * @returns {Lenis|null} The Lenis instance
 */
function getLenis() {
  return lenis;
}

/**
 * Stop Lenis scrolling
 */
function stopLenis() {
  if (lenis) lenis.stop();
}

/**
 * Start Lenis scrolling
 */
function startLenis() {
  if (lenis) lenis.start();
}

// Export functions for use in other modules
window.LenisModule = {
  initLenis,
  getLenis,
  stopLenis,
  startLenis,
};
