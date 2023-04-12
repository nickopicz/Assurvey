import { Entypo } from "@expo/vector-icons";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../Constants";
import CustomText from "./common/Text";
import firebase from "firebase";

export const HomeHeader = ({ navigation }) => {
    const styles = StyleSheet.create({
        container: {
            width: "100%",
            height: 100,
            backgroundColor: Colors.light,
        },
        title: {
            fontWeight: "bold",
            position: "absolute",
            alignSelf: "center",
            bottom: 0,
        },
        backButton: {
            marginTop: 10,
            marginLeft: 10,
            width: 30
        },
        signOut:{
            marginTop: 0,
            marginRight: 10,
            textAlign: "right",
        }
    })

    const signOut = () => {
        firebase.auth().signOut().then(() => {
            navigation.navigate("Signout")
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                navigation.goBack()
            }}
                style={styles.backButton}
            >
                <Entypo name="back" color={Colors.navbar} size={60} />
            </TouchableOpacity>
            <View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Home")
                }}
                    style={styles.titleButton}
                >
                    <CustomText h1 u contrast style={styles.title}>Asurvey</CustomText>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={signOut}
                    style={styles.titleButton}
                >
                    <CustomText style={styles.signOut}>Sign Out</CustomText>
                </TouchableOpacity>
            </View>
        </View>
    )
}