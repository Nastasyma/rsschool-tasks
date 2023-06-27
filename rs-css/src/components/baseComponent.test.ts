import createEl from './baseComponent';

describe('createEl', () => {
  let parentNode: HTMLElement | null;

  beforeEach(() => {
    document.body.innerHTML = '<div id="parent"></div>';
    parentNode = document.getElementById('parent');
  });

  it('should create an element of the specified tag', () => {
    if (parentNode) {
      const el = createEl(parentNode, 'span');
      expect(el.tagName).toEqual('SPAN');
    }
  });

  it('should append the element to the parent node', () => {
    if (parentNode) {
      createEl(parentNode, 'div', ['test'], 'text');
      expect(parentNode.children.length).toEqual(1);
      expect(parentNode.children[0].classList.contains('test')).toEqual(true);
      expect(parentNode.children[0].textContent).toEqual('text');
    }
  });
});
