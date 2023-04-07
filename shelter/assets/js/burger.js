// Burger menu

export default function createBurger() {
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
}