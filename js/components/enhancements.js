/* ================================================
   ENHANCEMENTS MODULE
   Scroll progress, back to top, mobile menu
   ================================================ */

/**
 * Initialize all enhancement features
 */
function initEnhancements() {
  initScrollProgress();
  initBackToTop();
  initMobileMenu();
}

/**
 * Scroll Progress Bar
 */
function initScrollProgress() {
  const progressBar = document.querySelector(".scroll-progress");
  if (!progressBar) return;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + "%";
  });
}

/**
 * Back to Top Button
 */
function initBackToTop() {
  const backToTop = document.querySelector(".back-to-top");
  if (!backToTop) return;

  // Show/hide based on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  });

  // Scroll to top on click
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  const menuLinks = document.querySelectorAll(".mobile-menu a");

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    document.body.style.overflow = mobileMenu.classList.contains("active")
      ? "hidden"
      : "";
  });

  // Close menu when clicking a link
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      mobileMenu.classList.remove("active");
      document.body.style.overflow = "";
    });
  });
}

// Export for use in other modules
window.EnhancementsModule = {
  initEnhancements,
};
