export default (state, action) => {
  switch (action.type) {
    case "ADD_PAYMENT":
      return {
        ...state,
        payments: [action.payload, ...state.payments],
      };
    case "DELETE_PAYMENT_HISTORY":
      return {
        ...state,
        payments: state.payments.filter(
          (payment) => payment.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
