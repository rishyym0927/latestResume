/* ================================================
   CUSTOM CURSOR - Le-Silk Enhanced
   Features: Contextual states, "View" text on projects
   ================================================ */

/**
 * Initialize enhanced custom cursor functionality
 */
function initCursor() {
  const cursor = document.getElementById("cursor");
  const follower = document.getElementById("cursor-follower");

  if (!cursor || !follower) return;

  // Create cursor text element for "View" state
  let cursorText = follower.querySelector(".cursor-text");
  if (!cursorText) {
    cursorText = document.createElement("span");
    cursorText.className = "cursor-text";
    follower.appendChild(cursorText);
  }

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

  // Smooth cursor animation with Le-Silk style lerping
  gsap.ticker.add(() => {
    // Main cursor - fast
    cursorX += (mouseX - cursorX) * 0.25;
    cursorY += (mouseY - cursorY) * 0.25;
    gsap.set(cursor, { x: cursorX, y: cursorY });

    // Follower - slower, smooth
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    gsap.set(follower, { x: followerX, y: followerY });
  });

  // Project cards - show "View" text
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      cursor.classList.add("cursor-hidden");
      follower.classList.add("cursor-project");
      cursorText.textContent = "View";
    });
    card.addEventListener("mouseleave", () => {
      cursor.classList.remove("cursor-hidden");
      follower.classList.remove("cursor-project");
      cursorText.textContent = "";
    });
  });

  // Links and buttons - scale down
  const linkElements = document.querySelectorAll(
    "a:not(.project-link), button, .magnetic, .cta-link, .nav-link"
  );
  linkElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("cursor-link");
      follower.classList.add("cursor-link");
    });
    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("cursor-link");
      follower.classList.remove("cursor-link");
    });
  });

  // Award rows - arrow cursor
  const awardRows = document.querySelectorAll(".award-row");
  awardRows.forEach((row) => {
    row.addEventListener("mouseenter", () => {
      cursor.classList.add("cursor-hidden");
      follower.classList.add("cursor-arrow");
      cursorText.textContent = "→";
    });
    row.addEventListener("mouseleave", () => {
      cursor.classList.remove("cursor-hidden");
      follower.classList.remove("cursor-arrow");
      cursorText.textContent = "";
    });
  });

  // Text/input elements - text cursor
  const textElements = document.querySelectorAll("input, textarea, p, span");
  textElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      if (
        !el.closest("a") &&
        !el.closest("button") &&
        !el.closest(".project-card")
      ) {
        cursor.classList.add("cursor-text-mode");
        follower.classList.add("cursor-text-mode");
      }
    });
    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("cursor-text-mode");
      follower.classList.remove("cursor-text-mode");
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
