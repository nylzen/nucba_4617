import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = [];

export const todoSlice = createSlice({
  name: "todos",
  initialState: INITIAL_STATE,
  reducers: {
    addTodo: (state, action) => {
      return [...state, { id: Date.now(), todo: action.payload }];
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
