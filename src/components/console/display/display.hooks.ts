import { useState, useEffect } from "react";
import { IShape, IMatrixTile, TILE_STATUS, OFF } from "../../../constants";

const generateInitialMatrixState = (rows: number, columns: number) =>
  Array(rows * columns)
    .fill(0)
    .map(
      () =>
        ({
          status: TILE_STATUS[OFF]
        } as IMatrixTile)
    );

export const drawShapes = (
  shapes: IShape[],
  columns: number,
  rows: number,
  gridState: IMatrixTile[]
) => {
  if (gridState.length === 0) {
    return gridState;
  }

  const gridStateCopy = [...gridState];
  const rowsIndex = columns * rows - columns;

  shapes.forEach(shape => {
    const shapeCopy = { ...shape };
    let startIndexRow = shapeCopy.startRowIndex * columns;
    let startIndexColumn = shapeCopy.startColIndex;
    const shapeRows = shapeCopy.matrix.length;
    const exeedsColumns =
      startIndexColumn + shapeCopy.matrix[0].length > columns;
    const exeedsRows = shapeRows + startIndexRow > rowsIndex;
    let columnsToDecrease = 0;
    let rowsToDecrease = 0;

    if (exeedsColumns) {
      columnsToDecrease =
        startIndexColumn + shapeCopy.matrix[0].length - columns;
      startIndexColumn = startIndexColumn - columnsToDecrease;
    }
    if (exeedsRows) {
      rowsToDecrease = ((shapeRows + startIndexRow - rowsIndex) * columns) - columns;
      startIndexRow = startIndexRow - rowsToDecrease;
    }
    let startIndex = startIndexRow + startIndexColumn;

    shapeCopy.matrix.forEach(row => {
      row.forEach(value => {
        gridStateCopy[startIndex].status = TILE_STATUS[value];
        startIndex++;
      });
      shapeCopy.startRowIndex++;
      startIndexRow = shapeCopy.startRowIndex * columns - rowsToDecrease;
      startIndexColumn = shapeCopy.startColIndex - columnsToDecrease;
      startIndex = startIndexRow + startIndexColumn;
    });
  });

  return gridStateCopy;
};

export const useTileMatrix = (
  rows: number,
  columns: number,
  shapes: any
): IMatrixTile[] => {
  const initialState = generateInitialMatrixState(rows, columns);
  const [matrix, setMatrix] = useState(initialState);

  useEffect(() => {
    const newMatrix = drawShapes(shapes, columns, rows, matrix);
    setMatrix(newMatrix);
  }, [shapes]);

  return matrix;
};
