import changeLevel from './changeLevel';
import elements from '../../utils/gameElements';

describe('changeLevel', () => {
  it('should not change the game level if "navItems" is undefined', () => {
    if (!elements.game.navItems) {
      elements.level = 1;
      changeLevel();
      expect(elements.level).toBe(1);
    }
  });
});
