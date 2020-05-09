import React from "react";

const TOGGLE_POWER = "TOGGLE_POWER";

const buildMatrix = (rows, cols, fillWith = 0) => {
  const matrix = new Array(rows).fill(0);
  matrix.forEach((_, i) => (matrix[i] = new Array(cols).fill(fillWith)));
  return matrix;
};

const matrix = buildMatrix(20, 10);

const INITIAL_STATE = { power: "off", matrix };

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
  return { ...state, togglePower };
};
