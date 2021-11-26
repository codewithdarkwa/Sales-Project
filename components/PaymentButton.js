import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/core";

const PaymentButton = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        style={{ width: 300, marginTop: 20 }}
        mode="outlined"
        onPress={() => navigation.navigate("Payment")}
      >
        Proceed to Submit Your Sales
      </Button>
    </View>
  );
};

export default PaymentButton;
