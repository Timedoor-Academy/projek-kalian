import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const SecondScreen = () => {
  const openAlert = (game) => {
    if (game === "mobileLegends") {
      alert("You chose Mobile Legends!");
    } else if (game === "pubg") {
      alert("You chose PUBG!");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "lavender",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "skyblue",
          padding: 10,
          margin: 10,
          borderWidth: 1,
          borderStyle: "dashed",
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Mobile Legends</Text>
        <Text>
          <Text style={{ color: "#fff" }}>Mobile Legends,</Text> is a 2011
          mobile video game franchise developed by Riot Games and published by
          Electronic Arts.
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          padding: 8,
          margin: 8,
          borderRadius: 50,
          borderWidth: 2,
        }}
        onPress={() => openAlert("mobileLegends")}
      >
        <Text style={{ color: "lightcoral" }}>Mobile Legends Button</Text>
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: "cornflowerblue",
          margin: 10,
          padding: 10,
          borderWidth: 1,
          borderStyle: "dotted",
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>PUBG</Text>
        <Text>
          <Text style={{ color: "#fff" }}>PlayerUnknown's Battlegrounds,</Text>
          better known as PUBG, is a multiplayer battle royale game in which
          players drop onto an island and fight to be the last one left
          standing.
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          padding: 8,
          margin: 8,
          borderRadius: 50,
          borderWidth: 2,
        }}
        onPress={() => openAlert("pubg")}
      >
        <Text style={{ color: "lightcoral" }}>PUBG Button</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SecondScreen;
