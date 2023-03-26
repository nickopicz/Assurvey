import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { RadioButton } from "react-native-paper";
import { CustomInput } from "../common/Input";
import CustomText from "../common/Text";
import { Colors } from "../../Constants";

export const MultipleChoice = ({ answers, question }) => {
  const styles = StyleSheet.create({
    container: {
      borderRadius: 10,
      borderColor: Colors.foreground,
      borderWidth: 2,
      width: "55%",
      minHeight: 250,
      marginVertical: 5,
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

    }
  })

  const [checked, setChecked] = useState("unchecked");


  const RenderItem = ({ content, onPress, status }) => {


    return (
      <View style={styles.answer}>
        <RadioButton
          value={content}
          status={status}
          onPress={onPress}
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
        data={data}
        renderItem={({ item }) => (
          <RenderItem
            content={item.answer}
            onPress={() => {
              setChecked(item.id)
            }
            }
            status={checked === item.id ? "checked" : "unchecked"}
          />
        )}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.num}>
        <CustomText p1 foreground>{1}</CustomText>
      </View>
      <View style={styles.titleContainer}>
        <CustomText h4 contrast>
          {question}
        </CustomText>
      </View>
      <NewFlatList data={answers} />
    </View>
  );

};
