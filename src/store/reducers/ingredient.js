const initialState = { all: [], categories: [], categoryIngredients: [] };

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case "ALL_INGREDIENTS": {
      return {
        ...state,
        all: action.payload,
      };
    }
    case "ALL_CATEGORIES": {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case "CATEGORY_INGREDIENTS": {
      return {
        ...state,
        categoryIngredients: action.payload,
      };
    }
    default:
      return state;
  }
}
