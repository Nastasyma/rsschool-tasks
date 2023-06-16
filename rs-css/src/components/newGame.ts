import gameLevelObject from './main/gameLevelObj';
import markupLevelObject from './main/markupLevelObj';

let level = 0;
let rule = false;
function setLevel() {
  const gameTable: HTMLDivElement | null = document.querySelector('.game__table');
  const tableBottom: HTMLDivElement | null = document.querySelector('.table__bottom');
  const editorMarkup: HTMLDivElement | null = document.querySelector('.editor__markup');
  const editorMarkupText: HTMLElement = document.createElement('code');
  const table: HTMLDivElement | null = document.querySelector('.table');
  const levelItem: NodeListOf<Element> = document.querySelectorAll('.levels__item');
  const gameWrapper: HTMLDivElement | null = document.querySelector('.game__wrapper');
  const gameTitle = document.querySelector('.game__title');
  if (gameTitle) gameTitle.textContent = gameLevelObject[level].title;
  if (levelItem) levelItem[level].classList.add('level-active');
  if (gameTable && tableBottom) {
    gameTable.style.width = gameLevelObject[level].width;
    tableBottom.style.width = gameLevelObject[level].width;
  }
  if (table) {
    table.innerHTML = gameLevelObject[level].content;
  }
  editorMarkupText.innerHTML = markupLevelObject[level].content;
  if (editorMarkup) editorMarkup.appendChild(editorMarkupText);
  if (gameWrapper) {
    gameWrapper.classList.add('init');
    gameWrapper.addEventListener('animationend', () => {
      gameWrapper.classList.remove('init');
    });
  }
}

function resetLevel() {
  const editorMarkupText: HTMLElement | null = document.querySelector('.editor__markup');
  const levelItem: NodeListOf<Element> = document.querySelectorAll('.levels__item');
  if (editorMarkupText) editorMarkupText.innerHTML = '';
  if (levelItem) {
    levelItem.forEach((item) => {
      item.classList.remove('level-active');
    });
  }
}

function checkInputValue() {
  const editorInput: HTMLInputElement | null = document.querySelector('.editor__input');
  const originalArray: NodeListOf<Element> = document.querySelectorAll(gameLevelObject[level].elements);
  if (editorInput && editorInput.value !== ' ') {
    try {
      const valueArray: NodeListOf<Element> = document.querySelectorAll(`.table ${editorInput.value}`);
      console.log(originalArray);
      console.log(valueArray);
      if (!valueArray) console.log('error');
      if (originalArray.length !== valueArray.length) rule = false;
      for (let i = 0; i < originalArray.length; i += 1) {
        if (originalArray[i] !== valueArray[i]) {
          rule = false;
        } else {
          rule = true;
        }
      }
    } catch (error) {
      console.log('invalid value');
    }
  }
  return rule;
}
function sumbit(event: Event) {
  const editorForm: HTMLFormElement | null = document.querySelector('.editor__form');
  const editorInput: HTMLInputElement | null = document.querySelector('.editor__input');
  const gameWrapper: HTMLDivElement | null = document.querySelector('.game__wrapper');
  const levelsCheck: NodeListOf<Element> = document.querySelectorAll('.levels__check');
  if (editorForm && editorInput && gameWrapper) {
    event.preventDefault();
    console.log('submit');
    console.log('correct value: ', gameLevelObject[level].help);
    checkInputValue();
    if (rule) {
      console.log('correct');
      editorInput.value = '';
      level += 1;
      resetLevel();
      setLevel();
      levelsCheck[level - 1].classList.add('checked');
    }
  }
}

function changeLevel() {
  const levelItem: NodeListOf<Element> = document.querySelectorAll('.levels__item');
  if (levelItem) {
    levelItem.forEach((item) => {
      item.addEventListener('click', () => {
        const currentLevel: string | null = item.getAttribute('data-level');
        if (currentLevel) level = +currentLevel;
        resetLevel();
        setLevel();
      });
    });
  }
}

export { setLevel, sumbit, changeLevel };
