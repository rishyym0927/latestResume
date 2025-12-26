/* ================================================
   PARALLAX EFFECTS
   ================================================ */

/**
 * Initialize all parallax effects
 */
function initParallaxEffects() {
  initGlowBorderParallax();
  initProjectImageParallax();
}

/**
 * Glow border parallax on mouse move
 */
function initGlowBorderParallax() {
  const glowBorder = document.querySelector(".glow-border");

  if (glowBorder) {
    document.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      gsap.to(glowBorder, {
        boxShadow: `
          inset ${x * 30}px ${y * 30}px 100px 20px rgba(74, 144, 217, 0.25),
          inset ${x * 60}px ${y * 60}px 200px 40px rgba(74, 144, 217, 0.08)
        `,
        duration: 0.5,
        ease: "power2.out",
      });
    });

    // Fade glow on scroll
    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const opacity = 0.6 - self.progress * 0.4;
        gsap.to(glowBorder, { opacity: Math.max(0.2, opacity), duration: 0.3 });
      },
    });
  }
}

/**
 * Project images parallax on scroll
 */
function initProjectImageParallax() {
  gsap.utils.toArray(".project-image").forEach((image) => {
    const placeholder = image.querySelector(".project-placeholder");
    if (placeholder) {
      gsap.to(placeholder, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: image,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }
  });
}

/**
 * Initialize scroll progress indicator
 */
function initScrollProgress() {
  const progressBar = document.createElement("div");
  progressBar.className = "scroll-progress";
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #4a90d9, #667eea, #a855f7);
    z-index: 10001;
    transform-origin: left;
    transform: scaleX(0);
  `;
  document.body.appendChild(progressBar);

  gsap.to(progressBar, {
    scaleX: 1,
    ease: "none",
    scrollTrigger: {
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.3,
    },
  });
}

// Export for use in other modules
window.ParallaxModule = {
  initParallaxEffects,
  initScrollProgress,
};
