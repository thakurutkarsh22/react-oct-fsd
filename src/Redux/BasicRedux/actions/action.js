import ACTIONS_TYPE from "./actionTypes/actionTypes";

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

export default TOGGLE_ACTION_OBJECT;
