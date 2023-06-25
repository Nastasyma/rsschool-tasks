export interface IGameElemsObject {
  level: number;
  rule: boolean;
  isHelp: boolean;
  helped: boolean;
  checkedStatus: string[] | null;
  game: {
    game: HTMLElement | null;
    gameWrapper: HTMLElement | null;
    gameTable: HTMLElement | null;
    tableBottom: HTMLElement | null;
    table: HTMLElement | null;
    burger: HTMLElement | null;
    helpBtn: HTMLElement | null;
    menu: HTMLElement | null;
    navItems: HTMLElement[];
    levelsCheck: HTMLElement[];
    resetBtn: HTMLElement | null;
    appWrapper: HTMLElement | null;
    tooltip: HTMLElement | null;
    editor: HTMLElement | null;
    editorMarkupText: HTMLElement | null;
    gameTitle: HTMLElement | null;
    editorInput: HTMLInputElement | null;
    editorForm: HTMLFormElement | null;
    editorBtn: HTMLElement | null;
    editorSpan: HTMLElement | null;
  };
}
