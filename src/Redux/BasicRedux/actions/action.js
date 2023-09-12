import ACTIONS_TYPE from "./actionTypes/actionTypes";

// Action Creator .... (In a way )

const TOGGLE_ACTION_OBJECT = (data) => {
  return {
    type: ACTIONS_TYPE.TOGGLE,
    data: data,
  };
};

export const LOADING_ACTION_OBJECT = (data) => {
  return {
    type: ACTIONS_TYPE.LOADING,
  };
};

//  DO not use this always use the Action type.

export const POKEMON_OBJECT = (data) => {
  return {
    type: "abcd",
  };
};

export default TOGGLE_ACTION_OBJECT;
