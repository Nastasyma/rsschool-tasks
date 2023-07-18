import elements from '../../utils/gameElements';
import gameLevelObject from '../../utils/gameLevelObj';

function checkInputValue(): boolean {
  const { editorInput, editor } = elements.game;

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

export default checkInputValue;
