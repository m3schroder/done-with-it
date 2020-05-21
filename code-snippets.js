// #Button
<Button
  color="orange"
  title="Click me"
  onPress={() =>
    //can also do Alert.prompt for IOS
    Alert.alert("My Title", "My message", [
      { text: "Yes", onPress: () => console.log("yes") },
      { text: "No", onPress: () => console.log("no") },
    ])
  }
/>;

// #Device  #Orientation #Dimensions
console.log(Dimensions.get("screen"));

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

const { landscape } = useDeviceOrientation();

height: landscape ? "100%" : "30%";

// #Flexbox
//Too much to type...just google it

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "dodgerblue",
        //flex 1: the view grows to fill screen flex .5: fills half screen
        flex: 2,
      }}
    >
      <View
        style={{
          backgroundColor: "gold",
          flex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          flex: 1,
        }}
      />
    </View>
  );
}
