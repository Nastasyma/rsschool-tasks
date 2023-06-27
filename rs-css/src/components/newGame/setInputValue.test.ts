import setInputValue from './setInputValue';
import elements from '../../utils/gameElements';

describe('setInputValue', () => {
  it('should update the content of the "editorSpan" element with HTML tags for CSS attribute selectors in the "editorInput" element', () => {
    if (elements.game.editorInput && elements.game.editorSpan) {
      elements.game.editorInput.value = '[attribute="value"]';
      setInputValue();
      expect(elements.game.editorSpan.innerHTML).toBe('<span class="input-d">[attribute="value"]</span>');
    }
  });
});
