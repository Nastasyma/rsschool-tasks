import navObject from './navObj';

describe('navObj', () => {
  it('should have a "title" property with a non-empty string value for each object', () => {
    navObject.forEach((item) => {
      expect(typeof item.title).toBe('string');
      expect(item.title.trim().length).toBeGreaterThan(0);
    });
  });

  it('should have unique "number" properties for each object', () => {
    const numbers = navObject.map((item) => item.number);
    const uniqueNumbers = new Set(numbers);
    expect(uniqueNumbers.size).toBe(navObject.length);
  });
});
