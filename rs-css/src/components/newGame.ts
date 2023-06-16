import gameLevelObject from './main/gameLevelObj';
import markupLevelObject from './main/markupLevelObj';

const level = 0;
function setLevel() {
  const gameTable: HTMLDivElement | null = document.querySelector('.game__table');
  const tableBottom: HTMLDivElement | null = document.querySelector('.table__bottom');
  if (gameTable && tableBottom) {
    gameTable.style.width = gameLevelObject[level].width;
    tableBottom.style.width = gameLevelObject[level].width;
  }
  const gameLevelWrapper: HTMLDivElement | null = document.querySelector('.game__level-wrapper');
  if (gameLevelWrapper) {
    gameLevelWrapper.innerHTML = gameLevelObject[level].content;
  }
  const editorMarkup: HTMLDivElement | null = document.querySelector('.editor__markup');
  const editorMarkupText: HTMLElement = document.createElement('code');
  editorMarkupText.innerHTML = markupLevelObject[level].content;
  if (editorMarkup) {
    editorMarkup.appendChild(editorMarkupText);
  }
}

export default setLevel;
