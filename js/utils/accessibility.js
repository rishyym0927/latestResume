/* ================================================
   ACCESSIBILITY ENHANCEMENTS
   ================================================ */

/**
 * Initialize all accessibility features
 */
function initAccessibility() {
  addSkipLink();
  addKeyboardFocusStyles();
  addAriaLabels();
  addProjectAccessibility();
}

/**
 * Add skip to main content link
 */
function addSkipLink() {
  const skipLink = document.createElement("a");
  skipLink.href = "#about";
  skipLink.className = "skip-link";
  skipLink.textContent = "Skip to main content";
  skipLink.style.cssText = `
    position: fixed;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--text-primary);
    color: var(--white);
    padding: 15px 25px;
    border-radius: 30px;
    z-index: 10002;
    transition: top 0.3s ease;
  `;

  skipLink.addEventListener("focus", () => {
    skipLink.style.top = "20px";
  });

  skipLink.addEventListener("blur", () => {
    skipLink.style.top = "-100px";
  });

  document.body.prepend(skipLink);
}

/**
 * Add keyboard focus styles
 */
function addKeyboardFocusStyles() {
  const style = document.createElement("style");
  style.textContent = `
    .keyboard-nav *:focus {
      outline: 2px solid var(--accent-blue) !important;
      outline-offset: 4px !important;
    }
    
    .keyboard-nav a:focus,
    .keyboard-nav button:focus {
      outline: 2px solid var(--accent-blue) !important;
      outline-offset: 4px !important;
    }
  `;
  document.head.appendChild(style);
}

/**
 * Add ARIA labels to interactive elements
 */
function addAriaLabels() {
  const carousels = document.querySelectorAll(
    ".manifesto-next, .testimonial-next"
  );
  carousels.forEach((btn) => {
    btn.setAttribute("aria-label", "Next slide");
  });
}

/**
 * Make project cards more accessible
 */
function addProjectAccessibility() {
  const projectLinks = document.querySelectorAll(".project-link");
  projectLinks.forEach((link) => {
    const title = link.querySelector(".project-title")?.textContent;
    if (title) {
      link.setAttribute("aria-label", `View ${title} project`);
    }
  });
}

// Export for use in other modules
window.AccessibilityModule = {
  initAccessibility,
};
