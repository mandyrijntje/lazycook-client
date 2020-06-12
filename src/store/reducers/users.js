const initialState = { all: [] };

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case "ALL_USERS": {
      return {
        ...state,
        all: action.payload,
      };
    }

    case "CREATE_USER": {
      return {
        ...state,
        all: [action.payload, ...state.all],
      };
    }

    default:
      return state;
  }
}
