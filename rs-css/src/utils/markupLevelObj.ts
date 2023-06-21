import { IMarkupObject } from '../interfaces/editorInterface';

const markupLevelObject: IMarkupObject[] = [
  {
    content: /* html */ `
      <div class="html-element">
        <<span class="tag">div</span> <span class="attribute">class</span>=<span class="value">"table"</span>>
        <div><<span class="tag">box</span>><&frasl;<span class="tag">box</span>></div>
        <div>
          <<span class="tag">box</span>>
          <div>
            <<span class="tag">cube</span>><&frasl;<span class="tag">cube</span>>
          </div>
          <&frasl;<span class="tag">box</span>>
        </div>
        <div>
          <<span class="tag">box</span>>
          <div>
            <<span class="tag">pyramid</span>><&frasl;<span class="tag">pyramid</span>>
          </div>
          <&frasl;<span class="tag">box</span>>
        </div>
        <div>
          <<span class="tag">box</span>>
          <div>
            <<span class="tag">cube</span> <span class="attribute">class</span>=<span class="value">"small"</span> <span class="attribute">id</span>=<span class="value">"yellow"</span></span>><&frasl;<span class="tag">cube</span>>
          </div>
          <div>
            <<span class="tag">cube</span> <span class="attribute">class</span>=<span class="value">"mid"</span> <span class="attribute">id</span>=<span class="value">"green"</span></span>><&frasl;<span class="tag">cube</span>>
          </div>
          <div>
            <<span class="tag">cube</span>><&frasl;<span class="tag">cube</span>>
          </div>
          <&frasl;<span class="tag">box</span>>
        </div>
        <div>
          <<span class="tag">box</span>>
          <div>
            <<span class="tag">horse</span>><&frasl;<span class="tag">horse</span>>
          </div>
          <&frasl;<span class="tag">box</span>>
        </div>
        <&frasl;<span class="tag">div</span>>
      </div>
    `,
  },
  {
    content: /* html */ `
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
    `,
  },
  {
    content: /* html */ `
      <div class="html-element">
        <<span class="tag">div</span> <span class="attribute">class</span>=<span class="value">"table"</span>>
        <div><<span class="tag">box</span>>
          <div>
            <<span class="tag">horse</span>><&frasl;<span class="tag">horse</span>>
          </div>
        <&frasl;<span class="tag">box</span>>
        </div>
        <div><<span class="tag">box</span>>
          <div>
            <<span class="tag">cube</span> <span class="attribute">class</span>=<span class="value">"mid"</span> <span class="attribute">id</span>=<span class="value">"yellow"</span></span>><&frasl;<span class="tag">cube</span>>
          </div>
          <div>
            <<span class="tag">cube</span>><&frasl;<span class="tag">cube</span>>
          </div>
          <&frasl;<span class="tag">box</span>>
        </div>
        <div><<span class="tag">box</span>>
          <div>
            <<span class="tag">cube</span> <span class="attribute">class</span>=<span class="value">"mid"</span> <span class="attribute">id</span>=<span class="value">"green"</span></span>><&frasl;<span class="tag">cube</span>>
          </div>
          <&frasl;<span class="tag">box</span>>
        </div>
        <div><<span class="tag">box</span>>
          <div>
            <<span class="tag">pyramid</span>><&frasl;<span class="tag">pyramid</span>>
          </div>
          <&frasl;<span class="tag">box</span>>
        </div>
        <div>
          <<span class="tag">box</span> <span class="attribute">id</span>=<span class="value">"old"</span></span>><&frasl;<span class="tag">box</span>>
        </div>
        <&frasl;<span class="tag">div</span>>
      </div>
    `,
  },
  {
    content: /* html */ `
      <div class="html-element">
        <<span class="tag">div</span> <span class="attribute">class</span>=<span class="value">"table"</span>>
        <div>
          <<span class="tag">box</span>>
          <div>
            <<span class="tag">cube</span>><&frasl;<span class="tag">cube</span>>
          </div>
          <&frasl;<span class="tag">box</span>>
        </div>
        <div>
        <<span class="tag">box</span>>
        <div>
          <<span class="tag">cube</span> <span class="attribute">class</span>=<span class="value">"small"</span></span>><&frasl;<span class="tag">cube</span>>
        </div>
        <div>
          <<span class="tag">cube</span> <span class="attribute">class</span>=<span class="value">"mid"</span> <span class="attribute">id</span>=<span class="value">"green"</span></span>><&frasl;<span class="tag">cube</span>>
        </div>
        <div>
          <<span class="tag">cube</span>><&frasl;<span class="tag">cube</span>>
        </div>
          <&frasl;<span class="tag">box</span>>
        </div>
        <div>
          <<span class="tag">box</span>>
          <div>
            <<span class="tag">cube</span> <span class="attribute">class</span>=<span class="value">"small"</span> <span class="attribute">id</span>=<span class="value">"green"</span></span>><&frasl;<span class="tag">cube</span>>
          </div>
          <&frasl;<span class="tag">box</span>>
        </div>
        <div>
          <<span class="tag">box</span> <span class="attribute">id</span>=<span class="value">"old"</span></span>>
          <div>
            <<span class="tag">pyramid</span>><&frasl;<span class="tag">pyramid</span>>
          </div>
          <&frasl;<span class="tag">box</span>>
        </div>
        <&frasl;<span class="tag">div</span>>
      </div>
    `,
  },
  {
    content: /* html */ `
      <div class="html-element">
        <<span class="tag">div</span> <span class="attribute">class</span>=<span class="value">"table"</span>>
        <div><<span class="tag">box</span>>
        <div>
          <<span class="tag">horse</span> <span class="attribute">class</span>=<span class="value">"mid"</span></span>><&frasl;<span class="tag">horse</span>>
        </div>
        <&frasl;<span class="tag">box</span>></div>
        <div>
          <<span class="tag">box</span>>
          <div>
            <<span class="tag">cube</span>><&frasl;<span class="tag">cube</span>>
          </div>
          <&frasl;<span class="tag">box</span>>
        </div>
        <div>
          <<span class="tag">box</span>>
          <div>
            <<span class="tag">airplane</span>><&frasl;<span class="tag">airplane</span>>
          </div>
          <&frasl;<span class="tag">box</span>>
        </div>
        <div>
          <<span class="tag">box</span>>
          <div>
            <<span class="tag">cube</span> <span class="attribute">class</span>=<span class="value">"small"</span> <span class="attribute">id</span>=<span class="value">"green"</span></span>><&frasl;<span class="tag">cube</span>>
          </div>
          <div>
            <<span class="tag">cube</span> <span class="attribute">class</span>=<span class="value">"mid"</span> <span class="attribute">id</span>=<span class="value">"yellow"</span></span>><&frasl;<span class="tag">cube</span>>
          </div>
          <div>
            <<span class="tag">cube</span>><&frasl;<span class="tag">cube</span>>
          </div>
          <&frasl;<span class="tag">box</span>>
        </div>
        <div>
          <<span class="tag">box</span>>
          <div><<span class="tag">horse</span>><&frasl;<span class="tag">horse</span>></div>
          <&frasl;<span class="tag">box</span>>
        </div>
        <&frasl;<span class="tag">div</span>>
      </div>
    `,
  },
  {
    content: /* html */ `
      <div class="html-element">
        <<span class="tag">div</span> <span class="attribute">class</span>=<span class="value">"table"</span>>
        <div>
          <<span class="tag">box</span>><&frasl;<span class="tag">box</span>>
        </div>
        <div>
          <<span class="tag">box</span>>
          <div><<span class="tag">basket</span>>
          <div>
            <<span class="tag">cube</span> <span class="attribute">class</span>=<span class="value">"mid"</span> <span class="attribute">id</span>=<span class="value">"yellow"</span></span>><&frasl;<span class="tag">cube</span>>
          </div>
          <&frasl;<span class="tag">basket</span>></div>
          <&frasl;<span class="tag">box</span>>
        </div>
        <div>
          <<span class="tag">box</span>>
          <div>
            <<span class="tag">airplane</span>><&frasl;<span class="tag">airplane</span>>
          </div>
          <&frasl;<span class="tag">box</span>>
        </div>
        <div>
          <<span class="tag">box</span> <span class="attribute">id</span>=<span class="value">"old"</span>>
          <div>
            <<span class="tag">cube</span> <span class="attribute">class</span>=<span class="value">"mid"</span> <span class="attribute">id</span>=<span class="value">"yellow"</span></span>><&frasl;<span class="tag">cube</span>>
          </div>
          <&frasl;<span class="tag">box</span>>
        </div>
        <&frasl;<span class="tag">div</span>>
      </div>
    `,
  },
  {
    content: /* html */ `
      <div class="html-element">
        <<span class="tag">div</span> <span class="attribute">class</span>=<span class="value">"table"</span>>
        <div>
          <<span class="tag">box</span>>
          <div><<span class="tag">basket</span>>
          <div>
            <<span class="tag">cube</span> <span class="attribute">class</span>=<span class="value">"mid"</span> <span class="attribute">id</span>=<span class="value">"green"</span></span>><&frasl;<span class="tag">cube</span>>
          </div>
          <&frasl;<span class="tag">basket</span>></div>
          <&frasl;<span class="tag">box</span>>
        </div>
        <div>
          <<span class="tag">box</span>>
          <div>
            <<span class="tag">horse</span>><&frasl;<span class="tag">horse</span>>
          </div>
          <&frasl;<span class="tag">box</span>>
        </div>
        <div>
          <<span class="tag">box</span> <span class="attribute">id</span>=<span class="value">"old"</span>>
          <div>
            <<span class="tag">cube</span> <span class="attribute">class</span>=<span class="value">"mid"</span> <span class="attribute">id</span>=<span class="value">"yellow"</span></span>><&frasl;<span class="tag">cube</span>>
          </div>
          <&frasl;<span class="tag">box</span>>
        </div>
        <&frasl;<span class="tag">div</span>>
      </div>
    `,
  },
  {
    content: /* html */ `
      <div class="html-element">
        <<span class="tag">div</span> <span class="attribute">class</span>=<span class="value">"table"</span>>
        <div>
          <<span class="tag">box</span>><&frasl;<span class="tag">box</span>>
        </div>
        <div>
          <<span class="tag">basket</span> <span class="attribute">id</span>=<span class="value">"orange"</span></span>><&frasl;<span class="tag">basket</span>>
        </div>
        <div>
          <<span class="tag">box</span>><&frasl;<span class="tag">box</span>>
        </div>
        <div>
          <<span class="tag">basket</span> <span class="attribute">id</span>=<span class="value">"orange"</span></span>><&frasl;<span class="tag">basket</span>>
        </div>
        <div>
          <<span class="tag">basket</span> <span class="attribute">id</span>=<span class="value">"orange"</span></span>><&frasl;<span class="tag">basket</span>>
        </div>
        <&frasl;<span class="tag">div</span>>
      </div>
    `,
  },
  {
    content: /* html */ `
      <div class="html-element">
        <<span class="tag">div</span> <span class="attribute">class</span>=<span class="value">"table"</span>>
        <div>
          <<span class="tag">box</span>><&frasl;<span class="tag">box</span>>
        </div>
        <div>
          <<span class="tag">basket</span> <span class="attribute">id</span>=<span class="value">"orange"</span></span>><&frasl;<span class="tag">basket</span>>
        </div>
        <div>
          <<span class="tag">box</span>><&frasl;<span class="tag">box</span>>
        </div>
        <div>
          <<span class="tag">basket</span> <span class="attribute">id</span>=<span class="value">"orange"</span></span>><&frasl;<span class="tag">basket</span>>
        </div>
        <div>
          <<span class="tag">basket</span> <span class="attribute">id</span>=<span class="value">"orange"</span></span>><&frasl;<span class="tag">basket</span>>
        </div>
        <&frasl;<span class="tag">div</span>>
      </div>
    `,
  },
];

export default markupLevelObject;
