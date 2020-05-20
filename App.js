import React from "react";
import {
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  Image,
  Alert,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
} from "react-native";

export default function App() {
  let x = 1;
  console.log("Executed");

  const handlePress = () => console.log("Text pressed");

  return (
    <View style={styles.container}>
      <Button
        color="orange"
        title="Click me"
        onPress={() =>
          Alert.alert("My Title", "My message", [
            { text: "Yes", onPress: () => console.log("yes") },
            { text: "No", onPress: () => console.log("no") },
          ])
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
