import elements from '../../utils/gameElements';
import navObject from '../../utils/navObj';
import initGame from './initGame';

export function changeLevel(): void {
  const { navItems, currentLevel } = elements.game;
  if (navItems) {
    navItems.forEach((item) => {
      item.addEventListener('click', () => {
        if (!elements.isHelp) {
          const current: string | null = item.getAttribute('data-level');
          if (current) elements.level = +current;
          if (currentLevel) currentLevel.textContent = (elements.level + 1).toString();
          localStorage.setItem('nastasyma_level', elements.level.toString());
          initGame();
        }
      });
    });
  }
}

export function clickArrow(): void {
  const { arrowLeft, arrowRight, game, currentLevel } = elements.game;
  if (arrowRight && arrowLeft) {
    arrowRight.addEventListener('click', () => {
      if (!elements.isHelp) {
        if (elements.level < navObject.length - 1) {
          elements.level += 1;
        } else if (elements.level === navObject.length - 1 || game?.classList.contains('win')) {
          elements.level = 0;
        }
        if (currentLevel) currentLevel.textContent = (elements.level + 1).toString();
        localStorage.setItem('nastasyma_level', elements.level.toString());
        initGame();
      }
      // console.log(elements.level);
    });
    arrowLeft.addEventListener('click', () => {
      if (!elements.isHelp) {
        if (elements.level > 0) {
          elements.level -= 1;
        } else if (elements.level === 0) {
          elements.level = navObject.length - 1;
        }
        if (currentLevel) currentLevel.textContent = (elements.level + 1).toString();
        localStorage.setItem('nastasyma_level', elements.level.toString());
        initGame();
      }
      // console.log(elements.level);
    });
  }
}
