import React, { useEffect } from 'react';
import NewTodoInput from "../components/NewTodoInput";
import TodoItems from "../components/TodoItems";
import TodoListName from "../components/TodoListName";
import { fetchTodos } from '../redux/slices/todosSlice';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import HomePageSelect from '../components/HomePageSelectLists';

const HomePage: React.FC = () => {
   const dispatch = useAppDispatch();
   const todo = useAppSelector(state => state.todo);
   const auth = useAppSelector(state => state.auth);
   // const mainList = useAppSelector(state => state.todo.mainList);
   const mainList = todo.mainList;
   const isTodosLoading = todo.status === 'loading';

   useEffect(() => {
      if (auth.data?.token) {
         window.localStorage.setItem('token', auth.data?.token);
      }
   }, [auth.data?.token]);

   useEffect(() => {
      dispatch(fetchTodos());
   }, []);

   return (
      <>
         {mainList
            ?
            <div>
               <TodoListName /*todoListName={mainList}*/ />
               <NewTodoInput />
               <TodoItems mainList={mainList} todos={todo.todos} isTodosLoading={isTodosLoading} />
            </div>
            :
            <div>
               <HomePageSelect />
            </div>}
      </>
   );
};

export default HomePage;

