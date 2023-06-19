import createEL from '../baseComponent';

function createGameElement(parentNode: HTMLElement): HTMLElement {
  const game: HTMLElement = createEL(parentNode, 'div', ['game']);
  createEL(game, 'h3', ['game__title']);
  const gameWrapper: HTMLElement = createEL(game, 'div', ['game__wrapper']);
  const gameTable: HTMLElement = createEL(gameWrapper, 'div', ['game__table']);
  createEL(gameTable, 'div', ['table']);
  const tableBottom: HTMLElement = createEL(gameWrapper, 'div', ['table__bottom']);
  for (let i = 0; i < 2; i += 1) {
    createEL(tableBottom, 'div', ['table__leg']);
  }
  return game;
}

export default createGameElement;
