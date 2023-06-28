/* eslint-disable no-param-reassign */
// import elements from '../../utils/gameElements';

function addTooltip(arr: NodeListOf<Element>, el: HTMLElement): void {
  // const { tooltip } = elements.game;
  const tableEl: NodeListOf<Element> = document.querySelectorAll('.table *');
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].addEventListener('mouseover', (e: Event) => {
      e.stopPropagation();
      const elTag = tableEl[i].tagName.toLocaleLowerCase();
      const elClass = tableEl[i].className;
      const elId = tableEl[i].id;
      const elAtt = tableEl[i].getAttribute('material');
      const elPos = tableEl[i].getBoundingClientRect();
      if (el) {
        el.style.display = 'block';
        el.style.left = `${(elPos.left + 30).toString()}px`;
        el.style.top = `${(elPos.top - 30).toString()}px`;
        if (elClass && elId) {
          el.textContent = `<${elTag} class="${elClass}" id="${elId}"></${elTag}>`;
        } else if (elClass && !elId) {
          el.textContent = `<${elTag} class="${elClass}"></${elTag}>`;
        } else if (!elClass && elId) {
          el.textContent = `<${elTag} id="${elId}"></${elTag}>`;
        } else if (elAtt) {
          el.textContent = `<${elTag} material="${elAtt}"></${elTag}>`;
        } else {
          el.textContent = `<${elTag}></${elTag}>`;
        }
      }
    });
    arr[i].addEventListener('mouseout', (e: Event) => {
      e.stopPropagation();
      if (el) el.style.display = 'none';
    });
  }
}

export default addTooltip;
