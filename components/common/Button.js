import React from "react";
import { TouchableOpacity } from "react-native";
import { Colors, Dim, Font } from "../../Constants";
import Text from "./Text";

/**
 * @props disabled bool value for disabling button
 * @props onPress onpress function
 * @props onPressIn press-in (hold) callback function
 * @props onPressout out-press (release) callback function
 * @props style [ . . . style]
 * @props textStyle styling for text
 *
 * @returns common rounded button component
 *
 */

export const RoundedButton = React.forwardRef((props, ref) => {
  let width = undefined;
  if (props.small) {
    width = 100;
  } else if (props.medium) {
    width = 150;
  } else if (props.large) {
    width = 200;
  }
  return (
    <TouchableOpacity
      disabled={props.disabled}
      onPress={props.onPress}
      onPressIn={props.onPressIn}
      onPressOut={props.onPressOut}
      ref={ref}
      style={{
        width: width,
        backgroundColor:
          props.enablight && props.enablight.state
            ? Colors.navbar
            : Colors.contrast,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        paddingVertical: 7.5,
        borderRadius: 6,
        ...props.style,
      }}
    >
      <Text
        p1
        white
        u
        background={props.enablight && props.enablight.state}
        style={props.textStyle}
      >
        {props.enablight && props.enablight.state
          ? props.enablight.text
          : props.children
          ? props.children
          : ""}
      </Text>
    </TouchableOpacity>
  );
});
