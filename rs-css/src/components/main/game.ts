function createGameElement() {
  const game: HTMLDivElement = document.createElement('div');
  game.classList.add('game');
  const gameTitle: HTMLHeadingElement = document.createElement('h3');
  gameTitle.classList.add('game__title');
  gameTitle.textContent = 'Select all items on the table';
  game.appendChild(gameTitle);
  const gameWrapper: HTMLDivElement = document.createElement('div');
  gameWrapper.classList.add('game__wrapper');
  const gameTable: HTMLDivElement = document.createElement('div');
  gameTable.classList.add('game__table');
  gameTable.style.width = '300px';
  const gameLevelWrapper: HTMLDivElement = document.createElement('div');
  gameLevelWrapper.classList.add('game__level-wrapper');
  const box: HTMLElement = document.createElement('box');
  box.classList.add('shake');
  gameLevelWrapper.appendChild(box);
  const box2: HTMLElement = document.createElement('box');
  box2.classList.add('shake');
  gameLevelWrapper.appendChild(box2);
  gameTable.appendChild(gameLevelWrapper);
  gameWrapper.appendChild(gameTable);
  const tableBottom: HTMLDivElement = document.createElement('div');
  tableBottom.classList.add('table__bottom');
  tableBottom.style.width = '300px';
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
