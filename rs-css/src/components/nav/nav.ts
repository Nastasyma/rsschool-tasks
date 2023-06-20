import createEL from '../baseComponent';
import navObject from '../../utils/navObj';

function createNav(parentNode: HTMLElement): HTMLElement {
  const nav: HTMLElement = createEL(parentNode, 'nav', ['game__levels']);
  createEL(nav, 'h3', ['levels__title'], 'Levels');
  const levelsList: HTMLElement = createEL(nav, 'ul', ['levels__list']);
  for (let i = 0; i < navObject.length; i += 1) {
    const level: HTMLElement = createEL(levelsList, 'li', ['levels__item']);
    level.setAttribute('data-level', i.toString());
    createEL(level, 'div', ['levels__check']);
    createEL(level, 'span', ['levels__number'], navObject[i].number);
    createEL(level, 'span', ['levels__desc'], navObject[i].title);
  }
  return nav;
}

export default createNav;
