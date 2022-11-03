import { Add } from '@mui/icons-material';
import { Divider, Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import React, { useState } from 'react';
import NewTodoListModal from '../NewTodoListModal';
import TodoListsSheet from '../TodoListsSheet';
import styles from './TodoListDrawer.module.css';

const TodoListsDrawer = (props) => {
   const [isModalOpen, setModalOpen] = useState(false);
   const closeModal = () => {
      setModalOpen(false)
   }
   const {
      drawerOpen,
      drawerClose,
      dataUser
   } = props;
   return (
      <Drawer
         anchor='left'
         open={drawerOpen}
         onClose={drawerClose}>
         <List sx={{ width: '320px' }}>
            <ListItem classes={{ root: styles.back }}>
               <ListItemText classes={{ root: styles.root }} primary="TODO LISTS" />
               <IconButton onClick={() => { setModalOpen(true) }}>
                  <Add />
               </IconButton>
            </ListItem>
            <Divider />
            {isModalOpen && <NewTodoListModal drawerClose={drawerClose} closeModal={closeModal} />}
            <TodoListsSheet todoListNames={dataUser?.todoListNames} drawerClose={drawerClose} />
         </List>
      </Drawer>
   );
};

export default TodoListsDrawer;