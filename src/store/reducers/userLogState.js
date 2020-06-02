import { defineState } from "redux-localstore";

const defaultState = "";

const initialState = defineState(defaultState)("userLogState");

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case "JWT": {
      return action.payload;
    }
    case "CREATE_USER": {
      return action.payload;
    }
    case "NEW_RECIPE": {
      return {

          ...action.payload.user,
          recipes:  action.payload.body,
        
      };
    }
    case "UNIQUE_USER": {
      return action.payload;
    }
    case "LOG_OUT": {
      return action.payload;
    }

    default:
      return state;
  }
}
