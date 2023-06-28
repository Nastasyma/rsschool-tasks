import elements from '../../utils/gameElements';
import markupLevelObject from '../../utils/markupLevelObj';
import gameLevelObject from '../../utils/gameLevelObj';

function setLevel(): void {
  const { gameTable, tableBottom, editorMarkupText, table, navItems, gameWrapper, gameTitle } = elements.game;

  if (gameTitle) gameTitle.textContent = gameLevelObject[elements.level].title;
  if (navItems && navItems[elements.level]) navItems[elements.level].classList.add('level-active');
  if (table) {
    table.innerHTML = gameLevelObject[elements.level].content;
  }
  const boxes: NodeListOf<Element> = document.querySelectorAll(`.table box, #orange`);
  const box: HTMLElement | null = document.querySelector(`.table box`);
  function addTableSize(): void {
    if (gameTable && tableBottom && box) {
      gameTable.style.width = `${boxes.length * box.offsetWidth + 100}px`;
      tableBottom.style.width = `${boxes.length * box.offsetWidth + 100}px`;
    }
  }
  addTableSize();
  window.addEventListener('resize', addTableSize);
  if (editorMarkupText) {
    editorMarkupText.innerHTML = markupLevelObject[elements.level].content;
  }
  if (gameWrapper) {
    gameWrapper.classList.add('init');
    gameWrapper.addEventListener('animationend', () => {
      gameWrapper.classList.remove('init');
    });
  }
}

export default setLevel;
