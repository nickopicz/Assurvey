import { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { auth } from "../../firebase/firebase";
import Navbar from "../../navigation/navbar";

const HomeScreen = ({ navigation }) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
        },

        input: {
            height: 60,
            width: 1000,
            borderWidth: 1,
            padding: 10,
            margin: 10,
        }
    })

    return (
        <View style={{flex: 1}}>
            <View>
                <Navbar navigation={navigation}/>
            </View>
            <View style={styles.container}>
                <Text>Welcome To ASurvey</Text>
                <TextInput
                style={styles.input}
                placeholder="Type A Survey Code Here..."
                />
                <Button
                title="Find Survey"/>
            </View>
        </View>
    )
}

export default HomeScreen;