import navObject from './navObj';

function createNav() {
  const nav: HTMLElement = document.createElement('nav');
  nav.classList.add('game__levels');
  const levelsTitle: HTMLHeadingElement = document.createElement('h3');
  levelsTitle.classList.add('levels__title');
  levelsTitle.textContent = 'Levels';
  nav.appendChild(levelsTitle);
  const levelsList: HTMLUListElement = document.createElement('ul');
  levelsList.classList.add('levels__list');
  nav.appendChild(levelsList);
  for (let i = 0; i < navObject.length; i += 1) {
    const level: HTMLLIElement = document.createElement('li');
    level.classList.add('levels__item');
    level.setAttribute('data-level', i.toString());
    const levelCheck: HTMLDivElement = document.createElement('div');
    levelCheck.classList.add('levels__check');
    level.appendChild(levelCheck);
    const levelNumber: HTMLSpanElement = document.createElement('span');
    levelNumber.classList.add('levels__number');
    levelNumber.textContent = navObject[i].number;
    level.appendChild(levelNumber);
    const levelDesc: HTMLSpanElement = document.createElement('span');
    levelDesc.classList.add('levels__desc');
    levelDesc.textContent = navObject[i].levelTitle;
    level.appendChild(levelDesc);
    levelsList.appendChild(level);
  }
  return nav;
}

export default createNav;
