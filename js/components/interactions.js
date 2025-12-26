/* ================================================
   INTERACTIONS - Text Hover, Project Hover, etc.
   ================================================ */

/**
 * Initialize text hover effects on nav links
 */
function initTextHoverEffects() {
  const navLinks = document.querySelectorAll(".nav-link:not(.nav-contact)");

  navLinks.forEach((link) => {
    const text = link.textContent;
    link.innerHTML = `<span>${text}</span>`;
  });
}

/**
 * Initialize project hover interactions with floating icons
 */
function initProjectVideoHover() {
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    const icon = card.querySelector(".project-icon");

    if (icon) {
      // Create a subtle floating animation for icons
      const floatAnimation = () => {
        const randomX = (Math.random() - 0.5) * 10;
        const randomY = (Math.random() - 0.5) * 10;
        const randomRotate = (Math.random() - 0.5) * 5;

        if (typeof gsap !== "undefined") {
          gsap.to(icon, {
            x: randomX,
            y: randomY,
            rotation: randomRotate,
            duration: 3,
            ease: "sine.inOut",
            onComplete: floatAnimation,
          });
        }
      };

      // Start floating when in view
      if (typeof IntersectionObserver !== "undefined") {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                floatAnimation();
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.5 }
        );

        observer.observe(card);
      }
    }
  });
}

/**
 * Initialize form validation (for future contact form)
 */
function initFormValidation() {
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      const inputs = form.querySelectorAll(
        "input[required], textarea[required]"
      );
      let isValid = true;

      inputs.forEach((input) => {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add("error");
        } else {
          input.classList.remove("error");
        }
      });

      if (!isValid) {
        e.preventDefault();
      }
    });
  });
}

/**
 * Initialize keyboard navigation
 */
function initKeyboardNavigation() {
  // Focus visible polyfill behavior
  document.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      document.body.classList.add("keyboard-nav");
    }
  });

  document.addEventListener("mousedown", () => {
    document.body.classList.remove("keyboard-nav");
  });

  // Escape key closes any open modals/overlays
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      // Close any open modals here
    }
  });

  // Arrow key navigation for carousels
  document.addEventListener("keydown", (e) => {
    const manifestoNext = document.getElementById("manifesto-next");
    const testimonialNext = document.getElementById("testimonial-next");

    if (
      document.activeElement === manifestoNext ||
      document.activeElement?.closest(".manifesto")
    ) {
      if (e.key === "ArrowRight" || e.key === "Enter") {
        manifestoNext?.click();
      }
    }

    if (
      document.activeElement === testimonialNext ||
      document.activeElement?.closest(".testimonial-carousel")
    ) {
      if (e.key === "ArrowRight" || e.key === "Enter") {
        testimonialNext?.click();
      }
    }
  });
}

// Export for use in other modules
window.InteractionsModule = {
  initTextHoverEffects,
  initProjectVideoHover,
  initFormValidation,
  initKeyboardNavigation,
};
