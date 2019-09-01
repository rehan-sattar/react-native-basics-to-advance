import React, { useContext } from "react";
import { Button, Input } from "react-native-elements";
import { Context as LocationContext } from "../context/LocationContext";
import Spacer from "./Spacer";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    setLocationName
  } = useContext(LocationContext);
  console.log(locations.length);
  return (
    <>
      <Spacer>
        <Input
          placeholder="Add Track Name"
          value={name}
          onChangeText={setLocationName}
        />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button title="Stop" onPress={stopRecording} />
        ) : (
          <Button title="Start Track" onPress={startRecording} />
        )}
      </Spacer>
    </>
  );
};

export default TrackForm;
