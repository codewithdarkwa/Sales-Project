export default (state, action) => {
  switch (action.type) {
    case "GET_PAYMENTS":
      return {
        ...state,
        payments: action.payload,
      };
    case "ADD_PAYMENT":
      return {
        ...state,
        payments: [action.payload, ...state.payments],
      };
    case "UPDATE_PAYMENT":
      return {
        ...state,
        payments: [action.payload, ...state.payments],
      };
    case "DELETE_PAYMENT_HISTORY":
      return {
        ...state,
        payments: state.payments.filter(
          (payment) => payment._id !== action.payload
        ),
      };
    default:
      return state;
  }
};
