import React, { FunctionComponent } from "react";
import { Tile } from "../tile/tile.component";
import style from "../../../theme";
import { displayStyle } from "./display.style";

export interface DisplayProps {
  rows: number;
  columns: number;
}

const DisplayWrapper = style.div`${displayStyle}`;

export const Display: FunctionComponent<DisplayProps> = ({ rows, columns }) => (
  <DisplayWrapper rows={rows} columns={columns}>
    {Array(rows * columns)
      .fill(rows)
      .map((_, idx) => (
        <Tile key={idx} status="off" />
      ))}
  </DisplayWrapper>
);

Display.defaultProps = {};