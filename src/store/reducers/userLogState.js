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
        recipes: action.payload.body,
      };
    }

    case "CHANGE_RECIPE": {
      const recipesUpdated = state.recipes.map((recipe) => {
        const condition = recipe.id === action.payload.body[action.payload.body.length-1].id;

        if (condition) {
          return action.payload.body[action.payload.body.length-1];
        }
        return recipe;
      });
      return {
        ...action.payload.user,
        recipes: recipesUpdated,
      };
    }
    case "RECIPE_DELETE_SUCCESS": {
      const recipeId = action.payload.body;
      const allMinusDeleted = state.recipes.filter(
        (recipe) => recipe.id !== recipeId
      );
      return {
        ...action.payload.user,
        recipes: allMinusDeleted,
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
