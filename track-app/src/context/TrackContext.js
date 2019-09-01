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
const addTrack = dispatch => async (name, locations) => {
  const response = await trackerApi.post("/tracks", { name, locations });
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, addTrack },
  []
);
