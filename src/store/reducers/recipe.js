const initialState = { all: [], userRecipes: [] };

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
    default:
      return state;
  }
}
