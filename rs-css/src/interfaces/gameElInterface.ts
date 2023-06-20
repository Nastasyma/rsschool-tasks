export interface IGameElemsObject {
  level: number;
  rule: boolean;
  game: {
    gameWrapper: HTMLElement | null;
    gameTable: HTMLElement | null;
    tableBottom: HTMLElement | null;
    table: HTMLElement | null;
    burger: HTMLElement | null;
    menu: HTMLElement | null;
    navItems: HTMLElement[];
    levelsCheck: HTMLElement[];
    appWrapper: HTMLElement | null;
    tooltip: HTMLElement | null;
    editor: HTMLElement | null;
    editorMarkupText: HTMLElement | null;
    gameTitle: HTMLElement | null;
    editorInput: HTMLInputElement | null;
    editorForm: HTMLFormElement | null;
  };
}
