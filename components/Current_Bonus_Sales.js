import React, { useContext } from "react";
import { View } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import { SalesContext } from "../context/SalesContext";

import { numberWithCommas } from "../utils/format";

const Current_Bonus_Sales = () => {
  const { payments } = useContext(SalesContext);

  const amount = payments.map((payment) => payment.price);
  const maxValue = amount
    .reduce((acc, val) => (acc > val ? acc : val), 0)
    .toFixed(2);

  const bonus = amount.reduce((acc, val) => acc + val * 0.005, 0).toFixed(2);

  return (
    <Card
      style={{
        borderTopRightRadius: 35,
        backgroundColor: "floralwhite",
        padding: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 10,
        }}
      >
        <Card
          style={{
            backgroundColor: "teal",
            shadowOpacity: 1,
            shadowRadius: 3,
            borderBottomLeftRadius: 30,
            marginRight: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card.Title title="Highest Sales" />
          <Card.Content>
            <Paragraph>Amount : GHS {numberWithCommas(maxValue)}</Paragraph>
          </Card.Content>
        </Card>
        <Card
          style={{
            backgroundColor: "wheat",
            borderBottomRightRadius: 30,
            shadowOpacity: 1,
            shadowRadius: 3,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card.Title title="Bonus" />
          <Card.Content>
            <Paragraph>Amount : GHS {numberWithCommas(bonus)}</Paragraph>
          </Card.Content>
        </Card>
      </View>
    </Card>
  );
};

export default Current_Bonus_Sales;
