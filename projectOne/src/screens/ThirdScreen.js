import React from "react";
import { View, Text } from "react-native";

const ThirdScreen = () => {
  return (
    <View style={{ flex: 1, flexDirection: "row", backgroundColor: "mistyrose" }}>
      <View style={{flex: 1, backgroundColor: "red" }}>
        <Text style={{ color: "white" }}>Pikachu</Text>
      </View>
      <View style={{flex: 1, backgroundColor: "yellow"}}>
        <Text style={{color: "white"}}>Flareon</Text>
      </View>
      <View style={{flex: 1, backgroundColor: "green"}}>
        <Text style={{color: "white"}}>Rapidash</Text>
      </View>
    </View>
  );
};

export default ThirdScreen;
