import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { RadioButton } from "react-native-paper";
import { CustomInput } from "../common/Input";
import CustomText from "../common/Text";
import { Colors } from "../../Constants";
import { useDispatch, useSelector } from "react-redux";
import { setUserAnswers } from "../../redux/actions";

export const MCGrade = ({ answers, question, i, chosenAnswer }) => {
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

    num: {
      position: "absolute",
      top: 10,
      left: 15

    },
    answer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start"

    },
    list: {
      paddingVertical: 25,
      marginBottom: 20,
      paddingLeft: 20
    }
  })


  const [checked, setChecked] = useState(chosenAnswer);
  const userAnswers = useSelector((state) => state.userAnswersRed.userAnswers)
  const dispatch = useDispatch();


  const RenderItem = ({ content, onPress, status }) => {


    return (
      <View style={styles.answer}>
        <RadioButton
          value={content}
          status={status}
          uncheckedColor={Colors.foreground}
          color={Colors.light}
        />
        <CustomText p2 navbar>{content}</CustomText>
      </View>
    )
  }

  const NewFlatList = ({ data }) => {



    return (
      <FlatList
        style={styles.list}
        data={data}
        renderItem={({ item }) => (
          <RenderItem
            content={item.answer}

            status={checked === item.id ? "checked" : "unchecked"}
          />
        )}
        scrollEnabled={false}
      />
    )
  }

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
      <NewFlatList data={answers} />
    </View>
  );

};
