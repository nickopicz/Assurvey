import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "../../Constants";
import { CustomInput } from "../../components/common/Input";
import { RoundedButton } from "../../components/common/Button";

export const CreateAccountScreen = ({
  navigation,
}) => {

  const styles = StyleSheet.create({
    inputContainer: {
      alignItems: "center",
      width: "100%",
      height: 300,
      justifyContent: "center"
    },
    container: {
      justifyContent: "center",
      alignItems: "center"
    },
    buttonContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      width: 300,
      height: 50,
      backgroundColor: Colors.confirm,
      borderColor: Colors.foreground,
      borderWidth: 2,
    }
  })
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <CustomInput
          autoFocus={true}
          autoCorrect={false}
          placeholder="anyone@anything.com"
          iconName="mail"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <CustomInput
          autoFocus={true}
          autoCorrect={false}
          placeholder="*********"
          secureTextEntry={true}
          iconName="key"
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <RoundedButton disabled={!email || !password} style={styles.button}>continue</RoundedButton>
      </View>
    </View>
  )
};


