import {View, Text, Button, StyleSheet} from "react-native";

const SurveyCard = (props) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            width: 250,
            height: 20,
            maxWidth: 250,
            minHeight: 20,
            minWidth: 250,
            minHeight: 20,
            borderColor: "black",
            borderWidth: 1.5,
            borderRadius: 5,
        },

        text: {
           fontSize: 25,
           fontWeight: "bold",
           marginLeft: 5,
           marginTop: 10,
        },
    });
    
    return(
        <View style={{flex: 1}}>
            <View style={styles.container}>
                <Text style={styles.text}>{props.title}</Text>
                <Text style=
                {{marginLeft: 5, marginRight: 5, marginBottom: 10}}>
                    {props.description}
                </Text>
            </View>
        </View>
    );
};

export default SurveyCard;