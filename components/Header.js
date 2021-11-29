import React, { useContext } from "react";
import { Appbar, Card } from "react-native-paper";
import { Image, Text, View } from "react-native";
import { SalesContext } from "../context/SalesContext";

import { numberWithCommas } from "../utils/format";

export const Header = () => {
  return (
    <Appbar.Header style={{ backgroundColor: "teal" }}>
      <Appbar.Content title="Dashboard" />
      <Appbar.Action icon="dots-vertical" onPress={() => {}} />
    </Appbar.Header>
  );
};

export const TotalSales = () => {
  const { payments } = useContext(SalesContext);

  const amount = payments.map((payment) => payment.amount);
  const total = amount.reduce((acc, val) => acc + val, 0).toFixed(2);
  return (
    <Card
      style={{
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 10,
        padding: 10,
        backgroundColor: "teal",
      }}
    >
      <View
        style={{
          width: 170,
          height: 170,
          borderRadius: 170 / 2,
          backgroundColor: "#fff",
          marginTop: 10,
          shadowOpacity: 2,
          shadowRadius: 10,
          left: 120,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            marginBottom: 5,
          }}
        >
          <Image
            source={require("../assets/image/cedi.png")}
            style={{
              width: 25,
              height: 25,
              borderRadius: 25 / 2,
            }}
          />

          {numberWithCommas(total)}
        </Text>
      </View>
    </Card>
  );
};
