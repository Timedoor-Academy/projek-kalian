import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import planets from "../../data/Data";

const PlanetScreen = () => {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Solar System</Text>
      </View>
      <FlatList
        data={planets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.planetContainer}>
            <Image source={item.image} style={styles.planetImage} />
            <Text style={styles.planetName}>{item.name}</Text>
            <Text style={styles.planetDescription}>{item.description}</Text>
          </View>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF9800",
    borderRadius: 25,
    padding: 20,
    marginHorizontal: 10,
    marginVertical: 10,
    marginTop: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  planetContainer: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f0f0f0", // Background color for planetContainer
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  planetImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 50, // Makes the image round
  },
  planetName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333333",
  },
  planetDescription: {
    fontSize: 16,
    textAlign: "center",
    color: "#666666",
    marginTop: 10,
  },
});

export default PlanetScreen;
