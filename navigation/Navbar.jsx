import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const Navbar = ({navigation}) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: "row",
            backgroundColor: "lime",
        },
        
        displayHorizontal: {
            flexDirection: "row",
        },

        text: {
            fontSize: 30,
            fontWeight: "bold",
        },

        buttonContainer: {
            paddingLeft: 7,
            paddingRight: 7,
            marginTop: 5,
            marginBottom: 5,
        },
    });

    return(
        <View style={styles.container}>
            <View style={{
                flex: 0.99,
                paddingLeft: 10,
                }}>
                <Text style={styles.text}>ASurvey</Text>
            </View>
            
            <View style={styles.buttonContainer}>
                <Button 
                title="Login"
                onPress={() => navigation.navigate("Login")}/>
            </View>
            <View style={styles.buttonContainer}>
                <Button 
                title="Register"/>
            </View>
        </View>
    );
}

export default Navbar;