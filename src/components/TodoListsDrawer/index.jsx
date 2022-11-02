import { Add } from '@mui/icons-material';
import { Divider, Drawer, IconButton, List, ListItem, ListItemText} from '@mui/material';
import React from 'react';
import TodoListsSheet from '../TodoListsSheet';

const TodoListsDrawer = (props) => {
   const {
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
               <ListItemText primary="Todo lists" />
               <IconButton>
                  <Add />
               </IconButton>
            </ListItem>
            <Divider />
            <TodoListsSheet/>
         </List>
      </Drawer>
   );
};

export default TodoListsDrawer;
