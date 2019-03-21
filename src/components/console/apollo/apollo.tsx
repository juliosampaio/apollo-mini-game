import React, { useState } from "react";
import { Tile } from "../tile";
import { Display } from "../display";
import style from "../../../theme";
import { IShape } from "../../../constants";
import { drawShapes } from "../display/display.hooks";

const ApolloWrapper = style.div`

`;
const L: IShape = {
  matrix: [[1, 0], [1, 0], [1, 0], [1, 1]],
  startColIndex: 0,
  startRowIndex: 0
};
const Z: IShape = {
  matrix: [[1, 1, 0], [0, 1, 1]],
  startColIndex: 5,
  startRowIndex: 10
};
const l: IShape = {
  matrix: [[1,1,1],[0,0,1]],
  startColIndex: 0,
  startRowIndex: 0
};
const i: IShape = {
  matrix: [[1],[1]],
  startColIndex: 0,
  startRowIndex: 0
};
const shapesC: any = { L, Z, l, i };

export const Apollo = () => {
  const [shapes, setShapes] = useState([]);

  return (
    <ApolloWrapper>
      <Display rows={20} columns={10} shapes={shapes} />
      <div>
        <select id="shape">
          <option value="L">L</option>
          <option value="Z">Z</option>
          <option value="l">l</option>
          <option value="i">i</option>
        </select>
        <input
          type="number"
          id="row"
          placeholder="Column"
          min="0"
          max="9"
          defaultValue="9"
        />
        <input
          type="number"
          id="column"
          placeholder="Row"
          min="0"
          max="19"
          defaultValue="19"
        />
        <button
          onClick={() => {
            const row: any = document.getElementById("row");
            const column: any = document.getElementById("column");
            const c: any = document.getElementById("shape");
            const s: any = shapesC[c.value];
            s.startColIndex = parseInt(row.value);
            s.startRowIndex = parseInt(column.value);
            setShapes([s] as any);
          }}
        >
          Draw
        </button>
      </div>
    </ApolloWrapper>
  );
};
