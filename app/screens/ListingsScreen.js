import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

import Card from "../components/Card";
import colors from "../config/colors";

function ListingsScreen(props) {
  return (
    <View style={styles.container}>
      <Card
        title="Couch in great condition"
        subTitle="$1000"
        image={require("../assets/images/couch.jpg")}
      />
      <Card
        title="Red Jacket"
        subTitle="$100"
        image={require("../assets/images/jacket.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    width: "100%",
    height: "100%",
    backgroundColor: colors.light,
    alignItems: "center",
  },
});
export default ListingsScreen;
