import elements from '../../utils/gameElements';

function addTooltip(arr: NodeListOf<Element>): void {
  const { tooltip } = elements.game;
  const tableEl: NodeListOf<Element> = document.querySelectorAll('.table *');
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].addEventListener('mouseover', (e: Event) => {
      e.stopPropagation();
      const elTag = tableEl[i].tagName.toLocaleLowerCase();
      const elClass = tableEl[i].className;
      const elId = tableEl[i].id;
      const elAtt = tableEl[i].getAttribute('material');
      const elPos = tableEl[i].getBoundingClientRect();
      if (tooltip) {
        tooltip.style.display = 'block';
        tooltip.style.left = `${(elPos.left + 30).toString()}px`;
        tooltip.style.top = `${(elPos.top - 30).toString()}px`;
        if (elClass && elId) {
          tooltip.textContent = `<${elTag} class="${elClass}" id="${elId}"></${elTag}>`;
        } else if (elClass && !elId) {
          tooltip.textContent = `<${elTag} class="${elClass}"></${elTag}>`;
        } else if (!elClass && elId) {
          tooltip.textContent = `<${elTag} id="${elId}"></${elTag}>`;
        } else if (elAtt) {
          tooltip.textContent = `<${elTag} material="${elAtt}"></${elTag}>`;
        } else {
          tooltip.textContent = `<${elTag}></${elTag}>`;
        }
      }
    });
    arr[i].addEventListener('mouseout', (e: Event) => {
      e.stopPropagation();
      if (tooltip) tooltip.style.display = 'none';
    });
  }
}

export default addTooltip;
