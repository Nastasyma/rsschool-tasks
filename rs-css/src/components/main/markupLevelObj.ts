import { IMarkupObject } from '../../interfaces/editorInterface';

const markupLevelObject: IMarkupObject[] = [
  {
    content: `
    <div class="html-element">
    &lt;<span class="tag">div</span> <span class="attribute">class</span>=<span class="value">"table"</span>&gt;
    <div>&lt;<span class="tag">box</span>&gt;&lt;&frasl;<span class="tag">box</span>&gt;</div>
    <div>&lt;<span class="tag">box</span>&gt;
      <div>&lt;<span class="tag">cube</span>&gt;&lt;&frasl;<span class="tag">cube</span>&gt;</div>
      &lt;&frasl;<span class="tag">box</span>&gt;
    </div>
    <div>&lt;<span class="tag">box</span>&gt;
    <div>&lt;<span class="tag">pyramid</span>&gt;&lt;&frasl;<span class="tag">pyramid</span>&gt;</div>
    &lt;&frasl;<span class="tag">box</span>&gt;
    </div>
    <div>&lt;<span class="tag">box</span>&gt;
    <div>&lt;<span class="tag">cube</span> <span class="attribute">class=<span class="value">"small"</span></span>&gt;&lt;&frasl;<span class="tag">cube</span>&gt;</div>
    <div>&lt;<span class="tag">cube</span> <span class="attribute">class=<span class="value">"mid"</span></span>&gt;&lt;&frasl;<span class="tag">cube</span>&gt;</div>
    <div>&lt;<span class="tag">cube</span>&gt;&lt;&frasl;<span class="tag">cube</span>&gt;</div>
    &lt;&frasl;<span class="tag">box</span>&gt;
    </div>
    <div>&lt;<span class="tag">box</span>&gt;
    <div>&lt;<span class="tag">horse</span>&gt;&lt;&frasl;<span class="tag">horse</span>&gt;</div>
    &lt;&frasl;<span class="tag">box</span>&gt;
    </div>
    &lt;&frasl;<span class="tag">div</span>&gt;
    </div>
    `,
  },
];

export default markupLevelObject;
