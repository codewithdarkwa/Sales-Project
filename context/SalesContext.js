import React, { createContext, useReducer } from "react";
import axios from "axios";
import reducer from "./reducer";

const initialState = {
  payments: [],
};

export const SalesContext = createContext(initialState);

export const SalesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPayments = async () => {
    try {
      const res = await axios.get(
        "https://sale-submission.herokuapp.com/getSales"
      );
      dispatch({
        type: "GET_PAYMENTS",
        payload: res.data.sale,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addPayment = async (payment) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        "https://sale-submission.herokuapp.com/addSale",
        payment,
        config
      );
      dispatch({
        type: "ADD_PAYMENT",
        payload: res.data.sale,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const updatePayment = async (id, paymentUpdate) => {
    try {
      const res = await axios.put(
        `https://sale-submission.herokuapp.com/editSale/${id}`,
        paymentUpdate
      );
      dispatch({
        type: "UPDATE_PAYMENT",
        payload: res.data.sale,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const deletePaymentHistory = async (id) => {
    try {
      axios.delete(`https://sale-submission.herokuapp.com/deleteSale/${id}`);

      dispatch({
        type: "DELETE_PAYMENT_HISTORY",
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SalesContext.Provider
      value={{
        payments: state.payments,
        addPayment,
        updatePayment,
        deletePaymentHistory,
        getPayments,
      }}
    >
      {children}
    </SalesContext.Provider>
  );
};
