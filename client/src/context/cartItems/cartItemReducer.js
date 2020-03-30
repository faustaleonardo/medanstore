export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_CART_ITEMS':
      return { ...state, cartItems: payload };
    case 'ADD_ITEM_TO_CART':
      return { ...state, cartItems: [...state.cartItems, payload] };
    case 'UPDATE_ITEM_IN_CART':
      const cartItems = state.cartItems.map(cartItem => {
        if (cartItem.id === payload.id) cartItem[payload.id] = payload;
        return cartItem;
      });

      return {
        ...state,
        cartItems
      };
    case 'DELETE_ITEM_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== payload)
      };
    default:
      return state;
  }
};
