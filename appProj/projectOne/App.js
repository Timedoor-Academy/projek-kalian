import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FirstScreen from "./src/screens/FirstScreen";
import SecondScreen from "./src/screens/SecondScreen";
import ThirdScreen from "./src/screens/ThirdScreen";
import ImageScreen from "./src/screens/ImageScreen";
import FourthScreen from "./src/screens/FourthScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      {/* <FirstScreen /> */}
      {/* <SecondScreen/> */}
      {/* <ThirdScreen/> */}
      {/* <ImageScreen/> */}
      <FourthScreen/>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
