import React, { createContext, useReducer } from 'react';
import axios from 'axios';

import categoryReducer from './categoryReducer';

const initialState = {
  categories: [],
  error: null,
  isLoading: true
};

export const CategoryContext = createContext(initialState);
const { Provider } = CategoryContext;

export const CategoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(categoryReducer, initialState);

  // actions
  const getCategories = async () => {
    const response = await axios.get('/api/v1/categories');
    const categories = response.data.data.data;

    dispatch({ type: 'GET_CATEGORIES', payload: categories });
  };

  const setError = data => {
    dispatch({ type: 'CATEGORY_ERROR', payload: data });
  };

  return (
    <Provider
      value={{
        categories: state.categories,
        error: state.error,
        isLoading: state.isLoading,
        getCategories,
        setError
      }}
    >
      {children}
    </Provider>
  );
};
