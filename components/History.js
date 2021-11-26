import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-paper";

const History = () => {
  return (
    <Card
      style={{
        marginTop: 10,
        borderRadius: 5,
        padding: 10,
        backgroundColor: "#eee",
      }}
    >
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>History</Text>
    </Card>
  );
};

export default History;
