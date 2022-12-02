import { TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchUpdateTodoListNames } from '../../redux/slices/authSlice';
import Input from '../common/Input';
import styles from './NewSidebarTodoListNameInput.module.css';

type NewSidebarTodoListNameInputType = {
   closeInput: () => void
}

const NewSidebarTodoListNameInput: React.FC<NewSidebarTodoListNameInputType> = ({ closeInput }) => {
   const dispatch = useAppDispatch();
   const todoListNames = useAppSelector(state => state.auth.data?.todoListNames);

   const { register, handleSubmit } = useForm({
      defaultValues: {
         listName: ''
      }
   });

   const onSubmit = async (values: any) => {
      if (values.listName === '') {
         return;
      }

      if (todoListNames?.includes(values.listName)) {
         alert('Лист с таким именем уже существует');
         return;
      }

      if (todoListNames) {
         const newTodoListNames = [...todoListNames];
         newTodoListNames.push(values.listName);
         dispatch(fetchUpdateTodoListNames({ "todoListNames": newTodoListNames }));
         closeInput();
      }
   };

   return (
      <div >
         <form onSubmit={handleSubmit(onSubmit)}>
            {/* <input
               autoFocus
               className={styles.field}
               placeholder="New List Name"
               {...register('listName')}
               onBlur={() => {
                  closeInput();
                  handleSubmit(onSubmit)();
               }}
            /> */}

            <TextField
               autoFocus
               className={styles.field}
               label="New List Name"
               {...register('listName')}
               fullWidth
               onBlur={() => {
                  closeInput();
                  handleSubmit(onSubmit)();
               }}
            />
         </form>
      </div>
   );
};

export default NewSidebarTodoListNameInput;