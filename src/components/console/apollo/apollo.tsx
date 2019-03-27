import React, { useState } from "react";
import { Display } from "../display";
import { Controls } from "../controls";
import style from "../../../theme";
import { IShape } from "../../../constants";
import { wrapperStyle } from "./apollo.style";

const ApolloWrapper = style.div`${wrapperStyle}`;

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
  matrix: [[1, 1, 1], [0, 0, 1]],
  startColIndex: 0,
  startRowIndex: 0
};
const i: IShape = {
  matrix: [[1], [1]],
  startColIndex: 0,
  startRowIndex: 0
};
const C: IShape = {
  matrix: [[0, 1, 0], [1, 1, 1], [0, 1, 0], [1, 0, 1]],
  startColIndex: 0,
  startRowIndex: 0
};
const shapesC: any = { L, Z, l, i, C };

export const Apollo = () => {
  const [shapes, setShapes] = useState([]);

  return (
    <ApolloWrapper>
      <Display rows={20} columns={10} shapes={shapes} speed={0} level={0} />
      <Controls />
      {/* <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="shape">Shape</label>
        <select id="shape">
          {Object.keys(shapesC).map(k => (
            <option key={k} value={k}>
              {k}
            </option>
          ))}
        </select>
        <label htmlFor="row">Row</label>
        <input
          type="number"
          id="row"
          placeholder="Row"
          min="0"
          max="19"
          defaultValue="19"
        />
        <label htmlFor="column">column</label>
        <input
          type="number"
          id="column"
          placeholder="Column"
          min="0"
          max="9"
          defaultValue="9"
        />
        <button
          onClick={() => {
            const row: any = document.getElementById("row");
            const column: any = document.getElementById("column");
            const c: any = document.getElementById("shape");
            const s: any = shapesC[c.value];
            s.startColIndex = parseInt(column.value);
            s.startRowIndex = parseInt(row.value);
            setShapes([s] as any);
          }}
        >
          Draw
        </button>
      </div> */}
    </ApolloWrapper>
  );
};
