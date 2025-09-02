// === Reveal Tags on Scroll ===
const projectCards = document.querySelectorAll(".project-card");

const revealOnScroll = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

projectCards.forEach((card) => revealOnScroll.observe(card));
