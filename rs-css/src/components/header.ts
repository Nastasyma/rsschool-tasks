import BaseComponent from './baseComponent';

class Header extends BaseComponent {
  helpBtn: BaseComponent;

  burgerMenu: BaseComponent;

  headerTitle: BaseComponent;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'header', 'header');
    this.helpBtn = new BaseComponent(this.element, 'div', 'header__btn help-btn', 'HELP');
    this.headerTitle = new BaseComponent(this.element, 'h1', 'header__title', 'RSS-CSS-Selectors');
    this.burgerMenu = new BaseComponent(
      this.element,
      'div',
      'header__btn burger-btn',
      '<span></span><span></span><span></span>',
    );
  }
}

export default Header;
