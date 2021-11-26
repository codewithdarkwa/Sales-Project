import React, { useContext } from "react";
import { DataTable } from "react-native-paper";
import History from "./History";
import { SalesContext } from "../hooks/SalesContext";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

const HistoryDetails = () => {
  const { payments } = useContext(SalesContext);

  const HandleDelete = () => {};

  const rightSwipe = (progress, dragX) => {
    // const scale = dragX.interpolate({
    //   inputRange: [0, 100],
    //   ouputRange: [0, 1],
    //   extrapolate: "clamp",
    // });
    return (
      <TouchableOpacity onPress={HandleDelete}>
        <View style={styles.delete}>
          <Text>delete</Text>
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
                {payment.amount}
              </DataTable.Cell>
            </DataTable.Row>
          </Swipeable>
        ))}
      </DataTable>
    </>
  );
};

export default HistoryDetails;

const styles = StyleSheet.create({
  delete: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 50,
  },
});
