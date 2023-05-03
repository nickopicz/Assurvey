import React, { useState } from "react";

import { RoundedButton } from "../../components/common/Button";
import { CustomInput } from "../../components/common/Input";
import { View, StyleSheet } from "react-native";
import { Colors } from "../../Constants";
import { AntDesign } from "@expo/vector-icons";


export const CreateScreen = ({ navigation }) => {
    const styles = StyleSheet.create({
        container: {
            alignItems: "center"
        },
        codeContainer: {
            width: "100%",
            height: 150,
            alignItems: "center",
        },
        addButton: {
            width: "50%",
            alignSelf: "center"
        }
    })

    const [title, setTitle] = useState("");
    const [code, setCode] = useState("");

    return (
        <View>
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
            <RoundedButton 
                style={styles.addButton}
                onPress={() => navigation.navigate("Create")}>
                <AntDesign name="plus" size={50} />
            </RoundedButton>
        </View>
    )
}

export default CreateScreen;