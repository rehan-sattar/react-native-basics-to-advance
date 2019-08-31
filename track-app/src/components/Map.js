import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
  // sample coords creation
  let coords = [];
  for (let i = 0; i < 10; i++) {
    coords.push({
      latitude: 24.931517 + i * 0.001,
      longitude: 67.113173 + i * 0.001
    });
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 24.931517,
        longitude: 67.113173,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    >
      {/**
       * @component Polyline
       * @description used for drawing line on map
       * @props
       * - coordinates : takes an array of coords of { latitude: number, longitude: number } - strict same order
       */}
      <Polyline coordinates={coords} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;
