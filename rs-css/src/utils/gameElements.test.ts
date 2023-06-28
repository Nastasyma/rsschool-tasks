import gameObject from './gameElements';

describe('gameElements', () => {
  it('should be defined', () => {
    expect(gameObject).toBeDefined();
  });
  it('should be a object', () => {
    expect(typeof gameObject).toBe('object');
  });
});
