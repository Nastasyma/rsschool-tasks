import createMain from './main';

describe('Main component', () => {
  let parentNode: HTMLElement;

  beforeEach(() => {
    parentNode = document.createElement('div');
  });
  it('should create a main component', () => {
    const mainElement = createMain(parentNode);
    expect(createMain(parentNode)).toBeTruthy();
    expect(mainElement.tagName.toLowerCase()).toBe('main');
    expect(parentNode.querySelector('main')).toBe(mainElement);
  });
});
