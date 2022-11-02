import { Add } from '@mui/icons-material';
import { Divider, Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import React, { useState } from 'react';
import NewTodoListModal from '../NewTodoListModal';
import TodoListsSheet from '../TodoListsSheet';
import styles from './TodoListDrawer.module.css';

const TodoListsDrawer = (props) => {
   const [isModalOpen, setModalOpen] = useState(false);
   const closeModal = () =>{
      setModalOpen(false)
   }
   const {
      listsOpen,
      closeLists = Function.prototype,
      dataUser
   } = props;
   return (
      <Drawer
         anchor='left'
         open={listsOpen}
         onClose={closeLists}>
         <List sx={{ width: '320px' }}>
            <ListItem >
               <ListItemText classes={{ root: styles.root }} primary="TODO LISTS" />
               <IconButton onClick={() => { setModalOpen(true) }}>
                  <Add />
               </IconButton>
            </ListItem>
            <Divider />
            {isModalOpen ? <NewTodoListModal closeModal={closeModal}/> : ''}
            <TodoListsSheet todoListNames={dataUser.todoListNames}/>
         </List>
      </Drawer>
   );
};

export default TodoListsDrawer;