const initialState = {
  all: [],
  userRecipes: [],
  foundRecipe: [],
  tipRecipe: [],
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case "ALL_RECIPES": {
      return {
        ...state,
        all: action.payload,
      };
    }
    case "NEW_RECIPE": {
      return {
        ...state,
        all: [
          ...action.payload.imprint.recipe.all,
          action.payload.body[action.payload.body.length - 1],
        ],
      };
    }
    case "FOUND_RECIPE": {
      return {
        ...state,
        foundRecipe: action.payload,
      };
    }
    case "TIP_RECIPE": {
      return {
        ...state,
        tipRecipe: action.payload,
      };
    }
    // case "CHANGE_RECIPE": {
    //   const recipesUpdated = state.userLogState.recipes.map((recipe) => {
    //     const condition = recipe.id === action.payload.id;

    //     if (condition) {
    //       return action.payload;
    //     }
    //     return recipe;
    //   });
    //   return {
    //     ...state,
    //     userLogState: { ...state.userLogState, recipes: recipesUpdated },
    //   };
    // }
    // case "RECIPE_DELETE_SUCCESS": {
    //   const recipeId = action.payload;
    //   const allMinusDeleted = state.userLogState.recipes.filter(
    //     (recipe) => recipe.id !== recipeId
    //   );
    //   return {
    //     ...state,
    //     userLogState: { ...state.userLogState, recipes: allMinusDeleted },
    //   };
    // }
    default:
      return state;
  }
}
