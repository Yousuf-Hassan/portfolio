/* =========================================================
   Yusuf Xasan — Developer Portfolio
   Shared scripts for all pages (guarded per page)
   ========================================================= */

'use strict';

// Mark that JavaScript is available so styles that depend on it (e.g. reveal)
// only apply when the page is enhanced. Content stays visible without JS.
document.documentElement.classList.add('js');

/* ---------- Mobile navigation toggle ---------- */
const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close the mobile menu when a link is clicked
  navList.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      navList.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ---------- Header shadow on scroll ---------- */
const header = document.getElementById('site-header');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

/* ---------- Scroll-spy: highlight active nav link (home only) ---------- */
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section[id]');

// Only run scroll-spy when the navigation contains in-page anchors (the home
// page). On subpages the active link is set in the markup and must stay put;
// otherwise the spy would strip the highlighted state from every link.
const hasAnchorLinks = Array.from(navLinks).some((link) =>
  link.getAttribute('href').startsWith('#')
);

if (hasAnchorLinks && navLinks.length && sections.length) {
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
}

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
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ---------- Hero typed roles (home page only) ---------- */
const typedEl = document.getElementById('hero-typed');

if (typedEl) {
  const roles = ['Computer Science Student', 'Web Developer', 'Frontend Enthusiast', 'Lifelong Learner'];
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
}

/* ---------- Contact form (front-end validation) ---------- */
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

if (contactForm) {
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
}
