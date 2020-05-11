import React, { useEffect, useCallback } from "react";
import { buildMatrix } from "../utils";
import { IntroGame } from "../games";
import { useAnimationFrame } from "./useAnimationFrame";
const TOGGLE_POWER = "TOGGLE_POWER";
const SET_CURRENT_GAME = "SET_CURRENT_GAME";
const GET_GAME_STATUS = "GET_GAME_STATUS";
const POWER = {
  ON: "on",
  OFF: "of",
};
const MATRIX = buildMatrix(20, 10);
const INITIAL_STATE = { power: POWER.OFF, matrix: MATRIX };

const buildDispatcher = (dispatch, type) => (payload) =>
  dispatch({ type, payload });

const engineReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_POWER: {
      const { OFF, ON } = POWER;
      return {
        ...state,
        power: state.power === ON ? OFF : ON,
      };
    }
    case SET_CURRENT_GAME: {
      return {
        ...state,
        currentGame: action.payload.game,
      };
    }
    case GET_GAME_STATUS: {
      return {
        ...state,
        gameStatus: state.currentGame && state.currentGame.getStatus(),
      };
    }
    default: {
      return { ...state, now: Date.now() };
    }
  }
};

export const useEngine = (reducer = engineReducer) => {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE);

  const togglePower = useCallback(buildDispatcher(dispatch, TOGGLE_POWER), [
    dispatch,
    TOGGLE_POWER,
  ]);

  const setCurrentGame = useCallback(
    buildDispatcher(dispatch, SET_CURRENT_GAME),
    [dispatch, SET_CURRENT_GAME]
  );

  const getGameStatus = useCallback(buildDispatcher(dispatch, GET_GAME_STATUS));

  useEffect(() => {
    if (state.power === POWER.ON) {
      const game = new IntroGame(state.matrix);
      game.start();
      setCurrentGame({ game });
    }
  }, [setCurrentGame, state.matrix, state.power]);

  useAnimationFrame(() => {
    getGameStatus();
  });
  return { ...state, togglePower };
};
