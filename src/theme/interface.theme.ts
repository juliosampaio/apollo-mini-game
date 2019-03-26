export interface IConsole {
  colors: { background: string };
}

export interface IDisplay {
  font: { family: string };
  colors: {
    active: string;
    background: string;
    inactive: string;
  };
}

export interface ITile extends IDisplay {}

export interface ThemeInterface {
  Console: IConsole;
  Display: IDisplay;
  Tile: ITile;
}
