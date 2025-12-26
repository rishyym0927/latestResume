/* ================================================
   MAGNETIC BUTTONS - Le-Silk Enhanced
   Features: Stronger pull, subtle rotation, smooth return
   ================================================ */

/**
 * Initialize magnetic effect on elements with .magnetic class
 */
function initMagneticButtons() {
  const magneticElements = document.querySelectorAll(".magnetic");

  magneticElements.forEach((el) => {
    // Magnetic strength based on element type
    const isLarge = el.classList.contains("cta-link");
    const strength = isLarge ? 0.4 : 0.35;

    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        rotation: x * 0.02, // Subtle rotation based on mouse position
        duration: 0.4,
        ease: "power2.out",
      });
    });

    el.addEventListener("mouseleave", () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        rotation: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.4)",
      });
    });
  });
}

/**
 * Initialize hover lift effect for award rows and skill rows
 */
function initRowHoverEffects() {
  const rows = document.querySelectorAll(
    ".award-row, .skill-row, .position-item"
  );

  rows.forEach((row) => {
    row.addEventListener("mouseenter", () => {
      gsap.to(row, {
        x: 10,
        duration: 0.4,
        ease: "expo.out",
      });
    });

    row.addEventListener("mouseleave", () => {
      gsap.to(row, {
        x: 0,
        duration: 0.3,
        ease: "expo.out",
      });
    });
  });
}

// Export for use in other modules
window.MagneticModule = {
  initMagneticButtons,
  initRowHoverEffects,
};
