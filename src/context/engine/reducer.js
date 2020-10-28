import { isOn } from '../../utils';

const LS_KEY = 'apollo-mini-game';
const TOGGLE_POWER = 'TOGGLE_POWER';
const TOGGLE_SOUND = 'TOGGLE_SOUND';

const ON = 'on';
const OFF = 'off';

export const INITIAL_STATE = JSON.parse(localStorage.getItem(LS_KEY)) || {
  power: OFF,
  level: '',
  speed: '',
  sound: ON,
  matrix: [[]],
  previewMatrix: [[]],
  gameStatus: {
    score: 0,
  },
};

const withLocalStorage = (action) => (...args) => {
  const state = action(...args);
  localStorage.setItem(LS_KEY, JSON.stringify(state));
  return state;
};

const togglePower = (state) => ({
  ...state,
  power: isOn(state.power) ? OFF : ON,
});

const toggleSound = (state) => ({
  ...state,
  sound: isOn(state.sound) ? OFF : ON,
});

const ACTIONS = {
  [TOGGLE_POWER]: withLocalStorage(togglePower),
  [TOGGLE_SOUND]: withLocalStorage(toggleSound),
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
  };
};
