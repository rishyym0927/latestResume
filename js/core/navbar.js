/* ================================================
   NAVBAR ANIMATIONS
   ================================================ */

/**
 * Initialize navbar scroll behavior
 */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  let lastScrollY = 0;
  const scrollThreshold = 100;

  ScrollTrigger.create({
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    onUpdate: (self) => {
      const scrollY = self.scroll();

      // Add scrolled class
      if (scrollY > scrollThreshold) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }

      // Hide/show on scroll direction
      if (scrollY > lastScrollY && scrollY > 300) {
        navbar.classList.add("hidden");
      } else {
        navbar.classList.remove("hidden");
      }

      lastScrollY = scrollY;
    },
  });
}

// Export for use in other modules
window.NavbarModule = {
  initNavbar,
};
