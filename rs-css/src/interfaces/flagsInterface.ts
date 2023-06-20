export interface IFlagsObject {
  level: number;
  rule: boolean;
  game: {
    gameTable: HTMLElement | null;
    burger: HTMLElement | null;
  };
}
