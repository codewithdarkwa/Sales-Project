export default (state, action) => {
  switch (action.type) {
    case "ADD_PAYMENT":
      return {
        ...state,
        payments: [action.payload, ...state.payments],
      };
    default:
      return state;
  }
};
