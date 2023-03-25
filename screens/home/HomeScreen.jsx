import { useState } from "react";
import { View, StyleSheet } from "react-native";
import CustomText from "../../components/common/Text";
import { auth } from "../../firebase/firebase";
import { RoundedButton } from "../../components/common/Button";

export const HomeScreen = ({ navigation }) => {
    const styles = StyleSheet.create({
        container: {
            alignItems: "center",
            justifyContent: "center",
            height: "100%"
        }
    })

    return (
        <View style={styles.container} >
            <CustomText h1 navbar>Welcome , </CustomText>

            <RoundedButton>
                <CustomText p2 white>Create</CustomText>
            </RoundedButton>
        </View>
    )
}