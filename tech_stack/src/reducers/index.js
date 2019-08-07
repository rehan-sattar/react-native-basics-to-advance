import { combineReducers } from "redux";
import LibarayReducer from "./LibraryReducer";

export default combineReducers({
  libraries: LibarayReducer
});
