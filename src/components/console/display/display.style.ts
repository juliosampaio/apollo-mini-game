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

export const levelDisplayStyle = css`
  font-family: ${({ theme }) => theme.Display.font.family};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  span {
    display: block;
    text-align: center;
  }
`;

export const displayRightAreaStyle = css`
  padding-left: 10px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.6fr 0.5fr 1fr;
`;

export const scoreDisplayStyle = css`
  font-family: ${({ theme }) => theme.Display.font.family};
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
`;
