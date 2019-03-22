import { css } from "../../../theme";
import { TileProps } from "./tile.component";

export const tileStyle = css<TileProps>`
  border: 1px solid;
  border-radius: 2px;
  border-color: ${({ status, theme }) =>
    theme.Tile.colors[status === "on" ? "active" : "inactive"]};
  padding: 1px;

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${({ status, theme }) =>
      theme.Tile.colors[status === "on" ? "active" : "inactive"]};
  }
`;
