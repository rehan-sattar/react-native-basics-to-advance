import createDataContext from "./createDataContext";

const locationReducer = (state, { type, payload }) => {
  switch (type) {
    case "add_location":
      return { ...state, currentLocation: payload };
    case "start_recording":
      return { ...state, recording: true };
    case "stop_recording":
      return { ...state, recording: false };
    case "add_in_locations":
      return { ...state, locations: [...state.locations, payload] };
    case "set_location_name":
      return { ...state, name: payload };
    default:
      return state;
  }
};

const setLocationName = dispatch => name => {
  dispatch({ type: "set_location_name", payload: name });
};
const startRecording = dispatch => () => {
  dispatch({ type: "start_recording" });
};
const stopRecording = dispatch => () => {
  dispatch({ type: "stop_recording" });
};
const addLocation = dispatch => (location, recording) => {
  dispatch({ type: "add_location", payload: location });
  if (recording) dispatch({ type: "add_in_locations", payload: location });
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation, setLocationName },
  { currentLocation: "", locations: [], recording: false, name: "" }
);
