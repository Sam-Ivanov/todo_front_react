import { Delete } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { fetchDeleteCompletedTodo, TodosType } from '../../redux/slices/todosSlice';
import TodoItem from '../TodoItem';
import styles from './TodoItems.module.css';

type TodoItemsPropsType = {
   mainList: string,
   todos: Array<TodosType>,
   isTodosLoading: boolean
};

const TodoItems: React.FC<TodoItemsPropsType> = ({ todos, mainList }) => {
   const dispatch = useAppDispatch();
   const todosInMainList = todos.filter(el => el.todoListName === mainList);
   const isShowDelBtn = todosInMainList.find(el => el.completed === true);
   const onClickDeleteCompletedTodos = () => {
      if (window.confirm('Вы действительно хотите удалить все выполненные todo?')) {
         dispatch(fetchDeleteCompletedTodo({ 'todoListName': mainList }));
      }
   };

   return (
      <>
         {isShowDelBtn && <div className={styles.deleteAllChecked}>
            <Button
               onClick={onClickDeleteCompletedTodos}
               variant="outlined"
               startIcon={<Delete />}>
               Delete all checked
            </Button>
         </div>}
         {<div>
            {todosInMainList.sort((a, b) => (+b.completed) - (+a.completed)).reverse().map((el) =>
               <TodoItem key={el._id} completed={el.completed} text={el.text} id={el._id} />)}
         </div>}
      </>
   );
};

export default TodoItems;