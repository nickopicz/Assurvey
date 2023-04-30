import React, { useEffect, useState } from "react";
import { View } from "react-native";
import CustomText from "../common/Text";
import { CustomInput } from "../common/Input";
import { RoundedButton } from "../common/Button";
import { Colors } from "../../Constants";
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { setUserAnswers } from "../../redux/actions";

export const ShortAnswerGrade = ({ question, long, i, chosenAnswer }) => {
  const styles = StyleSheet.create({
    container: {
      borderRadius: 10,
      borderColor: Colors.foreground,
      borderWidth: 2,
      minWidth: 500,
      minHeight: 250,
      marginVertical: 5,
      backgroundColor: Colors.white
    },
    titleContainer: {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      minHeight: "15%",
      marginTop: 35,
      paddingHorizontal: 10
    },
    inputContainer: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 10,
      paddingBottom: 10,

    },
    input: {
      height: long === true ? 100 : 60,
      width: "100%"

    },
    num: {
      position: "absolute",
      top: 10,
      left: 15

    }
  })

  const [text, setText] = useState("")

  const dispatch = useDispatch();

  const userAnswers = useSelector((state) => state.userAnswersRed.userAnswers)



  return (
    <View style={styles.container}>
      <View style={styles.num}>
        <CustomText p1 foreground>{i}</CustomText>
      </View>
      <View style={styles.titleContainer}>
        <CustomText h4 navbar>
          {question}
        </CustomText>
      </View>
      <View style={styles.inputContainer}>
        <CustomText p1 cancel>{chosenAnswer}</CustomText>
      </View>
    </View>
  );
};
