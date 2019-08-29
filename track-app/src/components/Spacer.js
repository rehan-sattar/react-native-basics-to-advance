import React from "react";
import { View, StyleSheet } from "react-native";

const Spacer = ({ children, center }) => {
  return (
    <View style={[styles.spacer, center && styles.centered]}>{children}</View>
  );
};

const styles = StyleSheet.create({
  spacer: {
    margin: 15
  },
  centered: {
    alignItems: "center"
  }
});

export default Spacer;
