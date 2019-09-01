import "../_mockUserLocation";
import React, { useEffect, useState, useContext } from "react";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy
} from "expo-location";
import { Context as LocationContext } from "../context/LocationContext";
import Map from "../components/Map";

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);
  const { addLocation } = useContext(LocationContext);
  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 2000,
          distanceInterval: 10
        },
        location => {
          addLocation(location);
        }
      );
    } catch (err) {
      setErr(err);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>Create Track</Text>
      <Map />
      {err ? <Text>Please Enable permission services!</Text> : null}
    </SafeAreaView>
  );
};

export default TrackCreateScreen;
