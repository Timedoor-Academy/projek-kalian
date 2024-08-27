import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const WinScreen = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/splash.png")}
        style={styles.imageBackground}
        imageStyle={{ opacity: 0.7 }}
      >
        <Image
          source={require("../../assets/favicon.png")}
          style={styles.image}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("GuessTheCountry")}
        >
          <Text style={styles.buttonText}>Play Again</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
  button: {
    backgroundColor: "lime",
    padding: 8,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    textTransform: "uppercase",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default WinScreen;
