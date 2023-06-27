import setInputValue from './setInputValue';

describe('setInputValue', () => {
  let editorInput: HTMLInputElement;
  let editorSpan: HTMLSpanElement;

  beforeEach(() => {
    editorInput = document.createElement('input');
    editorSpan = document.createElement('span');
  });

  it('should set innerHTML of editorSpan to empty string when editorInput is empty', () => {
    editorInput.value = '';
    setInputValue(editorInput, editorSpan);
    expect(editorSpan.innerHTML).toBe('');
  });
  it('should update the content of the "editorSpan" element with HTML tags for CSS attribute selectors in the "editorInput" element', () => {
    editorInput.value = '[attribute="value"]';
    setInputValue(editorInput, editorSpan);
    expect(editorSpan.innerHTML).toBe('<span class="input-d">[attribute="value"]</span>');
  });
  it('should update the content of the "editorSpan" element with HTML tags for CSS ID selectors in the "editorInput" element', () => {
    editorInput.value = '#test';
    setInputValue(editorInput, editorSpan);
    expect(editorSpan.innerHTML).toBe('<span class="input-b">#test</span>');
  });
});
