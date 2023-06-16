function createBurger() {
  const burger: HTMLElement | null = document.querySelector('.burger-btn');
  const menu: HTMLElement | null = document.querySelector('.game__levels');
  const navItem: NodeListOf<Element> = document.querySelectorAll('.levels__item');
  const mobileWrapper: HTMLElement | null = document.querySelector('.mobile_wrapper');

  function addBurger() {
    if (menu && burger && mobileWrapper) {
      menu.classList.add('open_menu');
      burger.classList.add('burger_active');
      mobileWrapper.classList.add('popup_active');
    }
  }

  function removeBurger() {
    if (menu && burger && mobileWrapper) {
      menu.classList.remove('open_menu');
      mobileWrapper.classList.remove('popup_active');
      burger.classList.remove('burger_active');
    }
  }

  function activeBurger() {
    if (menu && menu.classList.contains('open_menu')) {
      removeBurger();
    } else {
      addBurger();
    }
  }

  if (burger && mobileWrapper) {
    burger.addEventListener('click', activeBurger);
    mobileWrapper.addEventListener('click', activeBurger);
  }
  navItem.forEach((el) => {
    el.addEventListener('click', removeBurger);
  });
}

export default createBurger;
