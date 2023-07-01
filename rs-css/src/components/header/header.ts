import elements from '../../utils/gameElements';
import navObject from '../../utils/navObj';
import createEL from '../baseComponent';
import addHelpMessage from '../newGame/addHelpMessage';

export default function createHeader(parentNode: HTMLElement): HTMLElement {
  const header = createEL(parentNode, 'header', ['header']);
  const helpBtn: HTMLElement = createEL(header, 'button', ['header__btn', 'help-btn'], 'HELP');
  helpBtn.addEventListener('click', addHelpMessage);
  createEL(header, 'h1', ['header__title'], 'RSS-CSS-Selectors');
  const headerNav: HTMLElement = createEL(header, 'div', ['header__nav_wrapper']);
  const headerLevel: HTMLElement = createEL(headerNav, 'div', ['header__level_wrapper']);
  createEL(headerLevel, 'span', ['level-span'], 'Level');
  const currentLevel = createEL(headerLevel, 'span', ['current-level'], `${elements.level + 1}`);
  createEL(headerLevel, 'span', ['level-span'], `of ${navObject.length}`);
  const arrowLeft: HTMLElement = createEL(headerNav, 'div', ['header__arrow', 'arrow-left']);
  const arrowRight: HTMLElement = createEL(headerNav, 'div', ['header__arrow', 'arrow-right']);
  const burgerBtn: HTMLElement = createEL(headerNav, 'div', ['header__btn', 'burger-btn']);
  for (let i = 0; i < 3; i += 1) {
    createEL(burgerBtn, 'span');
  }
  elements.game.burger = burgerBtn;
  elements.game.helpBtn = helpBtn;
  elements.game.arrowLeft = arrowLeft;
  elements.game.arrowRight = arrowRight;
  elements.game.currentLevel = currentLevel;
  return header;
}
