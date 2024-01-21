import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../lib/features/todos/todosSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      todos: todosReducer,
    },
  });
};
