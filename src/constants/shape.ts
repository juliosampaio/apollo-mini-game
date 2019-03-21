export interface ITileStatus {
  0: "off";
  1: "on";
  [key: number]: "on" | "off";
}

export interface IMatrixTile {
  status: "on" | "off";
}

export interface IShape {
  startRowIndex: number;
  startColIndex: number;
  matrix: Array<number[]>;
}

export const OFF = 0;
export const ON = 1;
export const TILE_STATUS: ITileStatus = { [OFF]: "off", [ON]: "on" };
