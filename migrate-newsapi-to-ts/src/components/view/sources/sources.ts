import { TypeSource } from '../../../types/source';
import { TypeHtmlElement } from '../../../types/types';
import './sources.css';

class Sources {
  draw(data: Readonly<TypeSource[]>): void {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

    data.forEach((item: TypeSource) => {
      if (!sourceItemTemp) throw new Error();

      const sourceClone = sourceItemTemp.content.cloneNode(true);

      if (!(sourceClone instanceof DocumentFragment)) throw new Error();

      const sourceItemName: TypeHtmlElement = sourceClone.querySelector('.source__item-name');
      const sourceItem: TypeHtmlElement = sourceClone.querySelector('.source__item');

      if (!sourceItemName || !sourceItem) throw new Error();

      const itemId = item.name.slice(0, 1).toUpperCase();
      sourceItemName.textContent = item.name;
      sourceItem.setAttribute('data-source-id', item.id);
      sourceItem.setAttribute('data-letter', itemId);
      // sourceItem.classList.add('item-hide');

      fragment.append(sourceClone);
    });

    const sources: TypeHtmlElement = document.querySelector('.sources');
    if (sources) {
      sources.append(fragment);
    }

    const sourcesAlfabet: TypeHtmlElement = document.querySelector('.sources-alfabet');
    let letter;
    for (let i = 65; i <= 90; i += 1) {
      letter = String.fromCharCode(i);
      const button: TypeHtmlElement = document.createElement('button');
      button.classList.add('button-letter');
      button.innerHTML = letter;
      if (!sourcesAlfabet) throw new Error();
      sourcesAlfabet.append(button);
    }

    const sourceItem: NodeListOf<Element> = document.querySelectorAll('.source__item');
    const btnLetter: NodeListOf<Element> = document.querySelectorAll('.button-letter');
    btnLetter.forEach((btn: Element) => {
      btn.addEventListener('click', (e) => {
        const targetEl: EventTarget | null = e.target;
        btnLetter.forEach((el: Element) => {
          el.classList.remove('letter-active');
        });
        btn.classList.add('letter-active');
        if (targetEl instanceof HTMLElement && targetEl.textContent === 'ALL') {
          sourceItem.forEach((item: Element) => {
            item.classList.remove('item-hide');
          });
        } else {
          sourceItem.forEach((item: Element) => {
            item.classList.add('item-hide');
            if (item instanceof HTMLElement) {
              if (item.dataset.letter === btn.textContent) {
                item.classList.remove('item-hide');
              }
            }
          });
        }
      });
    });
    sourceItem.forEach((item: Element) => {
      item.addEventListener('click', () => {
        sourceItem.forEach((el: Element) => {
          el.classList.remove('letter-active');
        });
        item.classList.add('letter-active');
      });
    });
  }
}

export default Sources;
