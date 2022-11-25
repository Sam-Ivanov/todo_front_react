import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CreateTodoType, DeleteManyTodoType, DeleteOneTodoType, todosAPI, UpdateManyTodoListNameType, UpdateOneTodoCompletedType, UpdateOneTodoTextType } from "../../api/api"

export type TodosType = {
   _id: string,
   todoListName: string,
   text: string,
   completed: boolean,
   user: string
}

type TodosInitialStateType = {
   todos: Array<TodosType>,
   mainList: string,
   status: 'loading' | 'loaded' | 'error'
}

const initialState: TodosInitialStateType = {
   todos: [],
   mainList: '',
   status: 'loading'

};

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async (_, thunkAPI) => {
   const { data } = await todosAPI.get();
   return data;
})

export const fetchCreateTodo = createAsyncThunk('todos/fetchCreateTodo', async (params: CreateTodoType) => {
   const { data } = await todosAPI.createTodo(params);
   return data;
})

export const fetchUpdateManyTodos = createAsyncThunk('todos/fetchUpdateManyTodos', async (params: UpdateManyTodoListNameType) => {
   const { data } = await todosAPI.updateTodo(params);
   return data;
})

export const fetchUpdateOneTodoCompleted = createAsyncThunk('todos/fetchUpdateOneTodoCompleted', async (params: UpdateOneTodoCompletedType) => {
   const { data } = await todosAPI.updateTodo(params);
   return data;
})

export const fetchUpdateOneTodoText = createAsyncThunk('todos/fetchUpdateOneTodoText', async (params: UpdateOneTodoTextType) => {
   const { data } = await todosAPI.updateTodo(params);
   return data;
})

export const fetchDeleteManyTodos = createAsyncThunk('todos/fetchDeleteManyTodos', async (params: DeleteManyTodoType) => {
   const { data } = await todosAPI.deleteTodos(params)
   return data
})

export const fetchDeleteOneTodo = createAsyncThunk('todos/fetchDeleteOneTodo', async (params: DeleteOneTodoType) => {
   const { data } = await todosAPI.deleteOneTodo(params)
   return data
})

export const fetchDeleteCompletedTodo = createAsyncThunk('todos/fetchDeleteCompletedTodo', async (params: DeleteManyTodoType) => {
   const { data } = await todosAPI.deleteCompletedTodo(params)
   return data
})





const todosSlice = createSlice({
   name: 'todos',
   initialState,
   reducers: {
      setMainListName: (state, action: PayloadAction<string>) => {
         state.mainList = action.payload;

      },
      deleteMainListName: (state) => {
         state.mainList = '';
      }

   },
   extraReducers: {
      [fetchTodos.pending.type]: (state) => {
         state.status = 'loading';
         // state.todos = [];
      },
      [fetchTodos.fulfilled.type]: (state, action: PayloadAction<Array<TodosType>>) => {
         state.status = 'loaded';
         state.todos = action.payload;
      },
      [fetchTodos.rejected.type]: (state) => {
         state.status = 'error';
         // state.todos = [];
      },

      [fetchCreateTodo.pending.type]: (state) => {
         state.status = 'loading';
         // state.todos.items = [];
      },
      [fetchCreateTodo.fulfilled.type]: (state, action: PayloadAction<TodosType>) => {
         state.status = 'loaded';
         state.todos.push(action.payload);
      },
      [fetchCreateTodo.rejected.type]: (state) => {
         state.status = 'error';
      },

      [fetchUpdateManyTodos.pending.type]: (state) => {
         state.status = 'loading';
         // state.todos = [];
      },
      [fetchUpdateManyTodos.fulfilled.type]: (state, action: PayloadAction<Array<TodosType>>) => {
         state.status = 'loaded';
         state.todos = action.payload;
      },
      [fetchUpdateManyTodos.rejected.type]: (state) => {
         state.status = 'error';
         // state.todos = [];
      },

      [fetchUpdateOneTodoCompleted.pending.type]: (state) => {
         state.status = 'loading';
         // state.todos = [];
      },
      [fetchUpdateOneTodoCompleted.fulfilled.type]: (state, action: PayloadAction<Array<TodosType>>) => {
         state.status = 'loaded';
         state.todos = action.payload;
      },
      [fetchUpdateOneTodoCompleted.rejected.type]: (state) => {
         state.status = 'error';
         // state.todos = [];
      },

      [fetchUpdateOneTodoText.pending.type]: (state) => {
         state.status = 'loading';
         // state.todos = [];
      },
      [fetchUpdateOneTodoText.fulfilled.type]: (state, action: PayloadAction<Array<TodosType>>) => {
         state.status = 'loaded';
         state.todos = action.payload;
      },
      [fetchUpdateOneTodoText.rejected.type]: (state) => {
         state.status = 'error';
         // state.todos = [];
      },

      [fetchDeleteManyTodos.pending.type]: (state) => {
         state.status = 'loading';
         // state.todos = [];
      },
      [fetchDeleteManyTodos.fulfilled.type]: (state, action: PayloadAction<Array<TodosType>>) => {
         state.status = 'loaded';
         state.todos = action.payload;
      },
      [fetchDeleteManyTodos.rejected.type]: (state) => {
         state.status = 'error';
         // state.todos = [];
      },

      [fetchDeleteOneTodo.pending.type]: (state) => {
         state.status = 'loading';
         // state.todos = [];
      },
      [fetchDeleteOneTodo.fulfilled.type]: (state, action: PayloadAction<Array<TodosType>>) => {
         state.status = 'loaded';
         state.todos = action.payload;
      },
      [fetchDeleteOneTodo.rejected.type]: (state) => {
         state.status = 'error';
         // state.todos = [];
      },

      [fetchDeleteCompletedTodo.pending.type]: (state) => {
         state.status = 'loading';
         // state.todos = [];
      },
      [fetchDeleteCompletedTodo.fulfilled.type]: (state, action: PayloadAction<Array<TodosType>>) => {
         state.status = 'loaded';
         state.todos = action.payload;
      },
      [fetchDeleteCompletedTodo.rejected.type]: (state) => {
         state.status = 'error';
         // state.todos = [];
      },

   }
});

export const todosReducer = todosSlice.reducer;
export const { setMainListName, deleteMainListName } = todosSlice.actions;

