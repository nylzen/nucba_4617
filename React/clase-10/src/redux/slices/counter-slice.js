import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: INITIAL_STATE,
  reducers: {
    increment: (state) => {
      return { ...state, count: state.count + 1 };
    },
    increment_5: (state) => {
      return { ...state, count: state.count + 5 };
    },
    multiply: (state) => {
      return { ...state, count: state.count * 2 };
    },
    decrement: (state) => {
      return { ...state, count: state.count - 1 };
    },
    decrement_5: (state) => {
      return { ...state, count: state.count - 5 };
    },
    divide: (state) => {
      return { ...state, count: state.count / 2 };
    },
    reset: (state) => {
      return { ...state, count: 0 };
    },
  },
});

export const {
  increment,
  decrement,
  increment_5,
  decrement_5,
  multiply,
  divide,
  reset,
} = counterSlice.actions;

export default counterSlice.reducer;
