import { Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import styles from './TodoListItem.module.css'

const TodoListItem = (props) => {
   return (<div className={styles.container}>
      <div className={styles.item}>
         {props.name}
      </div>
      <div>
         <IconButton>
            <Delete fontSize='small' />
         </IconButton>
      </div>
   </div>
   );
};

export default TodoListItem;