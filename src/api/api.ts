import axios, { AxiosRequestConfig } from "axios";
import { dataUserType } from "../redux/slices/authSlice";
import { todosType } from "../redux/slices/todosSlice";
const instance = axios.create({
   baseURL: 'https://todo-six-self.vercel.app'
   // baseURL: 'http://localhost:3001'

})

export type loginType = {
   email: string,
   password: string
}

export type registerType = {
   email: string,
   password: string
   fullName: string
}

export type updateTodoListNames = {
   todoListNames: Array<string>
}

export type createTodoType = {
   todoListName: string,
   text: string
}

export type deleteOneTodoType = {
   id: string
}

export type deleteManyTodoType = {
   todoListName: string
}

export type updateOneTodoTextType = {
   id: string,
   newText: string
}

export type updateManyTodoListNameType = {
   todoListName: string,
   newTodoListName: string
}

export type updateOneTodoCompletedType = {
   id: string,
   completed: boolean
}

instance.interceptors.request.use((config: any) => {
   config.headers.Authorization = window.localStorage.getItem('token');
   return config;
})

export const authAPI = {
   me() {
      return instance.get<dataUserType>('/me');
   },
   login(params: loginType) {
      return instance.post<dataUserType>('/login', params);
   },
   register(params: registerType) {
      return instance.post<dataUserType>('/register', params);
   }
}

export const userAPI = {
   updateTodoListNames(params: updateTodoListNames) {
      return instance.patch<dataUserType>('/user', params);
   }
}

export const todosAPI = {
   get() {
      return instance.get<Array<todosType>>('/todos');
   },
   createTodo(params: createTodoType) {
      return instance.post<todosType>('/todos', params);
   },
   deleteTodos(params: deleteManyTodoType) {
      return instance.delete<any>(`/todos/${params.todoListName}`);
   },
   deleteOneTodo(params: deleteOneTodoType) {
      return instance.delete<any>(`/todo/${params.id}`);
   },
   deleteCompletedTodo(params: deleteManyTodoType) {
      return instance.delete<any>(`/todos/completed/${params.todoListName}`);
   },

   updateTodo(params: updateOneTodoTextType | updateManyTodoListNameType | updateOneTodoCompletedType) {
      return instance.patch<any>('/todos', params);
   }
}