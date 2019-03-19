import { ThemeInterface } from "./interface.theme";

const Colors = {
  Olivine: "#96B481",
  BattleshipGray: "#88A274",
  Black: "#000000"
};

const Display = {
  colors: {
    active: Colors.Black,
    background: Colors.BattleshipGray,
    inactive: Colors.Olivine
  }
};

const Tile = {
  ...Display
};

export const defaultTheme: ThemeInterface = {
  Tile,
  Display
};
