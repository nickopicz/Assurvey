import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ShortAnswer } from "../components/display/Short"


export const SurveyTaker = () => {
    const [input, setInput] = useState("")

    const styles = StyleSheet.create({
        container: {
            alignItems: "center",
            width: "100%",
        }
    })



    return (
        <View style={styles.container}>
            <ShortAnswer
                question={"Lorem ipsilum lorem ipsilum inut deit etsu"}
                value={input}
                long={false}
                onChange={(input) => setInput(input)}
            />
        </View>
    )
}