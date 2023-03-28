import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AuthStack } from "./navigation/AuthStack";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { auth } from "./firebase/firebase";
import { HomeStack } from "./navigation/HomeStack";
import CustomText from "./components/common/Text";
import { Colors } from "./Constants";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/home/HomeScreen.jsx";
import Login from "./screens/auth/Login";
import { CreateAccountScreen } from "./screens/auth/CreateAccount";

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Test">
        <Stack.Screen name="Test" component={Test} options={{title: 'Welcome'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});*/
