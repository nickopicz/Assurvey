import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { RoundedButton } from "../../components/common/Button";
import CustomText from "../../components/common/Text";
import { Colors } from "../../Constants";
import { auth } from "../../firebase/firebase";
import { CustomInput } from "../../components/common/Input";
import { useDispatch } from "react-redux";
import { setCode } from "../../redux/actions";
import { checkAccessCode } from "../../functions/CreateSurvey";
export const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [codeId, setCodeId] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      height: "100%",
    },
    takeButton: {
      borderWidth: 2,
      borderColor: Colors.foreground,
      marginVertical: 20,
    },
    createButton: {
      backgroundColor: Colors.confirm,
      borderWidth: 2,
      marginVertical: 20,
    },
    editButton: {
      backgroundColor: Colors.light,
      marginVertical: 20,
      borderWidth: 2,
      borderColor: Colors.foreground,
    },
    gradeButton: {
      backgroundColor: Colors.foreground,
      marginVertical: 20,
      borderWidth: 2,
      borderColor: Colors.foreground,
    },
    resultsButton: {
      backgroundColor: Colors.cancel,
      marginVertical: 20,
      borderWidth: 2,
      borderColor: Colors.foreground,
    },
    navContainer: {
      alignItems: "center",
    },
    errorText: {
      textAlign: "center",
      width: "100%",
    },
  });

  return (
    <View style={styles.container}>
      <CustomText h1 navbar>
        Welcome , {auth.currentUser.displayName}
      </CustomText>
      <View style={styles.navContainer}>
        <CustomInput
          placeholder="Access Code"
          value={codeId}
          onChangeText={(text) => {
            setCodeId(text);
            setErrorMsg("");
          }}
        />
        <CustomText style={styles.errorText} p2 cancel>
          {errorMsg}
        </CustomText>
        <RoundedButton
          large
          disabled={codeId === ""}
          onPress={() => {
            checkAccessCode(codeId).then((res) => {
              console.log("res: ", res);
              if (res === false) {
                dispatch(setCode(codeId));
                setErrorMsg("");
                navigation.navigate("Take");
              } else {
                setErrorMsg(
                  "A survey does not exist with this code, \n maybe try entering it again?"
                );
                console.log("doesnt exist");
              }
            });
          }}
          style={styles.takeButton}
        >
          <CustomText p2 navbar style={{ paddingHorizontal: 10 }}>
            Take Survey
          </CustomText>
        </RoundedButton>
        <RoundedButton
          large
          onPress={() => navigation.navigate("Create")}
          style={styles.createButton}
        >
          <CustomText p2 navbar style={{ paddingHorizontal: 10 }}>
            Create Survey
          </CustomText>
        </RoundedButton>

        <RoundedButton
          large
          onPress={() => navigation.navigate("EditMenu")}
          style={styles.editButton}
        >
          <CustomText p2 navbar style={{ paddingHorizontal: 10 }}>
            Edit Survey
          </CustomText>
        </RoundedButton>
        <RoundedButton
          large
          onPress={() => navigation.navigate("GradeMenu")}
          style={styles.gradeButton}
        >
          <CustomText p2 light style={{ paddingHorizontal: 10 }}>
            Grade Surveys
          </CustomText>
        </RoundedButton>
        <RoundedButton
          large
          onPress={() => navigation.navigate("Results")}
          style={styles.resultsButton}
        >
          <CustomText p2 light style={{ paddingHorizontal: 10 }}>
            Results
          </CustomText>
        </RoundedButton>
      </View>
    </View>
  );
};

export default HomeScreen;
