import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const trackReducer = (state, { type, payload }) => {
  switch (type) {
    case "add_location":
      return {};
    case "start_recording":
      return {};

    default:
      return state;
  }
};

const fetchTracks = dispatch => () => {};
const addTrack = dispatch => (name, locations) => {
  // make some api request
  console.log("NAME: ", name, "Locaitons: ", locations);
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, addTrack },
  []
);
