import React, { useReducer } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const counterReducer = (count, action) => {
  switch (action.type) {
    case 'increment_counter':
      return count + 1;
    case 'decrement_counter':
      return count > 0 ? count - 1 : count;
    default:
      return count;
  }
};

const CounterScreen = () => {
  const [counter, dispatch] = useReducer(counterReducer, 0);

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
          onPress={() => dispatch({ type: 'increment_counter' })}
          title="Increment"
          color="#3608DD"
        />
      </View>
      <View style={buttonStyles}>
        <Button
          onPress={() => dispatch({ type: 'decrement_counter' })}
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
