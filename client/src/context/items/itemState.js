import React, { createContext, useReducer } from 'react';
import axios from 'axios';

import itemReducer from './itemReducer.js';

const initialState = {
  items: [],
  error: null,
  isLoading: true
};

export const ItemContext = createContext(initialState);
const { Provider } = ItemContext;

export const ItemProvider = ({ children }) => {
  const [state, dispatch] = useReducer(itemReducer, initialState);

  // actions
  const getItems = async page => {
    const response = await axios.get(`/api/v1/items?page=${page}`);
    const items = response.data.data.data;

    dispatch({ type: 'GET_ITEMS', payload: items });
  };

  const addItem = item => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const updateItem = async (id, data) => {
    const response = await axios.patch(`/api/v1/items/${id}`, data);
    const item = response.data.data.data;

    dispatch({ type: 'UPDATE_ITEM', payload: item });
  };

  const deleteItem = async id => {
    await axios.delete(`/api/v1/items/${id}`);

    dispatch({ type: 'DELETE_ITEM', payload: id });
  };

  const setError = data => {
    dispatch({ type: 'ITEM_ERROR', payload: data });
  };

  return (
    <Provider
      value={{
        items: state.items,
        error: state.error,
        isLoading: state.isLoading,
        getItems,
        addItem,
        updateItem,
        deleteItem,
        setError
      }}
    >
      {children}
    </Provider>
  );
};
