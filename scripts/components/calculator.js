function calCartPrice() {
  const cartItems = document.querySelectorAll('.nav__korzina-boxxer');
  const totalPriceEl = document.querySelector('.nav__korzi-title');
  let totalPrice = 0;
  cartItems.forEach(function (item) {
    const amountEl = item.querySelector('[data-counter]');
    const priceEl = item.querySelector('.nav__korzina-price');
    const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
    totalPrice += currentPrice;
  });
  totalPriceEl.innerText = totalPrice;
}

function calCartNum() {
  const cartItems = document.querySelectorAll('.nav__korzina-boxxer');
  const totalPriceEl = document.querySelector('.nav_button-num');
  let totalPriceNum = 0;
  cartItems.forEach(function (item) {
    const amountEl = item.querySelector('[data-counter]');
    const currentPrice = parseInt(amountEl.innerText);
    totalPriceNum += currentPrice;
  });
  totalPriceEl.innerText = totalPriceNum;
}