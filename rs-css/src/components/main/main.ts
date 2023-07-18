import createEL from '../baseComponent';
import editor from './editor';
import game from './game';
import elements from '../../utils/gameElements';

function createMain(parentNode: HTMLElement): HTMLElement {
  const main: HTMLElement = createEL(parentNode, 'main', ['main']);
  elements.game.game = game(main);
  editor(main);
  return main;
}

export default createMain;
