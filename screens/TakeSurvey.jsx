import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { RoundedButton } from "../components/common/Button";
import CustomText from "../components/common/Text";
import { Matching } from "../components/display/Match";
import { MultipleChoice } from "../components/display/MultiChoice";
import { ShortAnswer } from "../components/display/Short"
import { Colors } from "../Constants";
import { getSurveyFromCode } from "../functions/FetchSurveys";
import { useSelector, useDispatch } from "react-redux";
import { setCode, setUserAnswers } from "../redux/actions";
import { submitAnswers } from "../functions/AnswerSurveys";
import { auth } from "../firebase/firebase";


export const SurveyTaker = ({ navigation }) => {
    const dispatch = useDispatch();

    const [DATA, setDATA] = useState({
        title: "",
        code: "",
        author: "",
        questions: [],
    });


    const code = useSelector(state => state.codeRed.code)
    const userAnswers = useSelector((state) => state.userAnswersRed.userAnswers)


    useEffect(() => {
        getSurveyFromCode(code)
            .then(res => {
                setDATA(res);


            })
            .catch((e) => console.warn(e))


        return () => {
            dispatch(setCode(""))
            dispatch(setUserAnswers([]))

        }
    }, [])


    useEffect(() => {
        if (DATA.length !== 0) {
            let newArr = new Array(DATA.questions.length)
            console.log("new array: ", newArr)
            dispatch(setUserAnswers(newArr))
        }

    }, [DATA])

    /**
     * not a fully implemented function, requires state handling fixes deriving from user input
     */
    async function handleSubmit() {
        let data = {
            user: auth.currentUser?.email,
            userAnswers: userAnswers
        }

        //not fully implemented
        await submitAnswers(data, code).then((res) => {
            console.log("success submitting");
            navigation.goBack();

        }).catch((e) => console.warn("error in front end submit: ", e))
    }

    const [input, setInput] = useState("")

    const styles = StyleSheet.create({
        container: {
            alignItems: "center",
            width: "100%",
            backgroundColor: Colors.blueWhite
        },
        completeButton: {
            marginVertical: 35,
            marginBottom: 40,
            backgroundColor: Colors.confirm,
            borderColor: Colors.navbar,
            borderWidth: 2,
            width: 200,
        }
    })


    const testMC = [
        { id: 0, answer: "hi" },
        { id: 1, answer: "low" },
        { id: 2, answer: "low" },
        { id: 3, answer: "low" },
        { id: 4, answer: "low" },
        { id: 5, answer: "low" },
        { id: 6, answer: "low" },

    ]

    const testMatch = [
        { label: "cosi", value: 0 },
        { label: "go", value: 1 },
        { label: "low", value: 2 },
        { label: "med", value: 3 },
        { label: "k", value: 4 },
        { label: "j", value: 5 },
        { label: "z", value: 6 },
    ]

    const matchTestQ = [
        { id: 0, question: "who?" },
        { id: 1, question: "why?" },
        { id: 2, question: "when?" },
        { id: 3, question: "how?" },
        { id: 4, question: "for what?" },
        { id: 5, question: "porque?" },
        { id: 6, question: "perche?" },
    ]

    const QuestionType = ({ item }) => {
        useEffect(() => {
            console.log("rendering: ", item)


        })

        if (item.item.type === 0) {
            console.log("rendering a multiple choice")
            return <MultipleChoice
                answers={item.item.answers.map((str, index) => ({ id: index, answer: str }))}
                question={item.item.title}
                i={item.index + 1}
            />
        }
        if (item.item.type === 1) {
            return <ShortAnswer i={item.index + 1} question={item.item.title} />
        }

        if (item.item.type === 2) {
            return <Matching
                i={item.index + 1}
                question={item.item.title}
                questionSet={item.item.questions.map((str, index) => ({ question: str, id: index }))}
                answers={item.item.answers.map((str, index) => ({ label: str, value: index }))}
                size={item.item.questions.length}

            />
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <CustomText h2 navbar>{DATA.title}</CustomText>
            </View>
            <View style={{ minHeight: 300 + DATA.length * 100, width: "100%", alignItems: "center" }}>
                <FlatList
                    scrollEnabled={false}
                    contentContainerStyle={{ alignItems: "center", width: "100%" }}
                    data={DATA.questions}
                    // keyExtractor={(item) => item.index}
                    renderItem={(item) => {
                        console.log("inside flatlist item: ", item)
                        return <QuestionType item={item} />
                    }}
                />
            </View>
            <RoundedButton
                medium
                style={styles.completeButton}
                onPress={() => {
                    handleSubmit()
                }}
            >
                <CustomText p1 navbar>
                    Finish
                </CustomText>
            </RoundedButton>
        </View>
    )
}

export default SurveyTaker;