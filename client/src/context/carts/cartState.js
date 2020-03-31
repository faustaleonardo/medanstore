import React, { createContext, useReducer } from 'react';

import cartReducer from './cartReducer';

const initialState = {
  carts: []
};

export const CartContext = createContext(initialState);
const { Provider } = CartContext;

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addCart = ({ id, name, price, pictures }, newQuantity, operator) => {
    const existingItem = state.carts.find(cart => cart.id === id);
    if (existingItem) return updateCart({ id, newQuantity, operator });

    const cart = {
      id,
      name,
      price,
      picturePath: pictures[0].path,
      quantity: newQuantity,
      totalPrice: price
    };

    dispatch({ type: 'ADD_CART', payload: cart });
  };

  const updateCart = data => {
    dispatch({ type: 'UPDATE_CART', payload: data });
  };

  const deleteCart = id => {
    dispatch({ type: 'DELETE_CART', payload: id });
  };

  return (
    <Provider
      value={{
        carts: state.carts,
        addCart,
        updateCart,
        deleteCart
      }}
    >
      {children}
    </Provider>
  );
};
