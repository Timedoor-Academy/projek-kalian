import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { MovieExplanation } from "../components/MovieComponent";

const DetailMovieScreen = (props) => {
  const { route } = props;
  const movie = route.params.item;

  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  useEffect(() => {
    console.log(movie);
  }, []);
  return (
    <>
      <View style={styles.titleHeader}>
        <Text style={styles.titleTop}>Most Viewed</Text>
      </View>
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.movieContainer}>
            <View style={styles.middle}>
              <Image style={styles.image} source={{ uri: movie.imageLink }} />
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{movie.title}</Text>
            </View>
            <MovieExplanation name="Release Years" value={movie.year} />
            <MovieExplanation name="Starring" value={movie.starring} />
            <MovieExplanation name="Description" value={movie.description} />
            <MovieExplanation
              name="Viewers"
              value={numberWithCommas(movie.viewers)}
            />
            <MovieExplanation
              name="Rating"
              isRating={true}
              rating={movie.rating}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  titleHeader: {
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
  movieContainer: {
    margin: 8,
    padding: 8,
  },
  middle: {
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#ffbe7bff",
  },
  titleContainer: {
    marginTop: 8,
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 8,
    backgroundColor: "salmon",
    borderRadius: 10,
    color: "white",
  },
});

export default DetailMovieScreen;
