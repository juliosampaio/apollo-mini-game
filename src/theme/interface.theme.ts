export interface IDisplay {
  colors: {
    active: string;
    background: string;
    inactive: string;
  };
}

export interface ITile extends IDisplay {}

export interface ThemeInterface {
  Display: IDisplay;
  Tile: ITile;
}
