import createDataContext from "./createDataContext";

const locationReducer = (state, { type, payload }) => {
  switch (type) {
    case "add_location":
      return {
        ...state,
        currentLocation: payload
      };
    default:
      return state;
  }
};

const startRecording = dispatch => () => {};
const stopRecording = dispatch => () => {};
const addLocation = dispatch => location => {
  dispatch({ type: "add_location", payload: location });
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation },
  { currentLocation: "", locations: [], recording: false }
);
