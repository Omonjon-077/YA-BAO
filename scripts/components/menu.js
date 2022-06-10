// RUN slider
if ($('body').find('#splide')) {
  var splide = new Splide('#splide', {
    type: 'fade',
    rewind: true,
    perPage: 1,
    autoplay: true,
    classes: {
      arrows: 'splide__arrows header-arrows',
      arrow: 'splide__arrow header-arrow',
      prev: 'splide__arrow--prev header-prev',
      next: 'splide__arrow--next header-next',
      pagination: 'splide__pagination header-pagination',
      page: 'splide__pagination__page header-page'
    }
  }).mount();
}

if ($('body').find('#splide2')) {
  var splide2 = new Splide('#splide2', {
    type: 'fade',
    rewind: true,
    perPage: 1,
    autoplay: true,
    classes: {
      pagination: 'splide__pagination build-slider-pagination',
      page: 'splide__pagination__page build-slider-page'
    }
  }).mount();
}

if ($('body').find('#splide3')) {
  var splide3 = new Splide('#splide3', {
    type: 'loop',
    perPage: 6,
    rewind: true,
    autoplay: true,
    perMove: 1,
    classes: {
      pagination: 'splide__pagination our-partner-pagination',
      page: 'splide__pagination__page our-partner-page'
    }
  }).mount();
}

if ($('body').find('#splide4')) {
  var splide4 = new Splide('#splide4', {
    type: 'loop',
    rewind: true,
    perPage: 1,
    autoplay: false,
    perMove: 1,
    classes: {
      pagination: 'splide__pagination section-latest-news__pagination',
      page: 'splide__pagination__page section-latest-news__page'
    }
  }).mount();
} // SECTION PLAN SLIDE EFFECT 


const btn4_ctn = document.querySelector(".btn4_container");
const button1 = document.querySelector(".button1");
const button1Label = document.querySelector(".button1 label");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button3Label = document.querySelector(".button3 label");
button1.addEventListener("click", () => {
  if (button2.classList.contains("move")) {
    button2.classList.remove("move");
  }

  button1Label.style.cursor = 'default';
  button3Label.style.cursor = 'pointer';
});
button3.addEventListener("click", () => {
  if (!button2.classList.contains("move")) {
    button2.classList.add("move");
  }

  button1Label.style.cursor = 'pointer';
  button3Label.style.cursor = 'default';
});
/* Voice on mode *********************************************** */

/* Modal okna zvukovoy effect uchun */

var voiceTop = document.querySelector(".voiceOn");
var timeCloseModalAlert = 1000;
let voiceOn = false;
/* |Barcha matnlarni ovozlar orqali ijro etuvchi funksiyalar shuni ichida */

