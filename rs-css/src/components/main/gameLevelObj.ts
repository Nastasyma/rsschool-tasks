import { IGameObject } from '../../interfaces/gameInterface';

const gameLevelObject: IGameObject[] = [
  {
    title: 'Select all items on the table',
    width: '700px',
    content: `
    <box class="shake"></box>
    <box class="shake">
      <cube class="shake"></cube>
    </box>
    <box class="shake">
      <pyramid class="shake"></pyramid>
    </box>
    <box class="shake">
      <cube class="small shake"></cube>
      <cube class="mid shake"></cube>
      <cube class="shake"></cube>
    </box>
    <box class="shake">
      <horse class="shake"></horse>
    </box>
    `,
    elements: '.table *',
    help: '*',
  },
  {
    title: 'Select the boxes',
    width: '300px',
    content: `
    <box class="shake"></box>
    <box class="shake"></box>
    `,
    elements: '.table box',
    help: 'box',
  },
];

export default gameLevelObject;
