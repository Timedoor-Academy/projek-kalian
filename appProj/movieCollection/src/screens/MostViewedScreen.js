import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React, { useEffect } from "react";
import { ShowMovie } from "../components/MovieComponent";

const MostViewedScreen = (props) => {
  const { navigation } = props;
  const { route } = props;
  const sortedMostViewed = route.params.allMostViewed;

  useEffect(() => {
    console.log(sortedMostViewed.length);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleTop}>Most Viewed</Text>
      </View>
      <FlatList
        data={sortedMostViewed}
        numColumns={2}
        key={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <ShowMovie
              image={{ uri: item.imageLink }}
              title={item.title}
              viewers={item.viewers}
              onPress={() => navigation.navigate('DetailMovie', { item })} // Kode Hilang
            />
          );
        }}
        contentContainerStyle={{
          flex: sortedMostViewed.length === 0 ? 1 : null,
        }}
        ListEmptyComponent={
          <View style={{ alignItems: "center", flex: 1 }}>
            <Text>No items in this category.</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  titleContainer: {
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 16,
    backgroundColor: "lavender",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  titleTop: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  flatListContainer: {
    padding: 8,
  },
  dataContainer: {
    margin: 8,
    padding: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "lavender",
    borderWidth: 1,
    flexDirection: "row",
  },
  movieImage: {
    width: 130,
    height: 200,
    borderRadius: 10,
    marginRight: 16,
  },
  movieDescriptionContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  year: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
    marginLeft: 3,
  },
  rating: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
  },
  ratingStars: {
    width: 100,
    height: 20,
    marginTop: 4,
  },
  mainCategoryContainer: {
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
    flexDirection: "row",
  },
  categoryContainer: {
    flex: 1,
  },
  categoryText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  seeAllContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  seeAllText: {
    color: "#009688",
    textDecorationLine: "underline",
  },
});

export default MostViewedScreen;
