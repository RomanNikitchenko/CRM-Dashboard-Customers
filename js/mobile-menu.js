const body = document.querySelector('body');
const mobileMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');

const toggleMenu = () => {
  const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenu.classList.toggle('is-open');
  mobileMenu.classList.toggle('menu-container--is-hidden');
  body.classList.toggle('mobile-menu-open');
};

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

// Закрываем мобильное меню на более широких экранах
// в случае изменения ориентации устройства.
window.matchMedia('(min-width: 1440px)').addEventListener('change', e => {
  if (!e.matches) return;
  mobileMenu.classList.remove('is-open');
  mobileMenu.classList.add('menu-container--is-hidden');
  openMenuBtn.setAttribute('aria-expanded', false);
  body.classList.remove('mobile-menu-open');
});
