import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { movieData } from "../../data/MovieData";
import { ShowMovie } from "../components/MovieComponent";
import { Icon } from "react-native-elements";
import { Button } from "../components/ButtonComponent";

const HomeScreen = (props) => {
  const { navigation } = props;
  const [recommended, setRecommended] = useState([]);
  const [mosttViewed, setMostViewed] = useState([]);
  const [allRecommended, setAllRecommended] = useState([]);
  const [allMostViewed, setAllMostViewed] = useState([]);

  const compareRating = (a, b) => {
    const ratingA = a.rating;
    const ratingB = b.rating;

    if (ratingA > ratingB) {
      return -1;
    } else if (ratingA < ratingB) {
      return 1;
    } else {
      return 0;
    }
  };
  const compareViewed = (a, b) => {
    const viewedA = a.viewers;
    const viewedB = b.viewers;

    if (viewedA > viewedB) {
      return -1;
    } else if (viewedA < viewedB) {
      return 1;
    } else {
      return 0;
    }
  };

  useEffect(() => {
    const threeRecommended = [];
    const threeMostViewed = [];
    const sortedRecommended = [...movieData].sort(compareRating);
    const sortedMostViewed = [...movieData].sort(compareViewed);
    for (let i = 0; i < 3; i++) {
      threeRecommended.push(sortedRecommended[i]);
      threeMostViewed.push(sortedMostViewed[i]);
    }
    setAllRecommended(sortedRecommended);
    setRecommended(threeRecommended);
    setAllMostViewed(sortedMostViewed);
    setMostViewed(threeMostViewed);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleTop}>Movie Collection</Text>
      </View>
      <FlatList
        data={recommended}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.dataContainer}>
              <Image
                style={styles.movieImage}
                source={{ uri: item.imageLink }}
              />
              <View style={styles.movieDescriptionContainer}>
                <View style={styles.row}>
                  <Icon name="title" type="material" size={20} />
                  <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={styles.row}>
                  <Icon name="calendar" type="ionicon" size={20} />
                  <Text style={styles.year}>{item.year}</Text>
                </View>
                <View style={styles.row}>
                  <Icon
                    name="star"
                    type="ionicon"
                    size={20}
                    style={{ marginTop: 2, marginRight: 1 }}
                  />
                  <View style={{ marginLeft: 3 }}>
                    {item.rating === 5 ? (
                      <Image
                        style={styles.ratingStars}
                        source={require("../../assets/images/five-stars.png")}
                      />
                    ) : item.rating === 4 ? (
                      <Image
                        style={styles.ratingStars}
                        source={require("../../assets/images/four-stars.png")}
                      />
                    ) : item.rating === 3 ? (
                      <Image
                        style={styles.ratingStars}
                        source={require("../../assets/images/three-stars.png")}
                      />
                    ) : item.rating === 2 ? (
                      <Image
                        style={styles.ratingStars}
                        source={require("../../assets/images/two-stars.png")}
                      />
                    ) : item.rating === 1 ? (
                      <Image
                        style={styles.ratingStars}
                        source={require("../../assets/images/star.png")}
                      />
                    ) : null}
                  </View>
                </View>
                <Button
                  onPress={() => navigation.navigate("DetailMovie", { item })}
                />
              </View>
            </View>
          );
        }}
        ListEmptyComponent={
          <View style={{ alignItems: "center" }}>
            <Text>No items in this category.</Text>
          </View>
        }
        ListHeaderComponent={
          <View>
            <View style={styles.mainCategoryContainer}>
              <View style={styles.categoryContainer}>
                <Text style={styles.categoryText}>Most Viewed</Text>
              </View>
              <View style={styles.seeAllContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("MostViewed", { allMostViewed })}
                >
                  <Text style={styles.seeAllText}>See All</Text>
                </TouchableOpacity>
              </View>
            </View>
            <FlatList
              horizontal
              data={mosttViewed}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <ShowMovie
                    image={{ uri: item.imageLink }}
                    title={item.title}
                    viewers={item.viewers}
                    isHome={true}
                  />
                );
              }}
              contentContainerStyle={{
                flex: mosttViewed.length === 0 ? 1 : null,
              }}
              ListEmptyComponent={
                <View style={{ alignItems: "center", flex: 1 }}>
                  <Text>No items in this category.</Text>
                </View>
              }
            />
            <View style={styles.mainCategoryContainer}>
              <View style={styles.categoryContainer}>
                <Text style={styles.categoryText}>Recommended</Text>
              </View>
              <View style={styles.seeAllContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Recommended", { allRecommended })}
                >
                  <Text style={styles.seeAllText}>See All</Text>
                </TouchableOpacity>
              </View>
            </View>
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
  flatListContainer: {
    padding: 8,
  },
  titleTop: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
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

export default HomeScreen;
