import elements from '../../utils/gameElements';
import createBurger from '../nav/burger';
import changeLevel from './changeLevel';
import initGame from './initGame';
import setInputValue from './setInputValue';

function appStart() {
  const { editorInput, editorSpan } = elements.game;
  window.addEventListener('DOMContentLoaded', (): void => {
    if (localStorage.getItem('nastasyma_level')) {
      elements.level = Number(localStorage.getItem('nastasyma_level'));
    }
    if (localStorage.getItem('nastasyma_checked-status')) {
      elements.checkedStatus = JSON.parse(localStorage.getItem('nastasyma_checked-status') as string);
      for (let i = 0; i < elements.game.levelsCheck.length; i += 1) {
        if (elements.checkedStatus) elements.game.levelsCheck[i].className = elements.checkedStatus[i];
      }
    }
    initGame();
    changeLevel();
    createBurger();
    if (editorInput && editorSpan) setInputValue(editorInput, editorSpan);
  });
}

export default appStart;
