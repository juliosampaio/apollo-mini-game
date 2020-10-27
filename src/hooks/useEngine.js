import { useContext } from 'react';
import { Engine } from '../context';
export const useEngine = () => {
  const context = useContext(Engine.EngineContext);
  if (!context) throw new Error('No EngineProvider found');
  return context;
};

// import React, { useEffect, useCallback } from 'react';
// import { buildMatrix } from '../utils';
// import { IntroGame } from '../games';
// import { useAnimationFrame } from './useAnimationFrame';
// const TOGGLE_POWER = 'TOGGLE_POWER';
// const TOGGLE_SOUND = 'TOGGLE_SOUND';
// const SET_CURRENT_GAME = 'SET_CURRENT_GAME';
// const GET_GAME_STATUS = 'GET_GAME_STATUS';
// const ON = 'on';
// const OFF = 'off';
// const SOUND = {
//   ON,
//   OFF,
// };
// const POWER = {
//   ON,
//   OFF,
// };
// const MATRIX = buildMatrix(20, 10);
// const PREVIEW_MATRIX = buildMatrix(4, 4);
// const INITIAL_STATE = {
//   power: POWER.OFF,
//   sound: SOUND.OFF,
//   matrix: MATRIX,
//   previewMatrix: PREVIEW_MATRIX,
// };

// const buildDispatcher = (dispatch, type) => (payload) =>
//   dispatch({ type, payload });

// const engineReducer = (state, action) => {
//   switch (action.type) {
//     case TOGGLE_POWER: {
//       const { OFF, ON } = POWER;
//       return {
//         ...INITIAL_STATE,
//         power: state.power === ON ? OFF : ON,
//         sound: state.power === ON ? OFF : ON,
//       };
//     }
//     case TOGGLE_SOUND: {
//       const { OFF, ON } = SOUND;
//       return {
//         ...state,
//         sound: state.sound === ON ? OFF : ON,
//       };
//     }
//     case SET_CURRENT_GAME: {
//       return {
//         ...state,
//         currentGame: action.payload.game,
//       };
//     }
//     case GET_GAME_STATUS: {
//       return {
//         ...state,
//         gameStatus: state?.currentGame?.getStatus(),
//       };
//     }
//     default: {
//       return { ...state, now: Date.now() };
//     }
//   }
// };

// export const useEngine = (reducer = engineReducer) => {
//   const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE);

//   const togglePower = useCallback(buildDispatcher(dispatch, TOGGLE_POWER), [
//     dispatch,
//     TOGGLE_POWER,
//   ]);

//   const toggleSound = useCallback(buildDispatcher(dispatch, TOGGLE_SOUND), [
//     dispatch,
//     TOGGLE_SOUND,
//   ]);

//   const setCurrentGame = useCallback(
//     buildDispatcher(dispatch, SET_CURRENT_GAME),
//     [dispatch, SET_CURRENT_GAME]
//   );

//   const getGameStatus = buildDispatcher(dispatch, GET_GAME_STATUS);

//   useEffect(() => {
//     if (state.power === POWER.ON) {
//       const game = new IntroGame(state.matrix);
//       game.start();
//       setCurrentGame({ game });
//     }
//   }, [setCurrentGame, state.matrix, state.power]);

//   useAnimationFrame(() => {
//     getGameStatus();
//   });

//   return { ...state, togglePower, toggleSound };
// };
