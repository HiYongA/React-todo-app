import { createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";

// initial states
const initialState = [
  {
    id: shortid(),
    title: "할일",
    body: "내용",
    isDone: false,
  },
  {
    id: shortid(),
    title: "할일2",
    body: "내용2",
    isDone: true,
  },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => [...state, action.payload],
    removeTodo: (state, action) =>
      state.filter((todo) => todo.id !== action.payload),
    switchTodo: (state, action) =>
      state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      ),
  },
});

export const { addTodo, removeTodo, switchTodo } = todosSlice.actions;
export default todosSlice.reducer;
