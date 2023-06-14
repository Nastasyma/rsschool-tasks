import BaseComponent from './baseComponent';

class Header extends BaseComponent {
  helpBtn: BaseComponent;

  burgerMenu: BaseComponent;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'header', 'header');
    this.helpBtn = new BaseComponent(this.element, 'div', 'header__btn help-btn', 'Help');
    this.burgerMenu = new BaseComponent(
      this.element,
      'div',
      'header__btn burger-btn',
      '<span></span><span></span><span></span>',
    );
  }
}

export default Header;
