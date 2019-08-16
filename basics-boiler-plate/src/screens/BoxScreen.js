import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import * as baseStyles from "../styles/base";

const BoxScreen = () => {
  const { viewStyles, textBoxStyles } = styles;
  const size = {
    fullHeight: Dimensions.get("window").height,
    fullWidth: Dimensions.get("window").width
  };
  return (
    <View style={viewStyles}>
      <Text style={textBoxStyles}>Welcome to the box screen</Text>
      <Text style={textBoxStyles}>Height: {size.fullHeight} px</Text>
      <Text style={textBoxStyles}>width: {size.fullWidth} px</Text>
    </View>
  );
};

/**
 * @types
 *  - Box modal
 *  - Flex layout modal
 *  - Positioning modal
 *
 * @boxModel
 * @descrption
 *  => Exaclty the same modal, which is used by browser.
 *  => margin, padding, height, width props are same as browser.
 *  => some proprs are mode usefull shorthand.
 * @stylingProps
 *  - margin, padding, marginLeft,marginRight ,paddingLeft, paddinRight
 *  - marginVertical, marginHorizontal, paddingVertical, paddingHorizontal
 *  - borderWidth -> by default 0
 *  - borderColor -> by defualt none
 *  - borderWidth
 *  - ........
 * @reference https://facebook.github.io/react-native/docs/view-style-props
 */
const styles = StyleSheet.create({
  viewStyles: {
    borderWidth: 2,
    borderColor: "red",
    padding: baseStyles.sizes.lg
  },
  textBoxStyles: {
    borderWidth: 3,
    borderColor: "black",
    padding: baseStyles.sizes.lg,
    fontSize: baseStyles.sizes.xl
  }
});

export default BoxScreen;
