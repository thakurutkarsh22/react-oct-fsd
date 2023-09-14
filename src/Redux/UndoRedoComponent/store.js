import { configureStore, createSlice } from "@reduxjs/toolkit";
import undoable from "redux-undo";

const counterSlice = createSlice({});

const undoRedoStore = configureStore({
  reducer: {
    toggleReducer: null,
    counterReducer: undoable(counterSlice),
  },
});
