import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { RoundedButton } from "../components/common/Button";
import CustomText from "../components/common/Text";
import { Matching } from "../components/display/Match";
import { MultipleChoice } from "../components/display/MultiChoice";
import { ShortAnswer } from "../components/display/Short"
import { Colors } from "../Constants";


export const SurveyTaker = () => {

    const [DATA, setDATA] = useState([]);

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


    return (
        <View style={styles.container}>
            <ShortAnswer
                question={"Lorem ipsilum lorem ipsilum inut deit etsu"}
                value={input}
                long={false}
                onChange={(input) => setInput(input)}
            />
            <MultipleChoice
                question={"Lorem ipsilum lorem ipsilum inut deit etsu"}
                answers={testMC}
            />
            <Matching
                question={"Match these? "}
                answers={testMatch}
                questionSet={matchTestQ}
                size={matchTestQ.length}
            />
            <RoundedButton
                medium
                style={styles.completeButton}
            >
                <CustomText p1 navbar>
                    Finish
                </CustomText>
            </RoundedButton>
        </View>
    )
}