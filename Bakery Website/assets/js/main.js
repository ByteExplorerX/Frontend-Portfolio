const header = document.querySelector('.header');
const navMenu = document.querySelector('.nav__menu');
const navToggle = document.querySelector('.nav__toggle');
const navClose = document.querySelector('.nav__close');
const scrollUp = document.querySelector('.scrollup');

/* Show header on scroll down */
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('blur-header');
  } else {
    header.classList.remove('blur-header');
  }
});

/* Show/hide nav menu */
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
});

navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
});

/* Show scroll up button */
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
});

/* Scroll to top */
scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});