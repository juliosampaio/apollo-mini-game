import { buildMatrix, isOn } from '../../utils';

const LS_KEY = 'apollo-mini-game';
const TOGGLE_POWER = 'TOGGLE_POWER';
const TOGGLE_SOUND = 'TOGGLE_SOUND';
const SET_CURRENT_GAME = 'SET_CURRENT_GAME';
const GET_GAME_STATUS = 'GET_GAME_STATUS';

const ON = 'on';
const OFF = 'off';

const MATRIX = buildMatrix(17, 10);
const PREVIEW_MATRIX = buildMatrix(4, 4);

export const INITIAL_STATE = {
  power: OFF,
  level: '',
  speed: '',
  sound: ON,
  matrix: MATRIX,
  previewMatrix: PREVIEW_MATRIX,
  gameStatus: {
    score: 0,
  },
};

const withLocalStorage = (action) => (...args) => {
  const state = action(...args);
  localStorage.setItem(LS_KEY, JSON.stringify(state));
  return state;
};

const togglePower = (state) => {
  const power = isOn(state.power) ? OFF : ON;
  console.log(power);
  return isOn(power)
    ? {
        ...state,
        power,
      }
    : INITIAL_STATE;
};

const toggleSound = (state) => ({
  ...state,
  sound: isOn(state.sound) ? OFF : ON,
});

const setCurrentGame = (state, currentGame) => ({
  ...state,
  currentGame,
});

const getGameStatus = (state) => ({
  ...state,
  gameStatus: state?.currentGame?.getStatus(),
});

const ACTIONS = {
  [TOGGLE_POWER]: togglePower,
  [TOGGLE_SOUND]: toggleSound,
  [SET_CURRENT_GAME]: setCurrentGame,
  [GET_GAME_STATUS]: getGameStatus,
};

export const engineReducer = (state = INITIAL_STATE, { type, payload }) => {
  const action = ACTIONS[type] || (() => state);
  const newState = action(state, payload);
  return newState;
};

export const buildActionsDispatchers = (dispatch) => {
  return {
    togglePower: () => dispatch({ type: TOGGLE_POWER }),
    toggleSound: () => dispatch({ type: TOGGLE_SOUND }),
    setCurrentGame: (payload) => dispatch({ type: SET_CURRENT_GAME, payload }),
    getGameStatus: () => dispatch({ type: GET_GAME_STATUS }),
  };
};
