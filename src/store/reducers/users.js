const initialState = { all: [] };

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case "ALL_USERS": {
      return {
        ...state,
        all: action.payload
      };
    }
    // case "JWT": {
    //   return {
    //     ...state,
    //     all: [action.payload, ...state.all]
    //   };
    // }
    case "CREATE_USER": {
      return {
        ...state,
        all: [action.payload, ...state.all]
      };
    }
    // case "UNIQUE_USER": {
    //   return {
    //     ...state,
    //     uniqueUser: action.payload
    //   };
    // }
    // case "CHANGE_RECIPE": {
    //   const recipesUpdated = state.uniqueUser.recipes.map(recipe => {
    //     const condition = recipe.id === action.payload.id;

    //     if (condition) {
    //       return action.payload;
    //     }
    //     return recipe;
    //   });
    //   return {
    //     ...state,
    //     uniqueUser: { ...state.uniqueUser, recipes: recipesUpdated }
    //   };
    // }
    // case "RECIPE_DELETE_SUCCESS": {
    //   const recipeId = action.payload;
    //   const allMinusDeleted = state.uniqueUser.recipes.filter(
    //     recipe => recipe.id !== recipeId
    //   );
    //   return {
    //     ...state,
    //     uniqueUser: { ...state.uniqueUser, recipes: allMinusDeleted }
    //   };
    // }
    default:
      return state;
  }
}
