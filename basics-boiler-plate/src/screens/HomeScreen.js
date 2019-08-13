import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to components demo"
      />
      <Button
        onPress={() => navigation.navigate('Lists')}
        title="Go to List Demo "
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
