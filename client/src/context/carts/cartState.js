import React, { createContext, useReducer } from 'react';

import cartReducer from './cartReducer';

const initialState = {
  carts: []
};

export const CartContext = createContext(initialState);
const { Provider } = CartContext;

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const countQuantity = () => {
    return state.carts.reduce((acc, cart) => acc + cart.quantity, 0);
  };

  const countTotalPrice = () => {
    return state.carts.reduce((acc, cart) => acc + cart.totalPrice, 0);
  };

  const addCart = ({ id, name, price, pictures }, operator) => {
    const existingItem = state.carts.find(cart => cart.id === id);
    if (existingItem) return updateCart({ id, operator });

    const cart = {
      id,
      name,
      price,
      picturePath: pictures[0].path,
      quantity: 1,
      totalPrice: price * 1
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
        countQuantity,
        countTotalPrice,
        addCart,
        updateCart,
        deleteCart
      }}
    >
      {children}
    </Provider>
  );
};
