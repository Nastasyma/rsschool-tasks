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
  editorMarkupText.classList.add('editor__code');
  if (gameTitle) gameTitle.textContent = gameLevelObject[level].title;
  if (levelItem) levelItem[level].classList.add('level-active');
  if (gameTable && tableBottom) {
    if (window.innerWidth <= 770) {
      gameTable.style.width = '420px';
      tableBottom.style.width = '420px';
    } else {
      gameTable.style.width = gameLevelObject[level].width;
      tableBottom.style.width = gameLevelObject[level].width;
    }
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

function addTooltip() {
  const tooltip: HTMLElement | null = document.querySelector('.tooltip');
  const tableEl: NodeListOf<Element> = document.querySelectorAll('.table *');
  for (let i = 0; i < tableEl.length; i += 1) {
    tableEl[i].addEventListener('mouseover', (e) => {
      e.stopPropagation();
      const elTag = tableEl[i].tagName.toLocaleLowerCase();
      const elClass = tableEl[i].className;
      if (tooltip) {
        tooltip.style.display = 'block';
        if (tableEl[i].className && !tableEl[i].classList.contains('shake')) {
          tooltip.textContent = `<${elTag} class="${elClass}"></${elTag}>`;
        } else {
          tooltip.textContent = `<${elTag}></${elTag}>`;
        }
      }
    });
    tableEl[i].addEventListener('mouseout', (e) => {
      e.stopPropagation();
      if (tooltip) tooltip.style.display = 'none';
    });
  }
}
function addHover() {
  const tableEl: NodeListOf<Element> = document.querySelectorAll('.table *');
  const markupEl: NodeListOf<Element> = document.querySelectorAll('.html-element div');
  for (let i = 0; i < tableEl.length; i += 1) {
    tableEl[i].addEventListener('mouseover', (e) => {
      e.stopPropagation();
      tableEl[i].setAttribute('data', 'shine');
      markupEl[i].setAttribute('data', 'select');
    });
    tableEl[i].addEventListener('mouseout', (e) => {
      e.stopPropagation();
      tableEl[i].removeAttribute('data');
      markupEl[i].removeAttribute('data');
    });
  }
  for (let i = 0; i < markupEl.length; i += 1) {
    markupEl[i].addEventListener('mouseover', (e) => {
      e.stopPropagation();
      tableEl[i].setAttribute('data', 'shine');
      markupEl[i].setAttribute('data', 'select');
    });
    markupEl[i].addEventListener('mouseout', (e) => {
      e.stopPropagation();
      tableEl[i].removeAttribute('data');
      markupEl[i].removeAttribute('data');
    });
  }
}
function sumbit(event: Event) {
  const editorForm: HTMLFormElement | null = document.querySelector('.editor__form');
  const editorInput: HTMLInputElement | null = document.querySelector('.editor__input');
  const gameWrapper: HTMLDivElement | null = document.querySelector('.game__wrapper');
  const levelsCheck: NodeListOf<Element> = document.querySelectorAll('.levels__check');
  if (editorForm && editorInput && gameWrapper) {
    event.preventDefault();
    console.log('correct value: ', gameLevelObject[level].help);
    checkInputValue();
    if (rule) {
      console.log('correct');
      editorInput.value = '';
      level += 1;
      resetLevel();
      setLevel();
      addHover();
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
        addHover();
      });
    });
  }
}

export { setLevel, sumbit, changeLevel, addHover, addTooltip };
