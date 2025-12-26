/* ================================================
   PROJECT PARALLAX ANIMATIONS
   Le-Silk style inner image parallax effect
   ================================================ */

/**
 * Initialize parallax effect on project images
 * Images move at a slower rate than scroll, creating depth
 */
function initProjectParallax() {
  const cards = gsap.utils.toArray(".project-card");

  cards.forEach((card) => {
    const image = card.querySelector(".project-img");
    if (!image) return;

    // Set initial state - image is taller than container
    gsap.set(image, {
      scale: 1.15,
      y: "-7.5%",
    });

    // Parallax scroll effect
    gsap.to(image, {
      y: "7.5%",
      ease: "none",
      scrollTrigger: {
        trigger: card,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.6,
      },
    });
  });
}

/**
 * Enhanced hover effect for project cards
 */
function initProjectHoverEffects() {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card) => {
    const image = card.querySelector(".project-img");
    const title = card.querySelector(".project-title");

    if (!image) return;

    card.addEventListener("mouseenter", () => {
      gsap.to(image, {
        scale: 1.2,
        duration: 1.2,
        ease: "expo.out",
      });

      if (title) {
        gsap.to(title, {
          x: 15,
          duration: 0.6,
          ease: "expo.out",
        });
      }
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(image, {
        scale: 1.15,
        duration: 0.8,
        ease: "expo.out",
      });

      if (title) {
        gsap.to(title, {
          x: 0,
          duration: 0.4,
          ease: "expo.out",
        });
      }
    });
  });
}

// Export for use in other modules
window.ProjectParallaxModule = {
  initProjectParallax,
  initProjectHoverEffects,
};
