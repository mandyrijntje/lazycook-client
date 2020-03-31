const initialState = { all: [] };

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case "ALL_INGREDIENTS": {
      return {
        ...state,
        all: action.payload
      };
    }
    default:
      return state;
  }
}
