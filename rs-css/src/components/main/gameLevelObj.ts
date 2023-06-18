import { IGameObject } from '../../interfaces/gameInterface';

const gameLevelObject: IGameObject[] = [
  {
    title: 'Select all items on the table',
    width: '700px',
    content: `
    <box animation="shake"></box>
    <box animation="shake">
      <cube animation="shake"></cube>
    </box>
    <box animation="shake">
      <pyramid animation="shake"></pyramid>
    </box>
    <box animation="shake">
      <cube animation="shake" class="small"></cube>
      <cube animation="shake" class="mid"></cube>
      <cube animation="shake"></cube>
    </box>
    <box animation="shake">
      <horse animation="shake"></horse>
    </box>
    `,
    elements: '.table *',
    help: '*',
  },
  {
    title: 'Select the boxes',
    width: '300px',
    content: `
    <box animation="shake"></box>
    <box animation="shake"></box>
    `,
    elements: '.table box',
    help: 'box',
  },
];

export default gameLevelObject;
