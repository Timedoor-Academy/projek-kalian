import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { userData } from "../../data/TryCodeData";

const TryCodeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.containerFlat}
        data={userData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View
              style={[
                styles.containerItem,
                {
                  backgroundColor:
                    item.gender.toLowerCase() === "male"
                      ? "moccasin"
                      : "lavender",
                },
              ]}
            >
              <Image source={{ uri: item.imageLink }} style={styles.image} />

              <Text>{item.name}</Text>
              <Text>{item.gender}</Text>
              <Text>{item.age}</Text>
              {item.age >= 6 && item.age <= 12 ? (
                <Text>Child</Text>
              ) : item.age >= 13 && item.age <= 17 ? (
                <Text>Teenager</Text>
              ) : item.age >= 18 && item.age <= 64 ? (
                <Text>Adult</Text>
              ) : item.age >= 65 ? (
                <Text>Senior</Text>
              ) : null}
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerItem: {
    margin: 8,
    backgroundColor: "lavender",
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  containerFlat: {
    padding: 8,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default TryCodeScreen;
