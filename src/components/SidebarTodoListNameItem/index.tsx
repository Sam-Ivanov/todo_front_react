import { Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { fetchUpdateTodoListNames } from '../../redux/slices/authSlice';
import styles from './SidebarTodoListNameItem.module.css';
import { setMainListName, deleteMainListName, fetchDeleteManyTodos } from '../../redux/slices/todosSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

type SidebarTodoListNameItemType = {
   name: string,
   drawerClose: () => void
}

const SidebarTodoListNameItem: React.FC<SidebarTodoListNameItemType> = (props) => {
   const dispatch = useAppDispatch();
   const todoListNames = useAppSelector(state => state.auth.data?.todoListNames);

   const deleteTodoListNameItem = (name: string) => {
      if (todoListNames) {
         const todoList = todoListNames.filter(el => el !== name);
         dispatch(fetchUpdateTodoListNames({ 'todoListNames': todoList }));
         dispatch(fetchDeleteManyTodos({ 'todoListName': name }));
         dispatch(deleteMainListName());
      }
   };

   const onClickDeleteTodoList = () => {
      if (window.confirm('Вы действительно хотите удалить лист?')) {
         deleteTodoListNameItem(props.name);
      }
   };

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
            <IconButton onClick={onClickDeleteTodoList}>
               <Delete fontSize='small' />
            </IconButton>
         </div>
      </div>
   );
};

export default SidebarTodoListNameItem;