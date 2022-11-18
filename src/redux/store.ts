import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { authReducer } from "./slices/authSlice"
import { todosReducer } from "./slices/todosSlice"

const rootReducer = combineReducers({
   todo: todosReducer,
   auth: authReducer
})

export const setupStore = () => {
   return configureStore({
      reducer: rootReducer
   })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']






