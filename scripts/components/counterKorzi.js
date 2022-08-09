window.addEventListener('click', function (event) {
  if (event.target.dataset.order == 'plus' || event.target.dataset.order == 'minus') {
    const counterWrapperKorzi = event.target.closest('.basket__container-pm');
    var counterKorzi = counterWrapperKorzi.querySelector('[data-number]');
  }

  if (event.target.dataset.order == 'plus') {
    if (parseInt(counterKorzi.innerText) < 10) {
      counterKorzi.innerText = ++counterKorzi.innerText;
    } // calCartPrice();

  }

  ;

  if (event.target.dataset.order == 'minus') {
    if (event.target.closest('.basket__container-wrap') && parseInt(counterKorzi.innerText) === 1) {
      event.target.closest('.basket__container-wrapper').remove();
    }

    if (parseInt(counterKorzi.innerText) > 1) {
      counterKorzi.innerText = --counterKorzi.innerText;
    } // calCartPrice();

  }

  ; // cardDelFuncKorzi();
});