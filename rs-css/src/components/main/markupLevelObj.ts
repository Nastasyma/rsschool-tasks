import { IMarkupObject } from '../../interfaces/editorInterface';

const markupLevelObject: IMarkupObject[] = [
  {
    content: `
    <div class="html-element">
    &lt;table&gt;
    <div>&lt;box&gt;&lt;&frasl;box&gt;</div>
    <div>&lt;box&gt;
      <div>&lt;cube&gt;&lt;&frasl;cube&gt;</div>
      &lt;&frasl;box&gt;
    </div>
    <div>&lt;box&gt;
    <div>&lt;pyramid&gt;&lt;&frasl;pyramid&gt;</div>
    &lt;&frasl;box&gt;
    </div>
    <div>&lt;box&gt;
    <div>&lt;cube&gt;&lt;&frasl;cube&gt;</div>
    <div>&lt;cube&gt;&lt;&frasl;cube&gt;</div>
    <div>&lt;cube&gt;&lt;&frasl;cube&gt;</div>
    &lt;&frasl;box&gt;
    </div>
    <div>&lt;box&gt;
    <div>&lt;horse&gt;&lt;&frasl;horse&gt;</div>
    &lt;&frasl;box&gt;
    </div>
    &lt;&frasl;table&gt;
    </div>
    `,
  },
];

export default markupLevelObject;
