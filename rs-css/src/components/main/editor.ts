function createEditorElement() {
  const editor: HTMLDivElement = document.createElement('div');
  editor.classList.add('editor');
  const editorWrapper: HTMLDivElement = document.createElement('div');
  editorWrapper.classList.add('editor__wrapper');
  const editorTitle: HTMLHeadingElement = document.createElement('h4');
  editorTitle.classList.add('editor__title');
  editorTitle.textContent = 'CSS Editor';
  editorWrapper.appendChild(editorTitle);
  const editorForm: HTMLFormElement = document.createElement('form');
  editorForm.classList.add('editor__form');
  const editorInput: HTMLInputElement = document.createElement('input');
  editorInput.classList.add('editor__input');
  editorInput.type = 'text';
  editorInput.placeholder = 'Type in a CSS selector';
  editorForm.appendChild(editorInput);
  const editorButton: HTMLButtonElement = document.createElement('button');
  editorButton.classList.add('editor__btn');
  editorButton.textContent = 'Enter';
  editorForm.appendChild(editorButton);
  editorWrapper.appendChild(editorForm);
  const editorTitle2: HTMLHeadingElement = document.createElement('h4');
  editorTitle2.classList.add('editor__title');
  editorTitle2.textContent = 'HTML Viewer';
  editorWrapper.appendChild(editorTitle2);
  const editorHtmlWrapper: HTMLDivElement = document.createElement('div');
  editorHtmlWrapper.classList.add('editor__html-wrapper');
  const editorNumbersWrapper: HTMLDivElement = document.createElement('div');
  editorNumbersWrapper.classList.add('editor__numbers-wrapper');
  for (let i = 1; i < 21; i += 1) {
    const editorNumber: HTMLDivElement = document.createElement('div');
    editorNumber.textContent = i.toString();
    editorNumbersWrapper.appendChild(editorNumber);
  }
  editorHtmlWrapper.appendChild(editorNumbersWrapper);
  const editorMarkupWrapper: HTMLDivElement = document.createElement('div');
  editorMarkupWrapper.classList.add('editor__markup-wrapper');
  editorHtmlWrapper.appendChild(editorMarkupWrapper);
  editorWrapper.appendChild(editorHtmlWrapper);
  editor.appendChild(editorWrapper);
  return editor;
}

export default createEditorElement;
