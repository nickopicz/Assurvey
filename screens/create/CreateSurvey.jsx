import React, { useEffect, useState } from "react";

import { RoundedButton } from "../../components/common/Button";
import { CustomInput } from "../../components/common/Input";
import { View, StyleSheet } from "react-native";
import { Colors } from "../../Constants";
import { AntDesign } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";


export const CreateScreen = ({ navigation }) => {
    const styles = StyleSheet.create({
        container: {
            alignItems: "center",
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

    const questionTypes = [
        { label: "Multiple Choice", value: "Multiple Choice" },
        { label: "Open Ended ", value: "Open Ended" },
        { label: "Matching", value: "Matching" },
    ]

    const [title, setTitle] = useState("");
    const [code, setCode] = useState("");
    const [pressed, setPressed] = useState(false)
    const [choice, setChoice] = useState(questionTypes)
    const [choiceVal, setChoiceVal] = useState(null)
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(false);


    useEffect(() => {
        console.log(open)
    })
    return (
        <View style={styles.container}>
            <View style={styles.codeContainer}>
                <CustomInput small
                    placeholder="Survey Title"
                    autoFocus={true}
                    iconName="book"
                    value={title}
                    onChangeText={(title) => setTitle(title)}
                />
                <CustomInput small
                    placeholder="Custom Access Code"
                    iconName="code"
                    value={code}
                    onChangeText={(code) => setCode(code)}
                />
            </View>
            <View style={styles.addContainer}>
                <View style={{
                    minHeight: open === true ? 200 : 60,
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
                    setPressed(true)

                }}
                    disabled={pressed}
                >
                    <AntDesign name="plus" size={50} />

                </RoundedButton>
            </View>
        </View>
    )
}