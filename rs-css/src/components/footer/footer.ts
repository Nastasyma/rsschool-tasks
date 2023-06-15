function createFooter() {
  const footer: HTMLElement = document.createElement('footer');
  footer.classList.add('footer');
  const myPage: HTMLDivElement = document.createElement('div');
  myPage.classList.add('footer__my-page');
  const githubLink: HTMLAnchorElement = document.createElement('a');
  githubLink.href = 'https://github.com/Nastasyma';
  const githubLogo = document.createElement('img');
  githubLogo.src = 'assets/icons/github_logo.svg';
  githubLogo.alt = 'github logo';
  githubLogo.classList.add('github-logo');
  githubLink.appendChild(githubLogo);
  myPage.appendChild(githubLink);
  const footerText: HTMLDivElement = document.createElement('div');
  footerText.classList.add('footer__text');
  footerText.textContent = '© 2023';
  myPage.appendChild(footerText);
  const rssLink: HTMLAnchorElement = document.createElement('a');
  rssLink.href = 'https://rs.school/js/';
  const rssLogo = document.createElement('img');
  rssLogo.src = 'assets/icons/rs_school_js_logo.svg';
  rssLogo.alt = 'rsschool js logo';
  rssLogo.classList.add('rsschool-logo');
  rssLink.appendChild(rssLogo);
  myPage.appendChild(rssLink);
  footer.appendChild(myPage);
  return footer;
}

export default createFooter;
