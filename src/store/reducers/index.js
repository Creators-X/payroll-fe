import { combineReducers } from "redux";
import adminReducer from "./adminReducer";
import employeeReducer from "./employeeReducer";

const rootReducer = combineReducers({
  adminReducer,
  employeeReducer,
});

export default rootReducer;
