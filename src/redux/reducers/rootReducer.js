import { combineReducers } from "redux";
import { commentariesReducer } from "./commentariesReducer";

export const rootReducer = combineReducers({
  commentaries: commentariesReducer
})