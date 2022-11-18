import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { authAPI, userAPI, loginType, registerType, updateTodoListNames } from "../../api/api";

export type dataUserType = {
   _id: string,
   fullName: string,
   email: string,
   todoListNames: Array<string>,
   token?: string
}

type authInitialStateType = {
   data: null | dataUserType,
   status: 'loading' | 'loaded' | 'error'
}

const initialState: authInitialStateType = {
   data: null,
   status: 'loading'
}

export const fetchUserData = createAsyncThunk('auth/fetchUserData', async (params: loginType) => {
   const { data } = await authAPI.login(params)
   return data
})

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
   const { data } = await authAPI.me()
   return data
})

export const fetchRegistration = createAsyncThunk('auth/fetchRegistration', async (params: registerType) => {
   const { data } = await authAPI.register(params)
   return data
})

export const fetchUpdateTodoListNames = createAsyncThunk('user/fetchUpdateTodoListNames', async (params: updateTodoListNames) => {
   const { data } = await userAPI.updateTodoListNames(params);
   return data
})

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      logout: (state) => {
         state.data = null;
      }
   },
   extraReducers: {
      [fetchUserData.pending.type]: (state) => {
         state.status = 'loading';
         state.data = null;
      },
      [fetchUserData.fulfilled.type]: (state, action: PayloadAction<dataUserType>) => {
         state.status = 'loaded';
         state.data = action.payload;
      },
      [fetchUserData.rejected.type]: (state) => {
         state.status = 'error';
         state.data = null;
      },

      [fetchAuthMe.pending.type]: (state) => {
         state.status = 'loading';
         state.data = null;
      },
      [fetchAuthMe.fulfilled.type]: (state, action: PayloadAction<dataUserType>) => {
         state.status = 'loaded';
         state.data = action.payload;
      },
      [fetchAuthMe.rejected.type]: (state) => {
         state.status = 'error';
         state.data = null;
      },

      [fetchRegistration.pending.type]: (state) => {
         state.status = 'loading';
         state.data = null;
      },
      [fetchRegistration.fulfilled.type]: (state, action: PayloadAction<dataUserType>) => {
         state.status = 'loaded';
         state.data = action.payload;
      },
      [fetchRegistration.rejected.type]: (state) => {
         state.status = 'error';
         state.data = null;
      },

      [fetchUpdateTodoListNames.pending.type]: (state) => {
         state.status = 'loading';
      },
      [fetchUpdateTodoListNames.fulfilled.type]: (state, action: PayloadAction<dataUserType>) => {
         state.status = 'loaded';
         state.data = action.payload;
      },
      [fetchUpdateTodoListNames.rejected.type]: (state) => {
         state.status = 'error';
      },
   }
})

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;