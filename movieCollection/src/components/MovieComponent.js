import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { Button } from "./ButtonComponent";

export const ShowMovie = (props) => {
  const { image, title, viewers, isHome } = props;

  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <View style={styles.horizontalDataContainer}>
      <Image style={styles.movieImage} source={{ uri: image.uri }} />
      <View style={styles.horizontalTitleContainer}>
        <Text style={styles.horizontalTitle}>{title}</Text>
      </View>
      <View style={styles.viewersContainer}>
        <Icon name="eye" type="font-awesome" size={14} />
        <View style={styles.viewersText}>
          <Text>{numberWithCommas(viewers)}</Text>
        </View>
      </View>
      <View style={{ marginTop: 3 }}>
        {isHome ? null : <Button {...props} />}
      </View>
    </View>
  );
};

export const MovieExplanation = (props) => {
  const { name, value, isRating, rating } = props;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.nameContainer}>
        <Text style={styles.generalFontSize}>{name}</Text>
      </View>
      <Text style={styles.generalFontSize}>: </Text>
      <View style={styles.valueContainer}>
        {isRating ? (
          rating === 5 ? (
            <Image
              style={styles.ratingImage}
              source={require("../../assets/images/five-stars.png")} // Ganti tulisan 'path'
            />
          ) : rating === 4 ? (
            <Image
              style={styles.ratingImage}
              source={require("../../assets/images/four-stars.png")} // Ganti tulisan 'path'
            />
          ) : rating === 3 ? (
            <Image
              style={styles.ratingImage}
              source={require("../../assets/images/three-stars.png")} // Ganti tulisan 'path'
            />
          ) : rating === 2 ? (
            <Image
              style={styles.ratingImage}
              source={require("../../assets/images/two-stars.png")} // Ganti tulisan 'path'
            />
          ) : (
            <Image
              style={styles.ratingImage}
              source={require("../../assets/images/star.png")} // Ganti tulisan 'path'
            />
          )
        ) : (
          <Text style={styles.textValue}>{value}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  horizontalDataContainer: {
    margin: 14,
    width: 180,
    padding: 10,
    alignItems: "center",
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
  },
  horizontalTitleContainer: {
    marginTop: 8,
    marginBottom: 8,
  },
  horizontalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  movieImage: {
    width: 130,
    height: 200,
    borderRadius: 10,
  },
  viewersContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  viewersText: {
    marginLeft: 8,
  },
  mainContainer: {
    flexDirection: "row",
    margin: 8,
  },
  nameContainer: {
    flex: 1,
  },
  generalFontSize: {
    fontSize: 16,
  },
  valueContainer: {
    flex: 3,
  },
  textValue: {
    textAlign: "justify",
    fontSize: 16,
  },
  ratingImage: {
    width: 100,
    height: 20,
  },
});
