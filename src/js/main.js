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

// Check inputs on fill

let inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  
  input.addEventListener('input', function() {
    if(this.value !== '') {
      this.classList.add('filled');
      console.log(this.value + ' filled');
    } else {
      this.classList.remove('filled');
      console.log(this.value + ' empty');
    }
  });
});

// Sliders

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

$('.testimonials__slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('.testimonials-nav-arrows__btn--prev'),
  nextArrow: $('.testimonials-nav-arrows__btn--next'),
  appendDots: $('.testimonials__dots') 
});