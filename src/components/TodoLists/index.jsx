import { ShoppingBasket } from '@mui/icons-material';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
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
               {/* <ListItemIcon>
                  <ShoppingBasket/>
               </ListItemIcon> */}
               <ListItemText primary="Списки дел" />
            </ListItem>
         </List>
         <Divider/>
      </Drawer>
   );
};

export default TodoLists;