function createHeader() {
  const header: HTMLElement = document.createElement('header');
  header.classList.add('header');
  const helpBtn: HTMLDivElement = document.createElement('div');
  helpBtn.className = 'header__btn help-btn';
  helpBtn.textContent = 'HELP';
  const headerTitle: HTMLHeadingElement = document.createElement('h1');
  headerTitle.className = 'header__title';
  headerTitle.textContent = 'RSS-CSS-Selectors';
  const burgerBtn: HTMLDivElement = document.createElement('div');
  burgerBtn.className = 'header__btn burger-btn';
  burgerBtn.innerHTML = '<span></span><span></span><span></span>';
  header.appendChild(helpBtn);
  header.appendChild(headerTitle);
  header.appendChild(burgerBtn);
  return header;
}

export default createHeader;
