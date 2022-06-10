// Header Swiper //
var swiper = new Swiper(".mySwiper", {
  loop: 'true'
}); // New Swiper //

let newSwiper = new Swiper(".new-swiper", {
  // centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 16,
  loop: 'true'
}); // Scroll Up //  

function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  if (this.scrollY >= 380) scrollUp.classList.add('show-scroll');else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);