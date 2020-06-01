import React from "react";
import { TouchableHighlight, View, StyleSheet, FlatList } from "react-native";

import colors from "../config/colors";
import Screen from "../components/Screen";
import Icon from "../components/Icon";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItem from "../components/ListItem";

const menuItems = [
  {
    title: "My listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          image={require("../assets/images/jacket.jpg")}
          title={"Matt Schroder"}
          subTitle={"m3schroder@gmail.com"}
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  iconName={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="log out"
        IconComponent={<Icon iconName="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    marginBottom: 50,
  },
  listContainer: {
    marginBottom: 50,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
export default AccountScreen;
