import { TextField } from '@mui/material';
import React from 'react';

const NewTodoInput = (props) => {
   return (
      <TextField
         sx={{ mb: "1.5rem" }}
         label='New ToDo...'
         type='search'
         variant='standard'
         fullWidth
      />
   );
};

export default NewTodoInput;