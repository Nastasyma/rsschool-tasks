import addTooltip from './addToolTip';

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
