import { Done, MoreVert } from '@mui/icons-material';
import { Checkbox, IconButton, Menu, MenuItem } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchDeleteOneTodo, fetchUpdateOneTodoCompleted, fetchUpdateOneTodoText } from '../../redux/slices/todosSlice';
import styles from './TodoItem.module.css';
import s from '../TodoItems/TodoItems.module.css'

type TodoItemPropsType = {
   completed?: boolean,
   text?: string,
   id?: string,
   isLoading?: boolean,
   key?: string | number,
}

const TodoItem: React.FC<TodoItemPropsType> = (props) => {
   const [anchorEl, setAnchorEl] = React.useState(null);
   const [isInputOpen, setInputOpen] = React.useState(false);
   const [text, setText] = React.useState(props.text);
   const todoStatus = useAppSelector(state => state.todo.status);
   const dispatch = useAppDispatch();

   const handleMenu = (event: any) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   const updateTodoText = () => {
      if (text === props.text || text === '') {
         setText(props.text);
         setInputOpen(false);
         return;
      }
      dispatch(fetchUpdateOneTodoText({
         "id": props.id || '',
         "newText": text || ''
      }));
      setInputOpen(false);
   };

   return (
      < >
         {isInputOpen
            ?
            <form onSubmit={(e) => {
               e.preventDefault();
               updateTodoText();
            }}>
               <div className={styles.textareaWrapper}>
                  <textarea
                     value={text}
                     className={styles.input}
                     autoFocus
                     onChange={(e) => {
                        setText(e.target.value);
                     }}
                     onBlur={updateTodoText}
                  />
               </div>
            </form>
            :
            <div className={styles.container}>
               <div onDoubleClick={() => {
                  setInputOpen(true);
               }}
                  className={props.completed ? styles.completed + ' ' + styles.item : styles.item}>
                  {props.text}
               </div>
               <div className={styles.edit}>
                  <Checkbox
                     checked={props.completed}
                     onClick={() => {
                        dispatch(fetchUpdateOneTodoCompleted({
                           "id": props.id || '',
                           "completed": (!props.completed)
                        }));
                     }} />
                  <IconButton
                     onClick={handleMenu}>
                     <MoreVert />
                  </IconButton>
                  <Menu
                     id="menu-appbar"
                     anchorEl={anchorEl}
                     anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                     }}
                     keepMounted
                     transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                     }}
                     open={Boolean(anchorEl)}
                     onClose={handleClose}
                  >
                     <MenuItem
                        onClick={() => {
                           setInputOpen(true);
                           handleClose();
                        }}>
                        Edit
                     </MenuItem>
                     <MenuItem
                        onClick={() => {
                           if (window.confirm('Вы действительно хотите удалить todo?')) {
                              dispatch(fetchDeleteOneTodo({ 'id': props.id || '' }));
                              handleClose();
                           } else {
                              handleClose();
                           }
                        }}>
                        Detele
                     </MenuItem>
                  </Menu>
               </div>
            </div>
         }
      </>
   );
};

export default TodoItem;


