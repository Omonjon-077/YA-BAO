// Header Swiper //
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  grabCursor: true,
  loop: true
}); // New Swiper //

let newSwiper = new Swiper(".new-swiper", {
  // centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 16,
  grabCursor: true,
  loop: 'true'
}); // Scroll Up //  

function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  if (this.scrollY >= 380) scrollUp.classList.add('show-scroll');else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);
/* fn funcF */

function fnBrowserDetect() {
  let userAgent = navigator.userAgent;
  let browserName;
}