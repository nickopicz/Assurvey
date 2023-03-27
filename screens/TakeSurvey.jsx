import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { RoundedButton } from "../components/common/Button";
import CustomText from "../components/common/Text";
import { Matching } from "../components/display/Match";
import { MultipleChoice } from "../components/display/MultiChoice";
import { ShortAnswer } from "../components/display/Short"
import { Colors } from "../Constants";


export const SurveyTaker = () => {
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
        { label: "hi", value: "hi" },
        { label: "ok", value: "ok" },
        { label: "low", value: "low" },
        { label: "med", value: "med" },
        { label: "k", value: "k" },
        { label: "j", value: "j" },
        { label: "z", value: "z" },
    ]

    const matchTestQ = [
        { id: 0, question: "hi sdf dsf sdf sdf sdf sdf sdf sdf  asd asd asd asd asd asd assdf?" },
        { id: 1, question: "bye?" },
        { id: 2, question: "never?" },
        { id: 3, question: "dang?" },
        { id: 4, question: "ok?" },
        { id: 5, question: "rsdf sdf sdf sdf sssssssssssssssssssssssssssssssssss sssss asd as  sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf dsage?" },
        { id: 6, question: "name?" },
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