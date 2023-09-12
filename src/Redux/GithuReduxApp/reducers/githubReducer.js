const DEFAULT_STATE = {
  user: "",
};

function githubReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

export default githubReducer;
