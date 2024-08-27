import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const ImageScreen = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <ScrollView horizontal>
        <View style={{ margin: 8, padding: 8 }}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: "green",
              backgroundColor: "aliceblue",
            }}
            source={require("../../assets/images/pikachu.png")}
          />
        </View>
        <View style={{ margin: 8, padding: 8 }}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: "green",
              backgroundColor: "aliceblue",
            }}
            source={require("../../assets/images/pikachu.png")}
          />
        </View>
        <View style={{ margin: 8, padding: 8 }}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: "green",
              backgroundColor: "aliceblue",
            }}
            source={require("../../assets/images/pikachu.png")}
          />
        </View>
        <View style={{ margin: 8, padding: 8 }}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: "green",
              backgroundColor: "aliceblue",
            }}
            source={require("../../assets/images/pikachu.png")}
          />
        </View>
        <View style={{ margin: 8, padding: 8 }}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: "green",
              backgroundColor: "aliceblue",
            }}
            source={require("../../assets/images/pikachu.png")}
          />
        </View>
        <View style={{ margin: 8, padding: 8 }}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: "green",
              backgroundColor: "aliceblue",
            }}
            source={require("../../assets/images/pikachu.png")}
          />
        </View>
        <View style={{ margin: 8, padding: 8 }}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: "green",
              backgroundColor: "aliceblue",
            }}
            source={require("../../assets/images/pikachu.png")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ImageScreen;
