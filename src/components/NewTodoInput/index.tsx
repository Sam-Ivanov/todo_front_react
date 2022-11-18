import { TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCreateTodo } from '../../redux/slices/todosSlice';

const NewTodoInput: React.FC = (props) => {
   const dispatch = useAppDispatch();
   const todoListName = useAppSelector(state => state.todo.mainList);
   const { register, resetField, handleSubmit } = useForm({
      defaultValues: {
         newTodo: ''
      }
   });

   const onSubmit = async (values: any) => {
      if (todoListName) {
         dispatch(fetchCreateTodo({
            'todoListName': todoListName,
            'text': values.newTodo
         }))
         resetField('newTodo')
      }
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <TextField
            sx={{ mb: "1.5rem" }}
            label='New ToDo...'
            type='text'
            variant='standard'
            {...register('newTodo')}
            fullWidth
         />
      </form>
   );
};

export default NewTodoInput;