import React, { FunctionComponent, useEffect } from "react";
import { Tile } from "../tile/tile.component";
import style from "../../../theme";
import {
  displayRightAreaStyle,
  displayWrapperStyle,
  tileMatrixStyle,
  levelDisplayStyle,
  scoreDisplayStyle
} from "./display.style";
import { useTileMatrix } from "./display.hooks";

export interface DisplayProps {
  rows: number;
  columns: number;
  shapes?: any;
  speed: number;
  level: number;
}

export interface TileMatrixProps {
  rows: number;
  columns: number;
  shapes?: any;
  bordered?: boolean;
}

const DisplayWrapper = style.div`${displayWrapperStyle}`;

const DisplayLeftArea = style.div``;

const TileMatrixWrapper = style.div`${tileMatrixStyle}`;

const ScoreDisplay = style.div`${scoreDisplayStyle}`;

const DisplayRightArea = style.div`${displayRightAreaStyle}`;

const UnknowElement = style.div``;

const LevelDisplay = style.div`${levelDisplayStyle}`;

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

export const Display: FunctionComponent<DisplayProps> = ({
  rows,
  columns,
  shapes,
  speed,
  level
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
        <LevelDisplay>
          <span>Speed</span>
          <span>{speed}</span>
          <span>Level</span>
          <span>{level}</span>
        </LevelDisplay>
      </DisplayRightArea>
    </DisplayWrapper>
  );
};

Display.defaultProps = {};
