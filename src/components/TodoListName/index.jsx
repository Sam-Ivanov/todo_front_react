import { Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import styles from './TodoListName.module.css'
import React from 'react';

const TodoListName = (props) => {
   return (<div className={styles.container}>
      <div className={styles.text}>
         {props.todoListName}
      </div>
      <div className={styles.edit}>
         <IconButton>
         <Edit fontSize='small'/>
      </IconButton>
      </div>
   </div>
   );
};

export default TodoListName;