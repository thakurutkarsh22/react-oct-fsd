import { createStore } from "redux";
import githubReducer from "../reducers/githubReducer";

function githubStore() {
  return createStore(githubReducer);
}

export default githubStore;
