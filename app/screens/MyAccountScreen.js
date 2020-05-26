import React from "react";
import { TouchableHighlight, View, StyleSheet } from "react-native";

import colors from "../config/colors";
import Screen from "../components/Screen";
import MaterialBannerButton from "../components/MaterialBannerButton";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItem from "../components/ListItem";

function MyAccountScreen(props) {
  return (
    <Screen style={styles.container}>
      <View style={{ backgroundColor: colors.white }}>
        <ListItem
          image={require("../assets/images/jacket.jpg")}
          title={"Matt Schroder"}
          subTitle={"m3schroder@gmail.com"}
        />
      </View>
      <ListItemSeperator height={40} />
      <MaterialBannerButton
        iconName={"format-list-bulleted"}
        size={20}
        iconColor={colors.white}
        backgroundColor={colors.primary}
        text={"My Listings"}
      />
      <ListItemSeperator height={2} />
      <MaterialBannerButton
        iconName={"email"}
        size={20}
        iconColor={colors.white}
        backgroundColor={colors.secondary}
        text={"My Messages"}
      />
      <ListItemSeperator height={20} />
      <MaterialBannerButton
        iconName={"logout"}
        size={20}
        iconColor={colors.white}
        backgroundColor={"#ffe66d"}
        text={"Logout"}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  accountInfo: {},
  listings: {},
  messages: {},
  logOut: {},
  container: {
    backgroundColor: colors.light,
  },
});
export default MyAccountScreen;
