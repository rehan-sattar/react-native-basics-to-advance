import React from "react";
import { Button, Input } from "react-native-elements";
import Spacer from "./Spacer";

const TrackForm = () => {
  return (
    <>
      <Spacer>
        <Input placeholder="Add Track Name" />
      </Spacer>
      <Spacer>
        <Button title="Start Track" />
      </Spacer>
    </>
  );
};

export default TrackForm;
