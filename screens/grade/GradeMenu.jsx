import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import CustomText from "../../components/common/Text";
import { Colors } from "../../Constants";
import { RoundedButton } from "../../components/common/Button";
import { useDispatch } from "react-redux";
import { getSurveyList } from "../../functions/FetchSurveys";
import { EditItem } from "../../components/EditMenuComponent";
import { setCode, setDocId, setEditing } from "../../redux/actions";

export const GradeMenuScreen = ({ navigation }) => {

    const [DATA, setDATA] = useState([]);

    const dispatch = useDispatch();


    useEffect(() => {
        console.log("this is where data retrieval function will be.")
        getSurveyList().then((res) => {
            console.log("results: ", res)
            setDATA(res)
        }).catch((e) => console.warn(e))
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
            {DATA.length !== 0 ?
                <FlatList
                    style={{ width: "80%" }}
                    numColumns={3}
                    data={DATA}
                    renderItem={(item) => (
                        <EditItem title={item.item.title} onPress={() => {
                            console.log("item: ", item.item)
                            dispatch(setDocId(item.item.id))
                            dispatch(setCode(item.item.code))
                            navigation.navigate("Grade")
                        }} />
                    )}
                /> : <CustomText h2 navbar style={styles.defaultText}>Create a survey to get started!</CustomText>}
        </View>
    )
}