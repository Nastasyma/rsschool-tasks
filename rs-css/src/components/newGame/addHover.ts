import addTooltip from './addToolTip';

function addHover(): void {
  const tableEl: NodeListOf<Element> = document.querySelectorAll('.table *');
  const markupEl: NodeListOf<Element> = document.querySelectorAll('.html-element div');
  for (let i = 0; i < tableEl.length; i += 1) {
    tableEl[i].addEventListener('mouseover', (e) => {
      e.stopPropagation();
      tableEl[i].setAttribute('hover', 'shine');
      markupEl[i].querySelectorAll('span').forEach((item) => {
        item.setAttribute('hover', 'select');
      });
    });
    tableEl[i].addEventListener('mouseout', (e) => {
      e.stopPropagation();
      tableEl[i].removeAttribute('hover');
      markupEl[i].querySelectorAll('span').forEach((item) => {
        item.removeAttribute('hover');
      });
    });
    addTooltip(tableEl);
  }
  for (let i = 0; i < markupEl.length; i += 1) {
    markupEl[i].addEventListener('mouseover', (e) => {
      e.stopPropagation();
      tableEl[i].setAttribute('hover', 'shine');
      markupEl[i].querySelectorAll('span').forEach((item) => {
        item.setAttribute('hover', 'select');
      });
    });
    markupEl[i].addEventListener('mouseout', (e) => {
      e.stopPropagation();
      tableEl[i].removeAttribute('hover');
      markupEl[i].querySelectorAll('span').forEach((item) => {
        item.removeAttribute('hover');
      });
    });
    addTooltip(markupEl);
  }
}

export default addHover;
