import React from "react";
import { ScrollView, Platform, KeyboardAvoidingView } from "react-native";

//importing components
import { Header, TotalSales } from "../components/Header";
import CurrentBonusSales from "../components/Current_Bonus_Sales";
import PaymentButton from "../components/PaymentButton";
import HistoryDetails from "../components/HistoryDetails";

const Dashboard = () => {
  return (
    <ScrollView>
      <Header />
      <TotalSales />
      <CurrentBonusSales />
      <PaymentButton />
      <HistoryDetails />
    </ScrollView>
  );
};

export default Dashboard;
