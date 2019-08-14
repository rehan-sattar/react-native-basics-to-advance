import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button
        onPress={() => setColors([...colors, getRandomRGB()])}
        title="Generate Color"
      />
      <FlatList
        data={colors}
        renderItem={({ item: color }) => (
          <View
            style={{
              height: 100,
              width: 100,
              margin: 5,
              backgroundColor: color
            }}
          />
        )}
        keyExtractor={item => item}
      />
    </View>
  );
};

const getRandomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

export default ColorScreen;
