// === Navigation Highlight on Scroll ===
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 50;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// === Dark/Light Mode Toggle ===
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "🌙";
toggleBtn.style.position = "fixed";
toggleBtn.style.bottom = "20px";
toggleBtn.style.right = "20px";
toggleBtn.style.padding = "10px";
toggleBtn.style.borderRadius = "50%";
toggleBtn.style.cursor = "pointer";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = 
    document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// === Typing Animation (Intro) ===
const introText = document.querySelector("#home p");
const text = introText.textContent;
introText.textContent = "";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    introText.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();
