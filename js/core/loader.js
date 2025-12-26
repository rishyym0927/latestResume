/* ================================================
   LOADER ANIMATION
   ================================================ */

/**
 * Initialize the page loader animation
 * @param {Function} onComplete - Callback function when loader completes
 */
function initLoader(onComplete) {
  const loader = document.getElementById("loader");
  const loaderText = document.querySelector(".loader-text");
  const chars = loaderText?.querySelectorAll(".char");

  // Stop scrolling during load
  if (window.LenisModule) {
    window.LenisModule.stopLenis();
  }
  document.body.style.overflow = "hidden";

  const tl = gsap.timeline({
    onComplete: () => {
      // Hide loader
      gsap.to(loader, {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut",
        onComplete: () => {
          loader.classList.add("hidden");
          if (window.LenisModule) {
            window.LenisModule.startLenis();
          }
          document.body.style.overflow = "";
          // Trigger callback (hero animations)
          if (typeof onComplete === "function") {
            onComplete();
          }
        },
      });
    },
  });

  // Animate loader text characters
  if (chars && chars.length) {
    tl.to(chars, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "power4.out",
      delay: 0.3,
    });
  }

  // Animate loader line
  loader.classList.add("loading");

  // Complete loader after delay
  tl.to({}, { duration: 1.5 });
}

// Export for use in other modules
window.LoaderModule = {
  initLoader,
};
