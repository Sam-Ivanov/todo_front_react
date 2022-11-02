import axios from "axios";

const instance = axios.create({
   baseURL: 'http://localhost:3001'
})

instance.interceptors.request.use((config)=>{
   config.headers.Authorization = window.localStorage.getItem('token');
   return config;
})


export const authAPI = {
   me() {
      return instance.get(`/me`);
   },
   login(params) {
      return instance.post(`/login`, params);
   },
   register(fullName, email, password) {
      return instance.post(`/register`, { fullName, email, password });
   },
   logout() {
      return instance.delete(`auth/login`);
   }
}

export const todosAPI = {
   get() {
      return instance.get('/todos');
   }
}