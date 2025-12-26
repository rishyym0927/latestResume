/* ================================================
   SCROLL ANIMATIONS - Le-Silk Enhanced
   Features: Clip-path reveals, staggered words, line animations
   ================================================ */

/**
 * Initialize all scroll-triggered animations
 */
function initScrollAnimations() {
  initRevealUpAnimations();
  initClipPathTextReveals();
  initLineDrawAnimations();
  initExpertiseAnimations();
  initSkillRowAnimations();
  initPositionAnimations();
  initAwardRowAnimations();
  initProjectAnimations();
  initAchievementAnimations();
}

/**
 * Le-Silk style clip-path text reveal for .reveal-split elements
 */
function initClipPathTextReveals() {
  gsap.utils.toArray(".reveal-split").forEach((element) => {
    // Split text into words
    const text = element.textContent;
    const words = text.split(" ").filter((word) => word.trim());

    // Wrap each word in spans
    element.innerHTML = words
      .map(
        (word) =>
          `<span class="word-wrap"><span class="word">${word}</span></span>`
      )
      .join(" ");

    // Style the wrappers
    element.querySelectorAll(".word-wrap").forEach((wrap) => {
      wrap.style.display = "inline-block";
      wrap.style.overflow = "hidden";
      wrap.style.verticalAlign = "top";
    });

    // Animate words
    const wordElements = element.querySelectorAll(".word");
    gsap.set(wordElements, {
      y: "110%",
      opacity: 0,
      rotateX: -45,
    });

    gsap.to(wordElements, {
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      y: "0%",
      opacity: 1,
      rotateX: 0,
      duration: 1.2,
      stagger: 0.06,
      ease: "expo.out",
    });
  });
}

/**
 * Horizontal line draw animations for section dividers
 */
function initLineDrawAnimations() {
  // Animate .skill-row, .position-item, .award-row top borders
  const rowElements = gsap.utils.toArray(
    ".skill-row, .position-item, .award-row"
  );

  rowElements.forEach((row) => {
    gsap.to(row, {
      scrollTrigger: {
        trigger: row,
        start: "top 90%",
        toggleActions: "play none none none",
        onEnter: () => row.classList.add("in-view"),
      },
    });
  });
}

/**
 * Reveal up animations for elements with .reveal-up class
 */
function initRevealUpAnimations() {
  gsap.utils.toArray(".reveal-up").forEach((element) => {
    gsap.set(element, { opacity: 0, y: 60 });
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 88%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "expo.out",
    });
  });
}

/**
 * Stagger animations for expertise items
 */
function initExpertiseAnimations() {
  const items = gsap.utils.toArray(".expertise-item");
  if (!items.length) return;

  items.forEach((item, index) => {
    gsap.set(item, { opacity: 0, y: 80 });
    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 88%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      delay: index * 0.1,
      ease: "expo.out",
    });
  });
}

/**
 * Skill row stagger animations
 */
function initSkillRowAnimations() {
  const rows = gsap.utils.toArray(".skill-row");
  if (!rows.length) return;

  rows.forEach((row, index) => {
    gsap.set(row, { opacity: 0, y: 50 });
    gsap.to(row, {
      scrollTrigger: {
        trigger: row,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
      duration: 0.9,
      delay: index * 0.12,
      ease: "expo.out",
    });
  });
}

/**
 * Position item stagger animations
 */
function initPositionAnimations() {
  const items = gsap.utils.toArray(".position-item");
  if (!items.length) return;

  items.forEach((item, index) => {
    gsap.set(item, { opacity: 0, y: 60 });
    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 88%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      delay: index * 0.15,
      ease: "expo.out",
    });
  });
}

/**
 * Award row stagger animations
 */
function initAwardRowAnimations() {
  const rows = gsap.utils.toArray(".award-row");
  if (!rows.length) return;

  rows.forEach((row, index) => {
    gsap.set(row, { opacity: 0, x: -30 });
    gsap.to(row, {
      scrollTrigger: {
        trigger: row,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      x: 0,
      duration: 0.8,
      delay: index * 0.1,
      ease: "expo.out",
    });
  });
}

/**
 * Project cards with stagger animation
 */
function initProjectAnimations() {
  const cards = gsap.utils.toArray(".project-card");
  if (!cards.length) return;

  cards.forEach((card, index) => {
    gsap.set(card, { opacity: 0, y: 100 });
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 88%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
      duration: 1.2,
      delay: index * 0.12,
      ease: "expo.out",
    });
  });
}

/**
 * Achievement cards animation
 */
function initAchievementAnimations() {
  const cards = gsap.utils.toArray(".achievement-card");
  if (!cards.length) return;

  cards.forEach((card, index) => {
    gsap.set(card, { opacity: 0, y: 50, scale: 0.95 });
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 88%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.9,
      delay: index * 0.1,
      ease: "expo.out",
    });
  });
}

// Export for use in other modules
window.ScrollAnimationsModule = {
  initScrollAnimations,
};
