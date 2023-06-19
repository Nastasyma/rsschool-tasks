import createEL from '../baseComponent';
import editor from './editor';
import game from './game';

function createMain(parentNode: HTMLElement): HTMLElement {
  const main: HTMLElement = createEL(parentNode, 'main', ['main']);
  game(main);
  editor(main);
  return main;
}

export default createMain;
