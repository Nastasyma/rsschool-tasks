import createEL from '../baseComponent';
import { submit } from '../newGame';

function createEditorElement(parentNode: HTMLElement): HTMLElement {
  const editor: HTMLElement = createEL(parentNode, 'div', ['editor']);
  const editorWrapper: HTMLElement = createEL(editor, 'div', ['editor__wrapper']);
  createEL(editorWrapper, 'h4', ['editor__title'], 'CSS Editor');
  const editorForm: HTMLElement = createEL(editorWrapper, 'form', ['editor__form']);
  editorForm.addEventListener('submit', submit);
  const editorInput: HTMLElement = createEL(editorForm, 'input', ['editor__input']);
  if (editorInput instanceof HTMLInputElement) {
    editorInput.type = 'text';
    editorInput.placeholder = 'Type in a CSS selector';
  }
  createEL(editorForm, 'button', ['editor__btn'], 'Enter');
  createEL(editorWrapper, 'h4', ['editor__title'], 'HTML Viewer');
  const editorHtmlWrapper = createEL(editorWrapper, 'div', ['editor__html-wrapper']);
  const editorNumbersWrapper = createEL(editorHtmlWrapper, 'div', ['editor__numbers-wrapper']);
  for (let i = 1; i < 21; i += 1) {
    const editorNumber: HTMLDivElement = document.createElement('div');
    editorNumber.textContent = i.toString();
    editorNumbersWrapper.appendChild(editorNumber);
  }
  const editorMarkupWrapper = createEL(editorHtmlWrapper, 'div', ['editor__markup-wrapper']);
  createEL(editorMarkupWrapper, 'div', ['editor__markup']);
  return editor;
}

export default createEditorElement;
