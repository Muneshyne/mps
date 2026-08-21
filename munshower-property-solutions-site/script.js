// Munshower Property Solutions — front-end interactions
// Replace this value with the actual Calendly URL when you have it.
const CALENDLY_URL = "";

const calendly = document.getElementById("calendlyLink");
const calendlyNote = document.querySelector(".calendly-note");

if (CALENDLY_URL) {
calendly.href = CALENDLY_URL;
calendlyNote.textContent = "Book a time that works for you.";
} else {
calendly.addEventListener("click", (e) => {
e.preventDefault();
alert("Add your Calendly booking link to CALENDLY_URL in script.js.");
});
}

// Mobile navigation
const menuBtn = document.querySelector(".menu-btn");
const mobileNav = document.querySelector(".mobile-nav");
menuBtn?.addEventListener("click", () => {
const open = menuBtn.getAttribute("aria-expanded") === "true";
menuBtn.setAttribute("aria-expanded", String(!open));
mobileNav.hidden = open;
});
mobileNav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
mobileNav.hidden = true;
menuBtn.setAttribute("aria-expanded", "false");
}));

// Project carousel
const track = document.getElementById("projectTrack");
const slides = [...document.querySelectorAll(".project-slide")];
const dotsWrap = document.getElementById("carouselDots");
let current = 0;

slides.forEach((_, i) => {
const dot = document.createElement("button");
dot.className = "dot" + (i === 0 ? " active" : "");
dot.setAttribute("aria-label", `Go to project ${i + 1}`);
dot.addEventListener("click", () => goTo(i));
dotsWrap.appendChild(dot);
});

function goTo(index) {
current = (index + slides.length) % slides.length;
track.style.transform = `translateX(-${current * 100}%)`;
[...dotsWrap.children].forEach((d, i) => d.classList.toggle("active", i === current));
}
document.getElementById("prevProject").addEventListener("click", () => goTo(current - 1));
document.getElementById("nextProject").addEventListener("click", () => goTo(current + 1));

let timer = setInterval(() => goTo(current + 1), 6500);
document.querySelector(".carousel")?.addEventListener("mouseenter", () => clearInterval(timer));
document.querySelector(".carousel")?.addEventListener("mouseleave", () => {
timer = setInterval(() => goTo(current + 1), 6500);
});

// Lead form — opens a pre-filled email so this works without a server.
const leadForm = document.getElementById("leadForm");
leadForm.addEventListener("submit", (e) => {
e.preventDefault();
const data = new FormData(leadForm);
const subject = `New Project Request — ${data.get("service") || "Property Solutions"}`;
const body = [
`Name: ${data.get("name")}`,
`Email: ${data.get("email")}`,
`Phone: ${data.get("phone")}`,
`Service: ${data.get("service")}`,
"",
"Project details:",
data.get("message")
].join("\n");

window.location.href =
`mailto:munshowerpropertysolutions@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

document.getElementById("formNote").textContent =
"Your email app should open with the request filled in.";
});

document.getElementById("year").textContent = new Date().getFullYear();

// Service card flip interaction

document.querySelectorAll(".service-card").forEach((card) => {

  card.addEventListener("click", (event) => {

    // Don't flip when clicking the quote button
    if (event.target.closest(".service-cta")) {
      return;
    }

    card.classList.toggle("is-flipped");

  });

  // Keyboard accessibility
  card.addEventListener("keydown", (event) => {

    if (event.key === "Enter" || event.key === " ") {

      event.preventDefault();

      card.classList.toggle("is-flipped");

    }

  });

});