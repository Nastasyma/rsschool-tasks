class BaseComponent {
  element: HTMLElement;

  constructor(parentNode: HTMLElement, tag: keyof HTMLElementTagNameMap = 'div', className = '', content = '') {
    this.element = document.createElement(tag);
    this.element.className = className;
    this.element.innerHTML = content;

    if (parentNode) {
      parentNode.append(this.element);
    }
  }
}

export default BaseComponent;
