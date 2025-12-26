/* ================================================
   SCROLL ANIMATIONS
   ================================================ */

/**
 * Initialize all scroll-triggered animations
 */
function initScrollAnimations() {
  initRevealUpAnimations();
  initSplitTextAnimations();
  initExpertiseAnimations();
  initProjectAnimations();
  initAchievementAnimations();
  initAwardAnimations();
}

/**
 * Reveal up animations for elements with .reveal-up class
 */
function initRevealUpAnimations() {
  gsap.utils.toArray(".reveal-up").forEach((element) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power4.out",
    });
  });
}

/**
 * Split text character animations
 */
function initSplitTextAnimations() {
  gsap.utils.toArray(".reveal-split").forEach((element) => {
    const chars = element.querySelectorAll(".char");
    if (chars.length) {
      gsap.to(chars, {
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.02,
        ease: "power4.out",
      });
    }
  });
}

/**
 * Stagger animations for expertise items
 */
function initExpertiseAnimations() {
  gsap.utils.toArray(".expertise-item").forEach((item, index) => {
    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: index * 0.1,
      ease: "power4.out",
    });
  });
}

/**
 * Project cards with stagger animation
 */
function initProjectAnimations() {
  gsap.utils.toArray(".project-card").forEach((card, index) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      delay: index * 0.15,
      ease: "power4.out",
    });
  });
}

/**
 * Achievement cards animation
 */
function initAchievementAnimations() {
  gsap.utils.toArray(".achievement-card").forEach((card, index) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: index * 0.1,
      ease: "power4.out",
    });
  });
}

/**
 * Award cards animation
 */
function initAwardAnimations() {
  gsap.utils.toArray(".award-card").forEach((card, index) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: index * 0.1,
      ease: "power4.out",
    });
  });
}

// Export for use in other modules
window.ScrollAnimationsModule = {
  initScrollAnimations,
};
