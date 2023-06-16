import { IGameObject } from '../../interfaces/gameInterface';

const gameLevelObject: IGameObject[] = [
  {
    title: 'Select all items on the table',
    width: '700px',
    content: `
    <box class="shake"></box>
    <box class="shake">
      <cube class="big navy"></cube>
    </box>
    <box class="shake">
      <pyramid></pyramid>
    </box>
    <box class="shake">
      <cube class="big navy">
        <cube class="mid green">
          <cube class="small orange"></cube>
        </cube>
      </cube>
    </box>
    <box class="shake">
      <horse></horse>
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
