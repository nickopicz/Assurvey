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
export const CustomInput = React.forwardRef(
  (
    {
      containerStyle,
      small,
      medium,
      large,
      iconName,
      iconColor,
      placeholder,
      placeholderColor,
      style,
      textColor,
      children,
    },
    ref
  ) => {
    let width = undefined;
    if (small) {
      width = "40%";
    } else if (medium) {
      width = "60%";
    } else if (large) {
      width = "80%";
    }
    const styles = StyleSheet.create({
      container: {
        width: width,
        flexDirection: "row",
        backgroundColor: Colors.white,
        borderRadius: 23,
        margin: 12,
        alignItems: "center",
        paddingLeft: 15,
        paddingRight: 32,
        paddingVertical: 10,
        minHeight: 50,
        borderColor: Colors.light,
        borderWidth: 2,
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
      <View style={[styles.container, containerStyle]}>
        {iconName ? (
          <Icon
            name={iconName}
            size={Font.p1.size}
            color={iconColor ? iconColor : Colors.foreground}
            style={{
              marginRight: 10,
              //   backgroundColor: "#FF000030",
            }}
          />
        ) : null}

        <TextInput
          placeholderTextColor={
            placeholderColor ? placeholderColor : Colors.navbar
          }
          placeholder={placeholder}
          style={{
            ...styles.input,
            ...style,
            color: textColor ? textColor : Colors.foreground,
          }}
          ref={ref}
        >
          {children}
        </TextInput>
      </View>
    );
  }
);
