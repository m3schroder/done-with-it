import React from "react";
import { StyleSheet, FlatList } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

const Listings = [
  {
    id: 1,
    title: "Red Jacket for sale",
    price: 100,
    image: require("../assets/images/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 100,
    image: require("../assets/images/couch.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={Listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: colors.light,
  },
});
export default ListingsScreen;
