import { Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import styles from './TodoListName.module.css'
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchUpdateTodoListNames } from '../../redux/slices/authSlice';
import { fetchUpdateManyTodos, setMainListName } from '../../redux/slices/todosSlice';

// type TodoListNamePropsType = {
//    todoListName: string
// }

const TodoListName: React.FC = (props) => {
   const todoListNames = useAppSelector(state => state.auth.data?.todoListNames)
   const listName = useAppSelector(state => state.todo.mainList)
   const [isInputTodoListNameOpen, setInputTodoListNameOpen] = useState(false);
   const [todoListName, setTodoListName] = useState(listName)
   const dispatch = useAppDispatch();

   useEffect(() => { setTodoListName(listName) }, [listName])

   const changeName = (e: any) => {
      setTodoListName(e.target.value)
   }

   const onSumbit = (e: any) => {
      e.preventDefault()
      if (todoListName === "") {
         setTodoListName(listName)
         return
      }
      const newTodoListNames = todoListNames?.map(el => {
         if (el === listName) {
            return el = todoListName
         } else return el
      })
      if (newTodoListNames) {
         dispatch(fetchUpdateManyTodos({
            "todoListName": listName,
            "newTodoListName": todoListName
         }))
         dispatch(fetchUpdateTodoListNames({ "todoListNames": newTodoListNames }))
         dispatch(setMainListName(todoListName))
      }
      setInputTodoListNameOpen(false)
   }

   const onBlurInput = () => {
      if (todoListName === "") {
         setTodoListName(listName)
         return
      }
      const newTodoListNames = todoListNames?.map(el => {
         if (el === listName) {
            return el = todoListName
         } else return el
      })
      if (newTodoListNames) {
         dispatch(fetchUpdateManyTodos({
            "todoListName": listName,
            "newTodoListName": todoListName
         }))
         dispatch(fetchUpdateTodoListNames({ "todoListNames": newTodoListNames }))
         dispatch(setMainListName(todoListName))
      }
      setInputTodoListNameOpen(false)

   }

   return (
      <div className={styles.container}>
         <div >
            {isInputTodoListNameOpen
               ?
               <form onSubmit={onSumbit}>
                  <input
                     className={styles.input}
                     type='text'
                     autoFocus

                     onBlur={() => {
                        onBlurInput()
                        setInputTodoListNameOpen(false)
                        // setTodoListName(listName)
                     }}
                     value={todoListName}
                     onChange={changeName}
                  />
               </form>
               :
               <div className={styles.name}>
                  {listName}
               </div>}
         </div>
         <div className={styles.edit}>
            <IconButton onClick={() => { setInputTodoListNameOpen(true) }}>
               <Edit fontSize='small' />
            </IconButton>
         </div>
      </div>
   );
};

export default TodoListName;