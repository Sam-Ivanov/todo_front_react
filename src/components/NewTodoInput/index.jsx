import { TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCreateTodo } from '../../redux/slices/todosSlice';

const NewTodoInput = (props) => {
   const dispatch = useDispatch();
   const todoListName = useSelector(state => state.todos.todos.mainList);
   const { register, resetField, handleSubmit } = useForm({
      defaultValues: {
         newTodo: ''
      }
   });

   const onSubmit = async (values) => {

      dispatch(fetchCreateTodo({
         'todoListName': todoListName,
         'text': values.newTodo
      }))
      resetField('newTodo')

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