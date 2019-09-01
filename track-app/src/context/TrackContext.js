import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const trackReducer = (state, { type, payload }) => {
  switch (type) {
    case "fetched_tracks":
      return payload;
    case "start_recording":
      return {};

    default:
      return state;
  }
};

const fetchTracks = dispatch => async () => {
  const response = await trackerApi.get("/tracks");
  dispatch({ type: "fetched_tracks", payload: response.data });
};
const addTrack = dispatch => async (name, locations) => {
  const response = await trackerApi.post("/tracks", { name, locations });
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, addTrack },
  []
);
