import { ShoppingBasket } from '@mui/icons-material';
import { Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react';

const TodoLists = (props) => {
   const {
      listNames,
      listsOpen,
      closeLists = Function.prototype,
   } = props;
   return (
      <Drawer
         anchor='left'
         open={listsOpen}
         onClose={closeLists}
      >
         <List sx={{ width: '320px' }}>
            <ListItem>
               <ListItemIcon>
                  <ShoppingBasket />
               </ListItemIcon>
               <ListItemText primary="Списки дел" />
            </ListItem>
            <Divider />
            <Typography onClick={closeLists}>
               Купить в магазине
            </Typography>
         </List>
      </Drawer>
   );
};

export default TodoLists;