import React, { createContext, useReducer } from 'react';
import { useIntroGame, useGameStatus } from './effects';

import {
  buildActionsDispatchers,
  engineReducer,
  buildInitialState,
} from './reducer';

export const Context = createContext();
export const ActionsContext = createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(engineReducer, buildInitialState());
  const actions = buildActionsDispatchers(dispatch);
  useIntroGame(state, actions);
  useGameStatus(actions);
  return (
    <Context.Provider value={state}>
      <ActionsContext.Provider value={actions}>
        {children}
      </ActionsContext.Provider>
    </Context.Provider>
  );
};
