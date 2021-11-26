import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";
import { SalesProvider } from "./hooks/SalesContext";

export default function App() {
  return (
    <SalesProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SalesProvider>
  );
}
