import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import CustomText from "../common/Text";
import { RoundedButton } from "../common/Button";
import { Colors } from "../../Constants";
import { CustomInput } from "../common/Input";
import { Ionicons } from "@expo/vector-icons";


export const CreateMatching = ({ onPress }) => {
    const [DATA, setDATA] = useState([]);
    const [title, setTitle] = useState("")
    const [itemStates, setItemStates] = useState({});

    const styles = StyleSheet.create({
        container: {
            width: "100%",
            backgroundColor: Colors.white,
            marginVertical: 5,
            minHeight: 150 + DATA.length * 100,
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
        },
        delete: {
            position: "absolute",
            right: -20,
            top: -10,
            zIndex: 2
        }
    })





    function handleAdd(item) {
        setDATA([...DATA, item]);
        setItemStates((prev) => {
            const newState = { ...prev };
            newState[item.id] = { question: "", answer: "" };
            return newState;
        });
    }

    function handleRemove(idx) {
        const newItems = [...DATA];
        newItems.splice(idx, 1);
        setDATA(newItems);
        setItemStates((prev) => {
            const newState = { ...prev };
            delete newState[idx];
            return newState;
        });
    }

    useEffect(() => {
        console.log("new render : ", DATA)
    }, [DATA])

    const RenderItem = ({ item, onPress }) => {
        const [question, setQuestion] = useState(itemStates[item.index]?.question ?? "");
        const [answer, setAnswer] = useState(itemStates[item.index]?.answer ?? "")

        useEffect(() => {
            console.log("new render in child uitem")
            console.log("final data: ", item.item)
        }, [DATA])

        return (
            <View style={styles.answerContainer}>
                <CustomInput
                    placeholder="Question ..."
                    value={question}
                    onChangeText={setQuestion}
                    iconName="clipboard"
                    autoCorrect={false}
                    style={styles.answer}
                />
                <CustomInput
                    style={styles.correctAnswer}
                    placeholder="Correct Answer ..."
                    value={answer}
                    onChangeText={setAnswer}
                    iconName="clipboard"
                    autoCorrect={false}
                />
                {/* <TouchableOpacity onPress={() => onPress(question, answer, item.index)}>
                    <Ionicons name="checkmark-circle" size={50} color={Colors.confirm} />
                </TouchableOpacity> */}
                <TouchableOpacity onPress={() => {
                    handleRemove(item.index);
                }}>
                    <Ionicons name="remove-circle" size={50} color={Colors.cancel} />
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.delete} onPress={onPress}>
                <Ionicons name="remove-circle" size={40} color={Colors.navbar} />
            </TouchableOpacity>
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
                    <RenderItem
                        item={item}
                        onPress={(question, answer, id) => {
                            const newData = [...DATA];
                            const index = DATA.findIndex((i) => i.id === id);
                            if (index !== -1) {
                                newData[index].question = question;
                                newData[index].answer = answer;
                                setDATA(newData);
                            }
                        }}
                    />
                )}
            />
            <RoundedButton
                style={styles.newAnswer}
                onPress={() => {
                    let newQuestion = {
                        question: "",
                        answer: "",
                        id: DATA.length
                    };
                    handleAdd(newQuestion);
                }}
            >
                Add answer
            </RoundedButton>
        </View>
    )
}