import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import Account from "./src/screens/Account";
import Card from "./src/screens/Card";
import Landing from "./src/screens/Landing";
import Login from "./src/screens/Login";
import Map from "./src/screens/Map";
import Passport from "./src/screens/Passport";
import Signup from "./src/screens/Signup";

const DrawerNavigation = createDrawerNavigator({
  Account: Account,
  Card: Card,
  Landing: Landing,
  Login: Login,
  Map: Map,
  Passport: Passport,
  Signup: Signup
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Account: Account,
    Card: Card,
    Landing: Landing,
    Login: Login,
    Map: Map,
    Passport: Passport,
    Signup: Signup
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-500": require("./src/assets/fonts/roboto-500.ttf"),
      "actor-regular": require("./src/assets/fonts/actor-regular.ttf"),
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "roboto-700": require("./src/assets/fonts/roboto-700.ttf"),
      "amaranth-700": require("./src/assets/fonts/amaranth-700.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
