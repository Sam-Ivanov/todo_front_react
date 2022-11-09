import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { todosAPI } from "../../api/api";

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
   const { data } = await todosAPI.get();
   return data;
})

export const fetchCreateTodo = createAsyncThunk('todos/fetchCreateTodo', async (params) => {
   const { data } = await todosAPI.createTodo(params);
   return data;
})


const initialState = {
   todos: {
      items: [],
      mainList: null,
      status: 'loading'
   }
};

const todosSlice = createSlice({
   name: 'todos',
   initialState,
   reducers: {
      setMainListName: (state, action) => {
         state.todos.mainList = action.payload;
      },
      deleteMainListName: (state) => {
         state.todos.mainList = null;
      }

   },
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
      [fetchCreateTodo.pending]: (state) => {
         state.todos.status = 'loading';
         // state.todos.items = [];
      },
      [fetchCreateTodo.fulfilled]: (state, action) => {
         state.todos.status = 'loaded';
         state.todos.items.push(action.payload);
      },
      [fetchCreateTodo.rejected]: (state) => {
         state.todos.status = 'error';
      },
   }
});

export const todosReducer = todosSlice.reducer;
export const { setMainListName } = todosSlice.actions;
export const { deleteMainListName } = todosSlice.actions;