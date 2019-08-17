import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerStyle}>FLEX BOX 101</Text>
      <View style={styles.elementsContainer}>
        <View style={{ width: 50, height: 50, backgroundColor: '#EE2C38' }} />
        <View style={{ width: 50, height: 50, backgroundColor: '#FAA030' }} />
        <View style={{ width: 50, height: 50, backgroundColor: '#32B76C' }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 48,
    flex: 1
  },
  headerStyle: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '100',
    marginBottom: 24
  },
  elementsContainer: {
    flex: 1,
    backgroundColor: '#ecf5fd',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24
  }
});

export default FlexScreen;
