import { ShoppingBasket } from '@mui/icons-material';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
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
         <List>
            <ListItem>
               {/* <ListItemIcon>
                  <ShoppingBasket/>
               </ListItemIcon> */}
               <ListItemText primary="Списки дел" />
            </ListItem>
         </List>
      </Drawer>
   );
};

export default TodoLists;