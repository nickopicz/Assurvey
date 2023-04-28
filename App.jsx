//import { StyleSheet, Text, View } from "react-native";
import * as React from 'react';
/*import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { AuthStack } from "./navigation/AuthStack";*/
import { NavigationContainer } from '@react-navigation/native';
/*import { auth } from "./firebase/firebase";
import { HomeStack } from "./navigation/HomeStack";
import CustomText from "./components/common/Text";
import { Colors } from "./Constants";
import { Provider } from "react-redux";
import { Store } from "./redux/store";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    "Montserrat-Regular": require("./assets/font/Montserrat-Regular.ttf"),
  });
  const [loggedIn, setLoggedIn] = useState()

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      try {
        if (user) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      } catch (error) {
        console.error(error);
        setLoggedIn(false)
      }
    });
  });

  if (!fontsLoaded) {
    return (
      <View style={{
        backgroundColor: Colors.light,
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <CustomText h1 navbar>Loading ... </CustomText>
      </View>
    )
  }
  if (loggedIn === true) {
    return (
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    )
  }
  else if (loggedIn === false) {
    return (
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    );
  }


}


