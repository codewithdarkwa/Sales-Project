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
      const res = await axios.get("http://localhost:5000/getSales");
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
        "http://localhost:5000/addSale",
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
  const updatePayment = async (paymentUpadte) => {
    try {
      const res = await axios.put(`http://localhost:5000/editSale/`, {
        paymentUpadte,
      });
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
      axios.delete(`http://localhost:5000/deleteSale/${id}`);

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
