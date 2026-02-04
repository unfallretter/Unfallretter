// Fade in animation on scroll (global für alle Seiten)
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, observerOptions);

document
  .querySelectorAll(".service-card, .glossary-item, .example-card, .tip-card, .process-step")
  .forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
  });

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    
    // Warte 2 Sekunden, dann blende ihn aus
    setTimeout(function() {
        preloader.classList.add('fade-out');
    }, 4000);
});
