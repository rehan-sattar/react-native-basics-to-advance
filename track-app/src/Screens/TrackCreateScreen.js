import React from "react";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Map from "../components/Map";

const TrackCreateScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>Create Track</Text>
      <Map />
    </SafeAreaView>
  );
};

export default TrackCreateScreen;