function ifActiveVoice() {
  if (!voiceOn) {
    // Malum secundan keyin sahifa yangilanadi
    setInterval(() => {
      location.reload();
    }, timeCloseModalAlert);
  } else if (voiceOn) {
    // A simple IIFE function.
    // Простая функция IIFE.
    // Oddiy IIFE funktsiyasi.
    (function () {
      "use strict"; // For the sake of practice.
      // Ради практики.
      // Amaliyot uchun.

      if (typeof speechSynthesis === 'undefined') return; // Some config stuffs...
      // Некоторые конфиги...
      // Ba'zi konfiguratsiyalar ...

      var voiceSelect = document.getElementById("voiceSelect");
      var myPhrase = ' ';
      var voices = []; // This is essentially similar to jQuery's $.ready.
      // По сути, это похоже на $.ready в jQuery.
      // Bu mohiyatan jQuery $.ready dasturiga o'xshaydi.

      var ready = function (callback) {
        var d = document,
            s = d.readyState; // DOMContentLoaded was fired
        // DOMContentLoaded был запущен
        // DOMContentLoaded ishdan bo'shatildi

        if (s == "complete" || s == "loaded" || s == "interactive") {
          callback();
        } else {
          if (d.addEventListener) {
            d.addEventListener("DOMContentLoaded", callback, false);
          } else {
            d.attachEvent("onDOMContentLoaded", callback);
          }
        }
      }; // This is a function to display all possible voice options.
      // Это функция для отображения всех возможных вариантов голоса.
      // Bu barcha mumkin bo'lgan ovozli variantlarni ko'rsatish funksiyasi.


      function populateVoiceList() {
        voices = speechSynthesis.getVoices();

        for (var i = 0; i < voices.length; i++) {
          var option = document.createElement('option');
          option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
          option.textContent += voices[i].default ? ' -- DEFAULT' : '';
          option.setAttribute('data-lang', voices[i].lang);
          option.setAttribute('data-name', voices[i].name);
          document.getElementById("voiceSelect").appendChild(option);
        }
      } // This is the handler for when the select tag is changed.
      // Это обработчик изменения тега select.
      // Bu tanlangan teg o'zgartirilganda ishlov beruvchidir.


      function handler() {
        var utterThis = new SpeechSynthesisUtterance(myPhrase);
        var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');

        for (var i = 0; i < voices.length; i++) {
          if (voices[i].name === selectedOption) {
            utterThis.voice = voices[i];
          }
        }

        speechSynthesis.speak(utterThis);
      }

      ;

      function buildBtn(e) {
        if (!getSelectionText()) {
          var button = document.getElementById("voice");
          button.style.display = "none";
        } else if (getSelectionText()) {
          var button = document.getElementById("voice");
          var x = e.pageX;
          var y = e.pageY;
          var justBit = 15;
          button.style.display = "block";
          button.style.position = "absolute";
          button.style.left = justBit + x + "px";
          button.style.top = justBit + y + "px";
          /* var coor = "Coordinates: (" + x + "," + y + ")"; */

          /* button.innerHTML = coor; */
        }
      }

      function fnBrowserDetect() {
        let userAgent = navigator.userAgent;
        let browserName;
        var button = document.querySelector(".btn-voice");
        var detectBrowser = document.querySelector(".detect");

        if (userAgent.match(/chrome|chromium|crios/i)) {
          button.addEventListener("click", () => {
            setTimeout(function () {
              speechSynthesis.cancel();
              myPhrase = getSelectionText();
              handler();
            }, 1);
          });
        } else if (userAgent.match(/firefox|fxios/i)) {
          setTimeout(function () {
            speechSynthesis.cancel();
            myPhrase = getSelectionText();
            handler();
          }, 1);
        } else if (userAgent.match(/safari/i)) {
          setTimeout(function () {
            speechSynthesis.cancel();
            myPhrase = getSelectionText();
            handler();
          }, 1);
        } else if (userAgent.match(/opr\//i)) {
          button.addEventListener("click", () => {
            setTimeout(function () {
              speechSynthesis.cancel();
              myPhrase = getSelectionText();
              handler();
            }, 1);
          });
        } else if (userAgent.match(/edg/i)) {
          button.addEventListener("click", () => {
            setTimeout(function () {
              speechSynthesis.cancel();
              myPhrase = getSelectionText();
              handler();
            }, 1);
          });
        } else {
          button.addEventListener("click", () => {
            setTimeout(function () {
              speechSynthesis.cancel();
              myPhrase = getSelectionText();
              handler();
            }, 1);
          });
        }
      } // This is your code to get the selected text.
      // Это ваш код для получения выделенного текста.
      // Bu tanlangan matnni olish uchun sizning kodingiz.


      function getSelectionText() {
        var text = "";

        if (window.getSelection) {
          text = window.getSelection().toString(); // for Internet Explorer 8 and below. For Blogger, you should use &amp;&amp; instead of &&.
          // для Internet Explorer 8 и ниже. Для Blogger следует использовать &amp;&amp; вместо &&.
          // Internet Explorer 8 va undan past versiyalar uchun. Blogger uchun siz &amp;&amp;amp;amp;amp; ning o'rniga &&.
        } else if (document.selection && document.selection.type != "Control") {
          text = document.selection.createRange().text;
        }

        return text;
      } // This is the on mouse up event, no need for jQuery to do this.
      // Это событие при наведении мыши, для этого не требуется jQuery.
      // Bu sichqonchani yuqoriga ko'tarish hodisasi, buni amalga oshirish uchun jQuery kerak emas.


      document.onmouseup = function (e) {
        fnBrowserDetect();
        buildBtn(e);
      }; // Some place for the application to start.
      // Некоторое место для запуска приложения.
      // Ilovani boshlash uchun ba'zi joy.


      function start() {
        populateVoiceList();
        if (speechSynthesis.onvoiceschanged !== undefined) speechSynthesis.onvoiceschanged = populateVoiceList;
        voiceSelect.onchange = handler;
        setTimeout(handler, 75);
      } // Run the start function.
      // Запускаем функцию запуска.
      // Boshlash funksiyasini ishga tushiring.


      ready(start);
    })();
  }
}

voiceTop.addEventListener("click", () => {
  if (!voiceOn) {
    voiceTop.classList.add("active");
    voiceOn = true;
  } else {
    voiceTop.classList.remove("active");
    voiceOn = false;
  }

  ifActiveVoice();
});
/* **************************************************************************** */

/* Bu funcsiyada fontSize razmerlari ozgartiriladi **************************** */

function changeFontSize(type) {
  let ids = ["#navTop", "#navGen", "#headerIntro", "#advantageSide", "#buildSlider", "#contactUs", "#feedbackOurCustomers", "#latestNews", "#choosePlan", "#saveLife", "#subscribe", "#footer"];
  let plus5Max = 28;
  let minus5Min = 16;
  let decrease = document.querySelector(".decremet");
  let increase = document.querySelector(".increment");
  let currentSize = document.getElementById("currentSize");
  ids.forEach(id => {
    // Get element
    let el = document.querySelector(id); // Get font-size

    let fontSize = window.getComputedStyle(el, null).getPropertyValue("font-size"); // Convert to float

    fontSize = parseFloat(fontSize);
    fontSizeLocalStorage = localStorage.getItem("fontSize"); // Increase / Decrease font-size

    if (type === "increase") {
      decrease.classList.remove('active-last');
      decrease.classList.add('visibile');

      if (fontSize !== plus5Max) {
        el.style.fontSize = fontSize + 2 + "px";
        el.style.wordWrap = "break-word";
        el.style.wordBreak = "break-all";
        localStorage.setItem("fontSize", el.style.fontSize);
      } else {
        increase.classList.add('active-last');
        increase.classList.add('visibile-hide');
      }
    } else if (type === "decrease") {
      increase.classList.remove('active-last');
      increase.classList.remove('visibile-hide');

      if (fontSize != minus5Min) {
        el.style.fontSize = fontSize - 2 + "px";
        el.style.wordWrap = "break-word";
        el.style.wordBreak = "break-all";
        localStorage.setItem("fontSize", el.style.fontSize);
      } else {
        decrease.classList.add('active-last');
        decrease.classList.remove('visibile');
      }
    } else if (type === "autosize") {
      decrease.classList.remove('active-last');
      decrease.classList.remove('visibile');
      increase.classList.remove('active-last');
      increase.classList.remove('visibile-hide');
      el.style.fontSize = "16px";
      el.style.wordWrap = "normal";
      el.style.wordBreak = "normal";
      localStorage.setItem("fontSize", el.style.fontSize);
    }

    if (fontSizeLocalStorage === el.style.fontSize) {
      el.style.fontSize = el.style.fontSize;
    }

    currentSize.innerText = el.style.fontSize;
  });
}
/* ***************************************************************************** */

/* bosliganda hech qanaqa action bo'lmaydi hamda hech qanaqa function ishlamaydi */

/* asosan doropdowndagi darklight hamda font-size orqa fonida ijro etiladi****** */


$('.dropdown-not-close').on("click.bs.dropdown", function (e) {
  e.stopPropagation();
  e.preventDefault();
});
/* *************************************************************** */

/* dark light mode bilan ulanishlar ****************************** */

let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector(".mode__theme");
let svgNone = document.querySelectorAll(".svg-none");
let saveToggle = document.querySelector(".darkmode input[type='checkbox']");

const enableDarkMode = () => {
  document.body.classList.add("blind");
  darkModeToggle.classList.add("active");
  saveToggle.setAttribute("checked", "true");

  for (let i = 0; i < svgNone.length; i++) {
    const element = svgNone[i];
    element.style.display = "none";
  }

  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("blind");
  darkModeToggle.classList.remove("active");

  for (let i = 0; i < svgNone.length; i++) {
    const element = svgNone[i];
    element.style.display = "block";
  }

  localStorage.setItem("darkMode", null);
};

if (darkMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");

  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
/* ************************************************************ */

function fnBrowserDetect() {
  let userAgent = navigator.userAgent;
  let browserName;
}
/*=============== SHOW SCROLL UP ===============*/


function scrollUp() {
  const scrollUp = document.getElementById('scroll-up'); // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class

  if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);
console.clear("Консоль очищена !");