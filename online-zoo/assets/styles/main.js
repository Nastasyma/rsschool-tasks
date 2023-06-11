const burger = document.querySelector('.burger_menu');
const menu = document.querySelector('.nav');
const navList = document.querySelector('.nav_list');
const burgerLine1 = document.querySelector('.line_first');
const burgerLine2 = document.querySelector('.line_second');
const burgerLine3 = document.querySelector('.line_third');
const mobileWrapper = document.querySelector('.mobile_wrapper');

function activePopup() {
  if (menu.classList.contains('open_menu')) {
    menu.classList.remove('open_menu');
    burgerLine1.classList.remove('is_active1');
    burgerLine2.classList.remove('is_active2');
    burgerLine3.classList.remove('is_active3');
    mobileWrapper.classList.remove('popup_active');
    setTimeout(function () {
      burger.classList.remove('burger_active');
    }, 500);
  } else {
    menu.classList.add('open_menu');
    burger.classList.add('burger_active');
    burgerLine1.classList.add('is_active1');
    burgerLine2.classList.add('is_active2');
    burgerLine3.classList.add('is_active3');
    mobileWrapper.classList.add('popup_active');
  }
};

burger.addEventListener('click', activePopup);
mobileWrapper.addEventListener('click', activePopup);