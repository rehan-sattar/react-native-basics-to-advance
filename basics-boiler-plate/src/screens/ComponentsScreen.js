import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Rehan Sattar';
  return (
    <View>
      <Text style={styles.headingStyles}>
        Getting Started with React Native!
      </Text>
      <Text>Hey, My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headingStyles: {
    fontSize: 45
  },
  textStyles: {
    fontSize: 20
  }
});

export default ComponentsScreen;
