import { configureStore, createSlice } from "@reduxjs/toolkit";
import undoable from "redux-undo";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1; // this is not allowd in react (MUtation)

      // return {...state, value: state.value + 1} // slice behind the scenes is exacly doing this.
    },

    decrement: (state) => {
      state.value -= 1;
    },

    addWith: (state) => {
      state.value += 5;
    },
  },
});

export const actionUndoRedoRedux = counterSlice.actions;
// export actionUndoRedoRedux

const undoRedoStore = configureStore({
  reducer: {
    counterReducer: undoable(counterSlice.reducer),
  },
});

export default undoRedoStore;
