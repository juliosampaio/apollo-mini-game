import { useState, useEffect } from "react";


interface ITileStatus {
  0: "off";
  1: "on";
  [key: number]: "on" | "off";
}

interface IMatrixTile {
  status: "on" | "off";
}

interface ISetTileMatrix {
  (matrix: IMatrixTile[]): void;
}

const OFF = 0;
const ON = 1;
const TILE_STATUS: ITileStatus = { [OFF]: "off", [ON]: "on" };

const generateInitialMatrixState = (rows: number, columns: number) =>
  Array(rows * columns)
    .fill(0)
    .map(() => <IMatrixTile>{ status: TILE_STATUS[OFF] });

export const drawShapes = (
  shapes: any = [],
  columns: number,
  gridState: IMatrixTile[]
) => {
  let rowIndex = 0;
  let colIndex = 0;
  let startIndexRow = rowIndex * columns;
  let startIndexColumn = colIndex;
  let startIndex = startIndexRow + startIndexColumn;

  if (gridState.length === 0) {
    return gridState;
  }

  shapes.forEach((shape: any) => {
    shape.forEach((row: any) => {
      row.forEach((value: number, rIdx: number) => {
        gridState[startIndex].status = TILE_STATUS[value];
        startIndex++;
      });
      rowIndex++;
      startIndexRow = rowIndex * columns;
      startIndexColumn = colIndex;
      startIndex = startIndexRow + startIndexColumn;
    });
  });
  return gridState;
};

export const useTileMatrix = (
  rows: number,
  columns: number,
  shapes: any
): [IMatrixTile[], ISetTileMatrix] => {
  console.log("Tile Matrix");
  const initialState = generateInitialMatrixState(rows, columns);
  const [matrix, setMatrix] = useState(initialState);

  useEffect(() => {
    console.log('wtf...');
    const newMatrix = drawShapes(shapes, columns, matrix);
    setMatrix(newMatrix);
  });

  return [matrix, <any>setMatrix];
};
