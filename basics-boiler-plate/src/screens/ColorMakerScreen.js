import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ColorAdjuster from '../components/ColorAdjuster';

const COLOR_INCREMENT = 15;

const ColorMakerScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const setColor = (color, change) => {
    switch (color) {
      case 'red':
        return red + change > 255 || red + change < 0
          ? null
          : setRed(red + change);
      case 'green':
        return green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
      case 'blue':
        return blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
      default:
        return;
    }
  };
  return (
    <View>
      <Text>Color Maker screen</Text>
      <ColorAdjuster
        onIncrease={() => setColor('red', COLOR_INCREMENT)}
        onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
        color="red"
      />
      <ColorAdjuster
        onIncrease={() => setColor('green', COLOR_INCREMENT)}
        onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
        color="green"
      />
      <ColorAdjuster
        onIncrease={() => setColor('blue', COLOR_INCREMENT)}
        onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
        color="blue"
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
      />
    </View>
  );
};

export default ColorMakerScreen;
