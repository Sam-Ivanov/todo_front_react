import { configureStore } from "@reduxjs/toolkit"
import { authReducer } from "./slices/authSlice";
import { todosReducer } from "./slices/todosSlice";

const store = configureStore({
   reducer: {
      todos: todosReducer,
      auth: authReducer
   }
});

export default store;