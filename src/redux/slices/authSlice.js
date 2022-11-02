import { Email } from "@mui/icons-material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authAPI } from "../../api";

export const fetchUserData = createAsyncThunk('auth/fetchUserData', async (params) => {
const {data} = await authAPI.login(params)
return data
})

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async (params) => {
   const {data} = await authAPI.me()
   return data
   })
   

const initialState = {
   data: null,
   status: 'loading'
}

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers:{
      logout:(state)=>{
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

   }
})



export const authReducer = authSlice.reducer;

export const {logout} = authSlice.actions;