import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import TryCodeScreen from "./src/screens/TryCodeScreen";
import HomeScreen from "./src/screens/HomeScreen";
import DetailMovieScreen from "./src/screens/DetailMovieScreen";
import RecommendedScreen from "./src/screens/RecommendedScreen";
import MostViewedScreen from "./src/screens/MostViewedScreen";

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TryCode"
          component={TryCodeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DetailMovie"
          component={DetailMovieScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MostViewed"
          component={MostViewedScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Recommended"
          component={RecommendedScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <MainNavigator />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
