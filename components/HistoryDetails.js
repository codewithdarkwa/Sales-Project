import React, { useContext, useState } from "react";
import { DataTable, Card } from "react-native-paper";
import { SalesContext } from "../context/SalesContext";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { MaterialIcons } from "react-native-vector-icons";
import { numberWithCommas } from "../utils/format";

const HistoryDetails = () => {
  const { payments, deletePaymentHistory } = useContext(SalesContext);

  //Handling the delete method
  const rightSwipe = () => {
    const HandleDelete = () => {};
    return (
      <TouchableOpacity onPress={HandleDelete}>
        <View style={styles.delete}>
          <MaterialIcons name="delete" size={24} color="#eee" />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <History />
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title numeric>Amount</DataTable.Title>
        </DataTable.Header>

        {payments.map((payment) => (
          <Swipeable renderRightActions={rightSwipe} key={payment.id}>
            <DataTable.Row>
              <DataTable.Cell>{payment.reference}</DataTable.Cell>
              <DataTable.Cell style={{ left: 150 }}>
                {numberWithCommas(payment.amount)}
              </DataTable.Cell>
            </DataTable.Row>
          </Swipeable>
        ))}
      </DataTable>
    </>
  );
};

export default HistoryDetails;

export const History = () => {
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

const styles = StyleSheet.create({
  delete: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 50,
  },
});
