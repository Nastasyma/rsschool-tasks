import addHelpMessage from '../src/components/newGame/addHelpMessage';
import addTooltip from '../src/components/newGame/addToolTip';
import setInputValue from '../src/components/newGame/setInputValue';

describe('addHelpMessage', () => {
  jest.mock('../src/components/newGame/addHelpMessage', () => {
    return jest.fn().mockReturnValue(true);
  });
  function myFunction() {
    const result = addHelpMessage();
    return result;
  }

  it('should call addHelpMessage and return true', () => {
    const result = myFunction();
    expect(result).toBe(true);
  });
});
describe('addTooltip', () => {
  let arr: HTMLDivElement[];
  let tooltip: HTMLElement;

  beforeEach(() => {
    arr = [document.createElement('div'), document.createElement('div'), document.createElement('div')];
    tooltip = document.createElement('div');
    document.body.appendChild(tooltip);
  });
  it('should be defined', () => {
    expect(addTooltip).toBeDefined();
  });
  it('should add mouseover and mouseout event listeners to elements in arr', () => {
    addTooltip(arr as unknown as NodeListOf<Element>, tooltip);
    arr.forEach((el) => {
      expect((el as HTMLElement).onmouseover).toBeDefined();
      expect((el as HTMLElement).onmouseout).toBeDefined();
    });
  });
  it('should set item display property to "none" on mouseout event', () => {
    const mouseoutEvent = new MouseEvent('mouseout');
    addTooltip(arr as unknown as NodeListOf<Element>, tooltip);
    arr[0].dispatchEvent(mouseoutEvent);
    expect(tooltip.style.display).toBe('none');
  });
});
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
  it('should update the content of the "editorSpan" for CSS attribute selectors in the "editorInput"', () => {
    editorInput.value = '[attribute="value"]';
    setInputValue(editorInput, editorSpan);
    expect(editorSpan.innerHTML).toBe('<span class="input-d">[attribute="value"]</span>');
  });
  it('should update the content of the "editorSpan"for CSS ID selectors in the "editorInput"', () => {
    editorInput.value = '#test';
    setInputValue(editorInput, editorSpan);
    expect(editorSpan.innerHTML).toBe('<span class="input-b">#test</span>');
  });
});
