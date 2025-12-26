/* ================================================
   CUSTOM CURSOR
   ================================================ */

/**
 * Initialize custom cursor functionality
 */
function initCursor() {
  const cursor = document.getElementById("cursor");
  const follower = document.getElementById("cursor-follower");

  if (!cursor || !follower) return;

  let mouseX = 0,
    mouseY = 0;
  let cursorX = 0,
    cursorY = 0;
  let followerX = 0,
    followerY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Smooth cursor animation
  gsap.ticker.add(() => {
    // Main cursor - fast
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    gsap.set(cursor, { x: cursorX, y: cursorY });

    // Follower - slow
    followerX += (mouseX - followerX) * 0.08;
    followerY += (mouseY - followerY) * 0.08;
    gsap.set(follower, { x: followerX, y: followerY });
  });

  // Hover effects
  const hoverElements = document.querySelectorAll(
    "a, button, .project-card, .magnetic"
  );

  hoverElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("hover");
      follower.classList.add("hover");
    });
    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("hover");
      follower.classList.remove("hover");
    });
  });

  // Hide cursor when leaving window
  document.addEventListener("mouseleave", () => {
    gsap.to([cursor, follower], { opacity: 0, duration: 0.3 });
  });

  document.addEventListener("mouseenter", () => {
    gsap.to([cursor, follower], { opacity: 1, duration: 0.3 });
  });
}

// Export for use in other modules
window.CursorModule = {
  initCursor,
};
