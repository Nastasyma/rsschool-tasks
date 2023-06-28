import markupLevelObject from './markupLevelObj';

describe('markupLevelObject', () => {
  it('Contains the correct HTML content', () => {
    const expectedContent = `
      <div class="html-element">
        <<span class="tag">div</span> <span class="attribute">class</span>=<span class="value">"table"</span>>
        <div>
          <<span class="tag">box</span>><&frasl;<span class="tag">box</span>>
        </div>
        <div>
          <<span class="tag">box</span>><&frasl;<span class="tag">box</span>>
        </div>
        </div>
        <&frasl;<span class="tag">div</span>>
      </div>
    `;
    expect(markupLevelObject[1].content).toEqual(expectedContent);
  });
});
