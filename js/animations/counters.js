/* ================================================
   COUNTER ANIMATIONS
   ================================================ */

/**
 * Initialize counter animations for elements with data-count attribute
 */
function initCounterAnimations() {
  gsap.utils.toArray("[data-count]").forEach((element) => {
    const target = parseFloat(element.getAttribute("data-count"));
    const isDecimal = target % 1 !== 0;

    ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      onEnter: () => {
        gsap.to(element, {
          innerText: target,
          duration: 2,
          ease: "power2.out",
          snap: { innerText: isDecimal ? 0.01 : 1 },
          onUpdate: function () {
            if (isDecimal) {
              element.innerText = parseFloat(element.innerText).toFixed(2);
            }
          },
        });
      },
      once: true,
    });
  });
}

// Export for use in other modules
window.CounterModule = {
  initCounterAnimations,
};
