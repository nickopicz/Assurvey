import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { RoundedButton } from "../../components/common/Button";
import CustomText from "../../components/common/Text";
import { getSurveyFromCode, getSurveyResponses, gradeSurvey } from "../../functions/FetchSurveys";
import { Colors } from "../../Constants";
import { useSelector, useDispatch } from "react-redux";
import { setCode, setUserAnswers } from "../../redux/actions";
import { submitAnswers } from "../../functions/AnswerSurveys";
import { MCGrade } from "../../components/grade/GradeMC";
import { ShortAnswerGrade } from "../../components/grade/GradeShort";
import { MatchGrade } from "../../components/grade/GradeMatch";
import { auth } from "../../firebase/firebase";
import DropDownPicker from "react-native-dropdown-picker";
import { CustomInput } from "../../components/common/Input";

export const SurveyGrader = ({ navigation }) => {
    const dispatch = useDispatch();

    const [DATA, setDATA] = useState({
        title: "",
        code: "",
        author: "",
        questions: [],
    });

    const [userResponses, setUserResponses] = useState([]);
    const [choice, setChoice] = useState([]);
    const [open, setOpen] = useState(false);
    const [choiceVal, setChoiceVal] = useState(0)
    const [userIndices, setUserIndices] = useState([])
    const [grade, setGrade] = useState(0);

    const code = useSelector(state => state.codeRed.code)
    const userAnswers = useSelector((state) => state.userAnswersRed.userAnswers)
    const docId = useSelector(
        (state) => state.docIdRed.docId
    )


    async function handleSubmit() {
        console.log("user: ", choice[choiceVal].label);
        console.log("doc id: ", docId)
        await gradeSurvey(docId, choice[choiceVal].label, parseInt(grade))
    }

    /**
    * 
    * @param {*} e character to check if number
    */
    const handlePointsInput = (e) => {
        const newValue = e.replace(/[^0-9]/g, '');
        console.log("regex changed: ", newValue)
        setGrade(newValue);
    }


    useEffect(() => {
        getSurveyFromCode(code)
            .then(async (res) => {
                setDATA(res);
                await getSurveyResponses(code).then((res) => {
                    setUserResponses(res.data);
                    setChoice(res.options);
                }
                ).catch((e) => console.warn(e))

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
            dispatch(setUserAnswers(newArr))
        }

    }, [DATA])


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

    const QuestionType = ({ item, chosenAnswer }) => {


        if (item.item.type === 0) {
            return <MCGrade
                answers={item.item.answers.map((str, index) => ({ id: index, answer: str }))}
                question={item.item.title}
                i={item.index + 1}
                chosenAnswer={chosenAnswer}
            />
        }
        if (item.item.type === 1) {
            return <ShortAnswerGrade
                i={item.index + 1}
                question={item.item.title}
                chosenAnswer={chosenAnswer}
            />
        }

        if (item.item.type === 2) {
            return <MatchGrade
                i={item.index + 1}
                question={item.item.title}
                questionSet={item.item.questions.map((str, index) => ({ question: str, id: index }))}
                answers={item.item.answers.map((str, index) => ({ label: str, value: index }))}
                size={item.item.questions.length}
                chosenAnswer={chosenAnswer}

            />
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <CustomText h2 navbar>{DATA.title}</CustomText>
            </View>
            <DropDownPicker

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
                onChangeValue={(val) => {

                    console.log("selected: ", val)
                    console.log("choice val: ", choiceVal);

                }}

                containerStyle={{ height: 50 + choice.length * 50, width: "50%", zIndex: 2000 }}
            />
            <View style={{ minHeight: 300 + DATA.length * 100, width: "100%", alignItems: "center" }}>
                {userResponses.length > 0 ? <FlatList
                    scrollEnabled={false}
                    contentContainerStyle={{ alignItems: "center", width: "100%" }}
                    data={DATA.questions}
                    // keyExtractor={(item) => item.index}
                    renderItem={(item) => {
                        console.log("user chosen answer: ", userResponses[choiceVal].userAnswers[item.index])
                        return <QuestionType item={item}
                            chosenAnswer={userResponses[choiceVal].userAnswers[item.index]}
                        />
                    }}
                /> : (
                    <CustomText h3 navbar>Sorry, no one has taken this survey yet.</CustomText>
                )}
            </View>
            <CustomInput
                placeholder="Enter a Grade"
                value={grade}
                onChangeText={handlePointsInput}
            />
            <RoundedButton
                medium
                disabled={grade === ""}
                style={styles.completeButton}
                onPress={() => {
                    handleSubmit()
                }}
            >
                <CustomText p1 navbar>
                    Set Grade
                </CustomText>
            </RoundedButton>
        </View>
    )
}