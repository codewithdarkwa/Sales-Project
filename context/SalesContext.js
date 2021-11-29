import React, { createContext, useReducer } from "react";

import reducer from "./reducer";

const initialState = {
  payments: [],
};

export const SalesContext = createContext(initialState);

export const SalesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addPayment = (payment) => {
    dispatch({
      type: "ADD_PAYMENT",
      payload: payment,
    });
  };
  const deletePaymentHistory = (id) => {
    dispatch({
      type: "DELETE_PAYMENT_HISTORY",
      payload: id,
    });
  };

  return (
    <SalesContext.Provider
      value={{ payments: state.payments, addPayment, deletePaymentHistory }}
    >
      {children}
    </SalesContext.Provider>
  );
};
