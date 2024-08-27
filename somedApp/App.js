import "react-native-gesture-handler";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider, useSelector } from "react-redux";
import { createStore, combineReducers } from "redux";
import { profileReducer } from "./store/reducers/profileReducer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import RegisterScreen from "./src/screens/RegisterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const rootReducer = combineReducers({
  // kumpulan reducer yang kamu miliki
  profileReducer: profileReducer,
});

const store = createStore(rootReducer);

function TabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          left: 50,
          right: 50,
          height: 60,
          elevation: 0,
          backgroundColor: "white",
          borderRadius: 16,
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                paddingTop: 17,
              }}
            >
              <Icon
                type="ionicon"
                name={focused ? "home" : "home-outline"}
                color={focused ? "#62CB0E" : "grey"}
                size={24}
              />
              <Text
                style={{
                  color: focused ? "#62CB0E" : "grey",
                  fontSize: 10,
                  marginTop: 4,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                paddingTop: 17,
              }}
            >
              <Icon
                type="ionicon"
                name={focused ? "person" : "person-outline"}
                color={focused ? "#62CB0E" : "grey"}
                size={24}
              />
              <Text
                style={{
                  color: focused ? "#62CB0E" : "grey",
                  fontSize: 10,
                  marginTop: 4,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function MainNavigator() {
  const isLogin = useSelector((store) => store.profileReducer.isLogin);

  return (
    <NavigationContainer>
      {isLogin ? (
        <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen
            name="Menu"
            component={TabScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{
              headerShown: false,
              headerLeft: null,
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MainNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}
