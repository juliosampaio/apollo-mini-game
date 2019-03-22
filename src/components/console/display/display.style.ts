import { css } from "../../../theme";
import { TileMatrixProps } from "./display.component";

export const tileMatrixStyle = css<TileMatrixProps>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, minmax(10px, 1fr));
  grid-template-rows: repeat(${({ rows }) => rows}, minmax(10px, 1fr));
  background-color: ${({ theme }) => theme.Display.colors.background};
  border: ${({ bordered, theme }) =>
    bordered ? `1px solid ${theme.Display.colors.active}` : "none"};
`;

export const displayWrapperStyle = css`
  display: grid;
  grid-template-columns: 0.7fr 0.3fr;
  background-color: ${({ theme }) => theme.Display.colors.background};
  padding: 4px;
`;
