import React, { useState } from "react";
import { View, StyleSheet, FlatList, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { RoundedButton } from "../common/Button";
import { RadioButton } from "react-native-paper";
import CustomText from "../common/Text";
import { Colors } from "../../Constants";
import DropDownPicker from "react-native-dropdown-picker";
export const Matching = ({ question, answers, questionSet, size }) => {

    const styles = StyleSheet.create({
        container: {
            borderRadius: 10,
            borderColor: Colors.foreground,
            borderWidth: 2,
            width: "55%",
            minHeight: 250,
            marginVertical: 5,
            backgroundColor: Colors.white
        },
        titleContainer: {
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            width: "100%",
            // minHeight: "15%",
            top: 20,
            paddingHorizontal: 10,
            zIndex: -1
        },

        num: {
            position: "absolute",
            top: 10,
            left: 15

        },
        answer: {
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            minHeight: 100,
            paddingVertical: 10,
            borderTopColor: Colors.navbar,
            borderTopWidth: 1
        }
    })

    const [checked, setChecked] = useState("unchecked");
    const [pressed, setPressed] = useState(false)
    const [zindex, setzIndex] = useState(1000)

    const RenderItem = ({ content, onPress, status, idx }) => {
        const [choice, setChoice] = useState(answers)
        const [choiceVal, setChoiceVal] = useState(null)
        const [open, setOpen] = useState(false);
        const [selected, setSelected] = useState(false); // state variable to toggle the zIndex value

        console.log("zIndex: ", answers.length - idx)
        console.log("answers: ", answers)

        return (
            <View
                style={[styles.answer, { minHeight: open === true ? 40 * answers.length : 100 }]}
                zIndex={(size - idx)}
            >

                <View style={{ width: "50%" }}>
                    <CustomText p2 navbar style={{ paddingRight: 5 }}>{content}</CustomText>
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
                    containerStyle={{ height: 20, width: "50%", zIndex: 2000 }}
                    onChangeItem={item => console.log(item.label, item.value)}
                />

            </View>
        )
    }

    const NewFlatList = ({ data }) => {



        return (
            <FlatList
                style={{ paddingVertical: 25, paddingTop: 120, width: "90%", alignSelf: "center" }}
                data={questionSet}
                renderItem={({ item }) => (
                    <RenderItem
                        idx={item.id}
                        content={item.question}
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

            <NewFlatList data={answers} />
            <View style={styles.titleContainer}>
                <CustomText h4 navbar>
                    {question}
                </CustomText>
            </View>
        </View>
    );
}