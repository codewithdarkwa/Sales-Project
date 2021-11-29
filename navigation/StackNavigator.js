import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PaymentForm from "../components/PaymentForm";
import Dashboard from "../screens/Dashboard";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Payment" component={PaymentForm} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
