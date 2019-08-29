import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "error_signup":
      return { ...state, errorMessage: payload };
    default:
      return state;
  }
};

// actions
const signup = dispatch => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
    } catch (err) {
      dispatch({
        type: "error_signup",
        payload: "Something went wrong in signup."
      });
    }
  };
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
