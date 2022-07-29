// Header Swiper //
let swiper = new Swiper(".headerSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  grabCursor: true,
  loop: true
}); // Reviews Swiper //

let swiperRev = new Swiper(".reviews__wrap", {
  slidesPerView: 8,
  spaceBetween: 16,
  grabCursor: true,
  loop: 'true'
}); // Korzina Swiper //

let swiperKor = new Swiper(".korzinaSwiper", {
  slidesPerView: 'auto',
  // spaceBetween: 10,
  grabCursor: true,
  loop: 'true'
}); // Korzina Add //

let korzinaClass = document.querySelector('.nav__korzina');
let cardBg = document.querySelector('.card__bg');
const korziAdd = document.querySelector('.korzina-btn');
let openAI = 0;

const cardBgOpModal = () => {
  cardBg.classList.add("korzi__active");
};

const cardBgCLModal = () => {
  cardBg.classList.remove("korzi__active");
};

const openModal = () => {
  korzinaClass.classList.add("korzi__active");
  cardBg.classList.add("korzi__active");
};

const closeModal = () => {
  korzinaClass.classList.remove("korzi__active");
  cardBg.classList.remove("korzi__active");
}; // Do not destroy other pages


$(function () {
  // Korzina modal Add
  if ($('.korzina-btn').length) {
    korziAdd.addEventListener('click', () => {
      if (!openAI) {
        openModal();
        openAI = 1;
      } else {
        closeModal();
        openAI = 0;
      }
    });
  } // Revome random click in Bg


  if ($('.card__bg').length) {
    cardBg.addEventListener('click', () => {
      if (!openAI) {
        cardBgOpModal();
        openAI = 1;
      } else {
        cardBgCLModal();
        closeModal();
        openAI = 0;
      }
    });
  } // Header Fixed


  if ($('#nav__fixed').length) {
    window.onscroll = function () {
      myFunction();
    };

    var header = document.getElementById("nav__fixed");
    var searchBy = document.getElementById("search");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        searchBy.classList.remove("none");
      } else {
        header.classList.remove("sticky");
        searchBy.classList.add("none");
      }
    }
  } // Korzina Pages header Func


  if ($('#header-kor').length) {
    window.onscroll = function () {
      myFunction();
    };

    var headerKorzina = document.getElementById("header-kor");
    var sticky = headerKorzina.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        headerKorzina.classList.add("sticky-korzi");
        ;
      } else {
        headerKorzina.classList.remove("sticky-korzi");
      }
    }
  }
}); // New Swiper //

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