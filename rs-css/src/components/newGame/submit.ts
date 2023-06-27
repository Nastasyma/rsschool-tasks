import elements from '../../utils/gameElements';
import checkInputValue from './checkInputValue';
import initGame from './initGame';

function submit(event: Event): void {
  const { editorForm } = elements.game;
  const { editorInput } = elements.game;
  const { editorSpan } = elements.game;
  const { editorBtn } = elements.game;
  const { game } = elements.game;
  const { levelsCheck } = elements.game;
  const { helpBtn } = elements.game;
  const { editor } = elements.game;
  if (editorForm && editorInput && editorBtn && helpBtn && editorSpan) {
    event.preventDefault();
    // console.log('correct value: ', gameLevelObject[elements.level].help);
    checkInputValue();
    if (elements.rule) {
      // console.log('correct');
      elements.level += 1;
      localStorage.setItem('nastasyma_level', elements.level.toString());
      if (elements.level === 20) {
        // console.log('the end');
        editorInput.setAttribute('disabled', 'disabled');
        editorBtn.setAttribute('disabled', 'disabled');
        helpBtn.setAttribute('disabled', 'disabled');
      }
      setTimeout(() => {
        if (elements.helped) {
          levelsCheck[elements.level - 1].classList.add('helped');
        } else {
          levelsCheck[elements.level - 1].classList.add('checked');
        }
        if (elements.checkedStatus) elements.checkedStatus.length = 0;
        levelsCheck.forEach((item) => {
          elements.checkedStatus?.push(item.className);
        });
        localStorage.setItem('nastasyma_checked-status', JSON.stringify(elements.checkedStatus));
        elements.helped = false;
        if (elements.level < 20) {
          initGame();
        }
        if (elements.level === 20) {
          localStorage.setItem('nastasyma_level', '19');
          editorInput.value = '';
          editorSpan.innerHTML = '';
          if (game) game.classList.add('win');
          if (editor) editor.classList.add('win');
        }
      }, 1400);
    }
  }
}

export default submit;
