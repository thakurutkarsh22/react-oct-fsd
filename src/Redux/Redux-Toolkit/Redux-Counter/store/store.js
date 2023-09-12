import { configureStore, createSlice } from "@reduxjs/toolkit";

// --------- slice --------------

export const formsSlice = createSlice({
  name: "formSlice",
  initialState: { touched: false, editied: false },
  reducers: {
    touche(state) {
      state.touched = true;
    },

    edit(state) {
      state.editied = true;
    },
  },
});

export const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 100 },
  reducers: {
    increment(state, action) {
      state.counter += 1; // mutation
      // behind the scenes redux tool kit is creating the new Object for state and then mutating the value in that new STATE obj
      // return { // pobject
      //     ...state,
      //     counter: state + 1
      // }
    },

    decrement(state, action) {
      state.counter -= 1; // mutation
    },

    addWith(state, action) {
      state.counter += action.payload;
    },
  },
});

// const toggleSlice = createSlice

// ---------  Store --------

//  Mall
const bigStore = configureStore({
  reducer: {
    counterReducer: counterSlice.reducer,
    formsreducer: formsSlice.reducer,
  },
  //   reducer: counterSlice.reducers,
});

export default bigStore;
