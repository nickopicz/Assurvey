import React, { useEffect } from "react";
import CustomText from "./common/Text";
import { StyleSheet, View, TouchableOpacity } from "react-native"
import { Colors } from "../Constants";


export const EditItem = ({ title, onPress }) => {
    useEffect(() => {
        console.log("title of item: ", title)
    })
    const styles = StyleSheet.create({
        container: {
            minHeight: 100,
            maxHeight: 150,
            minWidth: 200,
            maxWidth: 150,
            backgroundColor: Colors.navbar,
            borderColor: Colors.light,
            borderWidth: 2,
            justifyContent: "center",
            alignItems: "center",
            margin: 15,
            borderRadius: 10,
        }
    })

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <CustomText p2 light>{title}</CustomText>
        </TouchableOpacity>
    )
}