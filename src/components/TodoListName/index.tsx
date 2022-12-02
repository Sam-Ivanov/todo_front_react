import { Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import styles from './TodoListName.module.css';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchUpdateTodoListNames } from '../../redux/slices/authSlice';
import { fetchUpdateManyTodos, setMainListName } from '../../redux/slices/todosSlice';
import Input from '../common/Input';

const TodoListName: React.FC = (props) => {
   const todoListNames = useAppSelector(state => state.auth.data?.todoListNames);
   const listName = useAppSelector(state => state.todo.mainList);
   const [isInputTodoListNameOpen, setInputTodoListNameOpen] = useState(false);
   const [todoListName, setTodoListName] = useState(listName);
   const dispatch = useAppDispatch();

   useEffect(() => {
      setTodoListName(listName);
   }, [listName]);

   const changeName = (e: any) => {
      setTodoListName(e.target.value);
   };

   const updateTodoListName = () => {

      if (todoListName === "" || todoListName === listName) {
         setTodoListName(listName);
         setInputTodoListNameOpen(false);
         return;
      }

      const newTodoListNames = todoListNames?.map(el => {
         if (el === listName) {
            return el = todoListName;
         } else return el;
      });

      if (newTodoListNames) {
         dispatch(fetchUpdateManyTodos({
            "todoListName": listName,
            "newTodoListName": todoListName
         }));
         dispatch(fetchUpdateTodoListNames({ "todoListNames": newTodoListNames }));
         dispatch(setMainListName(todoListName));
      }
      setInputTodoListNameOpen(false);
   };

   const onSumbit = (e: any) => {
      e.preventDefault();
      updateTodoListName();
   };

   return (
      <div className={styles.container}>
         {isInputTodoListNameOpen
            ?
            <form className={styles.form} onSubmit={onSumbit}>
               <Input
                  type='text'
                  autoFocus
                  onBlur={updateTodoListName}
                  value={todoListName}
                  onChange={changeName}
               />
               {/* <input
                  className={styles.input}
                  type='text'
                  autoFocus
                  onBlur={updateTodoListName}
                  value={todoListName}
                  onChange={changeName}
               /> */}
            </form>
            :
            <div className={styles.name}>
               {listName}
            </div>}
         {!isInputTodoListNameOpen && <div className={styles.edit}>
            <IconButton onClick={() => {
               setInputTodoListNameOpen(true);
            }}>
               <Edit
                  classes={{ root: styles.editIcon }}
                  fontSize='small' />
            </IconButton>
         </div>}
      </div>
   );
};

export default TodoListName;