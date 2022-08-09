function toggleCartStatus() {
  const cartWrapper = document.querySelector('.nav__korzina-but');
  const cartEmptyBadge = document.querySelector('.nav__korzina-page');
  const orderForm = document.querySelector('[data-emp]');
  const cardDef = document.querySelector('.nav__korzina-none');

  if (cartWrapper.children.length > 0) {
    cardDef.classList.add('none');
    orderForm.classList.remove('none');
    cartEmptyBadge.classList.remove('none');
  } else {
    cardDef.classList.remove('none');
    orderForm.classList.add('none');
    cartEmptyBadge.classList.add('none');
  }

  if (cartWrapper.children.length > 4) {
    cartWrapper.classList.add('over');
  } else {
    cartWrapper.classList.remove('over');
  }
}

function cardDelFunc() {
  const cardDelIcon = document.querySelector('.nav__korzina-delet');
  const cardItem = document.querySelector('.nav__korzina-boxxer');
  const cartWrapper = document.querySelector('.nav__korzina-but');

  if (cartWrapper.children.length >= 1) {
    cardDelIcon.addEventListener('click', () => {
      cardItem.remove();
      calCartPrice();
      calCartNum();
    });
  }
}

;

function cardDelFuncKorzi() {
  const cardDelIcon = document.querySelector('.basket__container-delet');
  const cardItem = document.querySelector('.basket__container-wrapper');
  const cartWrapper = document.querySelector('.basket__container-wrap');

  if (cartWrapper.children.length >= 1) {
    cardDelIcon.addEventListener('click', () => {
      cardItem.remove();
      calCartPrice();
    });
  }
}

;