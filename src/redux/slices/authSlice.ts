import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { authAPI, userAPI, LoginType, RegisterType, UpdateTodoListNames } from "../../api/api";

export type DataUserType = {
   _id: string,
   fullName: string,
   email: string,
   todoListNames: Array<string>,
   token?: string
}

type AuthInitialStateType = {
   data: null | DataUserType,
   status: 'loading' | 'loaded' | 'error'
}

const initialState: AuthInitialStateType = {
   data: null,
   status: 'loading'
}

export const fetchUserData = createAsyncThunk('auth/fetchUserData', async (params: LoginType) => {
   const { data } = await authAPI.login(params)
   return data
})

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
   const { data } = await authAPI.me()
   return data
})

export const fetchRegistration = createAsyncThunk('auth/fetchRegistration', async (params: RegisterType) => {
   const { data } = await authAPI.register(params)
   return data
})

export const fetchUpdateTodoListNames = createAsyncThunk('user/fetchUpdateTodoListNames', async (params: UpdateTodoListNames) => {
   const { data } = await userAPI.UpdateTodoListNames(params);
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
         // state.data = null;
      },
      [fetchUserData.fulfilled.type]: (state, action: PayloadAction<DataUserType>) => {
         state.status = 'loaded';
         state.data = action.payload;
      },
      [fetchUserData.rejected.type]: (state) => {
         state.status = 'error';
         // state.data = null;
      },

      [fetchAuthMe.pending.type]: (state) => {
         state.status = 'loading';
         // state.data = null;
      },
      [fetchAuthMe.fulfilled.type]: (state, action: PayloadAction<DataUserType>) => {
         state.status = 'loaded';
         state.data = action.payload;
      },
      [fetchAuthMe.rejected.type]: (state) => {
         state.status = 'error';
         // state.data = null;
      },

      [fetchRegistration.pending.type]: (state) => {
         state.status = 'loading';
         // state.data = null;
      },
      [fetchRegistration.fulfilled.type]: (state, action: PayloadAction<DataUserType>) => {
         state.status = 'loaded';
         state.data = action.payload;
      },
      [fetchRegistration.rejected.type]: (state) => {
         state.status = 'error';
         // state.data = null;
      },

      [fetchUpdateTodoListNames.pending.type]: (state) => {
         state.status = 'loading';
      },
      [fetchUpdateTodoListNames.fulfilled.type]: (state, action: PayloadAction<DataUserType>) => {
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