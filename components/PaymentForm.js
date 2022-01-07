import React, { useState, useContext, useLayoutEffect } from "react";
import { View, Text, SafeAreaView, Keyboard } from "react-native";
import { TextInput, Button, Card, Title, Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/core";
import { SalesContext } from "../context/SalesContext";

const PaymentForm = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Payment",
      headerStyle: { backgroundColor: "teal" },
      headerBackTitleStyle: { color: "#000" },
    });
  }, []);
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
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Card
        style={{
          marginTop: 10,
          borderRadius: 15,
          padding: 5,
          width: 400,
          shadowOpacity: 0.5,
          shadowRadius: 5,
          backgroundColor: "darkcyan",
        }}
      >
        <Title
          style={{ fontSize: 25, fontWeight: "bold", alignSelf: "center" }}
        >
          Submit Your Sales Here
        </Title>
        <Text style={{ fontSize: 20, marginTop: 10 }}>Reference </Text>
        <TextInput
          placeholder="Was Submitted By..."
          value={reference}
          mode="outlined"
          onChangeText={(text) => setReference(text)}
        />
        <Text style={{ fontSize: 20, marginTop: 10 }}>Amount </Text>
        <TextInput
          placeholder="Amount"
          value={amount}
          onChangeText={(text) => setAmount(text)}
          mode="outlined"
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
            mode="outlined"
            style={{ width: 250, borderRadius: 15, padding: 4 }}
            onPress={HandleSubmit}
            color="#000"
            labelStyle={{ fontSize: 20 }}
          >
            Submit
          </Button>
        </View>
      </Card>
    </SafeAreaView>
  );
};

export default PaymentForm;
