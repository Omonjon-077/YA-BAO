window.addEventListener('click', function (event) {
  if (event.target.dataset.action == 'plus' || event.target.dataset.action == 'minus') {
    const counterWrapper = event.target.closest('.nav__korzina-pm');
    var counter = counterWrapper.querySelector('[data-counter]');
  }

  if (event.target.dataset.action == 'plus') {
    if (parseInt(counter.innerText) < 10) {
      counter.innerText = ++counter.innerText;
    }

    calCartPrice();
    calCartNum();
  }

  ;

  if (event.target.dataset.action == 'minus') {
    if (event.target.closest('.nav__korzina-but') && parseInt(counter.innerText) === 1) {
      event.target.closest('.nav__korzina-boxxer').remove();
    }

    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
    }

    calCartPrice();
    calCartNum();
  }

  ;
});