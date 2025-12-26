/* ================================================
   MAGNETIC BUTTONS
   ================================================ */

/**
 * Initialize magnetic effect on elements with .magnetic class
 */
function initMagneticButtons() {
  const magneticElements = document.querySelectorAll(".magnetic");

  magneticElements.forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(el, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    el.addEventListener("mouseleave", () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      });
    });
  });
}

// Export for use in other modules
window.MagneticModule = {
  initMagneticButtons,
};
