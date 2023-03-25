import { View } from "react-native";
import CustomText from "../common/Text";
import { CustomInput } from "../common/Input";
import { RoundedButton } from "../common/Button";
import { Colors } from "../../Constants";
import { StyleSheet } from 'react-native';

export const ShortAnswer = ({ question, value, onChange, long }) => {
  const styles = StyleSheet.create({
    container: {
      borderRadius: 10,
      borderColor: Colors.foreground,
      borderWidth: 2,
      width: "55%",
      minHeight: 250
    },
    titleContainer: {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      minHeight: "15%",
      marginTop: 35,
      paddingHorizontal: 10
    },
    inputContainer: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 10,
      paddingBottom: 10,

    },
    input: {
      height: long === true ? 100 : 60,
      width: "100%"

    },
    num: {
      position: "absolute",
      top: 10,
      left: 15

    }
  })

  return (
    <View style={styles.container}>
      <View style={styles.num}>
        <CustomText p1 foreground>1</CustomText>
      </View>
      <View style={styles.titleContainer}>
        <CustomText h3 contrast>
          {question}
        </CustomText>
      </View>
      <View style={styles.inputContainer}>
        <CustomInput
          style={styles.input}
          large
          placeholder="Type your answer here..."
          value={value}
          onChangeText={onChange}
          multiline={true}
          iconName="clipboard"
          autoCorrect={false}
          numberOfLines={2}
        />
      </View>
    </View>
  );
};
