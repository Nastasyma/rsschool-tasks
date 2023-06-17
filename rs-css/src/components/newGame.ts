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
  const editor: HTMLDivElement | null = document.querySelector('.editor');
  if (!editor) throw new Error();
  if (editorInput) {
    try {
      const valueArray: NodeListOf<Element> = document.querySelectorAll(`.table ${editorInput.value}`);
      console.log('target items: ', [...originalArray]);
      console.log('selected items: ', [...valueArray]);
      if (!valueArray) console.log('error');
      if (originalArray.length !== valueArray.length) rule = false;
      for (let i = 0; i < originalArray.length; i += 1) {
        if (originalArray[i] !== valueArray[i]) {
          rule = false;
        } else {
          rule = true;
        }
      }
      for (let i = 0; i < originalArray.length; i += 1) {
        if (!rule) {
          if (valueArray.length !== 0 && !valueArray[0].classList.contains('table')) {
            valueArray.forEach((item) => {
              if (!item.classList.contains('table')) {
                item.classList.add('error');
              }
            });
          } else {
            editor.classList.add('error');
          }
          setTimeout(() => {
            valueArray.forEach((item) => {
              item.classList.remove('error');
            });
            editor.classList.remove('error');
          }, 500);
        } else {
          originalArray[i].classList.remove('shake');
          originalArray[i].classList.add('fly');
        }
      }
    } catch (error) {
      // console.error(error);
      console.log('invalid value');
      editor.classList.add('error');
      setTimeout(() => {
        editor.classList.remove('error');
      }, 500);
    }
  }
  return rule;
}

function addTooltip(arr: NodeListOf<Element>) {
  const tooltip: HTMLElement | null = document.querySelector('.tooltip');
  const tableEl: NodeListOf<Element> = document.querySelectorAll('.table *');
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].addEventListener('mouseover', (e: Event) => {
      e.stopPropagation();
      const elTag = tableEl[i].tagName.toLocaleLowerCase();
      const elClass = tableEl[i].className;
      const posEl = tableEl[i].getBoundingClientRect();
      if (tooltip) {
        tooltip.style.display = 'block';
        tooltip.style.left = `${(posEl.left + 50).toString()}px`;
        tooltip.style.top = `${(posEl.top - 30).toString()}px`;
        if (tableEl[i].className && !tableEl[i].classList.contains('shake')) {
          tooltip.textContent = `<${elTag} class="${elClass}"></${elTag}>`;
        } else {
          tooltip.textContent = `<${elTag}></${elTag}>`;
        }
      }
    });
    arr[i].addEventListener('mouseout', (e: Event) => {
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
    addTooltip(tableEl);
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
    addTooltip(markupEl);
  }
}
function submit(event: Event) {
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
      setTimeout(() => {
        editorInput.value = '';
        level += 1;
        resetLevel();
        setLevel();
        addHover();
        levelsCheck[level - 1].classList.add('checked');
      }, 1000);
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

export { setLevel, submit, changeLevel, addHover };
