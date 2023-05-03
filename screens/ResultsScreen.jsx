import React, { useState, useEffect } from "react";
import { Text, View, FlatList, Button, StyleSheet } from "react-native";
import { getUserResponses } from "../functions/FetchSurveys";
import { getSyntheticLeadingComments } from "typescript";
import { auth } from "../firebase/firebase";
import CustomText from "../components/common/Text";
import { Colors } from "../Constants";

const ResultsScreen = ({ navigation }) => {

  const styles = StyleSheet.create({
    cardContainer: {
      minWidth: 150,
      minHeight: 90,
      backgroundColor: Colors.blueWhite,
      borderRadius: 5,
      margin: 10,
      borderColor: Colors.navbar,
      borderWidth: 2
    },
    innerContainer: {
      margin: 5,
      justifyContent: "center",
      alignItems: "center",
    }
  })
  const [DATA, setDATA] = useState([])
  // const surveys = getUserResponses(auth.currentUser);

  // console.log("surveys: " + surveys);

  useEffect(() => {
    getUserResponses(auth.currentUser.email).then((res) => {
      console.log("results of surveys: ", res)
      setDATA(res)
    }).catch((e) => {
      console.warn(e)
    })
  }, [])


  return (
    <View>
      <FlatList
        contentContainerStyle={{ alignItems: "center", width: "80%" }}
        numColumns={3}
        data={DATA}
        renderItem={(item) => (

          <View style={styles.cardContainer}>
            <View style={styles.innerContainer}>
              <CustomText h4 navbar style={{ textAlign: "center" }}>{item.item.title}</CustomText>
              <CustomText p1 navbar>{"survey: " + item.item.surveyCode}</CustomText>
              <CustomText p1 navbar>{"grade : " + item.item.score}</CustomText>

            </View>
          </View>

        )}
        keyExtractor={item => (item.key, console.log("key: ", item.key))}
      />
    </View>
  );
};

export default ResultsScreen;
