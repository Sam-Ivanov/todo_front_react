import { TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpdateTodoListNames } from '../../redux/slices/authSlice';
import styles from './NewSidebarTodoListNameInput.module.css'


const NewSidebarTodoListNameInput = ({ closeModal }) => {
   const dispatch = useDispatch();
   const todoListNames = useSelector(state => [...state.auth.data.todoListNames]);

   const { register, handleSubmit } = useForm({
      defaultValues: {
         listName: ''
      }
   });

   const onSubmit = async (values) => {
      if (todoListNames.includes(values.listName)) {
         alert('Лист с таким именем уже существует');
         return;
      }
      todoListNames.push(values.listName);
      dispatch(fetchUpdateTodoListNames({ "todoListNames": todoListNames }))
      closeModal();
   }

   return (
      <div >
         <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
               autoFocus
               className={styles.field}
               label="New List Name"
               {...register('listName')}
               fullWidth
               onBlur={closeModal}
            />
         </form>
      </div>
   );
};

export default NewSidebarTodoListNameInput;