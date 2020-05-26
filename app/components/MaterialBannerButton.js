import React from "react";
import { View, TouchableHighlight, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import colors from "../config/colors";

function MaterialBannerButton({
  iconName,
  size,
  iconColor,
  backgroundColor,
  text,
}) {
  return (
    <TouchableHighlight>
      <View style={styles.container}>
        <View
          style={[styles.iconContainer, { backgroundColor: backgroundColor }]}
        >
          <MaterialCommunityIcons
            name={iconName}
            size={size}
            color={iconColor}
          />
        </View>
        <AppText style={styles.text}>{text}</AppText>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 65,
    paddingLeft: 15,
    width: "100%",
    flexDirection: "row",
    backgroundColor: colors.white,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    alignSelf: "center",
    paddingLeft: 10,
    fontWeight: "bold",
  },
  iconContainer: {
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MaterialBannerButton;
