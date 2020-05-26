import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";

function ListItemSeperator({ height }) {
  return <View style={[styles.seperator, { height: height }]} />;
}

const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
});
export default ListItemSeperator;
