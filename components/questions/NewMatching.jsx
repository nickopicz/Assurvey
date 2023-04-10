import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import CustomText from "../common/Text";
import { RoundedButton } from "../common/Button";
import { Colors } from "../../Constants";
import { CustomInput } from "../common/Input";
import { Ionicons } from "@expo/vector-icons";


export const CreateMatching = () => {
    const [DATA, setDATA] = useState([]);
    const [title, setTitle] = useState("")

    const styles = StyleSheet.create({
        container: {
            width: "100%",
            backgroundColor: Colors.white,
            marginVertical: 5,
            height: 150 + DATA.length * 100,
            justifyContent: "flex-start"

        },
        input: {
            width: "100%"
        },
        answerContainer: {
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-evenly",
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
        }
    })


    useEffect(() => {
        console.log("data from question : ", DATA)
    })

    const RenderItem = (item) => {
        const [question, setQuestion] = useState("");
        const [answer, setAnswer] = useState("");

        function onPress() {
            let temp = DATA;

            for (let i = 0; i < temp.length; i++) {
                temp[i].id = i;
                if (temp[i].id === item.id) {
                    temp[i].question = question;
                    temp[i].answer = answer;
                }
            }
            setDATA(temp)

        }

        return (
            <View style={styles.answerContainer}>
                <CustomInput
                    placeholder="Question ..."
                    value={item.question}
                    onChangeText={(question) => setQuestion(question)}
                    iconName="clipboard"
                    autoCorrect={false}
                    style={styles.answer}
                />
                <CustomInput
                    style={styles.correctAnswer}
                    placeholder="Correct Answer ..."
                    value={item.answer}
                    onChangeText={(answer) => setAnswer(answer)}
                    iconName="clipboard"
                    autoCorrect={false}
                />
                <TouchableOpacity onPress={() => onPress()}>
                    <Ionicons name="checkmark-circle" size={50} color={Colors.confirm} />
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <CustomInput
                style={styles.title}

                placeholder="Question title ..."
                value={title}
                onChangeText={(title) => setTitle(title)}
                iconName="clipboard"
                autoCorrect={false}
            />

            <FlatList
                data={DATA}
                renderItem={(item) => (
                    <RenderItem />
                )}
            />
            <RoundedButton
                style={styles.newAnswer}
                onPress={() => {
                    let temp = DATA;
                    temp.push({
                        question: "",
                        answer: "",
                        id: DATA.length
                    });
                    setDATA(temp)
                }}
            >
                Add answer
            </RoundedButton>
        </View>
    )
}