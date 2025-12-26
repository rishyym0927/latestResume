/* ================================================
   HERO ANIMATIONS - Le-Silk Enhanced
   Features: Staggered character reveals, smooth timing
   ================================================ */

/**
 * Initialize hero section (prepare elements for animation)
 */
function initHeroAnimations() {
  // Set initial states for hero elements
  gsap.set(".hero-label", { opacity: 0, y: 20 });
  gsap.set(".hero-description", { opacity: 0, y: 50 });
  gsap.set(".service-item", { opacity: 0, y: 30 });
  gsap.set(".hero-cta", { opacity: 0, y: 40 });
  gsap.set(".scroll-indicator", { opacity: 0 });
}

/**
 * Animate the hero section after loader completes
 * Le-Silk inspired staggered reveals
 */
function animateHero() {
  const tl = gsap.timeline({
    defaults: {
      ease: "expo.out",
    },
  });

  // 1. Hero label slides in
  tl.to(".hero-label", {
    opacity: 1,
    y: 0,
    duration: 1,
  });

  // 2. Title - split into characters and animate
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    // Check if already split by Splitting.js
    let chars = heroTitle.querySelectorAll(".char");

    if (chars.length) {
      // Animate each character with rotation
      gsap.set(chars, { y: "100%", opacity: 0, rotateX: -45 });

      tl.to(
        chars,
        {
          y: "0%",
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.015,
          ease: "expo.out",
        },
        "-=0.6"
      );
    } else {
      // Fallback: animate title lines
      const lines = heroTitle.querySelectorAll(".title-line");
      if (lines.length) {
        gsap.set(lines, { y: 80, opacity: 0 });
        tl.to(
          lines,
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.1,
            ease: "expo.out",
          },
          "-=0.5"
        );
      }
    }
  }

  // 3. Description slides up
  tl.to(
    ".hero-description",
    {
      opacity: 1,
      y: 0,
      duration: 1,
    },
    "-=0.7"
  );

  // 4. Service items stagger in
  tl.to(
    ".service-item",
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.08,
    },
    "-=0.5"
  );

  // 5. CTA buttons fade in
  tl.to(
    ".hero-cta",
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
    },
    "-=0.4"
  );

  // 6. Scroll indicator fades in
  tl.to(
    ".scroll-indicator",
    {
      opacity: 1,
      duration: 1,
    },
    "-=0.3"
  );

  // 7. Start scroll indicator animation
  tl.add(() => {
    animateScrollIndicator();
  });
}

/**
 * Continuous scroll indicator animation
 */
function animateScrollIndicator() {
  gsap.to(".scroll-line", {
    scaleY: 1,
    transformOrigin: "top",
    duration: 1,
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true,
  });
}

// Export for use in other modules
window.HeroModule = {
  initHeroAnimations,
  animateHero,
};
