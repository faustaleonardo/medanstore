export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'FETCH_USER':
      return { ...state, auth: payload || false };
    case 'LOGIN':
      return { ...state, auth: payload || false };
    default:
      return state;
  }
};
