import createEL from '../baseComponent';
import elements from '../../utils/gameElements';
import setInputValue from '../newGame/setInputValue';
import submit from '../newGame/submit';

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
    elements.game.editorInput = editorInput;
  }
  if (editorForm instanceof HTMLFormElement) {
    elements.game.editorForm = editorForm;
  }
  editorInput.addEventListener('input', setInputValue);
  const editorSpan: HTMLElement = createEL(editorForm, 'span', ['editor__span']);
  const editorBtn = createEL(editorForm, 'button', ['editor__btn'], 'Enter');
  createEL(editorWrapper, 'h4', ['editor__title'], 'HTML Viewer');
  const editorHtmlWrapper: HTMLElement = createEL(editorWrapper, 'div', ['editor__html-wrapper']);
  const editorNumbersWrapper: HTMLElement = createEL(editorHtmlWrapper, 'div', ['editor__numbers-wrapper']);
  for (let i = 1; i < 21; i += 1) {
    const editorNumber: HTMLDivElement = document.createElement('div');
    editorNumber.textContent = i.toString();
    editorNumbersWrapper.appendChild(editorNumber);
  }
  const editorMarkupWrapper: HTMLElement = createEL(editorHtmlWrapper, 'div', ['editor__markup-wrapper']);
  const editorMarkup = createEL(editorMarkupWrapper, 'div', ['editor__markup']);
  const editorMarkupText = createEL(editorMarkup, 'code', ['editor__code']);
  createEL(editor, 'div', ['editor__win']);
  elements.game.editorSpan = editorSpan;
  elements.game.editor = editor;
  elements.game.editorMarkupText = editorMarkupText;
  elements.game.editorBtn = editorBtn;
  return editor;
}

export default createEditorElement;
