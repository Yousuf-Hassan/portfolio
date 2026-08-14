/* =========================================================
   Yusuf Xasan — Developer Portfolio
   Base scripts: navigation, header scroll state, reveal
   ========================================================= */

'use strict';

/* ---------- Mobile navigation toggle ---------- */
const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');

navToggle.addEventListener('click', () => {
  const isOpen = navList.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Close the mobile menu when a link is clicked
navList.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    navList.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

/* ---------- Header shadow on scroll ---------- */
const header = document.getElementById('site-header');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

/* ---------- Scroll reveal ---------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

/* ---------- Footer year ---------- */
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Hero typed roles ---------- */
const roles = ['Computer Science Student', 'Web Developer', 'Frontend Enthusiast', 'Lifelong Learner'];
const typedEl = document.getElementById('hero-typed');
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRoles() {
  const current = roles[roleIndex];
  const speed = isDeleting ? 45 : 90;

  if (isDeleting) {
    charIndex -= 1;
  } else {
    charIndex += 1;
  }

  typedEl.textContent = current.slice(0, charIndex);

  if (!isDeleting && charIndex === current.length) {
    isDeleting = true;
    setTimeout(typeRoles, 1800);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(typeRoles, speed);
}

typeRoles();
