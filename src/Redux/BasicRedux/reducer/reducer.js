import ACTIONS_TYPE from "../actions/actionTypes/actionTypes";

export const DEFAULT_STORE_STATE = {
  toggle: false,
  loading: false,

  counter: 0,
};

function toggleReducer(state = DEFAULT_STORE_STATE, action) {
  console.log("hey threre toggle reducer debug", state, action);

  switch (action.type) {
    case ACTIONS_TYPE.TOGGLE:
      return { ...state, toggle: !state.toggle };

    case ACTIONS_TYPE.LOADING:
      return { ...state, loading: false };

    // case "save_name":
    //     return {user: ""}

    // case api_call:
    //     return fetch("github.com/thakurutkars22")

    default:
      return state;
  }
}

export default toggleReducer;
