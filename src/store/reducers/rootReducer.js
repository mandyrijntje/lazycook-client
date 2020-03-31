import { combineReducers } from "redux";

import ingredient from "./ingredient";
import userLogState from "./userLogState";
import users from "./users";

export default combineReducers({ userLogState, users, ingredient });
