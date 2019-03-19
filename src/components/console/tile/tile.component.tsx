import React, { FunctionComponent } from "react";
import { tileStyle } from "./tile.style";
import style from "../../../theme";

export interface TileProps {
  status: "on" | "off";
  className?: string;
}

export const Tile: FunctionComponent<TileProps> = style.div`${tileStyle}`;

Tile.defaultProps = {
  status: "off"
};
