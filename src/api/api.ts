import axios from "axios";
import { DataUserType } from "../redux/slices/authSlice";
import { TodosType } from "../redux/slices/todosSlice";
const instance = axios.create({
   // baseURL: 'https://todo-six-self.vercel.app'
   baseURL: 'http://localhost:3001'
});

export type LoginType = {
   email: string,
   password: string
}

export type RegisterType = {
   email: string,
   password: string
   fullName: string
}

export type UpdateTodoListNames = {
   todoListNames: Array<string>
}

export type CreateTodoType = {
   todoListName: string,
   text: string
}

export type DeleteOneTodoType = {
   id: string
}

export type DeleteManyTodoType = {
   todoListName: string
}

export type UpdateOneTodoTextType = {
   id: string,
   newText: string
}

export type UpdateManyTodoListNameType = {
   todoListName: string,
   newTodoListName: string
}

export type UpdateOneTodoCompletedType = {
   id: string,
   completed: boolean
}

instance.interceptors.request.use((config: any) => {
   config.headers.Authorization = window.localStorage.getItem('token');
   return config;
})

export const authAPI = {
   me() {
      return instance.get<DataUserType>('/me');
   },
   login(params: LoginType) {
      return instance.post<DataUserType>('/login', params);
   },
   register(params: RegisterType) {
      return instance.post<DataUserType>('/register', params);
   }
};

export const userAPI = {
   UpdateTodoListNames(params: UpdateTodoListNames) {
      return instance.patch<DataUserType>('/user', params);
   }
};

export const todosAPI = {
   get() {
      return instance.get<Array<TodosType>>('/todos');
   },
   createTodo(params: CreateTodoType) {
      return instance.post<TodosType>('/todos', params);
   },
   deleteTodos(params: DeleteManyTodoType) {
      return instance.delete<any>(`/todos/${params.todoListName}`);
   },
   deleteOneTodo(params: DeleteOneTodoType) {
      return instance.delete<any>(`/todo/${params.id}`);
   },
   deleteCompletedTodo(params: DeleteManyTodoType) {
      return instance.delete<any>(`/todos/completed/${params.todoListName}`);
   },
   updateTodo(params: UpdateOneTodoTextType | UpdateManyTodoListNameType | UpdateOneTodoCompletedType) {
      return instance.patch<any>('/todos', params);
   }
};

