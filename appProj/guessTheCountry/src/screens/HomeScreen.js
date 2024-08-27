import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#4c669f", "#3b5998", "#192f6a"]}
        style={styles.linearGradient}
      >
        <Image
          source={require("../../assets/favicon.png")}
          style={styles.image}
        />
        <Text style={styles.title}>
          Welcome to Guess The Country!
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("GuessTheCountry")}
        >
          <Text style={styles.buttonText}>Start Playing</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  linearGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff"
  },
  button: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginTop: 20
  },
  buttonText: {
    fontSize: 18,
    color: "#4c669f"
  }
});

export default HomeScreen;