import { useContext } from "react";
import { Context as LocationContext } from "../context/LocationContext";
import { Context as TrackContext } from "../context/TrackContext";
import { navigate } from "../navigationRef";

const useSaveTrack = () => {
  const {
    state: { name, locations },
    reset
  } = useContext(LocationContext);
  const { addTrack } = useContext(TrackContext);

  // create a wrapper,  supply it to the other components.
  const saveTrack = async () => {
    await addTrack(name, locations);
    reset();
    navigate("TrackList");
  };
  return [saveTrack];
};

export default useSaveTrack;
