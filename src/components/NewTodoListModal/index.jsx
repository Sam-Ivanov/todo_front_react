import { TextField } from '@mui/material';
import { style } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpdateTodoListNames } from '../../redux/slices/authSlice';
import { setMainListName } from '../../redux/slices/todosSlice';
import styles from './NewTodoListModal.module.css'


const NewTodoListModal = ({ closeModal, drawerClose }) => {
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
         .then(() => { dispatch(setMainListName(values.listName)) })
         .catch(err => alert(err.message))
      // dispatch(fetchUpdateTodoListNames({ "todoListNames": todoListNames }))
      // dispatch(setMainListName(values.listName))
      closeModal();
      // drawerClose();
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

export default NewTodoListModal;