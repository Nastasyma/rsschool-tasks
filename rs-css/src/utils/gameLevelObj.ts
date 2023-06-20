import { IGameObject } from '../interfaces/gameInterface';

const gameLevelObject: IGameObject[] = [
  {
    title: 'Select all items on the table',
    content: /* html */ `
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
    content: /* html */ `
      <box animation="shake"></box>
      <box animation="shake"></box>
    `,
    elements: '.table box',
    help: 'box',
  },
  {
    title: 'Select the old box',
    content: /* html */ `
      <box>
        <horse></horse>
      </box>
      <box>
        <cube class="mid"></cube>
        <cube></cube>
      </box>
      <box>
        <cube class="mid"></cube>
      </box>
      <box>
        <pyramid></pyramid>
      </box>
      <box animation="shake" id="old"></box>
    `,
    elements: '.table #old',
    help: '#old',
  },
];

export default gameLevelObject;
