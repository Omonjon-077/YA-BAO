// Header Swiper //
let swiper = new Swiper(".headerSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  grabCursor: true,
  loop: true
}); // Korzina Swiper //

let swiperKor = new Swiper(".korzinaSwiper", {
  slidesPerView: 'auto',
  // spaceBetween: 10,
  grabCursor: true,
  loop: 'true'
}); // Korzina Add //
// let korzinaClass = document.getElementById('nav-korzina');
// const korziAdd = document.getElementById('korzina');
// const openModal = () => {
//   korzinaClass.classList.add("korzi__active");
// }
// const closeModal = () => {
//   korzinaClass.classList.remove("korzi__active");
// }
// korziAdd.addEventListener('click', () => {
//   openModal()
// })
// New Swiper //

let newSwiper = new Swiper(".new-swiper", {
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 16,
  grabCursor: true,
  loop: 'true'
}); // Order Swiper //

var orderSwiper = new Swiper(".orderSwip", {
  loop: true,
  grabCursor: true,
  slidesPerView: 3,
  spaceBetween: 15,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
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