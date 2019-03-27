import React from "react";
import style from "../../../theme";
import { buttonStyle } from "./button.style";

const ButtonComponent = style.button`${buttonStyle}`;

export const Button = () => {
  return <ButtonComponent />;
};
