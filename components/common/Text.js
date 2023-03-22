import React from "react";
import { Animated } from "react-native";

import { Colors, Font } from "../../Constants";

/**
  children (string): Text to be rendered.
  h1...h4, p1...p4 (bool): Size of the text.
  style (JS Object): All style props.

  Colors: (defaults to white. only apply one.) 
  These should be updated periodically to reflect Constants.js
    background: "#000000",
    foreground: "#222831",
    navbar: "#393E46",
    contrast: "#6495ED",
    light: "#87CEFA",
    white: "#E0FFFF",
    record: "#DA8F81",
    earth: "#9d847e",
  
  Uppercase: use u prop

  Example: <Text h3 red u>MAIN</Text> will display MAIN in 28 pt font colored red

  RN Text props (see RN docs):
    numberOfLines (number)
    ellipsizeMode (string)
    onPress (function)
    textBreakStrategy (string)
*/
const CustomText = (props) => {
  let font = {};
  let color = "#FFF";

  if (props.h1) {
    font = Font.h1;
  } else if (props.h2) {
    font = Font.h2;
  } else if (props.h3) {
    font = Font.h3;
  } else if (props.h4) {
    font = Font.h4;
  } else if (props.p1) {
    font = Font.p1;
  } else if (props.p2) {
    font = Font.p2;
  } else if (props.p3) {
    font = Font.p3;
  } else if (props.p4) {
    font = Font.p4;
  }

  if (props.background) {
    color = Colors.background;
  } else if (props.foreground) {
    color = Colors.foreground;
  } else if (props.navbar) {
    color = Colors.navbar;
  } else if (props.contrast) {
    color = Colors.contrast;
  } else if (props.light) {
    color = Colors.light;
  } else if (props.white) {
    color = Colors.white;
  } else if (props.record) {
    color = Colors.record;
  } else if (props.earth) {
    color = Colors.earth;
  } else if (props.cancel) {
    color = Colors.cancel;
  } else if (props.confirm) {
    color = Colors.confirm;
  }

  return (
    <Animated.Text
      numberOfLines={props.numberOfLines}
      ellipsizeMode={props.ellipsizeMode}
      onPress={props.onPress}
      textBreakStrategy={props.textBreakStrategy}
      style={{
        color,
        fontSize: font.size,
        fontFamily: font.family,
        ...props.style,
      }}
      adjustsFontSizeToFit={props.adjustsFontSizeToFit}
    >
      {props.u && typeof props.children !== "object"
        ? props.children.toString().toUpperCase()
        : props.children}
    </Animated.Text>
  );
};

export default CustomText;
