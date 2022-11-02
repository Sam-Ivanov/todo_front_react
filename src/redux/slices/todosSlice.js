import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { todosAPI } from "../../api";

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
   const { data } = await todosAPI.get();
   return data;
})

const initialState = {
   todos: {
      items: [],
      status: 'loading'
   }
};

const todosSlice = createSlice({
   name: 'todos',
   initialState,
   reducer: {},
   extraReducers: {
      [fetchTodos.pending]: (state) => {
         state.todos.status = 'loading';
         state.todos.items = [];
      },
      [fetchTodos.fulfilled]: (state, action) => {
         state.todos.status = 'loaded';
         state.todos.items = action.payload;
      },
      [fetchTodos.rejected]: (state) => {
         state.todos.status = 'error';
         state.todos.items = [];
      },

   }
});

export const todosReducer = todosSlice.reducer;