import React, { useContext } from "react";
import { Text } from "react-native-elements";
import MapView, { Polyline } from "react-native-maps";
import { Context as TrackContext } from "../context/TrackContext";

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const id = navigation.getParam("id");
  const track = state.find(t => t._id === id);
  const initialCoords = track.locations[0].coords;
  return (
    <>
      <Text h2 style={{ margin: 10 }}>
        {track.name}
      </Text>
      <MapView
        initialRegion={{
          ...initialCoords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
        style={{ height: 300 }}
      >
        <Polyline
          coordinates={track.locations.map(loc => loc.coords)}
        ></Polyline>
      </MapView>
    </>
  );
};

export default TrackDetailScreen;
