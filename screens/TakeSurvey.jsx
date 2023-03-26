import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
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
            />
        </View>
    )
}