import axios from "axios";

const instance = axios.create({
   // baseURL: 'https://todo-six-self.vercel.app'
   baseURL: 'http://localhost:3001'

})

instance.interceptors.request.use((config) => {
   config.headers.Authorization = window.localStorage.getItem('token');
   return config;
})


export const authAPI = {
   me() {
      return instance.get('/me');
   },
   login(params) {
      return instance.post('/login', params);
   },
   register(params) {
      return instance.post('/register', params);
   }
}

export const userAPI = {
   updateTodoListNames(params) {
      return instance.patch('/user', params)
   }
}

export const todosAPI = {
   get() {
      return instance.get('/todos');
   }
}