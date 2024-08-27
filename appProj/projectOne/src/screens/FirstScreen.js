import { View, Text, Button } from "react-native";
import React from "react";

const FirstScreen = () => {

    const openAlert = () => {
        alert('You clicked the button!');
    };
    
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ margin: 16 }}>
        Hello
        <Text style={{ color: "red" }}> World</Text>!
      </Text>
      <Button title="This is Button" onPress={openAlert}/>
    </View>
  );
};

export default FirstScreen;
