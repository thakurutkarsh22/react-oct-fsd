import ACTIONS_TYPE from "./actionTypes/actionTypes";

const TOGGLE_ACTION = (data) => {
  return {
    type: ACTIONS_TYPE.TOGGLE,
    data: data,
  };
};

const LOADING_ACTION = (data) => {
  return {
    type: ACTIONS_TYPE.LOADING,
  };
};

export default TOGGLE_ACTION;
