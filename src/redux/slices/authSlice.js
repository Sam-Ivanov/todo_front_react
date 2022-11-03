import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authAPI } from "../../api";
import { userAPI } from "../../api";

export const fetchUserData = createAsyncThunk('auth/fetchUserData', async (params) => {
   const { data } = await authAPI.login(params)
   return data
})

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async (params) => {
   const { data } = await authAPI.me()
   return data
})

export const fetchRegistration = createAsyncThunk('auth/fetchRegistration', async (params) => {
   const { data } = await authAPI.register(params)
   return data
})

export const fetchUpdateTodoListNames = createAsyncThunk('user/fetchUpdateTodoListNames', async (params) => {
   const { data } = await userAPI.updateTodoListNames(params);
   return data
})

// newTodoListNames

const initialState = {
   data: null,
   status: 'loading'
}

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      logout: (state) => {
         state.data = null;
      }
   },
   extraReducers: {
      [fetchUserData.pending]: (state) => {
         state.status = 'loading';
         state.data = null;
      },
      [fetchUserData.fulfilled]: (state, action) => {
         state.status = 'loaded';
         state.data = action.payload;
      },
      [fetchUserData.rejected]: (state) => {
         state.status = 'error';
         state.data = null;
      },

      [fetchAuthMe.pending]: (state) => {
         state.status = 'loading';
         state.data = null;
      },
      [fetchAuthMe.fulfilled]: (state, action) => {
         state.status = 'loaded';
         state.data = action.payload;
      },
      [fetchAuthMe.rejected]: (state) => {
         state.status = 'error';
         state.data = null;
      },

      [fetchRegistration.pending]: (state) => {
         state.status = 'loading';
         state.data = null;
      },
      [fetchRegistration.fulfilled]: (state, action) => {
         state.status = 'loaded';
         state.data = action.payload;
      },
      [fetchRegistration.rejected]: (state) => {
         state.status = 'error';
         state.data = null;
      },

      [fetchUpdateTodoListNames.pending]: (state) => {
         state.status = 'loading';
      },
      [fetchUpdateTodoListNames.fulfilled]: (state, action) => {
         state.status = 'loaded';
         state.data = action.payload;
      },
      [fetchUpdateTodoListNames.rejected]: (state) => {
         state.status = 'error';
      },
   }
})



export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;