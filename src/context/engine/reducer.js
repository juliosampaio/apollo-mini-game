import { IntroGame } from '../../games';
import { ResetGame } from '../../games/reset';
import { buildMatrix, isOn } from '../../utils';

const LS_KEY = 'apollo-mini-game';
const TOGGLE_POWER = 'TOGGLE_POWER';
const TOGGLE_SOUND = 'TOGGLE_SOUND';
const SET_CURRENT_GAME = 'SET_CURRENT_GAME';
const GET_GAME_STATUS = 'GET_GAME_STATUS';
const RESET_CONSOLE = 'RESET_CONSOLE';

const ON = 'on';
const OFF = 'off';

export const buildInitialState = () => {
  return {
    power: OFF,
    level: '',
    speed: '',
    sound: ON,
    currentGame: null,
    gameStatus: {
      score: 0,
    },
  };
};

const withLocalStorage = (action) => (...args) => {
  const state = action(...args);
  localStorage.setItem(LS_KEY, JSON.stringify(state));
  return state;
};

const togglePower = (state) => {
  const power = isOn(state.power) ? OFF : ON;
  return isOn(power)
    ? {
        ...state,
        power,
        currentGame: new IntroGame().start(),
      }
    : buildInitialState();
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

const resetConsole = (state) => ({
  ...buildInitialState(),
  power: ON,
  currentGame: new ResetGame(),
});

const ACTIONS = {
  [TOGGLE_POWER]: togglePower,
  [TOGGLE_SOUND]: toggleSound,
  [SET_CURRENT_GAME]: setCurrentGame,
  [GET_GAME_STATUS]: getGameStatus,
  [RESET_CONSOLE]: resetConsole,
};

export const engineReducer = (
  state = buildInitialState(),
  { type, payload }
) => {
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
    resetConsole: () => dispatch({ type: RESET_CONSOLE }),
  };
};
