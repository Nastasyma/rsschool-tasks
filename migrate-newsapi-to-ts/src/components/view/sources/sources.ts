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

      sourceItemName.textContent = item.name;
      sourceItem.setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    const sources: TypeHtmlElement = document.querySelector('.sources');
    if (sources) {
      sources.append(fragment);
    }
  }
}

export default Sources;
