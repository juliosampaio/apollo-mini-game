import { css } from "../../../theme";
import { TileProps } from "./tile.component";

export const tileStyle = css<TileProps>`
  background-color: ${props => props.theme.primaryColor};
`;
