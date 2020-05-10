import React from "react";
import { buildMatrix } from "../utils";
import * as games from "../games";
import { useAnimationFrame } from "./useAnimationFrame";
const TOGGLE_POWER = "TOGGLE_POWER";

const matrix = buildMatrix(20, 10);
games.intro.matrix = matrix;
games.intro.start();
const INITIAL_STATE = { power: "off", matrix, games };

const buildDispatcher = (dispatch, type) => () => dispatch({ type });

const engineReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_POWER: {
      return { ...state, power: state.power === "on" ? "off" : "on" };
    }
    default: {
      return state;
    }
  }
};

export const useEngine = (reducer = engineReducer) => {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE);
  const togglePower = buildDispatcher(dispatch, TOGGLE_POWER);
  useAnimationFrame(() => togglePower());
  return { ...state, togglePower };
};
