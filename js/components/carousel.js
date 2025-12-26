/* ================================================
   CAROUSEL COMPONENTS
   Manifesto & Testimonial Carousels
   ================================================ */

/**
 * Initialize manifesto text carousel
 */
function initManifestoCarousel() {
  const manifestoTexts = [
    '"Small and focused efforts can achieve huge things. I believe in writing clean, meticulously crafted code that stands the test of time."',
    '"Every line of code is an opportunity to create something meaningful. I strive to build solutions that are both elegant and efficient."',
    '"The best code is invisible – it just works. My goal is to create seamless experiences that users love."',
    '"Continuous learning is at the heart of great development. I embrace new technologies and methodologies to stay at the cutting edge."',
  ];

  let currentManifesto = 0;
  const manifestoText = document.getElementById("manifesto-text");
  const manifestoNext = document.getElementById("manifesto-next");

  if (manifestoNext && manifestoText) {
    manifestoNext.addEventListener("click", () => {
      // Animate out
      gsap.to(manifestoText, {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          currentManifesto = (currentManifesto + 1) % manifestoTexts.length;
          manifestoText.textContent = manifestoTexts[currentManifesto];

          // Animate in
          gsap.fromTo(
            manifestoText,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
          );
        },
      });
    });
  }
}

/**
 * Initialize testimonial carousel
 */
function initTestimonialCarousel() {
  const testimonials = [
    {
      text: "Directed the logistics of 4 high-impact web wing events featuring immersive tutorial sessions, garnering participation from 200+ members.",
      name: "Google Developer Group",
      role: "Web Development Wing Member",
      avatar: "GDG",
    },
    {
      text: "Executed debating contests and events like OpenMic and BlindDate, engaging 100+ participants in a vibrant literary community.",
      name: "Crotonia",
      role: "Literary Society Member",
      avatar: "CR",
    },
    {
      text: "Completed 4 PRs during Hacktoberfest 2024, maintaining and merging 10+ pull requests to open-source projects worldwide.",
      name: "Hacktoberfest 2024",
      role: "Open Source Contributor",
      avatar: "HF",
    },
  ];

  let currentTestimonial = 0;
  const testimonialText = document.getElementById("testimonial-text");
  const testimonialCard = document.getElementById("testimonial-card");
  const testimonialNext = document.getElementById("testimonial-next");

  if (testimonialNext && testimonialText && testimonialCard) {
    testimonialNext.addEventListener("click", () => {
      // Animate out
      gsap.to(testimonialCard, {
        opacity: 0,
        x: -50,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          currentTestimonial = (currentTestimonial + 1) % testimonials.length;
          const current = testimonials[currentTestimonial];

          testimonialText.textContent = current.text;
          testimonialCard.querySelector(".author-name").textContent =
            current.name;
          testimonialCard.querySelector(".author-role").textContent =
            current.role;
          testimonialCard.querySelector(".author-avatar").textContent =
            current.avatar;

          // Animate in
          gsap.fromTo(
            testimonialCard,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }
          );
        },
      });
    });
  }
}

// Export for use in other modules
window.CarouselModule = {
  initManifestoCarousel,
  initTestimonialCarousel,
};
