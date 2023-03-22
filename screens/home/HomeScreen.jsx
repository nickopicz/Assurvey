import { useState } from "react";
import { View, StyleSheet } from "react-native";
import CustomText from "../../components/common/Text";
import { auth } from "../../firebase/firebase";

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
            <CustomText h1 navbar>Welcome , {auth.currentUser.displayName}</CustomText>
        </View>
    )
}