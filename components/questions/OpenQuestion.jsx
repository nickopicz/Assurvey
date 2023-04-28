import React, { useCallback, useEffect, useState } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import CustomText from "../common/Text";
import { RoundedButton } from "../common/Button";
import { Colors } from "../../Constants";
import { CustomInput } from "../common/Input";
import { Ionicons } from "@expo/vector-icons";


export const CreateOpen = ({ save, del, id, titleProp, questionsProp, graded }) => {
    useEffect(() => {
        console.log("questions : ", questionsProp);
        console.log("index of question: ", id)
    }, [])

    const [title, setTitle] = useState(questionsProp.title)
    const [points, setPoints] = useState(questionsProp.points)



    const styles = StyleSheet.create({
        container: {
            width: 500,
            backgroundColor: Colors.white,
            marginVertical: 5,
            minHeight: 200,
            justifyContent: "flex-start"

        },
        title: {
            width: "90%"
        },
        input: {
            width: "80%"
        },
        answerContainer: {
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"

        },
        newAnswer: {
            width: "50%",
            alignSelf: "center"
        },
        answer: {
            width: "50%"
        },
        correctAnswer: {
            width: "50%"
        },
        delete: {
            position: "absolute",
            right: -20,
            top: -10,
            zIndex: 2
        },
        questionHolder: {
            flexDirection: "column",
            width: "85%",
            alignItems: "center",
            alignSelf: "flex-end"
        },
        saveButton: {
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center"


        },
        pointContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        },
        pointInput: {
            width: "70%",
        }
    });


    /**
     * 
     * @param {*} e character to check if number
     */
    const handlePointsInput = (e) => {
        const newValue = e.replace(/[^0-9]/g, '');
        console.log("regex changed: ", newValue)
        setPoints(newValue);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.delete} onPress={del}>
                <Ionicons name="remove-circle" size={40} color={Colors.cancel} />
            </TouchableOpacity>
            <CustomText p1 navbar style={{ textAlign: "center", maxWidth: "70%", alignSelf: "center", marginVertical: 5 }}>
                {titleProp}
            </CustomText>
            <CustomInput
                style={styles.title}
                placeholder="Question title ..."
                value={title}
                onChangeText={(title) => setTitle(title)}
                iconName="clipboard"
                autoCorrect={false}
            />


            {graded ? (
                <View style={styles.pointContainer}>
                    <View style={styles.pointInput}>
                        <CustomInput
                            placeholder="Points "
                            value={points}
                            onChangeText={handlePointsInput}
                            iconName="clipboard"
                            autoCorrect={false}
                        /></View>
                    <CustomText p1 navbar>{points}</CustomText>
                </View>
            ) : null
            }
            <TouchableOpacity
                style={styles.saveButton}
                onPress={() => {
                    console.log("going up the tree... ",
                        {
                            title: title,
                            points: points
                        });
                    save(id,
                        {
                            title: title,
                            type: 1,
                            points: points
                        })
                }}>
                <Ionicons name="checkmark-circle" size={50} color={Colors.confirm} />
                <CustomText p2 confirm>save</CustomText>
            </TouchableOpacity>
        </View >
    )
}