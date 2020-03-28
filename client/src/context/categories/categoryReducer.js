export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_CATEGORIES':
      return { ...state, isLoading: false, categories: payload };
    default:
      return state;
  }
};
