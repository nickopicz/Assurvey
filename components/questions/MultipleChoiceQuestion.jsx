import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import CustomText from "../common/Text";
import { RoundedButton } from "../common/Button";
import { Colors } from "../../Constants";
import { CustomInput } from "../common/Input";
import { Ionicons } from "@expo/vector-icons";


export const CreateMC = ({ questionSetter, answerSetter }) => {
    const [DATA, setDATA] = useState([]);
    const [title, setTitle] = useState("")

    const styles = StyleSheet.create({
        container: {
            width: "100%",
            backgroundColor: Colors.white,
            marginVertical: 5,
            minHeight: 150 + DATA.length * 100,
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

    const [answers, setAnswers] = useState([]);


    function addAnswer(answer) {
        setAnswers([...answers, answer])
    }

    function removeAnswer(index) {
        const newItems = [...answers];
        newItems.splice(index, 1);
        setAnswers(newItems);
    }


    function onPress(question, answer) {
        let temp = DATA;

        for (let i = 0; i < temp.length; i++) {
            temp[i].id = i;
            if (temp[i].id === item.id) {
                temp[i].question = question;
                temp[i].answer = answer;
            }
        }
        console.log("matching dataL: ", temp)
        setDATA(temp)
    }


    function handleRemove(idx) {
        const newItems = [...DATA];
        newItems.splice(idx, 1);
        setDATA(newItems);
    }


    useEffect(() => {
        console.log("data from question : ", DATA)
    })


    const RenderItem = (item) => {
        const [question, setQuestion] = useState("");
        const [answer, setAnswer] = useState("");

        return (
            <View style={styles.answerContainer}>

                <CustomInput
                    style={styles.correctAnswer}
                    placeholder="Correct Answer ..."
                    value={item.answer}
                    onChangeText={(answer) => setAnswer(answer)}
                    iconName="clipboard"
                    autoCorrect={false}
                />
                {/* <TouchableOpacity onPress={() => { onPress(question, answer); addAnswer(answer) }}>
                    <Ionicons name="checkmark-circle" size={50} color={Colors.confirm} />
                </TouchableOpacity> */}
                <TouchableOpacity onPress={() => { removeAnswer(item.index); handleRemove(item.index) }}>
                    <Ionicons name="remove-circle" size={50} color={Colors.cancel} />
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
                    <RenderItem onPress={onPress} />
                )}
            />
            <RoundedButton
                style={styles.newAnswer}
                onPress={() => {
                    let temp = {
                        question: "",
                        answer: "",
                        id: DATA.length
                    };

                    setDATA([...DATA, temp])
                }}
            >
                Add answer
            </RoundedButton>
        </View>
    )
}