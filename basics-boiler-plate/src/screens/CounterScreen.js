import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  const {
    containerStyles,
    buttonStyles,
    counterTextStyles,
    coutnerContainerStyles
  } = styles;
  return (
    <View style={containerStyles}>
      <View style={buttonStyles}>
        <Button
          onPress={() => setCounter(counter + 1)}
          title="Increment"
          color="#3608DD"
        />
      </View>
      <View style={buttonStyles}>
        <Button
          onPress={() => setCounter(counter - 1)}
          title="Decrement"
          color="#3608DD"
        />
      </View>
      <View style={coutnerContainerStyles}>
        <Text style={counterTextStyles}>{counter} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyles: {
    flex: 1,
    backgroundColor: 'rgb(70, 48, 235)',
    justifyContent: 'center'
  },
  buttonStyles: {
    marginVertical: 5,
    marginHorizontal: 20
  },
  coutnerContainerStyles: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  counterTextStyles: {
    fontSize: 50,
    color: 'white'
  }
});

export default CounterScreen;
