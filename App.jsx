import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AuthStack } from "./navigation/AuthStack";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  let [fontsLoaded] = useFonts({
    "OverPass-Regular": require("./assets/font/Overpass-Regular.ttf"),
  });

  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
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
