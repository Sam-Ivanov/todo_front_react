import { MoreVert } from '@mui/icons-material';
import { Checkbox, IconButton, Menu, MenuItem } from '@mui/material';
import React from 'react';
import styles from './TodoItem.module.css'

const TodoItem = (props) => {


   const [anchorEl, setAnchorEl] = React.useState(null);

   if (props.isLoading) {
      return <div>Загрузка...</div>
   }

   const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };


   return (<>
      <div className={styles.container}>
         <div className={props.completed ? styles.completed : ''}>
            {props.text}
         </div>
         <div className={styles.edit}>
            <Checkbox checked={props.completed} />
            <IconButton
               onClick={handleMenu}>
               <MoreVert />
            </IconButton>
            <Menu
               id="menu-appbar"
               anchorEl={anchorEl}
               anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
               }}
               keepMounted
               transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
               }}
               open={Boolean(anchorEl)}
               onClose={handleClose}
            >
               <MenuItem onClick={handleClose}>Edit</MenuItem>
               <MenuItem onClick={handleClose}>Detele</MenuItem>
            </Menu>
         </div>
      </div>
   </>
   );
};

export default TodoItem;