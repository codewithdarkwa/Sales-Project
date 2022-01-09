import React, { useContext, useEffect } from "react";
import { DataTable, Card } from "react-native-paper";
import { SalesContext } from "../context/SalesContext";
import { StyleSheet, View, Text } from "react-native";
import { MaterialIcons, FontAwesome5 } from "react-native-vector-icons";
import { numberWithCommas } from "../utils/format";
import { useNavigation } from "@react-navigation/core";

const HistoryDetails = () => {
  const { payments, deletePaymentHistory, getPayments } =
    useContext(SalesContext);
  const navigation = useNavigation();

  const HandleDelete = (id) => {
    deletePaymentHistory(id);
  };

  useEffect(() => {
    getPayments();
  }, []);
  return (
    <>
      <History />
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title numeric>Amount</DataTable.Title>
        </DataTable.Header>

        {payments.map((payment) => (
          <View key={payment._id}>
            <DataTable.Row>
              <DataTable.Cell>{payment.name}</DataTable.Cell>
              <View
                style={{
                  flexDirection: "row",
                  padding: 10,
                  width: "30%",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <DataTable.Cell>
                  {numberWithCommas(payment.price)}
                </DataTable.Cell>
                <FontAwesome5
                  name="edit"
                  size={17}
                  color="blue"
                  onPress={() =>
                    navigation.navigate("UpdatePayment", {
                      id: payment._id,
                      name: payment.name,
                      price: payment.price,
                    })
                  }
                />
                <MaterialIcons
                  name="delete"
                  size={22}
                  color="red"
                  onPress={() => HandleDelete(payment._id)}
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
