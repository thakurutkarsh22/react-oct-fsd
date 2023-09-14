import { applyMiddleware, createStore } from "redux";
import githubReducer from "../reducers/githubReducer";
import thunk from "redux-thunk";

// TODO: this is how you can create your own THUNK like Structure (Middleware).

function ownTHUNK(value) {
  /// what you have to do...
  // if(value is a function then good )
}

function githubStore() {
  return createStore(githubReducer, applyMiddleware(thunk));
}

export default githubStore;
