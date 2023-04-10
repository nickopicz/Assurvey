import { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { auth, db } from "../../firebase/firebase";

const HomeScreen = ({navigation}) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            height: "100%"
        }
    });

    return (
        <View styles={styles.container}>
            <Button
                title="Create Survey"
                onPress={() => navigation.navigate("CreateScreen")}/>
            <Button
                title="View Survey"
                onPress={() => navigation.navigate("Take")}/>
        </View>
    )
}

export default HomeScreen;