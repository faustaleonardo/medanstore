export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_CATEGORIES':
      return { ...state, isLoading: false, categories: payload };
    case 'ADD_CATEGORIES':
      return { ...state, categories: [...state.categories, payload] };
    case 'UPDATE_CATEGORIES':
      const categories = [...state.categories];
      const index = categories.findIndex(
        category => category.id === payload.id
      );
      categories[index] = payload;

      return {
        ...state,
        categories
      };
    case 'CATEGORY_ERROR':
      return { ...state, error: payload };
    default:
      return state;
  }
};
