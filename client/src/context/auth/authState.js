import React, { createContext, useReducer } from 'react';
import authReducer from './authReducer';

const initialState = {
  auth: {}
};

export const AuthContext = createContext(initialState);
const { Provider } = AuthContext;

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return <Provider value={{ auth: state.auth }}>{children}</Provider>;
};
