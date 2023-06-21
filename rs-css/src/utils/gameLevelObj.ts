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
        <cube animation="shake" class="small" id="yellow"></cube>
        <cube animation="shake" class="mid" id="green"></cube>
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
        <cube class="mid" id="yellow"></cube>
        <cube></cube>
      </box>
      <box>
        <cube class="mid" id="green"></cube>
      </box>
      <box>
        <pyramid></pyramid>
      </box>
      <box animation="shake" id="old"></box>
    `,
    elements: '.table #old',
    help: '#old',
  },
  {
    title: 'Select the small cubes',
    content: /* html */ `
      <box>
        <cube></cube>
      </box>
      <box>
        <cube animation="shake" class="small"></cube>
        <cube class="mid" id="green"></cube>
        <cube></cube>
      </box>
      <box>
        <cube animation="shake" class="small" id="green"></cube>
      </box>
      <box id="old">
        <pyramid></pyramid>
      </box>
    `,
    elements: '.table .small',
    help: '.small',
  },
  {
    title: 'Select all the horses and airplanes',
    content: /* html */ `
      <box>
        <horse animation="shake" class="mid"></horse>
      </box>
      <box>
        <cube></cube>
      </box>
      <box>
        <airplane animation="shake"></airplane>
      </box>
      <box>
        <cube class="small" id="green"></cube>
        <cube class="mid" id="yellow"></cube>
        <cube></cube>
      </box>
      <box>
        <horse animation="shake"></horse>
      </box>
    `,
    elements: '.table horse, airplane',
    help: 'horse, airplane',
  },
  {
    title: 'Select the cubes directly on a box',
    content: /* html */ `
      <box></box>
      <box>
        <basket>
          <cube id="yellow" class="mid"></cube>
        </basket>
      </box>
      <box>
        <airplane></airplane>
      </box>
      <box id="old">
        <cube animation="shake" id="yellow" class="mid"></cube>
      </box>
    `,
    elements: '.table box > cube',
    help: 'box > cube',
  },
];

export default gameLevelObject;
