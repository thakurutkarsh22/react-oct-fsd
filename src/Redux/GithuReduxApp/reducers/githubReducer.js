import ActionTYPES from "../actions/actionTypes/actionTypes";

const DEFAULT_STATE = {
  user: "",
  loading: false,
};

function githubReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ActionTYPES.SET_USER:
      return { ...state, user: action.payload };

    case ActionTYPES.LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}

export default githubReducer;
