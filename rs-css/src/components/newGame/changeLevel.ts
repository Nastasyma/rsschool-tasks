import elements from '../../utils/gameElements';
import initGame from './initGame';

function changeLevel(): void {
  const { navItems } = elements.game;
  if (navItems) {
    navItems.forEach((item) => {
      item.addEventListener('click', () => {
        if (!elements.isHelp) {
          const currentLevel: string | null = item.getAttribute('data-level');
          if (currentLevel) elements.level = +currentLevel;
          localStorage.setItem('nastasyma_level', elements.level.toString());
          initGame();
        }
      });
    });
  }
}

export default changeLevel;
