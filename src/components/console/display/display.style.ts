import { css } from "../../../theme";
import { DisplayProps } from "./display.component";

export const displayStyle = css<DisplayProps>`

  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, minmax(10px, 1fr));
  grid-template-rows: repeat(${({ rows }) => rows}, minmax(10px, 1fr));
  background-color: ${({ theme }) => theme.Display.colors.background};
`;
