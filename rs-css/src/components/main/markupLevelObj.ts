import { IMarkupObject } from '../../interfaces/editorInterface';

const markupLevelObject: IMarkupObject[] = [
  {
    level: '1',
    code: [
      {
        tag: 'div',
        textcontent: '<div>1</div>',
      },
      {
        tag: 'div',
        textcontent: '<div>2</div>',
      },
    ],
  },
];

export default markupLevelObject;
