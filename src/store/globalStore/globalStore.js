import React, { useContext, useReducer, createContext } from 'react';
import { initialState, actions } from '../actions/index';

const StoreContext = createContext(initialState);

const reducer = (state, action) => {
    const act = actions[action.type];
    const update = act(state);
    return { ...state, ...update };
};

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <StoreContext.Provider value={{ state, dispatch }}>
        {children}
      </StoreContext.Provider>
    );
};
  
export const useStore = store => {
    const { state, dispatch } = useContext(StoreContext);
    return { state, dispatch };
};


