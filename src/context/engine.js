import React, { createContext, useReducer } from 'react';

export const EngineContext = createContext();

const INITIAL_STATE = {};

const engineReducer = () => {};

export const Provider = ({ children }) => {
  const engine = useReducer(engineReducer, INITIAL_STATE);
  return (
    <EngineContext.Provider value={engine}>{children}</EngineContext.Provider>
  );
};
