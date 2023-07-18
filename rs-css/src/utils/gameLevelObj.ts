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
    title: 'Select the cube directly in the box',
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
  {
    title: 'Select the cubes in the box',
    content: /* html */ `
      <box>
        <basket>
          <cube animation="shake" id="green" class="mid"></cube>
        </basket>
      </box>
      <box>
        <horse></horse>
      </box>
      <box id="old">
        <cube animation="shake" id="yellow" class="mid"></cube>
      </box>
    `,
    elements: '.table box cube',
    help: 'box cube',
  },
  {
    title: 'Select every basket that is next to the box',
    content: /* html */ `
      <box></box>
      <basket animation="shake" id="orange"></basket>
      <box></box>
      <basket animation="shake" id="orange"></basket>
      <basket id="orange"></basket>
    `,
    elements: '.table box + basket',
    help: 'box + basket',
  },
  {
    title: 'Select the baskets beside the box',
    content: /* html */ `
      <box></box>
      <basket animation="shake" id="orange"></basket>
      <box></box>
      <basket animation="shake" id="orange"></basket>
      <basket animation="shake" id="orange"></basket>
    `,
    elements: '.table box ~ basket',
    help: 'box ~ basket',
  },
  {
    title: 'Select the wooden cube',
    content: /* html */ `
      <box>
        <cube animation="shake" material="wood"></cube>
      </box>
      <box>
        <airplane></airplane>
      </box>
      <box>
        <cube class="small" id="green"></cube>
        <cube class="mid" id="yellow"></cube>
        <cube></cube>
      </box>
      <box></box>
    `,
    elements: '.table [material="wood"]',
    help: '[material="wood"]',
  },
  {
    title: 'Select the first box',
    content: /* html */ `
      <basket id="orange">
        <cube></cube>
      </basket>
      <box animation="shake"></box>
      <box>
        <pyramid></pyramid>
      </box>
      <box>
        <cube class="small" id="green"></cube>
        <cube class="mid" id="yellow"></cube>
        <cube></cube>
      </box>
      <box>
        <pyramid></pyramid>
      </box>
    `,
    elements: '.table box:first-of-type',
    help: 'box:first-of-type',
  },
  {
    title: 'Select the last cubes',
    content: /* html */ `
      <basket id="orange">
        <cube class="small" id="yellow"></cube>
        <cube animation="shake"></cube>
      </basket>
      <box></box>
      <box>
        <cube class="small" id="green"></cube>
        <cube class="mid" id="yellow"></cube>
        <cube animation="shake"></cube>
      </box>
      <box>
        <airplane></airplane>
      </box>
    `,
    elements: '.table cube:last-of-type',
    help: 'cube:last-of-type',
  },
  {
    title: 'Select the yellow cube in the 3rd box',
    content: /* html */ `
      <box>
        <cube class="mid" id="green"></cube>
        <cube></cube>
      </box>
      <box>
        <airplane></airplane>
      </box>
      <box>
        <cube animation="shake" class="small" id="yellow"></cube>
      </box>
      <box>
        <cube class="small" id="green"></cube>
        <cube class="mid" id="yellow"></cube>
        <cube></cube>
      </box>
    `,
    elements: '.table cube:only-of-type',
    help: 'cube:only-of-type',
  },
  {
    title: 'Select the top cubes',
    content: /* html */ `
      <box>
        <pyramid></pyramid>
      </box>
      <box id="old">
        <cube animation="shake" class="mid"></cube>
        <cube id="green"></cube></box>
      <box>
        <cube animation="shake" class="small" id="green"></cube>
        <cube class="mid"></cube>
        <cube id="yellow"></cube>
      </box>
    `,
    elements: '.table cube:first-child',
    help: 'cube:first-child',
  },
  {
    title: 'Select the basket in the 1st box and the last basket on the table',
    content: /* html */ `
      <box>
        <basket animation="shake"></basket>
      </box>
      <box>
        <pyramid></pyramid>
      </box>
      <basket id="orange"></basket>
      <basket animation="shake" id="orange"></basket>
    `,
    elements: '.table basket:last-child',
    help: 'basket:last-child',
  },
  {
    title: 'Select the cube in the 1st basket',
    content: /* html */ `
      <box>
        <cube class="small"></cube>
        <cube class="mid" id="yellow"></cube>
        <cube></cube>
      </box>
      <box>
        <horse></horse>
      </box>
      <basket id="orange">
        <cube animation="shake"></cube>
      </basket>
      <basket id="orange">
        <cube class="small" id="yellow"></cube>
        <cube id="green"></cube>
      </basket>
    `,
    elements: '.table cube:only-child',
    help: 'cube:only-child',
  },
  {
    title: 'Select the 2nd basket',
    content: /* html */ `
      <box></box>
      <basket id="orange"></basket>
      <basket animation="shake" id="orange"></basket>
      <basket id="orange"></basket>
    `,
    elements: '.table :nth-child(3)',
    help: ':nth-child(3)',
  },
  {
    title: 'Select the yellow cube in the last box',
    content: /* html */ `
      <box>
        <cube class="small"></cube>
        <cube class="mid" id="yellow"></cube>
        <cube></cube>
      </box>
      <basket id="orange">
        <cube></cube>
      </basket>
      <box>
        <airplane></airplane>
      </box>
      <box>
        <cube animation="shake" class="mid" id="yellow"></cube>
        <cube id="green"></cube>
      </box>
    `,
    elements: '.table box:last-child cube:nth-last-child(2)',
    help: 'box:last-child cube:nth-last-child(2)',
  },
  {
    title: 'Select the empty basket',
    content: /* html */ `
      <box>
        <horse></horse>
      </box>
      <basket id="orange">
        <horse class="mid"></horse>
      </basket>
      <basket animation="shake" id="orange"></basket>
      <box>
        <pyramid></pyramid>
      </box>
    `,
    elements: '.table basket:empty',
    help: 'basket:empty',
  },
  {
    title: 'Select the cubes in the 2nd and 3rd boxes',
    content: /* html */ `
      <box>
        <cube class="small" id="green"></cube>
      </box>
      <box>
        <cube animation="shake" material="wood"></cube>
      </box>
      <box>
        <cube animation="shake"></cube>
      </box>
      <box>
        <cube class="small" id="yellow"></cube>
      </box>
    `,
    elements: '.table cube:not(.small)',
    help: 'cube:not(.small)',
  },
];

export default gameLevelObject;
