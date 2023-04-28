import React, { useCallback, useEffect, useState } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import CustomText from "../common/Text";
import { RoundedButton } from "../common/Button";
import { Colors } from "../../Constants";
import { CustomInput } from "../common/Input";
import { Ionicons } from "@expo/vector-icons";


export const CreateMatching = ({ save, del, id, titleProp, questionsProp, graded }) => {
    useEffect(() => {
        console.log("questions : ", questionsProp.questions);
        console.log("index of question: ", id)
    }, [])

    const [DATA, setDATA] = useState([]);
    const [title, setTitle] = useState("")
    const [itemStates, setItemStates] = useState({});
    const [answers, setAnswers] = useState(questionsProp.answers);
    const [questions, setQuestions] = useState(questionsProp.questions);
    const [points, setPoints] = useState(questionsProp.points);



    const styles = StyleSheet.create({
        container: {
            minWidth: 600,
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
            width: "45%",
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
    })


    useEffect(() => {
        console.log("re render parent match: ", questions)
    }, [questions])


    /**
     * 
     * @param {*} e character to check if number
     */
    const handlePointsInput = (e) => {
        const newValue = e.replace(/[^0-9]/g, '');
        console.log("regex changed: ", newValue)
        setPoints(newValue);
    }

    useEffect(() => {
        console.log("points: ", points)
    }, [points])
    /**
     * 
     * @param {*} item , from adding a new question/answer
     * this function sets the state for the question component, helper function
     */
    function handleAdd(item) {
        console.log("prev data: ", DATA);
        console.log("new item: ", item)
        setDATA([...DATA, item]);
        setItemStates((prev) => {
            const newState = { ...prev };
            newState[item.id] = { question: "", answer: "" };
            return newState;
        });
    }

    /**
     * @param {*} idx index to remove from DATA and the items 
     */
    function handleRemove(idx) {
        const newItems = [...DATA];
        newItems.splice(idx, 1);

        for (let i = 0; i < newItems.length; i++) {
            newItems[i].id = i;
        }
        setDATA(newItems);
        setItemStates((prev) => {
            const newState = { ...prev };
            delete newState[idx];
            return newState;
        });
    }


    /**
     * question setter array that handles the creation of a new question/answer child
     */
    const addQuestion = () => {
        setQuestions([...questions, '']);
    };

    /**
     * 
     * @param {*} index removes a child question+answer with index param
     */
    const removeQuestion = (index) => {
        const newInputs = [...questions];
        newInputs.splice(index, 1);
        setQuestions(newInputs);
    };

    /**
     * 
     * @param {*} text text val from state updates on blur of input
     * @param {*} index index to look for in questions state array
     * @returns enables the user to see what they inputted
     */
    const updateQuestions = (text, index) => {
        console.log("updating question: ", text, index)
        setQuestions((prevValues) => {
            const newTextInput = [...prevValues];
            newTextInput[index] = text;
            return newTextInput
        })
    };

    //these 3 functions are equivalent to the above 3, but for the answer value
    const addAnswer = () => {
        setAnswers([...answers, '']);
    };

    const removeAnswer = (index) => {
        const newInputs = [...answers];
        newInputs.splice(index, 1);
        setAnswers(newInputs);
    };

    const updateAnswers = (text, index) => {
        console.log("updating question: ", text, index)
        setAnswers((prevValues) => {
            const newTextInput = [...prevValues];
            newTextInput[index] = text;
            return newTextInput
        })
    };


    useEffect(() => {
        console.log("new render : ", DATA)
    }, [DATA])


    const RenderItem = ({ item }) => {
        useEffect(() => {
            console.log("answers ", answers)
            console.log("index: ", item.index)
            console.log("whole object: ", item)

        })
        const [question, setQuestion] = useState(questions[item.index]);
        const [answer, setAnswer] = useState(answers[item.index])


        return (
            <View style={styles.answerContainer}>
                <View style={styles.questionHolder}>
                    <CustomText p1 foreground style={{ textAlign: "center", maxWidth: "50%", alignSelf: "center" }}>
                        {questions[item.index]}
                    </CustomText>
                    <CustomInput
                        placeholder="Question ..."
                        value={questions[item.index]}
                        onChangeText={question => {
                            setQuestion(question)
                        }}
                        onBlur={() => updateQuestions(question, item.index)}
                        iconName="clipboard"
                        autoCorrect={false}
                        style={styles.answer}
                    />
                </View>
                <View style={styles.questionHolder}>
                    <CustomText p1 navbar style={{ textAlign: "center", maxWidth: "50%" }}>
                        {answers[item.index]}
                    </CustomText>
                    <CustomInput
                        style={styles.correctAnswer}
                        placeholder="Correct Answer ..."
                        value={answer}
                        onChangeText={setAnswer}
                        onBlur={() => updateAnswers(answer, item.index)}
                        iconName="clipboard"
                        autoCorrect={false}
                    />
                </View>

                <TouchableOpacity onPress={() => {
                    handleRemove(item.index);
                    removeQuestion(item.index);
                    removeAnswer(item.index)

                }}>
                    <Ionicons name="remove-circle" size={40} color={Colors.navbar} />
                </TouchableOpacity>
            </View>
        )
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

            <FlatList
                data={answers ? answers : DATA}
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
                    addQuestion();
                    addAnswer()
                }}
            >
                Add answer
            </RoundedButton>
            {graded ? (<View style={styles.pointContainer}>
                <View style={styles.pointInput}>
                    <CustomInput
                        placeholder="Points "
                        value={points}
                        onChangeText={handlePointsInput}
                        iconName="clipboard"
                        autoCorrect={false}
                    /></View>
                <CustomText p1 navbar>{points}</CustomText>
            </View>) : null}
            <TouchableOpacity style={styles.saveButton} onPress={() => {
                console.log("going up the tree... ",
                    {
                        title: title,
                        questions: questions,
                        answers: answers,
                        points: points
                    });
                save(id,
                    {
                        title: title,
                        questions: questions,
                        answers: answers,
                        type: 2,
                        points: points
                    })
            }}>
                <Ionicons name="checkmark-circle" size={50} color={Colors.confirm} />
                <CustomText p2 confirm>save</CustomText>

            </TouchableOpacity>
        </View>
    )
}