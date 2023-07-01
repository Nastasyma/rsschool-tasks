import { IGameElemsObject } from '../interfaces/gameElInterface';

const gameObject: IGameElemsObject = {
  level: 0,
  rule: false,
  isHelp: false,
  helped: false,
  checkedStatus: [],
  game: {
    game: null,
    gameWrapper: null,
    gameTable: null,
    tableBottom: null,
    table: null,
    burger: null,
    helpBtn: null,
    arrowLeft: null,
    arrowRight: null,
    currentLevel: null,
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
    editorBtn: null,
    editorSpan: null,
  },
};

export default gameObject;
