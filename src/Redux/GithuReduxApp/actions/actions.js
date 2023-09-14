import ActionTYPES from "./actionTypes/actionTypes";

// action create
export const SET_USER_ACTION = (payload) => {
  return {
    type: ActionTYPES.SET_USER,
    payload: payload,
  };
};

// action creator
export const LOADING_ACTION = (payload) => {
  return {
    type: ActionTYPES.LOADING,
    payload: payload,
  };
};

// action creator
export const ERROR_ACTION = (payload) => {
  return {
    type: ActionTYPES.ERROR,
    payload: payload,
  };
};

// action creator // call an api (THUNK action creator)
export const FETCH_USER = (payload) => {
  // THE OBJECT will be not given
  // return {
  //     type: ActionTYPES.ERROR,
  //     payload: payload
  // }

  return async (dispatch, storeState) => {
    // call api
    // fetch("https://api.github.com/users/thakurutkarsh22")
    //   .then((response) => response.json())
    //   .then((result) => {
    //     console.log(result);
    //     dispatch(SET_USER_ACTION(result.company)); // this is the line where you are setting USER inside the REDUX STORE
    //   })
    //   .catch((error) => console.log("error", error));

    dispatch(LOADING_ACTION(true));

    const response = await fetch(
      "https://api.github.com/users/thakurutkarsh22"
    );

    const data = await response.json();

    dispatch(LOADING_ACTION(false));

    const { company, login } = data;
    dispatch(SET_USER_ACTION(login));
  };
};

// { type: "SET_USER", payload: result.company }
