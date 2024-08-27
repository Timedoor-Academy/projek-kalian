import { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Icon } from "react-native-elements";
import { data } from "../../data/Data";

const HomeScreen = () => {
  const [modifiedData, setModifiedData] = useState([]);

  const likePhoto = (id, likeStatus) => {
    const likeStatusChanged = modifiedData.map((item) => {
        if (item.id === id) {
            item.likeStatus = !likeStatus;
        }
        return item;
    });
    setModifiedData(likeStatusChanged);
};

  useEffect(() => {
    const newData = data.map((item) => {
      item.likeStatus = false;
      return item;
    });
    setModifiedData(newData);
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item }) => {
          return (
            <View style={styles.mainContainer}>
              <View style={styles.topContainer}>
                <Image
                  style={styles.profilePicture}
                  source={{ uri: item.profilePicture }}
                />
                <View style={styles.normalMarginLeft}>
                  <Text style={styles.text}>{item.username}</Text>
                </View>
              </View>
              <Image style={styles.image} source={{ uri: item.imageLink }} />
              <View style={styles.captionContainer}>
                <Text style={styles.text}>
                  {item.username}
                  <Text style={styles.caption}> {item.caption}</Text>
                </Text>
              </View>
              <View style={styles.bottomContainer}>
                <TouchableOpacity
                  style={styles.horizontalContainer}
                  onPress={() => likePhoto(item.id, item.likeStatus)}
                >
                  <Icon
                    name={item.likeStatus ? "heart" : "heart-o"}
                    type="font-awesome"
                    size={20}
                    color={item.likeStatus ? "red" : null}
                  />
                  <View style={styles.normalMarginLeft}>
                    {item.likeStatus ? <Text>Unlike</Text> : <Text>Like</Text>}
                  </View>
                </TouchableOpacity>
                <View style={styles.horizontalContainer}>
                  <Icon name="comments-o" type="font-awesome" size={20} />
                  <View style={styles.normalMarginLeft}>
                    <Text>Comment</Text>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    padding: 16,
  },
  mainContainer: {
    margin: 16,
    backgroundColor: "#fff",
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
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  normalMarginLeft: {
    marginLeft: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 0,
  },
  captionContainer: {
    padding: 16,
  },
  caption: {
    fontSize: 14,
    color: "#666",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default HomeScreen;
