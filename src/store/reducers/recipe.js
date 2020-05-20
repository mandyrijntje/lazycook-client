const initialState = { all: [], userRecipes: [], foundRecipe:[], tipRecipe:[] };

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case "ALL_RECIPES": {
      return {
        ...state,
        all: action.payload
      };
    }
    case "NEW_RECIPE": {
      return {
        ...state,
        all: [action.payload, ...state.all]
      };
    }
    case "USER_RECIPES": {
      return {
        ...state,
        userRecipes: action.payload
      };
    }
    case "FOUND_RECIPE": {
      return {
        ...state,
        foundRecipe: action.payload
      };
    }
    case "TIP_RECIPE": {
      return {
        ...state,
        tipRecipe: action.payload
      };
    }
    default:
      return state;
  }
}
