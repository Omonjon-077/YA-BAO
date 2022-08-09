const cartWrapper = document.querySelector('.nav__korzina-but');
const navNum = document.querySelector('.nav_button-num'); // const products = (JSON.parse(this.window.localStorage.getItem('product')) != null) ? JSON.parse(this.window.localStorage.getItem('product')) : null;

$(function () {
  if ($('.nav__korzina-but').length || $('.nav_button-num').length) {
    window.addEventListener('click', function (event) {
      if (event.target.hasAttribute('data-cart')) {
        const cart = event.target.closest('.pasta__box');
        const productInfo = {
          id: cart.dataset.id,
          imgSrc: cart.querySelector('.pasta__img').getAttribute('src'),
          title: cart.querySelector('.pasta__subtitle').innerText,
          Price: cart.querySelector('.pasta__price').innerText,
          text: cart.querySelector('.pasta__txt').innerText
        }; // this.window.localStorage.setItem('product', JSON.stringify(productInfo));
        // const newlocalproduct = JSON.parse(this.window.localStorage.getItem('product'));
        // console.log(newlocalproduct);
        // if (newlocalproduct.id != products.id) {
        //     products.push(newlocalproduct);
        // }
        // this.window.localStorage.setItem('products', JSON.stringify(products));

        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

        if (itemInCart) {
          const counterEl = itemInCart.querySelector('[data-counter]');
          counterEl.innerText = parseInt(counterEl.innerText) + 1;
          calCartPrice();
          calCartNum();
        } else {
          const cartItemHTML = ` <div class="nav__korzina-boxxer" data-id="${productInfo.id}">
                <img class="nav__korzina-img" src="${productInfo.imgSrc}" alt="">
        
                <div class="nav__korzina-box" >
        
                    <div class="nav__korzina-wrap">
                        <h3 class="nav__korzina-subtitle">${productInfo.title}</h3>
                        <a data-link="del" href="#!" class="nav__korzina-delet"><svg width="17" height="19" viewbox="0 0 17 19"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6 7.625C6 7.41406 5.83594 7.25 5.625 7.25H4.875C4.66406 7.25 4.5 7.41406 4.5 7.625V14.375C4.5 14.5859 4.66406 14.75 4.875 14.75H5.625C5.83594 14.75 6 14.5859 6 14.375V7.625ZM9 7.625C9 7.41406 8.83594 7.25 8.625 7.25H7.875C7.66406 7.25 7.5 7.41406 7.5 7.625V14.375C7.5 14.5859 7.66406 14.75 7.875 14.75H8.625C8.83594 14.75 9 14.5859 9 14.375V7.625ZM12 7.625C12 7.41406 11.8359 7.25 11.625 7.25H10.875C10.6641 7.25 10.5 7.41406 10.5 7.625V14.375C10.5 14.5859 10.6641 14.75 10.875 14.75H11.625C11.8359 14.75 12 14.5859 12 14.375V7.625ZM13.5 16.1094C13.5 16.6719 13.1836 17 13.125 17H3.375C3.31641 17 3 16.6719 3 16.1094V5H13.5V16.1094ZM5.625 3.5L6.19922 2.12891C6.23438 2.08203 6.32813 2.01172 6.39844 2H10.1133C10.1719 2.01172 10.2773 2.08203 10.3125 2.12891L10.875 3.5H5.625ZM16.5 3.875C16.5 3.66406 16.3359 3.5 16.125 3.5H12.5039L11.6836 1.54297C11.4492 0.96875 10.7461 0.499999 10.125 0.499999H6.375C5.75391 0.499999 5.05078 0.96875 4.81641 1.54297L3.99609 3.5H0.375C0.164062 3.5 0 3.66406 0 3.875V4.625C0 4.83594 0.164062 5 0.375 5H1.5V16.1562C1.5 17.4453 2.34375 18.5 3.375 18.5H13.125C14.1563 18.5 15 17.3984 15 16.1094V5H16.125C16.3359 5 16.5 4.83594 16.5 4.625V3.875Z"
                                    fill="#0E0C0D"></path>
                            </svg>
                        </a>
                    </div>
        
                    <div class="nav__korzina-wrapper">
                        <div class="nav__korzina-pm">
        
                            <a data-action="minus" href="#!" class="nav__korzina-minus">-</a>
                            <p data-counter class="nav__korzina-num">1</p>
                            <a data-action="plus" href="#!" class="nav__korzina-plus">+</a>
        
                        </div>
                        <p class="nav__korzina-price">${productInfo.Price}</p>
                    </div>
        
                </div>
        
            </div>`;
          cartWrapper.insertAdjacentHTML('afterbegin', cartItemHTML);
          calCartPrice();
          calCartNum();
        }
      }

      if (event.target.hasAttribute('data-new')) {
        const cartNew = event.target.closest('.new__box');
        const productInfo = {
          id: cartNew.dataset.id,
          imgSrc: cartNew.querySelector('.new__img').getAttribute('src'),
          title: cartNew.querySelector('.new__title').innerText,
          Price: cartNew.querySelector('.new__txt').innerText
        };
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

        if (itemInCart) {
          const counterEl = itemInCart.querySelector('[data-counter]');
          counterEl.innerText = parseInt(counterEl.innerText) + 1;
          calCartPrice();
          calCartNum();
        } else {
          const cartItemHTML = `<div class="nav__korzina-boxxer" data-id="${productInfo.id}">
                <img class="nav__korzina-img" src="${productInfo.imgSrc}" alt="">
        
                <div class="nav__korzina-box" >
        
                    <div class="nav__korzina-wrap">
                        <h3 class="nav__korzina-subtitle">${productInfo.title}</h3>
                        <a data-link="del" href="#!" class="nav__korzina-delet"><svg width="17" height="19" viewbox="0 0 17 19"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6 7.625C6 7.41406 5.83594 7.25 5.625 7.25H4.875C4.66406 7.25 4.5 7.41406 4.5 7.625V14.375C4.5 14.5859 4.66406 14.75 4.875 14.75H5.625C5.83594 14.75 6 14.5859 6 14.375V7.625ZM9 7.625C9 7.41406 8.83594 7.25 8.625 7.25H7.875C7.66406 7.25 7.5 7.41406 7.5 7.625V14.375C7.5 14.5859 7.66406 14.75 7.875 14.75H8.625C8.83594 14.75 9 14.5859 9 14.375V7.625ZM12 7.625C12 7.41406 11.8359 7.25 11.625 7.25H10.875C10.6641 7.25 10.5 7.41406 10.5 7.625V14.375C10.5 14.5859 10.6641 14.75 10.875 14.75H11.625C11.8359 14.75 12 14.5859 12 14.375V7.625ZM13.5 16.1094C13.5 16.6719 13.1836 17 13.125 17H3.375C3.31641 17 3 16.6719 3 16.1094V5H13.5V16.1094ZM5.625 3.5L6.19922 2.12891C6.23438 2.08203 6.32813 2.01172 6.39844 2H10.1133C10.1719 2.01172 10.2773 2.08203 10.3125 2.12891L10.875 3.5H5.625ZM16.5 3.875C16.5 3.66406 16.3359 3.5 16.125 3.5H12.5039L11.6836 1.54297C11.4492 0.96875 10.7461 0.499999 10.125 0.499999H6.375C5.75391 0.499999 5.05078 0.96875 4.81641 1.54297L3.99609 3.5H0.375C0.164062 3.5 0 3.66406 0 3.875V4.625C0 4.83594 0.164062 5 0.375 5H1.5V16.1562C1.5 17.4453 2.34375 18.5 3.375 18.5H13.125C14.1563 18.5 15 17.3984 15 16.1094V5H16.125C16.3359 5 16.5 4.83594 16.5 4.625V3.875Z"
                                    fill="#0E0C0D"></path>
                            </svg>
                        </a>
                    </div>
        
                    <div class="nav__korzina-wrapper">
                        <div class="nav__korzina-pm">
        
                            <a data-action="minus" href="#!" class="nav__korzina-minus">-</a>
                            <p data-counter class="nav__korzina-num">1</p>
                            <a data-action="plus" href="#!" class="nav__korzina-plus">+</a>
        
                        </div>
                        <p class="nav__korzina-price">${productInfo.Price}</p>
                    </div>
        
                </div>
        
            </div>`;
          cartWrapper.insertAdjacentHTML('afterbegin', cartItemHTML);
          calCartPrice();
          calCartNum();
        }
      }

      if (event.target.hasAttribute('data-nav')) {
        const cartNav = event.target.closest('.korzi__swiper-box');
        const productInfo = {
          id: cartNav.dataset.id,
          imgSrc: cartNav.querySelector('.korzi__swiper-img').getAttribute('src'),
          title: cartNav.querySelector('.korzi__swiper-title').innerText,
          Price: cartNav.querySelector('.korzi__swiper-text').innerText
        };
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

        if (itemInCart) {
          const counterEl = itemInCart.querySelector('[data-counter]');
          counterEl.innerText = parseInt(counterEl.innerText) + 1;
          calCartPrice();
          calCartNum();
        } else {
          const cartItemHTML = `<div class="nav__korzina-boxxer" data-id="${productInfo.id}">
                <img class="nav__korzina-img" src="${productInfo.imgSrc}" alt="">
        
                <div class="nav__korzina-box" >
        
                    <div class="nav__korzina-wrap">
                        <h3 class="nav__korzina-subtitle">${productInfo.title}</h3>
                        <a data-link="del" href="#!" class="nav__korzina-delet"><svg width="17" height="19" viewbox="0 0 17 19"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6 7.625C6 7.41406 5.83594 7.25 5.625 7.25H4.875C4.66406 7.25 4.5 7.41406 4.5 7.625V14.375C4.5 14.5859 4.66406 14.75 4.875 14.75H5.625C5.83594 14.75 6 14.5859 6 14.375V7.625ZM9 7.625C9 7.41406 8.83594 7.25 8.625 7.25H7.875C7.66406 7.25 7.5 7.41406 7.5 7.625V14.375C7.5 14.5859 7.66406 14.75 7.875 14.75H8.625C8.83594 14.75 9 14.5859 9 14.375V7.625ZM12 7.625C12 7.41406 11.8359 7.25 11.625 7.25H10.875C10.6641 7.25 10.5 7.41406 10.5 7.625V14.375C10.5 14.5859 10.6641 14.75 10.875 14.75H11.625C11.8359 14.75 12 14.5859 12 14.375V7.625ZM13.5 16.1094C13.5 16.6719 13.1836 17 13.125 17H3.375C3.31641 17 3 16.6719 3 16.1094V5H13.5V16.1094ZM5.625 3.5L6.19922 2.12891C6.23438 2.08203 6.32813 2.01172 6.39844 2H10.1133C10.1719 2.01172 10.2773 2.08203 10.3125 2.12891L10.875 3.5H5.625ZM16.5 3.875C16.5 3.66406 16.3359 3.5 16.125 3.5H12.5039L11.6836 1.54297C11.4492 0.96875 10.7461 0.499999 10.125 0.499999H6.375C5.75391 0.499999 5.05078 0.96875 4.81641 1.54297L3.99609 3.5H0.375C0.164062 3.5 0 3.66406 0 3.875V4.625C0 4.83594 0.164062 5 0.375 5H1.5V16.1562C1.5 17.4453 2.34375 18.5 3.375 18.5H13.125C14.1563 18.5 15 17.3984 15 16.1094V5H16.125C16.3359 5 16.5 4.83594 16.5 4.625V3.875Z"
                                    fill="#0E0C0D"></path>
                            </svg>
                        </a>
                    </div>
        
                    <div class="nav__korzina-wrapper">
                        <div class="nav__korzina-pm">
        
                            <a data-action="minus" href="#!" class="nav__korzina-minus">-</a>
                            <p data-counter class="nav__korzina-num">1</p>
                            <a data-action="plus" href="#!" class="nav__korzina-plus">+</a>
        
                        </div>
                        <p class="nav__korzina-price">${productInfo.Price}</p>
                    </div>
        
                </div>
        
            </div>`;
          cartWrapper.insertAdjacentHTML('afterbegin', cartItemHTML);
          calCartPrice();
          calCartNum();
        }
      }

      toggleCartStatus();
      cardDelFunc();
    });
  }
});