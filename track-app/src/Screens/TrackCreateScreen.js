import "../_mockUserLocation";
import React, { useContext, useCallback } from "react";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import { Context as LocationContext } from "../context/LocationContext";
import { FontAwesome } from "@expo/vector-icons";
import Map from "../components/Map";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation
  } = useContext(LocationContext);

  const callback = useCallback(
    location => {
      /**
       * location will be automatically be passed by @useLocation hook
       */
      addLocation(location, recording);
    },
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3 style={{ alignSelf: "center", margin: 10 }}>
        Create Track
      </Text>
      <Map />
      {err ? <Text>Please Enable permission services!</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = {
  title: "Create Track",
  tabBarIcon: <FontAwesome name="plus" size={20} />
};

export default withNavigationFocus(TrackCreateScreen);
