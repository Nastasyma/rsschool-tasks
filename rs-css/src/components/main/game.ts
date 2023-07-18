import elements from '../../utils/gameElements';
import createEL from '../baseComponent';

function createGameElement(parentNode: HTMLElement): HTMLElement {
  const game: HTMLElement = createEL(parentNode, 'div', ['game']);
  const gameTitle = createEL(game, 'h3', ['game__title']);
  const gameWrapper: HTMLElement = createEL(game, 'div', ['game__wrapper']);
  const gameTable: HTMLElement = createEL(gameWrapper, 'div', ['game__table']);
  const table = createEL(gameTable, 'div', ['table']);
  const tableBottom: HTMLElement = createEL(gameWrapper, 'div', ['table__bottom']);
  createEL(gameWrapper, 'div', ['win-text'], 'You did it!!');
  for (let i = 0; i < 2; i += 1) {
    createEL(tableBottom, 'div', ['table__leg']);
  }
  elements.game.gameWrapper = gameWrapper;
  elements.game.gameTable = gameTable;
  elements.game.table = table;
  elements.game.gameTitle = gameTitle;
  elements.game.tableBottom = tableBottom;
  return game;
}

export default createGameElement;
