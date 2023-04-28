import React, { useState } from "react";
import { View, StyleSheet, FlatList, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { RoundedButton } from "../common/Button";
import { RadioButton } from "react-native-paper";
import CustomText from "../common/Text";
import { Colors } from "../../Constants";
import DropDownPicker from "react-native-dropdown-picker";
export const Matching = ({ question, answers, questionSet, size, i }) => {

    const styles = StyleSheet.create({
        container: {
            borderRadius: 10,
            borderColor: Colors.foreground,
            borderWidth: 2,
            minWidth: 500,
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


    /**
     * 
     * @param {*} content the title of an child matching question
     * @param {*} onPress
     * @returns 
     */
    const RenderItem = ({ content, idx }) => {
        const [choice, setChoice] = useState(answers)
        const [choiceVal, setChoiceVal] = useState(null)
        const [open, setOpen] = useState(false);
        console.log(" ---------------------------------- \n item: ", content, " \n ---------------------------------- ")

        console.log("size: ", size)
        console.log("zIndex: ", size - idx)
        console.log("answers: ", answers)
        console.log("questions: ", questionSet)

        return (
            <View
                style={[styles.answer, { minHeight: open === true ? 100 * choice.length : 100 }]}
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
                    onChangeItem={item => console.log(item.id, item.value)}
                />

            </View>
        )
    }

    const NewFlatList = ({ data }) => {

        console.log("------------- \n data in matching flatlist:  \n", data, " \n ============================= \n")


        return (
            <FlatList
                style={{ paddingVertical: 25, paddingTop: 120, width: "90%", alignSelf: "center" }}
                data={data}
                renderItem={({ item }) => (
                    <RenderItem
                        idx={item.value}
                        content={questionSet[item.value].question}
                        onPress={() => {
                            setChecked(item.value)
                        }
                        }
                        status={checked === item.value ? "checked" : "unchecked"}
                    />
                )}
                // keyExtractor={(item) => item.id}
                scrollEnabled={false}
            />
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.num}>
                <CustomText p1 foreground>{i}</CustomText>
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