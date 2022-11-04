import { Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpdateTodoListNames } from '../../redux/slices/authSlice';
import styles from './TodoListItem.module.css'
import { setMainListName, deleteMainListName } from '../../redux/slices/todosSlice';

const TodoListItem = (props) => {
   const dispatch = useDispatch();
   const todoListNames = useSelector(state => state.auth.data.todoListNames)


   const deleteTodoListNameItem = (name) => {
      const todoList = todoListNames.filter(el => el !== name);
      dispatch(fetchUpdateTodoListNames({ 'todoListNames': todoList }))
   }

   return (
      <div className={styles.container} >
         <div className={styles.item}
            onClick={() => {
               dispatch(setMainListName(props.name));
               props.drawerClose();
            }}>
            {props.name}
         </div>
         <div className={styles.btn}>
            <IconButton onClick={() => {
               deleteTodoListNameItem(props.name);
               dispatch(deleteMainListName());
            }}>
               <Delete fontSize='small' />
            </IconButton>
         </div>
      </div>
   );
};

export default TodoListItem;