import React, { useEffect, useState } from "react";

import { RoundedButton } from "../../components/common/Button";
import { CustomInput } from "../../components/common/Input";
import { View, StyleSheet, FlatList } from "react-native";
import { Colors } from "../../Constants";
import { AntDesign } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import { CreateMatching } from "../../components/questions/NewMatching";
import { CreateMC } from "../../components/questions/MultipleChoiceQuestion";


export const CreateScreen = ({ navigation }) => {
    const styles = StyleSheet.create({
        container: {
            alignItems: "center",
            backgroundColor: Colors.blueWhite
        },
        codeContainer: {
            width: "100%",
            height: 150,
            alignItems: "center",
        },
        addButton: {
            width: "40%",
            borderColor: Colors.navbar,
            borderWidth: 2
        },
        dropdown: {
            width: 200,
            alignSelf: "center",
        },
        addContainer: {
            alignItems: "center",
            justifyContent: "center",
            width: "50%",
        }
    })

    const [DATA, setDATA] = useState([])


    const questionTypes = [
        { label: "Multiple Choice", value: 0 },
        { label: "Open Ended", value: 1 },
        { label: "Matching", value: 2 },
    ]

    const [title, setTitle] = useState("");
    const [code, setCode] = useState("");
    const [pressed, setPressed] = useState(false)
    const [choice, setChoice] = useState(questionTypes)
    const [choiceVal, setChoiceVal] = useState(null)
    const [open, setOpen] = useState(false);
    const [graded, setGraded] = useState(false);


    const [formState, setFormState] = useState({
        title: "",
        code: "",
        graded: graded,
        questions: [],
    });


    function handleRemove(idx) {
        const newItems = [...formState.questions];
        newItems.splice(idx, 1);
        for (let i = 0; i < newItems.length; i++) {
            newItems[i].index = i
        }
        setFormState((prevState) => ({ ...prevState, questions: newItems }))
    }

    useEffect(() => {
        console.log(open)
        console.log("Data: ", DATA)
    })


    useEffect(() => {
        console.log("form ", formState)
    }, [formState])


    /**
     * 
     * @param {*} item the item passed through the Flatlist renderItem param
     * @returns the correct question type based on the type from db|state
     */
    const QuestionType = ({ item }) => {

        const handleQuestionChange = (questionId, newQuestion) => {
            console.log("item: ", item.index, " vs ", questionId)
            console.log("pressed... question change", questionId, newQuestion)
            setFormState(prevState => {
                const updatedQuestions = prevState.questions.map(question => {
                    if (question.index === questionId) {
                        return { ...question, ...newQuestion };
                    } else {
                        return question;
                    }
                });
                return { ...prevState, questions: updatedQuestions };
            });

        };

        if (item.item.type === 0) {
            return <CreateMC />
        }
        if (item.item.type === 1) {
            return null
        }

        if (item.item.type === 2) {
            return <CreateMatching save={handleQuestionChange}
                del={() => handleRemove(item.index)}
                id={item.index}
                titleProp={formState.questions[item.index].title}
                questionsProp={formState.questions[item.index].questions}
            />
        }
    }



    return (
        <View style={styles.container}>
            <View style={styles.codeContainer}>
                <CustomInput small
                    placeholder="Survey Title"
                    autoFocus={true}
                    iconName="book"
                    value={title}
                    onChangeText={(title) => setFormState((prevState) => ({ ...prevState, title: title }))}
                />
                <CustomInput small
                    placeholder="Custom Access Code"
                    iconName="code"
                    value={code}
                    onChangeText={(code) => setFormState((prevState) => ({ ...prevState, code: code }))}
                />
            </View>
            <View style={{ minHeight: 300 + DATA.length * 100, width: "100%", alignItems: "center" }}>
                <FlatList
                    scrollEnabled={false}
                    style={{ width: "100%" }}
                    contentContainerStyle={{ alignItems: "center", width: "100%" }}
                    data={formState.questions}
                    renderItem={(item) => (
                        <QuestionType item={item} />
                    )}
                />
            </View>
            <View style={styles.addContainer}>
                <View style={{
                    minHeight: open === true ? 200 : 50,
                    marginVertical: 10,
                    justifyContent: "flex-start"
                }}>
                    {pressed ?
                        <DropDownPicker
                            style={styles.dropdown}
                            stickyHeader={true}
                            dropDownDirection={"down"}
                            open={open}
                            setOpen={setOpen}
                            value={choiceVal}
                            setValue={setChoiceVal}
                            setItems={setChoice}
                            items={choice}
                            placeholder="Select answer"
                            defaultIndex={0}
                            containerStyle={{ width: 200 }}
                            onChangeItem={item => console.log(item.label, item.value)} /> : null}
                </View>
                <RoundedButton style={styles.addButton} onPress={() => {
                    setPressed(!pressed);
                    if (pressed === true && choiceVal !== null) {
                        let temp = formState.questions;
                        console.log("type: ", choiceVal)
                        temp.push({
                            type: choiceVal,
                            index: temp.length,
                        })
                        setFormState((prevState) => ({ ...prevState, questions: temp }))
                    }
                }}
                >
                    <AntDesign name="plus" size={50} />

                </RoundedButton>
            </View>
        </View>
    )
}