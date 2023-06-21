import { IGameElemsObject } from '../interfaces/gameElInterface';

const flagsObject: IGameElemsObject = {
  level: 0,
  rule: false,
  game: {
    gameWrapper: null,
    gameTable: null,
    tableBottom: null,
    table: null,
    burger: null,
    menu: null,
    navItems: [],
    levelsCheck: [],
    resetBtn: null,
    appWrapper: null,
    tooltip: null,
    editor: null,
    editorMarkupText: null,
    gameTitle: null,
    editorInput: null,
    editorForm: null,
  },
};

export default flagsObject;
