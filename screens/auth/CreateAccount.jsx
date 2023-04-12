import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../../Constants";
import { CustomInput } from "../../components/common/Input";
import { RoundedButton } from "../../components/common/Button";
import { auth } from "../../firebase/firebase";

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


  async function handlePress() {
    await auth.createUserWithEmailAndPassword(email, password).catch(async function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else if (errorCode === "auth/email-already-in-use") {
        await auth.signInWithEmailAndPassword(email, password).catch(async function (error) {
          // Handle Errors here.
          var errorMessage = error.message;

          alert(errorMessage);

        })
      } else {
        alert(errorMessage);
      }
      console.log(error);
    })
  }

  useEffect(() => {
    console.log("email: ", email, " \n")
    console.log("pass: ", password)
  }, [password, email])

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
          secureTextEntry
          iconName="key"
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <RoundedButton disabled={email.length === 0 || password.length === 0} style={styles.button} onPress={() => {
          handlePress()
        }}>continue</RoundedButton>
      </View>
    </View>
  )
};


