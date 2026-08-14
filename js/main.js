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

/* ---------- Scroll-spy: highlight active nav link ---------- */
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section[id]');

const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });

sections.forEach((section) => spyObserver.observe(section));

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

/* ---------- Contact form (front-end validation) ---------- */
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setFieldError(input, hasError) {
  const errorEl = document.querySelector(`[data-error-for="${input.name}"]`);
  input.classList.toggle('invalid', hasError);
  if (errorEl) errorEl.classList.toggle('show', hasError);
}

function validateField(input) {
  let valid = input.value.trim().length > 0;
  if (valid && input.type === 'email') {
    valid = EMAIL_RE.test(input.value.trim());
  }
  setFieldError(input, !valid);
  return valid;
}

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const fields = Array.from(contactForm.querySelectorAll('.form-input'));
  let allValid = true;

  fields.forEach((field) => {
    if (!validateField(field)) allValid = false;
  });

  if (allValid) {
    formSuccess.hidden = false;
    contactForm.reset();
    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
});

// Live validation feedback
contactForm.querySelectorAll('.form-input').forEach((field) => {
  field.addEventListener('blur', () => validateField(field));
  field.addEventListener('input', () => {
    if (field.classList.contains('invalid')) validateField(field);
  });
});
