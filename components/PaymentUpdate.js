import React, { useState, useContext, useLayoutEffect } from "react";
import { View, Text, SafeAreaView, Keyboard } from "react-native";
import { TextInput, Button, Card, Title } from "react-native-paper";
import { useNavigation } from "@react-navigation/core";
import { SalesContext } from "../context/SalesContext";

const PaymentUpdate = ({ route: { params } }) => {
  console.log(params);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Update Payment",
      headerStyle: { backgroundColor: "teal" },
      headerBackTitleStyle: { color: "#000" },
    });
  }, []);
  const { updatePayment } = useContext(SalesContext);
  const [name, setName] = useState(params.name);
  const [price, setPrice] = useState(params.price);

  const HandleUpdate = (e) => {
    e.preventDefault();
    if (!name || !price) {
      alert("Required filled is missing");
    }
    const editPayment = {
      name,
      price: +price,
    };
    updatePayment(params.id, editPayment);
    setName("");
    setPrice("");
    Keyboard.dismiss();
    navigation.navigate("Dashboard");
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
          Update your Sales
        </Title>
        <Text style={{ fontSize: 20, marginTop: 10 }}>Name </Text>
        <TextInput
          placeholder="Was Submitted By..."
          value={name}
          mode="outlined"
          onChangeText={(text) => setName(text)}
        />
        <Text style={{ fontSize: 20, marginTop: 10 }}>Amount </Text>
        <TextInput
          placeholder="Amount"
          value={price}
          onChangeText={(text) => setPrice(text)}
          mode="outlined"
          keyboardType="numeric"
          onSubmitEditing={HandleUpdate}
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
            onPress={HandleUpdate}
            color="#000"
            labelStyle={{ fontSize: 20 }}
          >
            Update
          </Button>
        </View>
      </Card>
    </SafeAreaView>
  );
};

export default PaymentUpdate;
