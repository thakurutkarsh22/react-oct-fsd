import { createStore } from "redux";
import toggleReducer, { DEFAULT_STORE_STATE } from "../reducer/reducer";

// Default state

function basicReduxStore() {
  return createStore(toggleReducer);
}

export default basicReduxStore;
