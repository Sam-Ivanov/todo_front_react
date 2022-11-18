import { Add } from '@mui/icons-material';
import { Divider, Drawer, IconButton, List } from '@mui/material';
import React, { useState } from 'react';
import { dataUserType } from '../../redux/slices/authSlice';
import NewSidebarTodoListNameInput from '../NewSidebarTodoListNameInput';
import SidebarTodoListNameItems from '../SidebarTodoListNameItems';
import styles from './SidebarDrawer.module.css';

type SidebarDrawerType = {
   dataUser: dataUserType | null,
   drawerOpen: boolean,
   drawerClose: () => void
}

const SidebarDrawer: React.FC<SidebarDrawerType> = (props) => {
   const [isShowInput, setShowInput] = useState(false);
   const closeInput = () => {
      setShowInput(false)
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
            <div className={styles.back}>
               <div className={styles.root}>TODO LISTS</div>
               <IconButton onClick={() => { setShowInput(true) }}>
                  <Add />
               </IconButton>
            </div>
            <Divider />
            {isShowInput && <NewSidebarTodoListNameInput /*drawerClose={drawerClose}*/ closeInput={closeInput} />}
            <SidebarTodoListNameItems todoListNames={dataUser?.todoListNames} drawerClose={drawerClose} />
         </List>
      </Drawer>
   );
};

export default SidebarDrawer;