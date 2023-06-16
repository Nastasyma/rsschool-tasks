import gameLevelObject from './main/gameLevelObj';
import markupLevelObject from './main/markupLevelObj';

let level = 0;
let rule = false;
function setLevel() {
  const gameTable: HTMLDivElement | null = document.querySelector('.game__table');
  const tableBottom: HTMLDivElement | null = document.querySelector('.table__bottom');
  if (gameTable && tableBottom) {
    gameTable.style.width = gameLevelObject[level].width;
    tableBottom.style.width = gameLevelObject[level].width;
  }
  const table: HTMLDivElement | null = document.querySelector('.table');
  if (table) {
    table.innerHTML = gameLevelObject[level].content;
  }
  const editorMarkup: HTMLDivElement | null = document.querySelector('.editor__markup');
  const editorMarkupText: HTMLElement = document.createElement('code');
  editorMarkupText.innerHTML = markupLevelObject[level].content;
  if (editorMarkup) {
    editorMarkup.appendChild(editorMarkupText);
  }
}

function resetLevel() {
  const editorMarkupText: HTMLElement | null = document.querySelector('.editor__markup');
  if (editorMarkupText) editorMarkupText.innerHTML = '';
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
  if (editorForm && editorInput) {
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
    }
  }
}

export { setLevel, sumbit };
