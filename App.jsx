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
import { Colors } from "./Constants";*/
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/home/HomeScreen.jsx";
//import Login from "./screens/auth/Login";
//import { CreateAccountScreen } from "./screens/auth/CreateAccount";
import CreateScreen from "./screens/create/CreateScreen.jsx";
import CreateSurvey from './screens/create/CreateSurvey.jsx';
import TakeSurvey from "./screens/TakeSurvey.jsx";

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="CreateScreen" component={CreateScreen}/>
        <Stack.Screen name="Create" component={CreateSurvey}/>
        <Stack.Screen name="Take" component={TakeSurvey}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


