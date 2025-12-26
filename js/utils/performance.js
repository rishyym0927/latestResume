/* ================================================
   PERFORMANCE OPTIMIZATIONS
   ================================================ */

/**
 * Initialize lazy loading for images
 */
function initLazyLoad() {
  const images = document.querySelectorAll("img[data-src]");

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute("data-src");
            imageObserver.unobserve(img);
          }
        });
      },
      {
        rootMargin: "50px 0px",
      }
    );

    images.forEach((img) => imageObserver.observe(img));
  } else {
    // Fallback for older browsers
    images.forEach((img) => {
      img.src = img.dataset.src;
      img.removeAttribute("data-src");
    });
  }
}

/**
 * Handle prefers reduced motion
 */
function handleReducedMotion() {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  if (prefersReducedMotion.matches) {
    // Disable all animations for users who prefer reduced motion
    document.documentElement.style.setProperty("--transition-fast", "0s");
    document.documentElement.style.setProperty("--transition-medium", "0s");
    document.documentElement.style.setProperty("--transition-slow", "0s");

    // Disable smooth scroll
    document.documentElement.style.scrollBehavior = "auto";
  }

  return prefersReducedMotion;
}

/**
 * Get color scheme preference
 * @returns {MediaQueryList} Color scheme media query
 */
function getColorSchemePreference() {
  return window.matchMedia("(prefers-color-scheme: dark)");
}

/**
 * Handle page visibility changes
 */
function handlePageVisibility() {
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      if (window.LenisModule) {
        window.LenisModule.stopLenis();
      }
    } else {
      if (window.LenisModule) {
        window.LenisModule.startLenis();
      }
    }
  });
}

/**
 * Handle window resize with debounce
 */
function handleWindowResize() {
  const debounce =
    window.HelpersModule?.debounce ||
    function (fn, wait) {
      let timeout;
      return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, args), wait);
      };
    };

  window.addEventListener(
    "resize",
    debounce(() => {
      if (typeof ScrollTrigger !== "undefined") {
        ScrollTrigger.refresh();
      }
    }, 250)
  );
}

/**
 * Log initialization info for debugging
 */
function logInitInfo() {
  const prefersReducedMotion = handleReducedMotion();
  const prefersDarkScheme = getColorSchemePreference();

  console.log("🚀 Portfolio initialized");
  console.log(
    "📱 Device:",
    navigator.userAgent.includes("Mobile") ? "Mobile" : "Desktop"
  );
  console.log("🎨 Color scheme:", prefersDarkScheme.matches ? "Dark" : "Light");
  console.log(
    "⚡ Reduced motion:",
    prefersReducedMotion.matches ? "Yes" : "No"
  );
}

// Export for use in other modules
window.PerformanceModule = {
  initLazyLoad,
  handleReducedMotion,
  getColorSchemePreference,
  handlePageVisibility,
  handleWindowResize,
  logInitInfo,
};
