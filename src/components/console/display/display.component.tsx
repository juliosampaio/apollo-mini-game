import React, { FunctionComponent, useEffect } from "react";
import { Tile } from "../tile/tile.component";
import style from "../../../theme";
import { displayStyle } from "./display.style";
import { useTileMatrix } from "./display.hooks";

export interface DisplayProps {
  rows: number;
  columns: number;
  shapes?: any;
}

const DisplayWrapper = style.div`${displayStyle}`;

export const Display: FunctionComponent<DisplayProps> = ({
  rows,
  columns,
  shapes
}) => {
  const tileMatrix = useTileMatrix(rows, columns, shapes);
  return (
    <DisplayWrapper rows={rows} columns={columns}>
      {tileMatrix.map(({ status }, idx) => {
        return <Tile key={idx} status={status} />;
      })}
    </DisplayWrapper>
  );
};

Display.defaultProps = {};
