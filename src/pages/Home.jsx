import React, { useEffect } from 'react';
import NewTodoInput from "../components/NewTodoInput";
import TodoItems from "../components/TodoItems";
import TodoListName from "../components/TodoListName";
import { todosAPI } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../redux/slices/todosSlice'


const Home = () => {
   const dispatch = useDispatch();
   const { todos } = useSelector(state => state.todos)
   const isListsExist = useSelector(state => state.auth.data.todoListNames)

   const isTodosLoading = todos.status === 'loading';

   useEffect(() => {
      dispatch(fetchTodos())
   }, [])

   return (

      <>
         <TodoListName todoListName={"купить в магазине"} />
         <NewTodoInput />
         <TodoItems todos={todos.items} isTodosLoading={isTodosLoading} />
         
      </>
   );
};

export default Home;

