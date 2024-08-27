import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { Button } from "../components/ButtonComponent";
import { Input } from "../components/InputComponent";
import { useSelector, useDispatch } from "react-redux";
import { createProfile } from "../../store/actions/profileAction";

const RegisterScreen = (props) => {
  const { navigation } = props;

  const dispatch = useDispatch();

  const globalProfileData = useSelector((store) => store.profileReducer);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isPassVisible, setIsPassVisible] = useState(false);

  const [isEmailFormat, setIsEmailFormat] = useState(true);

  const [isPasswordFormat, setIsPasswordFormat] = useState(true);

  const onChangeInput = (inputType, value) => {
    //Modifikasi dari sini
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (inputType === "email") {
      if (!emailRegex.test(value)) {
        setIsEmailFormat(false);
      } else {
        setIsEmailFormat(true);
      }
    }

    if (inputType === "password") {
      if (value.length < 8) {
        setIsPasswordFormat(false);
      } else {
        setIsPasswordFormat(true);
      }
    }

    setForm({
      ...form,
      [inputType]: value,
    });
  };

  const sendData = () => {
    if (
      form.username === "" ||
      form.email === "" ||
      form.password === "" ||
      !isEmailFormat
    ) {
      alert("Make sure you fill all the field with the right information!");
    } else {
      dispatch(createProfile(form));
      Alert.alert("Success", "Successfully create an account!", [
        {
          text: "OK",
          onPress: () => navigation.navigate("Login"),
        },
      ]);
    }
  };

  useEffect(() => {
    console.log("GLOBAL STATE ON REGISTER PAGE");
    console.log(globalProfileData);
    if (form.email === "") {
      setIsEmailFormat(true);
    }
  }, [globalProfileData]);

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/favicon.png")}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            title="Username"
            placeholder="Username"
            isUsername={true}
            iconName="person"
            onChangeText={(text) => onChangeInput("username", text)}
          />
          <Input
            title="Email"
            placeholder="Email"
            isEmail={true}
            iconName="mail"
            onChangeText={(text) => onChangeInput("email", text)}
          />
          {isEmailFormat ? null : (
            <View style={styles.warningContainer}>
              <Text style={styles.warning}>
                Please input the right email format!
              </Text>
            </View>
          )}
          <Input
            title="Password"
            placeholder="Password"
            isPassword={true}
            secureTextEntry={isPassVisible ? false : true}
            iconName={isPassVisible ? "eye-off" : "eye"}
            onPress={() => setIsPassVisible(!isPassVisible)}
            onChangeText={(text) => onChangeInput("password", text)}
          />
          {isPasswordFormat ? null : (
            <View style={styles.warningContainer}>
              <Text style={styles.warning}>
                Password must be at least 8 characters!
              </Text>
            </View>
          )}
        </View>
        <Button text="Register" onPress={() => sendData()} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
  },
  mainContainer: {
    backgroundColor: "#E6E6FA",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    marginTop: 32,
    marginBottom: 16,
  },
  image: {
    width: 180,
    height: 180,
  },
  inputContainer: {
    padding: 16,
    width: "100%",
  },
  textContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  text: {
    fontSize: 16,
  },
  registerText: {
    marginLeft: 3,
    color: "#1A5B0A",
    fontSize: 16,
  },
  warningContainer: {
    marginBottom: 16,
    marginLeft: 16,
  },
  warning: {
    color: "red",
  },
});

export default RegisterScreen;
