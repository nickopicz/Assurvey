import { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { auth } from "../../firebase/firebase";
import Navbar from "../../navigation/navbar";

const HomeScreen = ({ navigation }) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
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

export default HomeScreen;