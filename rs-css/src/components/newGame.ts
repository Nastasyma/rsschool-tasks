import elements from '../utils/gameElements';
import gameLevelObject from '../utils/gameLevelObj';
import markupLevelObject from '../utils/markupLevelObj';

// let level = 0;
// let rule = false;
function setLevel() {
  const { gameTable } = elements.game;
  const { tableBottom } = elements.game;
  const { editorMarkupText } = elements.game;
  const { table } = elements.game;
  const { navItems } = elements.game;
  const { gameWrapper } = elements.game;
  const { gameTitle } = elements.game;
  if (gameTitle) gameTitle.textContent = gameLevelObject[elements.level].title;
  if (navItems) navItems[elements.level].classList.add('level-active');
  if (table) {
    table.innerHTML = gameLevelObject[elements.level].content;
  }
  const boxes: NodeListOf<Element> = document.querySelectorAll(`.table box, #orange`);
  const box: HTMLElement | null = document.querySelector(`.table box`);
  function addTableSize() {
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

function resetLevel() {
  const { editorMarkupText } = elements.game;
  const { editorInput } = elements.game;
  const { editorBtn } = elements.game;
  const { helpBtn } = elements.game;
  const { navItems } = elements.game;
  const { game } = elements.game;
  const { editor } = elements.game;
  if (editorMarkupText) editorMarkupText.innerHTML = '';
  if (navItems) {
    navItems.forEach((item) => {
      item.classList.remove('level-active');
    });
  }
  if (editorInput && editorBtn && helpBtn) {
    editorInput.value = '';
    editorInput.focus();
    editorInput.removeAttribute('disabled');
    editorBtn.removeAttribute('disabled');
    helpBtn.removeAttribute('disabled');
  }
  if (game) game.classList.remove('win');
  if (editor) editor.classList.remove('win');
  elements.rule = false;
}

function checkInputValue() {
  const { editorInput } = elements.game;
  const { editor } = elements.game;
  const originalArray: NodeListOf<Element> = document.querySelectorAll(gameLevelObject[elements.level].elements);
  if (!editor) throw new Error();
  if (editorInput) {
    try {
      const valueArray: NodeListOf<Element> = document.querySelectorAll(`.table ${editorInput.value}`);
      console.log('target items: ', [...originalArray]);
      console.log('selected items: ', [...valueArray]);
      if (!valueArray) console.log('error');
      for (let i = 0; i < originalArray.length; i += 1) {
        if (originalArray[i] !== valueArray[i]) {
          elements.rule = false;
        } else if (originalArray.length !== valueArray.length) {
          elements.rule = false;
        } else {
          elements.rule = true;
        }
      }
      for (let i = 0; i < originalArray.length; i += 1) {
        if (!elements.rule) {
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
  return elements.rule;
}

function addHelpMessage() {
  const { editorInput } = elements.game;

  if (editorInput) {
    editorInput.value = '';
    const str = gameLevelObject[elements.level].help;
    let count = 0;
    const typing = setInterval(() => {
      editorInput.value += str[count];
      editorInput.focus();
      count += 1;
      if (count >= str.length) {
        clearInterval(typing);
      }
    }, 200);
  }
}
function addTooltip(arr: NodeListOf<Element>) {
  const { tooltip } = elements.game;
  const tableEl: NodeListOf<Element> = document.querySelectorAll('.table *');
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].addEventListener('mouseover', (e: Event) => {
      e.stopPropagation();
      const elTag = tableEl[i].tagName.toLocaleLowerCase();
      const elClass = tableEl[i].className;
      const elId = tableEl[i].id;
      const elAtt = tableEl[i].getAttribute('material');
      const elPos = tableEl[i].getBoundingClientRect();
      if (tooltip) {
        tooltip.style.display = 'block';
        tooltip.style.left = `${(elPos.left + 30).toString()}px`;
        tooltip.style.top = `${(elPos.top - 30).toString()}px`;
        if (elClass && elId) {
          tooltip.textContent = `<${elTag} class="${elClass}" id="${elId}"></${elTag}>`;
        } else if (elClass && !elId) {
          tooltip.textContent = `<${elTag} class="${elClass}"></${elTag}>`;
        } else if (!elClass && elId) {
          tooltip.textContent = `<${elTag} id="${elId}"></${elTag}>`;
        } else if (elAtt) {
          tooltip.textContent = `<${elTag} material="${elAtt}"></${elTag}>`;
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
  const { editorForm } = elements.game;
  const { editorInput } = elements.game;
  const { editorBtn } = elements.game;
  const { game } = elements.game;
  const { levelsCheck } = elements.game;
  const { helpBtn } = elements.game;
  const { editor } = elements.game;
  if (editorForm && editorInput && editorBtn && helpBtn) {
    event.preventDefault();
    console.log('correct value: ', gameLevelObject[elements.level].help);
    checkInputValue();
    if (elements.rule) {
      console.log('correct');
      elements.level += 1;
      if (elements.level === 20) {
        console.log('the end');
        editorInput.setAttribute('disabled', 'disabled');
        editorBtn.setAttribute('disabled', 'disabled');
        helpBtn.setAttribute('disabled', 'disabled');
      }
      setTimeout(() => {
        levelsCheck[elements.level - 1].classList.add('checked');
        if (elements.level < 20) {
          resetLevel();
          setLevel();
          addHover();
        }
        if (elements.level === 20) {
          editorInput.value = '';
          if (game) game.classList.add('win');
          if (editor) editor.classList.add('win');
        }
      }, 1400);
    }
  }
}

function changeLevel() {
  const { navItems } = elements.game;
  if (navItems) {
    navItems.forEach((item) => {
      item.addEventListener('click', () => {
        const currentLevel: string | null = item.getAttribute('data-level');
        if (currentLevel) elements.level = +currentLevel;
        resetLevel();
        setLevel();
        addHover();
      });
    });
  }
}
function resetProgress() {
  const { levelsCheck } = elements.game;
  elements.level = 0;
  levelsCheck.forEach((item) => {
    item.classList.remove('checked');
  });
  resetLevel();
  setLevel();
  addHover();
}
export { setLevel, submit, changeLevel, addHover, addHelpMessage, resetProgress };
