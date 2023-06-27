import addHover from './addHover';
import resetLevel from './resetLevel';
import setLevel from './setLevel';

function initGame(): void {
  resetLevel();
  setLevel();
  addHover();
}

export default initGame;
