import { Add } from '@mui/icons-material';
import { Divider, Drawer, IconButton, List } from '@mui/material';
import React, { useState } from 'react';
import NewSidebarTodoListNameInput from '../NewSidebarTodoListNameInput';
import SidebarTodoListNameItems from '../SidebarTodoListNameItems';
import styles from './SidebarDrawer.module.css';

const SidebarDrawer = (props) => {
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
            {/* <ListItem classes={{ root: styles.back }}>
               <ListItemText classes={{ primary: styles.root }} primary="TODO LISTS" />
               <IconButton onClick={() => { setModalOpen(true) }}>
                  <Add />
               </IconButton>
            </ListItem> */}
            <div className={styles.back}>
               <div className={styles.root}>TODO LISTS</div>
               <IconButton onClick={() => { setModalOpen(true) }}>
                  <Add />
               </IconButton>
            </div>
            <Divider />
            {isModalOpen && <NewSidebarTodoListNameInput drawerClose={drawerClose} closeModal={closeModal} />}
            <SidebarTodoListNameItems todoListNames={dataUser?.todoListNames} drawerClose={drawerClose} />
         </List>
      </Drawer>
   );
};

export default SidebarDrawer;