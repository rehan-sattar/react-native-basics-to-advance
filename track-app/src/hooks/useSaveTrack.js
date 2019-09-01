import { useContext } from "react";
import { Context as LocationContext } from "../context/LocationContext";
import { Context as TrackContext } from "../context/TrackContext";

const useSaveTrack = () => {
  const {
    state: { name, locations }
  } = useContext(LocationContext);
  const { addTrack } = useContext(TrackContext);

  // create a wrapper,  supply it to the other components.
  const saveTrack = () => {
    addTrack(name, locations);
  };
  return [saveTrack];
};

export default useSaveTrack;
