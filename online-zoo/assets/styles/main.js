const burger = document.querySelector('.burger_menu');
const menu = document.querySelector('.nav');
const navList = document.querySelector('.nav_list');
const burgerLine1 = document.querySelector('.line_first');
const burgerLine2 = document.querySelector('.line_second');
const burgerLine3 = document.querySelector('.line_third');

(function () {
  burger.addEventListener('click', () => {
    menu.classList.toggle('open_menu');
    burger.classList.toggle('burger_active');
    burgerLine1.classList.toggle('is_active1');
    burgerLine2.classList.toggle('is_active2');
    burgerLine3.classList.toggle('is_active3');
  })
}());