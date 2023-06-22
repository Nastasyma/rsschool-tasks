import flags from '../../utils/gameElements';
import createEL from '../baseComponent';
import { addHelpMessage } from '../newGame';

export default function createHeader(parentNode: HTMLElement): HTMLElement {
  const header = createEL(parentNode, 'header', ['header']);
  const helpBtn: HTMLElement = createEL(header, 'button', ['header__btn', 'help-btn'], 'HELP');
  helpBtn.addEventListener('click', addHelpMessage);
  createEL(header, 'h1', ['header__title'], 'RSS-CSS-Selectors');
  const burgerBtn: HTMLElement = createEL(header, 'div', ['header__btn', 'burger-btn']);
  for (let i = 0; i < 3; i += 1) {
    createEL(burgerBtn, 'span');
  }
  flags.game.burger = burgerBtn;
  flags.game.helpBtn = helpBtn;
  return header;
}
