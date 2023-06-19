import createEL from '../baseComponent';
import editor from './editor';
import game from './game';

function createMain(parentNode: HTMLElement): HTMLElement {
  const main = createEL(parentNode, 'div', ['main']);
  game(main);
  editor(main);
  return main;
}

export default createMain;
