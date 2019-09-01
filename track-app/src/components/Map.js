import React, { useContext } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const { state } = useContext(LocationContext);
  const { currentLocation } = state;
  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
      region={{
        ...currentLocation.coords,
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
      {/* <Polyline coordinates={coords} /> */}
      <Circle
        radius={25}
        strokeColor="rgba(38, 12, 12, 1.0)"
        fillColor="rgba(38, 12, 12, 0.5)"
        center={currentLocation.coords}
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;
