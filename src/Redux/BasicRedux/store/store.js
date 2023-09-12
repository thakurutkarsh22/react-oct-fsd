import { combineReducers, createStore } from "redux";
import toggleReducer, { DEFAULT_STORE_STATE } from "../reducer/reducer";

// Default state

const rootReducer = combineReducers({
  toggerReducer: toggleReducer,
  // counterReducer:
});

function basicReduxStore() {
  return createStore(rootReducer);
}

// CombineReducer -> to add More reducer function (to add more manager to the store like we did in Slice)

export default basicReduxStore;
