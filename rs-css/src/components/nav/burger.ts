import elements from '../../utils/gameElements';

function createBurger(): void {
  const { burger, menu, navItems, appWrapper } = elements.game;

  function addBurger(): void {
    if (menu && burger && appWrapper) {
      menu.classList.add('open_menu');
      burger.classList.add('burger_active');
      appWrapper.classList.add('popup_active');
    }
  }

  function removeBurger(): void {
    if (menu && burger && appWrapper) {
      menu.classList.remove('open_menu');
      appWrapper.classList.remove('popup_active');
      burger.classList.remove('burger_active');
    }
  }

  function activeBurger(): void {
    if (menu && menu.classList.contains('open_menu')) {
      removeBurger();
    } else {
      addBurger();
    }
  }

  if (burger && appWrapper) {
    burger.addEventListener('click', activeBurger);
    appWrapper.addEventListener('click', activeBurger);
  }
  navItems.forEach((el) => {
    el.addEventListener('click', removeBurger);
  });
}

export default createBurger;
