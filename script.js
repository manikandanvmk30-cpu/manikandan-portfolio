// ---------------------------------------------------------------
// Typing effect for hero name
// ---------------------------------------------------------------
const typedEl = document.getElementById("typedName");
const fullText = "Manikandan V";
let i = 0;

function typeChar(){
  if (!typedEl) return;
  if (i <= fullText.length){
    typedEl.textContent = fullText.slice(0, i);
    i++;
    setTimeout(typeChar, 90);
  }
}
typeChar();

// ---------------------------------------------------------------
// Scroll progress bar
// ---------------------------------------------------------------
const progressBar = document.getElementById("progressBar");
function updateProgress(){
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  if (progressBar) progressBar.style.width = pct + "%";
}
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

// ---------------------------------------------------------------
// Nav background on scroll + mobile toggle
// ---------------------------------------------------------------
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 40){
    nav.style.boxShadow = "0 8px 24px rgba(0,0,0,0.35)";
  } else {
    nav.style.boxShadow = "none";
  }
}, { passive: true });

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
navLinks?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// ---------------------------------------------------------------
// Active tab highlighting based on section in view
// ---------------------------------------------------------------
const sections = document.querySelectorAll("section[id]");
const tabs = document.querySelectorAll(".tab");

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      const id = entry.target.getAttribute("id");
      tabs.forEach(tab => {
        tab.classList.toggle("active", tab.getAttribute("href") === `#${id}`);
      });
    }
  });
}, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });

sections.forEach(section => sectionObserver.observe(section));

// ---------------------------------------------------------------
// Reveal-on-scroll animation
// ---------------------------------------------------------------
const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add("in-view");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => revealObserver.observe(el));