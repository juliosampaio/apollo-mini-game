import React, { FunctionComponent, useEffect } from "react";
import { Tile } from "../tile/tile.component";
import style from "../../../theme";
import { displayWrapperStyle, tileMatrixStyle } from "./display.style";
import { useTileMatrix } from "./display.hooks";

export interface TileMatrixProps {
  rows: number;
  columns: number;
  shapes?: any;
  bordered?: boolean;
}

const DisplayWrapper = style.div`${displayWrapperStyle}`;

const DisplayLeftArea = style.div`
  display: grid;
`;

const TileMatrixWrapper = style.div`
  ${tileMatrixStyle}    
`;

const ScoreDisplay = style.div`
  
`;

const DisplayRightArea = style.div`
  padding-left: 10px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: .6fr .5fr 1fr;
`;

const UnknowElement = style.div`
  border: 1px solid red;
`;

const LevelDisplay = style.div`
  border: 1px solid red;
`;

const TileMatrix: FunctionComponent<TileMatrixProps> = ({
  rows,
  columns,
  shapes,
  bordered
}) => {
  const tileMatrix = useTileMatrix(rows, columns, shapes);
  return (
    <TileMatrixWrapper rows={rows} columns={columns} bordered={bordered}>
      {tileMatrix.map(({ status }, idx) => {
        return <Tile key={idx} status={status} />;
      })}
    </TileMatrixWrapper>
  );
};

export const Display: FunctionComponent<TileMatrixProps> = ({
  rows,
  columns,
  shapes
}) => {
  return (
    <DisplayWrapper>
      <DisplayLeftArea>
        <ScoreDisplay>♫ 0000</ScoreDisplay>
        <TileMatrix rows={rows} columns={columns} shapes={shapes} bordered />
      </DisplayLeftArea>
      <DisplayRightArea>
        <TileMatrix rows={4} columns={4} shapes={[]} />
        <UnknowElement />
        <LevelDisplay />
      </DisplayRightArea>
    </DisplayWrapper>
  );
};

Display.defaultProps = {};
