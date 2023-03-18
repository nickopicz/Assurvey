import React, { useState } from "react";
import { CustomInput } from "../components/common/Input";
import { RoundedButton } from "../components/common/Button";
import { View, StyleSheet } from "react-native";
import { Colors } from "../Constants";
import CustomText from "../components/common/Text";

export const LandingScreen = ({ navigation }) => {

  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center"
    },
    button: {
      width: 250,
      height: 50,
      alignSelf: 'flex-end',
      marginTop: "2%",
      marginRight: "1%",
      backgroundColor: Colors.contrast
    },
    inputContainer: {
      width: 400,
      height: 250,
      paddingVertical: 50,
      justifyContent: "center"
    }
  })

  const [surveyCode, setSurveyCode] = useState("")

  return (
    <View style={styles.container}>
      <RoundedButton style={styles.button} onPress={() => {
        navigation.navigate("CreateAccount")
      }}><CustomText p1 lightBlue>Log In / Sign-Up</CustomText></RoundedButton>
      <View style={styles.inputContainer}><CustomInput
        autoFocus={true}
        autoCorrect={false}
        placeholder="Enter your code to take a survey!"
        iconName="list"
        value={surveyCode}
        onChangeText={(surveyCode) => setSurveyCode(surveyCode)}
      /></View>
    </View>
  );
};


