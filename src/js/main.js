// Mobile navigation
const body = document.querySelector('body');
const navToggleBtn = document.querySelector('#tooggleNav');
const nav = document.querySelector('.nav');

function toggleMobileNav() {
  navToggleBtn.classList.toggle('mobile-nav-toggle--active');
  body.classList.toggle('fixed');
  nav.classList.toggle('nav--open');
}

navToggleBtn.addEventListener('click', toggleMobileNav);

$('.charter-services__list').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  variableWidth: true,
  prevArrow: $('.charter-services-nav__btn--prev'),
  nextArrow: $('.charter-services-nav__btn--next'),
  appendDots: $('.charter-services-nav__dots') 
});