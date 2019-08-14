import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageDetails from '../components/ImageDetails';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails
        title="Mountain"
        imageSource={require('../../assets/mountain.jpg')}
        imageScore={Math.floor(Math.random() * 10)}
      />
      <ImageDetails
        title="Forest"
        imageSource={require('../../assets/forest.jpg')}
        imageScore={Math.floor(Math.random() * 10)}
      />
      <ImageDetails
        title="Beach"
        imageSource={require('../../assets/beach.jpg')}
        imageScore={Math.floor(Math.random() * 10)}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
