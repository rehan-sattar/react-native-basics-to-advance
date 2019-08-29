import { AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "error_signup":
      return { ...state, errorMessage: payload };
    case "success_signup":
      return { errorMessage: "", token: payload };
    default:
      return state;
  }
};

// actions
const signup = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signup", { email, password });
    const {
      data: { token }
    } = response;
    await AsyncStorage.setItem("token", token);
    dispatch({ type: "success_signup", payload: token });
    navigate("TrackList");
  } catch (err) {
    dispatch({
      type: "error_signup",
      payload: "Something went wrong in signup."
    });
  }
};

const signin = dispatch => {
  return ({ email, password }) => {};
};

const signout = dispatch => {
  return () => {};
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { isSignedIn: false, errorMessage: "" }
);
