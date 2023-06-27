import elements from '../../utils/gameElements';
import initGame from './initGame';

function resetProgress(): void {
  const { levelsCheck } = elements.game;
  elements.level = 0;
  localStorage.setItem('nastasyma_level', elements.level.toString());
  levelsCheck.forEach((item) => {
    item.classList.remove('checked');
    item.classList.remove('helped');
  });
  if (elements.checkedStatus) elements.checkedStatus.length = 0;
  levelsCheck.forEach((item) => {
    elements.checkedStatus?.push(item.className);
  });
  localStorage.setItem('nastasyma_checked-status', JSON.stringify(elements.checkedStatus));
  initGame();
}

export default resetProgress;
