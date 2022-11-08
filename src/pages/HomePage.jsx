import React, { useEffect } from 'react';
import NewTodoInput from "../components/NewTodoInput";
import TodoItems from "../components/TodoItems";
import TodoListName from "../components/TodoListName";
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../redux/slices/todosSlice'


const HomePage = () => {
   const dispatch = useDispatch();
   const { todos } = useSelector(state => state.todos)
   const mainList = useSelector(state => state.todos.todos.mainList);
   const isTodosLoading = todos.status === 'loading';

   useEffect(() => {
      dispatch(fetchTodos())
   }, [])

   return (
      <>
         {
            mainList
               ?
               <div>
                  <TodoListName todoListName={mainList} />
                  <NewTodoInput />
                  <TodoItems mainList={mainList} todos={todos.items} isTodosLoading={isTodosLoading} />
               </div>
               :
               <div>
                  Список пуст...
               </div>
         }
      </>
   );
};

export default HomePage;

