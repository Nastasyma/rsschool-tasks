import gameLevelObject from './gameLevelObj';

describe('gameLevelObj', () => {
  it('sshould have "title", "content", "elements" and "help" properties for each step in each level', () => {
    const levels = Object.values(gameLevelObject);
    levels.forEach((level) => {
      expect(level).toHaveProperty('title');
      expect(level).toHaveProperty('content');
      expect(level).toHaveProperty('elements');
      expect(level).toHaveProperty('help');
    });
  });
});
