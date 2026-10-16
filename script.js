// ==========================================================
// Portfolio interactions
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  const typedEl = document.getElementById('typed');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('nav');
  const navLinks = document.querySelectorAll('.nav a');
  const sections = document.querySelectorAll('main section[id]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- Footer year ----
  document.getElementById('year').textContent = new Date().getFullYear();

  // ---- Hero: type the command, then reveal the content ----
  const command = 'whoami';

  function reveal() {
    hero.classList.add('ready');
  }

  if (reducedMotion) {
    typedEl.textContent = command;
    reveal();
  } else {
    let i = 0;
    const type = () => {
      typedEl.textContent = command.slice(0, ++i);
      if (i < command.length) {
        setTimeout(type, 110);
      } else {
        setTimeout(reveal, 350);
      }
    };
    setTimeout(type, 400);
  }

  // ---- Mobile menu ----
  function setMenu(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }

  toggle.addEventListener('click', () => {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });

  navLinks.forEach((link) => link.addEventListener('click', () => setMenu(false)));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMenu(false);
  });

  // ---- Highlight the nav link of the section in view ----
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );

  sections.forEach((section) => observer.observe(section));
});
