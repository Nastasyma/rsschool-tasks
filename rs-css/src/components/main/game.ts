function createGameElement() {
  const game: HTMLDivElement = document.createElement('div');
  game.classList.add('game');
  const gameTitle: HTMLHeadingElement = document.createElement('h3');
  gameTitle.classList.add('game__title');
  game.appendChild(gameTitle);
  const gameWrapper: HTMLDivElement = document.createElement('div');
  gameWrapper.classList.add('game__wrapper');
  const gameTable: HTMLDivElement = document.createElement('div');
  gameTable.classList.add('game__table');
  const table: HTMLDivElement = document.createElement('div');
  table.classList.add('table');
  gameTable.appendChild(table);
  gameWrapper.appendChild(gameTable);
  const tableBottom: HTMLDivElement = document.createElement('div');
  tableBottom.classList.add('table__bottom');
  const tableLeg1: HTMLDivElement = document.createElement('div');
  tableLeg1.classList.add('table__leg');
  const tableLeg2: HTMLDivElement = document.createElement('div');
  tableLeg2.classList.add('table__leg');
  tableBottom.appendChild(tableLeg1);
  tableBottom.appendChild(tableLeg2);
  gameWrapper.appendChild(tableBottom);
  game.appendChild(gameWrapper);
  return game;
}

export default createGameElement;
