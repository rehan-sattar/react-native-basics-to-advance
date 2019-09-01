import "../_mockUserLocation";
import React, { useContext } from "react";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import { Context as LocationContext } from "../context/LocationContext";
import Map from "../components/Map";
import useLocation from "../hooks/useLocation";

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(isFocused, addLocation);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>Create Track</Text>
      <Map />
      {err ? <Text>Please Enable permission services!</Text> : null}
    </SafeAreaView>
  );
};

export default withNavigationFocus(TrackCreateScreen);
