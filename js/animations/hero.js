/* ================================================
   HERO ANIMATIONS
   ================================================ */

/**
 * Initialize hero section (prepare elements for animation)
 */
function initHeroAnimations() {
  // Prepare elements for animation (will be triggered after loader)
}

/**
 * Animate the hero section after loader completes
 */
function animateHero() {
  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

  // Hero label
  tl.to(".hero-label", {
    opacity: 1,
    duration: 0.8,
  });

  // Title characters
  const titleChars = document.querySelectorAll(".hero-title .char");
  tl.to(
    titleChars,
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.02,
    },
    "-=0.4"
  );

  // Description
  tl.to(
    ".hero-description",
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
    },
    "-=0.4"
  );

  // Services
  tl.to(
    ".hero-services",
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
    },
    "-=0.6"
  );

  // CTA buttons
  tl.to(
    ".hero-cta",
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
    },
    "-=0.6"
  );

  // Scroll indicator
  tl.to(
    ".scroll-indicator",
    {
      opacity: 1,
      duration: 0.8,
    },
    "-=0.4"
  );
}

// Export for use in other modules
window.HeroModule = {
  initHeroAnimations,
  animateHero,
};
