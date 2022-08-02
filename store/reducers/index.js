import { combineReducers } from "redux";
import { signInReducer } from "./auth/signIn";

export default combineReducers({
  signInReducer: signInReducer
});
