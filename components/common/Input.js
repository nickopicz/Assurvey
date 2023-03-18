import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { Colors, Dim, Font } from "../../Constants";
import { Feather as Icon } from "@expo/vector-icons";

/**
 * @props width = [small, medium, large] width of text input
 * @props iconName = name of icon in feather of expo/vector-icons
 * @props placeholderColor = color of the placeholder text
 * @props . . . children
 *
 */
export const CustomInput = React.forwardRef((props, ref) => {
  let width = undefined;
  if (props.small) {
    width = "40%";
  } else if (props.medium) {
    width = "60%";
  } else if (props.large) {
    width = "80%";
  }
  const styles = StyleSheet.create({
    container: {
      width: width,
      flexDirection: "row",
      backgroundColor: Colors.navbar,
      borderRadius: 23,
      margin: 12,
      alignItems: "center",
      paddingLeft: 15,
      paddingRight: 32,
      paddingVertical: 10,

      borderColor: Colors.blueWhite,
      borderWidth: props.focused && 2,
    },
    input: {
      // backgroundColor: "#00FF0030",
      fontSize: Font.p2.size,
      flex: 1,
      // paddingVertical: 10,
      // fontFamily: "LilitaOne_400Regular",
    },
  });

  return (
    <View style={[styles.container, props.containerStyle]}>
      {props.iconName ? (
        <Icon
          name={props.iconName}
          size={Font.p1.size}
          color={props.iconColor ? props.iconColor : Colors.light}
          style={{
            marginRight: 10,
            //   backgroundColor: "#FF000030",
          }}
        />
      ) : null}

      <TextInput
        placeholderTextColor={
          props.placeholderColor ? props.placeholderColor : Colors.light
        }
        on
        style={{
          ...styles.input,
          ...props.style,
          color: props.textColor ? props.textColor : Colors.background,
        }}
        ref={ref}
        {...props}
      >
        {props.children}
      </TextInput>
    </View>
  );
});
