import createEl from '../src/components/baseComponent';
import createMain from '../src/components/main/main';
import createFooter from '../src/components/footer/footer';

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
describe('createMain', () => {
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
describe('createFooter', () => {
  let parentNode;
  let footer: HTMLElement;

  beforeEach(() => {
    parentNode = document.createElement('div');
    footer = createFooter(parentNode);
  });

  it('should create footer element with correct structure', () => {
    expect(footer.tagName).toBe('FOOTER');
    expect(footer.classList.contains('footer')).toBe(true);
    const myPage = footer.querySelector('.footer__my-page');
    expect(myPage).toBeTruthy();
    if (myPage) {
      const githubLink = myPage.querySelector('.footer__link');
      expect(githubLink).toBeTruthy();
      expect(githubLink instanceof HTMLAnchorElement).toBe(true);
      if (githubLink instanceof HTMLAnchorElement) {
        expect(githubLink.href).toBe('https://github.com/Nastasyma');
      }
      const rssLogo = myPage.querySelector('.rsschool-logo');
      expect(rssLogo).toBeTruthy();
      expect(rssLogo instanceof HTMLImageElement).toBe(true);
      if (rssLogo instanceof HTMLImageElement) {
        expect(rssLogo.alt).toBe('rsschool js logo');
      }
    }
  });
});
