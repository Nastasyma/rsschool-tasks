import createEl from '../baseComponent';

function createFooter(parentNode: HTMLElement): HTMLElement {
  const footer: HTMLElement = createEl(parentNode, 'footer', ['footer']);
  const myPage: HTMLElement = createEl(footer, 'div', ['footer__my-page']);
  const githubLink: HTMLElement = createEl(myPage, 'a', ['footer__link']);
  if (githubLink instanceof HTMLAnchorElement) {
    githubLink.href = 'https://github.com/Nastasyma';
  }
  const githubLogo: HTMLElement = createEl(githubLink, 'img', ['github-logo']);
  if (githubLogo instanceof HTMLImageElement) {
    githubLogo.src = 'assets/icons/github-logo.svg';
    githubLogo.alt = 'github logo';
  }
  createEl(myPage, 'p', ['footer__text'], '© 2023');
  const rssLink: HTMLElement = createEl(myPage, 'a', ['footer__link']);
  if (rssLink instanceof HTMLAnchorElement) {
    rssLink.href = 'https://rs.school/js/';
  }
  const rssLogo: HTMLElement = createEl(rssLink, 'img', ['rsschool-logo']);
  if (rssLogo instanceof HTMLImageElement) {
    rssLogo.src = 'assets/icons/rsschool-js-logo.svg';
    rssLogo.alt = 'rsschool js logo';
  }
  return footer;
}

export default createFooter;
