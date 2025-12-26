/* ================================================
   MAIN ENTRY POINT - ANIMATIONS
   Initializes all GSAP animations
   ================================================ */

// Wait for DOM and libraries to load
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Splitting.js for text animations
  if (typeof Splitting !== "undefined") {
    Splitting();
  }

  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // Initialize all animation modules
  initAnimations();
});

/**
 * Initialize all animation modules
 */
function initAnimations() {
  // Core modules
  window.LenisModule?.initLenis();
  window.LoaderModule?.initLoader(window.HeroModule?.animateHero);
  window.CursorModule?.initCursor();
  window.NavbarModule?.initNavbar();

  // Animation modules
  window.HeroModule?.initHeroAnimations();
  window.ScrollAnimationsModule?.initScrollAnimations();
  window.CounterModule?.initCounterAnimations();
  window.ParallaxModule?.initParallaxEffects();
  window.ParallaxModule?.initScrollProgress();

  // Component modules
  window.MagneticModule?.initMagneticButtons();
  window.CarouselModule?.initManifestoCarousel();
  window.CarouselModule?.initTestimonialCarousel();

  // Performance & accessibility
  window.PerformanceModule?.handlePageVisibility();
  window.PerformanceModule?.handleWindowResize();
}
