import { View, StyleSheet } from "react-native"
import { useState } from "react";
import { CustomInput } from "../common/Input";
import { Colors } from "../../Constants";
export const MultipleChoiceQuestion = ({ type, editable }) => {
    //when setting state it should look something like this, keep consistent
    //variable names when setting state. Just try to model most of your code
    //from my already  existing codebase
    const [text, setText] = useState('');
    const [answers, setAnswers] = useState([])

    //Its nick, make sure to import "Colors" a

    return (
        <View>
            <View style={{
                borderRadius: 6,
                backgroundColor: 'white',
                shadowColor: 'black'
            }}>
                <CustomInput
                    placeholder="Question..."
                    onChangeText={text => setText(text)}
                    value={text}
                    iconName="clipboard"
                />
            </View>
        </View>
    )
}