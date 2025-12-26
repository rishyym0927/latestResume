/* ================================================
   MAIN ENTRY POINT - SCRIPT
   Initializes all utilities and interactions
   ================================================ */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize interaction modules
  initUtilities();
});

/**
 * Initialize all utility modules
 */
function initUtilities() {
  // Interaction modules
  window.InteractionsModule?.initTextHoverEffects();
  window.InteractionsModule?.initProjectVideoHover();
  window.InteractionsModule?.initFormValidation();
  window.InteractionsModule?.initKeyboardNavigation();

  // Accessibility
  window.AccessibilityModule?.initAccessibility();

  // Performance
  window.PerformanceModule?.initLazyLoad();
  window.PerformanceModule?.handleReducedMotion();
  window.PerformanceModule?.logInitInfo();
}
