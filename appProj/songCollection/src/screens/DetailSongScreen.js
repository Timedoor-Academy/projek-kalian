import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { SongExplanation } from "../components/SongComponent";

const DetailSongScreen = (props) => {
  const { route } = props;
  const song = route.params.item;

  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  useEffect(() => {
    console.log(song);
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
              <Image style={styles.image} source={{ uri: song.imageLink }} />
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{song.title}</Text>
            </View>
            <SongExplanation name="Release Years" value={song.year} />
            <SongExplanation name="Singer" value={song.singer} />
            <SongExplanation name="Song Writers" value={song.songwriters} />
            <SongExplanation
              name="Genre"
              value={song.genre}
            />
            <SongExplanation
              name="Rating"
              isRating={true}
              rating={song.rating}
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

export default DetailSongScreen;
