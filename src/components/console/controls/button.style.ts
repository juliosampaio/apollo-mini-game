import { css } from "../../../theme";

export const buttonStyle = css`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: yellow;
  border: none;
  outline: none;

  &:active {
    background-color: #afb55e;
    transform: translateY(0.1rem);
  }
`;
