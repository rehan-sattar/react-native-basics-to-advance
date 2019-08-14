import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to components demo"
      />
      <Button
        onPress={() => navigation.navigate('Lists')}
        title="Go to List Demo"
      />
      <Button
        onPress={() => navigation.navigate('Images')}
        title="Go to Image List"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
