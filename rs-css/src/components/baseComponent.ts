export default function createEl<T extends HTMLElement>(
  parentNode: HTMLElement,
  tag: keyof HTMLElementTagNameMap = 'div',
  styles: string[] = [],
  content = '',
) {
  const node = document.createElement(tag);
  node.classList.add(...styles);
  node.textContent = content;
  if (parentNode) {
    parentNode.append(node);
  }

  return node as T;
}
