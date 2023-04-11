import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import CustomText from "../../components/common/Text";
import { Colors } from "../../Constants";
import { RoundedButton } from "../../components/common/Button";
import { useDispatch } from "react-redux";

export const EditMenuScreen = ({ navigation }) => {

    const [DATA, setDATA] = useState([]);

    const dispatch = useDispatch();


    useEffect(() => {
        console.log("this is where data retrieval function will be.")
    }, [])

    const styles = StyleSheet.create({
        container: {
            justifyContent: "center",
            alignItems: "center"
        },
        defaultText: {
            marginVertical: 40,
            textAlign: "center"
        }
    })

    return (
        <View style={styles.container}>
            {DATA.length > 0 ? <FlatList
                data={DATA}
            /> : <CustomText h2 navbar style={styles.defaultText}>Create a survey to get started!</CustomText>}
        </View>
    )
}