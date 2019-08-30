import { AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "error_auth":
      return { ...state, errorMessage: payload };
    case "success_auth":
      return { errorMessage: "", token: payload };
    case "clear_error":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

// actions
// for clearting the errorMessage
const clearErrorMessage = dispatch => () => dispatch({ type: "clear_error" });

const signout = dispatch => {
  return () => {};
};

const authenticate = dispatch => {
  return async (route, { email, password }) => {
    try {
      console.log(route, email, password);
      const response = await trackerApi.post(route, { email, password });
      const {
        data: { token }
      } = response;
      await AsyncStorage.setItem("token", token);
      dispatch({ type: "success_auth", payload: token });
      navigate("TrackList");
    } catch (err) {
      dispatch({
        type: "error_auth",
        payload: "Something went wrong with signin"
      });
    }
  };
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { authenticate, signout, clearErrorMessage },
  { token: null, errorMessage: "" }
);
