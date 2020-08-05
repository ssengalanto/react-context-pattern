import React, { useReducer, createContext, useContext } from 'react';

import { CountActions } from './count.actions';
import { countReducer, CountState, countState } from './count.reducer';

type Dispatch = React.Dispatch<CountActions>;

const CountStateContext = createContext<CountState | undefined>(undefined);
const CountDispatchContext = createContext<Dispatch | undefined>(undefined);

const CountProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(countReducer, countState);
  return (
    <CountStateContext.Provider value={state}>
      <CountDispatchContext.Provider value={dispatch}>
        {children}
      </CountDispatchContext.Provider>
    </CountStateContext.Provider>
  );
};

const useCountState = () => {
  const context = useContext(CountStateContext);
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider');
  }
  return context;
};

const useCountDispatch = () => {
  const context = useContext(CountDispatchContext);
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider');
  }
  return context;
};

const useCount = (): [CountState, Dispatch] => {
  return [useCountState(), useCountDispatch()];
};

export { CountProvider, useCount };
