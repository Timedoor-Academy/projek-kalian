import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { countryList, objectImageList, objectNameList } from "../../data/Data";

const GuessTheCountryScreen = (props) => {
  const { navigation } = props;
  const [answer, setAnswer] = useState("");
  const [index, setIndex] = useState(null);
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    const homePage = navigation.addListener("focus", () => {
      randomIndex();
      setScore(0);
    });
    if (score === 50) {
      navigation.navigate("Win");
    }
    return homePage;
  }, [score]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (result !== "Correct!") {
        setResult("");
        setAnswer("");
        randomIndex();
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [result]);

  const randomIndex = () => {
    const pickRandomIndex = Math.floor(Math.random() * countryList.length);
    setIndex(pickRandomIndex);
  };

  const checkAnswer = () => {
    if (answer.toLowerCase() === countryList[index]) {
      setResult("Correct!");
      setScore(score + 10);
      setAnswer("");
      randomIndex();
    } else {
      setResult("Incorrect. Try again!");
    }
  };

  return (
    <ScrollView contentContainerStyle={{
      flexGrow: 1
    }}>
      <View style={styles.container}>
        <Text style={styles.title}>Guess The Country</Text>
        {index !== null && (
          <>
            <Image
              style={styles.image}
              source={{ uri: objectImageList[index] }}
            />
            <View style={styles.objectInfo}>
              <Text style={styles.objectName}>{objectNameList[index]}</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Write your answer"
                keyboardType="default"
                onChangeText={(text) => setAnswer(text)}
                value={answer}
              />
              <TouchableOpacity
                style={styles.submitButton}
                onPress={checkAnswer}
              >
                <Text style={styles.submitButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.result}>{result}</Text>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                padding: 16,
              }}
            >
              <View
                style={{
                  borderWidth: 1,
                  padding: 8,
                  alignItems: "center",
                  backgroundColor: "mistyrose",
                  borderRadius: 20,
                }}
              >
                <Text>Score : {score}</Text>
              </View>
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textDecorationLine: "underline",
    fontSize: 28,
    fontFamily: "serif",
    marginBottom: 16,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
  objectInfo: {
    margin: 8,
    backgroundColor: "lavender",
    padding: 4,
    borderWidth: 1,
  },
  objectName: {
    fontSize: 18,
  },
  inputContainer: {
    flexDirection: "row",
    margin: 8,
  },
  input: {
    borderWidth: 1,
    width: "50%",
    padding: 8,
  },
  submitButton: {
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 8,
    marginLeft: 8,
    marginBottom: 8,
    marginTop: 8,
    backgroundColor: "skyblue",
  },
  submitButtonText: {
    fontSize: 18,
  },
  result: {
    fontSize: 18,
    color: "green",
  },
};

export default GuessTheCountryScreen;
