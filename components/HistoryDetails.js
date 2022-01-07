import React, { useContext } from "react";
import { DataTable, Card } from "react-native-paper";
import { SalesContext } from "../context/SalesContext";
import { StyleSheet, View, Text } from "react-native";
import { MaterialIcons } from "react-native-vector-icons";
import { numberWithCommas } from "../utils/format";

const HistoryDetails = () => {
  const { payments, deletePaymentHistory } = useContext(SalesContext);

  const HandleDelete = (id) => {
    deletePaymentHistory(id);
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
          <View key={payment.id}>
            <DataTable.Row>
              <DataTable.Cell>{payment.reference}</DataTable.Cell>
              <View
                style={{
                  flexDirection: "row",
                  padding: 10,
                  width: "25%",
                }}
              >
                <DataTable.Cell>
                  {numberWithCommas(payment.amount)}
                </DataTable.Cell>
                <MaterialIcons
                  name="delete"
                  size={24}
                  color="red"
                  onPress={() => HandleDelete(payment.id)}
                />
              </View>
            </DataTable.Row>
          </View>
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
