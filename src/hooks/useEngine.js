import { useContext } from 'react';
import { Engine } from '../context';
export const useEngineState = () => {
  const context = useContext(Engine.Context);
  if (!context) throw new Error('No EngineProvider found');
  return context;
};

export const useEngineActions = () => {
  const context = useContext(Engine.ActionsContext);
  if (!context) throw new Error('No EngineProvider found');
  return context;
};

export const useEngine = () => {
  const state = useEngineState();
  const actions = useEngineActions();
  return [state, actions];
};
