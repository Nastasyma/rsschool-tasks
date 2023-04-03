console.log(`Shelter-part2.
1. Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14
2. Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14
3. Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14
4. Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6
5. Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6
6. Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6
7. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20
8. Верстка резиновая: +8
9. При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4
10. Верстка обеих страниц валидная: +8
Итого: 100
`);

// Burger menu

const burger = document.querySelector('.burger_menu');
const menu = document.querySelector('.nav');
const navItem = document.querySelectorAll('.nav_item');
const mobileWrapper = document.querySelector('.mobile_wrapper');
const bodyHidden = document.querySelector('body');

function addBurger() {
  menu.classList.add('open_menu');
  burger.classList.add('burger_active');
  mobileWrapper.classList.add('popup_active');
  bodyHidden.classList.add('body_hidden');
}

function removeBurger() {
  menu.classList.remove('open_menu');
  mobileWrapper.classList.remove('popup_active');
  burger.classList.remove('burger_active');
  bodyHidden.classList.remove('body_hidden');
}

function activeBurger() {
  if (menu.classList.contains('open_menu')) {
    removeBurger();
  } else {
    addBurger();
  }
};

burger.addEventListener('click', activeBurger);
mobileWrapper.addEventListener('click', activeBurger);
navItem.forEach(el => {
  el.addEventListener('click', removeBurger);
})