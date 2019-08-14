import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { input } = styles;
  return (
    <View>
      <Text>Please enter your name: </Text>
      <TextInput
        style={input}
        autoCapitalized="none"
        autoCorrect={false}
        value={name}
        onChangeText={value => setName(value)}
      />
      <TextInput
        style={input}
        autoCapitalized="none"
        autoCorrect={false}
        value={password}
        onChangeText={value => setPassword(value)}
      />
      {password.length < 5 && (
        <Text>Pass word must be atleast 5 characters long.</Text>
      )}
      <Text>Your name is: {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black'
  }
});

export default TextScreen;
