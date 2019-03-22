import { css } from "../../../theme";

export const wrapperStyle = css`
  display: grid;  
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  background-color: ${props => props.theme.Console.colors.background};
`;
