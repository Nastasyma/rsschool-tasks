import createEL from '../baseComponent';
import { addHelpMessage } from '../newGame';

function createHelpBtn(parentNode: HTMLElement): HTMLElement {
  const helpBtn: HTMLElement = createEL(parentNode, 'div', ['header__btn', 'help-btn'], 'HELP');
  helpBtn.addEventListener('click', addHelpMessage);
  return helpBtn;
}

function createBurgerBtn(parentNode: HTMLElement): HTMLElement {
  const burgerBtn: HTMLElement = createEL(parentNode, 'div', ['header__btn', 'burger-btn']);
  for (let i = 0; i < 3; i += 1) {
    createEL(burgerBtn, 'span');
  }
  return burgerBtn;
}

export default function createHeader(parentNode: HTMLElement): HTMLElement {
  const header = createEL(parentNode, 'div', ['header']);
  createHelpBtn(header);
  createEL(header, 'h1', ['header__title'], 'RSS-CSS-Selectors');
  createBurgerBtn(header);
  return header;
}
