import gameObject from '../src/utils/gameElements';
import gameLevelObject from '../src/utils/gameLevelObj';
import markupLevelObject from '../src/utils/markupLevelObj';
import navObject from '../src/utils/navObj';

describe('gameElements', () => {
  it('should be defined', () => {
    expect(gameObject).toBeDefined();
  });
  it('should be a object', () => {
    expect(typeof gameObject).toBe('object');
  });
});
describe('gameLevelObj', () => {
  it('should have "title", "content", "elements" and "help" properties for each step in each level', () => {
    const levels = Object.values(gameLevelObject);
    levels.forEach((level) => {
      expect(level).toHaveProperty('title');
      expect(level).toHaveProperty('content');
      expect(level).toHaveProperty('elements');
      expect(level).toHaveProperty('help');
    });
  });
});
describe('markupLevelObject', () => {
  it('contains the correct HTML content', () => {
    const expectedContent = `
      <div class="html-element">
        <<span class="tag">div</span> <span class="attribute">class</span>=<span class="value">"table"</span>>
        <div>
          <<span class="tag">box</span>><&frasl;<span class="tag">box</span>>
        </div>
        <div>
          <<span class="tag">box</span>><&frasl;<span class="tag">box</span>>
        </div>
        </div>
        <&frasl;<span class="tag">div</span>>
      </div>
    `;
    expect(markupLevelObject[1].content).toEqual(expectedContent);
  });
});
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
