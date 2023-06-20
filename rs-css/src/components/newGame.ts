import flags from '../utils/flags';
import gameLevelObject from '../utils/gameLevelObj';
import markupLevelObject from '../utils/markupLevelObj';

// let level = 0;
// let rule = false;
function setLevel() {
  const { gameTable } = flags.game;
  const tableBottom: HTMLDivElement | null = document.querySelector('.table__bottom');
  const editorMarkup: HTMLDivElement | null = document.querySelector('.editor__markup');
  const editorMarkupText: HTMLElement = document.createElement('code');
  const table: HTMLDivElement | null = document.querySelector('.table');
  const levelItem: NodeListOf<Element> = document.querySelectorAll('.levels__item');
  const gameWrapper: HTMLDivElement | null = document.querySelector('.game__wrapper');
  const gameTitle = document.querySelector('.game__title');
  editorMarkupText.classList.add('editor__code');
  if (gameTitle) gameTitle.textContent = gameLevelObject[flags.level].title;
  if (levelItem) levelItem[flags.level].classList.add('level-active');
  if (table) {
    table.innerHTML = gameLevelObject[flags.level].content;
  }
  const boxes: NodeListOf<Element> = document.querySelectorAll(`.table box`);
  const box: HTMLElement | null = document.querySelector(`.table box`);
  function addTableSize() {
    if (gameTable && tableBottom && box) {
      gameTable.style.width = `${boxes.length * box.offsetWidth + 100}px`;
      tableBottom.style.width = `${boxes.length * box.offsetWidth + 100}px`;
    }
  }
  addTableSize();
  window.addEventListener('resize', addTableSize);
  editorMarkupText.innerHTML = markupLevelObject[flags.level].content;
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
  const editorInput: HTMLInputElement | null = document.querySelector('.editor__input');
  const levelItem: NodeListOf<Element> = document.querySelectorAll('.levels__item');
  if (editorMarkupText) editorMarkupText.innerHTML = '';
  if (levelItem) {
    levelItem.forEach((item) => {
      item.classList.remove('level-active');
    });
  }
  if (editorInput) editorInput.value = '';
  flags.rule = false;
}

function checkInputValue() {
  const editorInput: HTMLInputElement | null = document.querySelector('.editor__input');
  const originalArray: NodeListOf<Element> = document.querySelectorAll(gameLevelObject[flags.level].elements);
  const editor: HTMLDivElement | null = document.querySelector('.editor');
  if (!editor) throw new Error();
  if (editorInput) {
    try {
      const valueArray: NodeListOf<Element> = document.querySelectorAll(`.table ${editorInput.value}`);
      console.log('target items: ', [...originalArray]);
      console.log('selected items: ', [...valueArray]);
      if (!valueArray) console.log('error');
      if (originalArray.length !== valueArray.length) flags.rule = false;
      for (let i = 0; i < originalArray.length; i += 1) {
        if (originalArray[i] !== valueArray[i]) {
          flags.rule = false;
        } else {
          flags.rule = true;
        }
      }
      for (let i = 0; i < originalArray.length; i += 1) {
        if (!flags.rule) {
          if (valueArray.length !== 0 && !valueArray[0].classList.contains('table')) {
            valueArray.forEach((item) => {
              if (!item.classList.contains('table')) {
                item.setAttribute('data-error', 'error');
              }
            });
          } else {
            editor.setAttribute('data-error', 'error');
          }
          setTimeout(() => {
            valueArray.forEach((item) => {
              item.removeAttribute('data-error');
            });
            editor.removeAttribute('data-error');
          }, 500);
        } else {
          originalArray[i].removeAttribute('animation');
          originalArray[i].setAttribute('animation', 'fly');
        }
      }
    } catch (error) {
      // console.error(error);
      console.log('invalid value');
      editor.setAttribute('data-error', 'error');
      setTimeout(() => {
        editor.removeAttribute('data-error');
      }, 500);
    }
  }
  return flags.rule;
}

function addHelpMessage() {
  const editorInput: HTMLInputElement | null = document.querySelector('.editor__input');

  if (editorInput) {
    editorInput.value = '';
    const str = gameLevelObject[flags.level].help;
    let count = 0;
    const typing = setInterval(() => {
      editorInput.value += str[count];
      editorInput.focus();
      count += 1;
      if (count >= str.length) {
        editorInput.blur();
        clearInterval(typing);
      }
    }, 200);
  }
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
        if (elClass) {
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
      tableEl[i].setAttribute('hover', 'shine');
      markupEl[i].querySelectorAll('span').forEach((item) => {
        item.setAttribute('hover', 'select');
      });
    });
    tableEl[i].addEventListener('mouseout', (e) => {
      e.stopPropagation();
      tableEl[i].removeAttribute('hover');
      markupEl[i].querySelectorAll('span').forEach((item) => {
        item.removeAttribute('hover');
      });
    });
    addTooltip(tableEl);
  }
  for (let i = 0; i < markupEl.length; i += 1) {
    markupEl[i].addEventListener('mouseover', (e) => {
      e.stopPropagation();
      tableEl[i].setAttribute('hover', 'shine');
      markupEl[i].querySelectorAll('span').forEach((item) => {
        item.setAttribute('hover', 'select');
      });
    });
    markupEl[i].addEventListener('mouseout', (e) => {
      e.stopPropagation();
      tableEl[i].removeAttribute('hover');
      markupEl[i].querySelectorAll('span').forEach((item) => {
        item.removeAttribute('hover');
      });
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
    console.log('correct value: ', gameLevelObject[flags.level].help);
    checkInputValue();
    if (flags.rule) {
      console.log('correct');
      setTimeout(() => {
        flags.level += 1;
        resetLevel();
        setLevel();
        addHover();
        levelsCheck[flags.level - 1].classList.add('checked');
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
        if (currentLevel) flags.level = +currentLevel;
        console.log(flags.level);
        resetLevel();
        setLevel();
        addHover();
      });
    });
  }
}

export { setLevel, submit, changeLevel, addHover, addHelpMessage };
