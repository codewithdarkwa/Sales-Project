import React, { useState, useContext } from "react";
import { View, Text, SafeAreaView, Keyboard } from "react-native";
import { TextInput, Button, Card, Title, Divider } from "react-native-paper";

import { SalesContext } from "../hooks/SalesContext";

const PaymentForm = () => {
  const { addPayment } = useContext(SalesContext);

  const [reference, setReference] = useState("");
  const [amount, setAmount] = useState(0);

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (reference.length == 0 || amount == "") {
      alert("Required filled is missing");
    } else {
      const newPayment = {
        id: Math.floor(Math.random() * 1000000),
        reference,
        amount: +amount,
      };
      addPayment(newPayment);
      setReference("");
      setAmount("");
      Keyboard.dismiss();
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Card style={{ marginTop: 25, borderRadius: 15, padding: 25 }}>
        <Title style={{ fontSize: 25, fontWeight: "bold" }}>
          Submit Your Sales Here
        </Title>
        <Divider />
        <Text style={{ fontSize: 20, marginTop: 10 }}>Reference </Text>
        <TextInput
          placeholder="Was Submitted By..."
          value={reference}
          onChangeText={(text) => setReference(text)}
        />
        <Text style={{ fontSize: 20, marginTop: 10 }}>Amount </Text>
        <TextInput
          placeholder="Amount"
          value={amount}
          onChangeText={(text) => setAmount(text)}
          keyboardType="numeric"
          onSubmitEditing={HandleSubmit}
        />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Button
            mode="contained"
            style={{ width: 300, borderRadius: 15, padding: 4 }}
            onPress={HandleSubmit}
          >
            Submit
          </Button>
        </View>
      </Card>
    </SafeAreaView>
  );
};

export default PaymentForm;