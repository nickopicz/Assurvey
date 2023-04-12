import { useEffect, useState } from "react";
import { CustomInput } from "../components/common/Input";
import { RoundedButton } from "../components/common/Button";
import { View, StyleSheet } from "react-native";
import { Colors } from "../Constants";
import CustomText from "../components/common/Text";
import { useDispatch } from "react-redux"
import { setCode } from "../redux/actions";
import { checkAccessCode } from "../functions/CreateSurvey";
export const LandingScreen = ({ navigation }) => {

  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center"
    },
    button: {
      width: 200,
      height: 50,
      alignSelf: 'flex-end',
      marginTop: "2%",
      marginRight: "1%",
      backgroundColor: Colors.contrast,
      borderWidth: 2,
      borderColor: Colors.earth
    },
    inputContainer: {
      width: 400,
      height: 250,
      paddingVertical: 50,
      justifyContent: "center"
    },
    search: {
      backgroundColor: Colors.confirm,
      borderWidth: 2,
      borderColor: Colors.earth,
      width: 200,
      height: 50

    }
  })

  const [surveyCode, setSurveyCode] = useState("")

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("hello from landing page")
  })
  return (
    <View style={styles.container}>
      <RoundedButton style={styles.button} onPress={() => {
        navigation.navigate("CreateAccount")
      }}><CustomText p1 lightBlue>sign up / in</CustomText></RoundedButton>
      <View style={styles.inputContainer}><CustomInput
        autoFocus={true}
        autoCorrect={false}
        placeholder="Enter your code to take a survey!"
        iconName="list"
        value={surveyCode}
        onChangeText={(surveyCode) => setSurveyCode(surveyCode)}
      />
      </View>
      <RoundedButton style={styles.search}
        onPress={() => {
          checkAccessCode(surveyCode).then(() => {
            dispatch(setCode(surveyCode))
            navigation.navigate("Take")
          })
        }}
      ><CustomText p1 lightBlue>search</CustomText></RoundedButton>
    </View>
  );
};


