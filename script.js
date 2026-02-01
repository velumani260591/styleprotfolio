// ===============================
// HERO TYPING EFFECT
// ===============================

const roles = [
  "Java Full Stack Developer",
  "Spring Boot Developer",
  "Backend Engineer",
  "Frontend Developer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingText = document.getElementById("typing-text");

function typingEffect() {

  const currentRole = roles[roleIndex];

  if (!isDeleting) {

    typingText.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentRole.length) {
      setTimeout(() => isDeleting = true, 1200);
    }

  } else {

    typingText.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }

  }

  setTimeout(typingEffect, isDeleting ? 60 : 100);
}

typingEffect();

// ===============================
// SKILLS SCROLL ANIMATION
// ===============================

const skillCards = document.querySelectorAll(".skill-card");

window.addEventListener("scroll", () => {

  skillCards.forEach(card => {

    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight - 100) {
      card.classList.add("skill-show");
    }

  });

});

// ===============================
// SMOOTH SCROLL (NAVBAR)
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    e.preventDefault();

    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({
        behavior: "smooth"
      });

  });

});
