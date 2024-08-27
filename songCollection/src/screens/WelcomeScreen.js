import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const WelcomeScreen = (props) => {
  const { navigation } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onNext = () => {
    setIsModalVisible(false);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#FFC107", "#FF9800"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <Image
          source={{uri: 'https://cdn.pixabay.com/photo/2013/07/13/12/41/music-160112_1280.png'}}
          style={styles.sunImage}
        />
        <Text style={styles.title}>Selamat datang di Song Collection!</Text>
        <Text style={styles.subtitle}>
          Temukan list musik mengagumkan disini
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setIsModalVisible(true)}
        >
          <Text style={styles.buttonText}>Mulai</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            setIsModalVisible(!isModalVisible);
          }}
        >
          <View style={styles.backgroundView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Are you ready to find the song?</Text>
              <View style={styles.modalButton}>
                <TouchableOpacity style={styles.modalButtonStyle} onPress={onNext}>
                  <Text style={styles.modalButtonText}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalButtonStyle}
                  onPress={() => setIsModalVisible(false)}
                >
                  <Text style={styles.modalButtonText}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  sunImage: {
    width: 120,
    height: 120,
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#FFFFFF",
    marginTop: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#FFFFFF",
    marginTop: 10,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#FF9800",
    fontWeight: "bold",
  },
  backgroundView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
  },
  modalButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
  modalButtonStyle: {
    backgroundColor: "#FF9800",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  modalButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
