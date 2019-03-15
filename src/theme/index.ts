import * as styledComponents from "styled-components";
import { defaultTheme } from "./default.theme";
import { ThemeInterface } from "./interface.theme";

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  ThemeInterface
>;

export const theme = defaultTheme;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
