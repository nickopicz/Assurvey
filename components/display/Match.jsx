import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { RoundedButton } from "../common/Button";
import { RadioButton } from "react-native-paper";
import CustomText from "../common/Text";
import { Colors } from "../../Constants";
import DropDownPicker from "react-native-dropdown-picker";
export const Matching = ({ question, answers }) => {

    const styles = StyleSheet.create({
        container: {
            borderRadius: 10,
            borderColor: Colors.foreground,
            borderWidth: 2,
            width: "55%",
            minHeight: 250,
            marginVertical: 5,
        },
        titleContainer: {
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            minHeight: "15%",
            marginTop: 35,
            paddingHorizontal: 10
        },

        num: {
            position: "absolute",
            top: 10,
            left: 15

        },
        answer: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            minHeight: 100,
            paddingVertical: 10

        }
    })

    const [checked, setChecked] = useState("unchecked");
    const [pressed, setPressed] = useState(false)

    const RenderItem = ({ content, onPress, status, idx }) => {
        const [choice, setChoice] = useState(answers)
        const [choiceVal, setChoiceVal] = useState(null)
        const [open, setOpen] = useState(false);

        console.log("zIndex: ", answers.length - idx)
        console.log("answers: ", answers)

        return (
            <View style={styles.answer}>

                <CustomText p2 navbar>{content}</CustomText>
                <DropDownPicker
                    style={{ alignSelf: "center" }}
                    open={open}
                    setOpen={setOpen}
                    value={choiceVal}
                    setValue={setChoiceVal}
                    setItems={setChoice}
                    items={
                        choice
                    }

                    placeholder="Select answer"
                    defaultIndex={0}
                    containerStyle={{ height: 20, width: "50%" }}
                    onChangeItem={item => console.log(item.label, item.value)}
                    zIndex={answers.length - idx}
                    zIndexInverse={answers.lenght - idx}
                />

            </View>
        )
    }

    const NewFlatList = ({ data }) => {



        return (
            <FlatList
                style={{ paddingVertical: 25 }}
                data={data}
                renderItem={({ item }) => (
                    <RenderItem
                        idx={item.id}
                        content={item.answer}
                        onPress={() => {
                            setChecked(item.id)
                        }
                        }
                        status={checked === item.id ? "checked" : "unchecked"}
                    />
                )}
                keyExtractor={(item) => item.id}
                scrollEnabled={false}
            />
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.num}>
                <CustomText p1 foreground>{1}</CustomText>
            </View>
            <View style={styles.titleContainer}>
                <CustomText h4 navbar>
                    {question}
                </CustomText>
            </View>
            <NewFlatList data={answers} />
        </View>
    );
}